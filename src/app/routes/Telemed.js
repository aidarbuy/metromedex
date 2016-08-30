import React from 'react';
import Helmet from 'react-helmet';
import WebRTC from '../components/telemed/WebRTC';

export default React.createClass({
	render() {
		return (
			<section>
				<Helmet title="MetromedUC TeleMed" />

				<WebRTC />
			</section>
		);
	}
});
