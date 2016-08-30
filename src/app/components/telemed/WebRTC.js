/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardMedia from 'material-ui/Card/CardMedia';
import io from 'socket.io-client';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import { cyan700 } from 'material-ui/styles/colors';

// require('https://webrtc.github.io/adapter/adapter-latest.js');

var localVideo, remoteVideo, startTime, localStream, pc, pc1, pc2, socket;

const styles = {
	video : {
		width: '50%',
		border: '1px solid ' + cyan700,
		boxSizing: 'border-box',
	},
};

var servers = { iceServers: [{ urls: [
	'stun:stun.l.google.com:19305',
	'stun:stun1.l.google.com:19305',
	'stun:stun2.l.google.com:19305',
	'stun:stun3.l.google.com:19305',
	'stun:stun4.l.google.com:19305',
	'stun:stun.services.mozilla.com',
]}]};

const socketInit = () => socket = io('https://metromed-io2.herokuapp.com/');
const getName = pc => pc === pc1 ? 'pc1' : 'pc2';
const getOtherPc = pc => pc === pc1 ? pc2 : pc1;

const onCreateSessionDescriptionError = error =>
	trace('Failed to create session description: ' + error.toString());

const onCreateOfferSuccess = desc => {
	trace('Offer from pc1\n' + desc.sdp);
	trace('pc1 setLocalDescription start');
	pc1.setLocalDescription(desc).then(
		function() {
			onSetLocalSuccess(pc1);
			socket.emit('offer', desc);
		},
		onSetSessionDescriptionError
	);
}

const onSetLocalSuccess = pc =>
	trace(getName(pc) + ' setLocalDescription complete');

const onSetRemoteSuccess = pc =>
	trace(getName(pc) + ' setRemoteDescription complete');

const onSetSessionDescriptionError = error =>
	trace('Failed to set session description: ' + error.toString());

const gotRemoteStream = e => {
	remoteVideo.srcObject = e.stream;
	trace('pc2 received remote stream');
	this.setState({
		callButtonDisabled: true,
		hangupButtonDisabled: false,
	});
}

const onCreateAnswerSuccess = desc => {
	trace('Answer from pc2:\n' + desc.sdp);
	trace('pc2 setLocalDescription start');
	pc2.setLocalDescription(desc).then(
		function() {
			onSetLocalSuccess(pc2);
			socket.emit('answer', desc);
		},
		onSetSessionDescriptionError
	);
}

const onIceCandidate = (pc, event) => {
	if (event.candidate) {
		socket.emit('ice', {
			pc: getName(pc),
			candidate: event.candidate
		});
		trace(getName(pc) + ' ICE candidate: \n' + event.candidate.candidate);
	}
}

const onAddIceCandidateSuccess = pc =>
	trace(getName(pc) + ' addIceCandidate success');

const onAddIceCandidateError = (pc, error) =>
	trace(getName(pc) + ' failed to add ICE Candidate: ' + error.toString());

const onIceStateChange = (pc, event) => {
	if (pc) {
		trace(getName(pc) + ' ICE state: ' + pc.iceConnectionState);
		console.log('ICE state change event: ', event);
	}
}

// const LOCAL_POSTER = require('../../images/telemed/local-video.jpg');
const LOCAL_POSTER = 'https://firebasestorage.googleapis.com/v0/b/metromeduc.appspot.com/o/images%2Ftelemed%2Flocal-video.jpg?alt=media&token=1f2a7e2c-915f-46f0-b3d4-69fc1d84db9a';
// const REMOTE_POSTER = require('../../images/telemed/connecting.jpg');
const REMOTE_POSTER = 'https://firebasestorage.googleapis.com/v0/b/metromeduc.appspot.com/o/images%2Ftelemed%2Fconnecting.jpg?alt=media&token=fda31393-ed26-4064-ac8b-0459c534a444';
const BROWSER_MESSAGE = "Your browser does not support video tags";

class WebRTC extends Component {
	constructor(props, context) {
		super(props, context);
		this.gotStream = this.gotStream.bind(this);
		this.start 	   = this.start.bind(this);
		this.call 	   = this.call.bind(this);
		this.hangup    = this.hangup.bind(this);
		this.state = {
			callButtonDisabled: true,
			hangupButtonDisabled: true,
			stopButtonDisabled: true,
		};
	}

	componentWillMount() {
		socketInit();
	}

	componentDidMount() {
		localVideo = this.refs.localVideo;
		remoteVideo = this.refs.remoteVideo;
		socket.on('offer', (desc) => {
			pc2 = new RTCPeerConnection(servers);
			trace('Created remote peer connection object pc2');
			pc2.addStream(localStream);
			trace('pc2 setRemoteDescription start');
			pc2.setRemoteDescription(desc).then(() => {
					onSetRemoteSuccess(pc2);
				},
				onSetSessionDescriptionError
			);
			pc2.onicecandidate = function(e) {
				onIceCandidate(pc2, e);
			};
			pc2.oniceconnectionstatechange = function(e) {
				onIceStateChange(pc2, e);
			};
			trace('pc2 createAnswer start');
			// Since the 'remote' side has no media stream we need
			// to pass in the right constraints in order for it to
			// accept the incoming offer of audio and video.
			pc2.createAnswer().then(
				onCreateAnswerSuccess,
				onCreateSessionDescriptionError
			);
			pc2.onaddstream = gotRemoteStream;
		});
		socket.on('answer', (desc) => {
			trace('pc1 setRemoteDescription start');
			pc1.setRemoteDescription(desc).then(
				function() {
					onSetRemoteSuccess(pc1);
				},
				onSetSessionDescriptionError
			);
			pc1.onaddstream = gotRemoteStream.bind(this);
		});
		socket.on('ice', (data) => {
			pc = pc1 ? pc1 : pc2;
			pc.addIceCandidate(
				new RTCIceCandidate(data.candidate)
			).then(
				function() {
					onAddIceCandidateSuccess(data.pc);
				},
				function(err) {
					onAddIceCandidateError(data.pc, err);
				}
			);
		});
	}

	gotStream(stream) {
		trace('Received local stream');
		localVideo.srcObject = stream;
		localStream = stream;
		this.setState({callButtonDisabled: false});
	}


	start() {
		trace('Requesting local stream');
		this.setState({ startButtonDisabled:true });
		var self = this;
		navigator.mediaDevices.getUserMedia({
			audio: true,
			video: { width:1280 }
		})
		.then(this.gotStream)
		.catch(function(e) {
			alert('getUserMedia() error: ' + e.name);
		});
	}

	call() {
		this.setState({
			callButtonDisabled: true,
			hangupButtonDisabled: false,
		});
		trace('Starting call');
		startTime = window.performance.now();
		var videoTracks = localStream.getVideoTracks();
		var audioTracks = localStream.getAudioTracks();
		if (videoTracks.length > 0) {
			trace('Using video device: ' + videoTracks[0].label);
		}
		if (audioTracks.length > 0) {
			trace('Using audio device: ' + audioTracks[0].label);
		}
		pc1 = new RTCPeerConnection(servers);
		trace('Created local peer connection object pc1');
		pc1.onicecandidate = function(e) {
			onIceCandidate(pc1, e);
		};
		pc1.oniceconnectionstatechange = function(e) {
			onIceStateChange(pc1, e);
		};

		pc1.addStream(localStream);
		trace('Added local stream to pc1');

		trace('pc1 createOffer start');
		pc1.createOffer({
			offerToReceiveAudio: 1,
			offerToReceiveVideo: 1
		}).then(
			onCreateOfferSuccess,
			onCreateSessionDescriptionError
		);
	}

	hangup() {
		trace('Ending call');
		pc = pc1 ? pc1 : pc2;
		pc.close();
		pc = null;
		this.setState({
			hangupButtonDisabled: true,
			callButtonDisabled: false,
		});
	}

	render() {
		return (
			<Card>
				<CardActions style={{ textAlign:'center' }}>
					<RaisedButton
						ref 	   = { 'startButton' }
						label 	   = { "Start" }
						primary    = { true }
						disabled   = { this.state.startButtonDisabled }
						onTouchTap = { this.start }
					/>
					<RaisedButton
						ref 	   = { 'callButton' }
						label 	   = { "Call" }
						primary    = { true }
						disabled   = { this.state.callButtonDisabled }
						onTouchTap = { this.call }
					/>
					<RaisedButton
						ref 	   = { 'hangupButton' }
						label 	   = { "Hang Up" }
						secondary  = { true }
						disabled   = { this.state.hangupButtonDisabled }
						onTouchTap = { this.hangup }
					/>
				</CardActions>

				<CardMedia>
					<div>
						<video
							autoPlay = { true }
							muted 	 = { true }
							poster   = { LOCAL_POSTER }
							ref 	 = { "localVideo" }
							style 	 = { styles.video }
						>
							{BROWSER_MESSAGE}
						</video>

						<video
							autoPlay = { true }
							poster 	 = { REMOTE_POSTER }
							ref 	 = { "remoteVideo" }
							style 	 = { styles.video }
						>
							{BROWSER_MESSAGE}
						</video>
					</div>
				</CardMedia>
			</Card>
		);
	}
};

export default WebRTC;