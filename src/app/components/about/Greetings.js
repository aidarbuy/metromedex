import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton  from 'material-ui/FlatButton';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
// import ListItemDivider from './ui/ListItemDivider';
import { Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn, TableBody } from 'material-ui/Table';
import React from 'react';

function pairArray(arr) {
	var arrPaired = [];

	for (var i = 0; i <= arr.length - 1; i += 2) {
		var pairObj = [];
		pairObj.push(arr[i])
		pairObj.push(arr[i + 1])
		arrPaired.push(pairObj)
	}

	return arrPaired;
}

const conditions = [
	'Asthma', 'Abdominal Pain', 
	'Allergic Reactions', 'Bites/Stings', 
	'Broken Bones & Sprains', 'Burns', 
	'Eye Injuries', 'Lacerations', 
	'Rashes', 'Sore Throats', 
	'Sports Injuries', 'DOT Physicals', 
	'Travel Medicine', 'Chest Pain', 
	'Occupational Health', 'and many other...'
];

const conditionsPaired = pairArray(conditions);

export default ({ accentColor, imgSubtitleColor, language, primaryColor, textColor }) => (
	<Card>
		<CardTitle
			title={
				<h4 style={{ color:accentColor }}>Welcome to Metromed Urgent Care!</h4>
			}
			subtitle={
				<h5>Our Emergency Medicine doctors can diagnose a wide range of illnessess and injuries</h5>
			}
		/>

		<CardMedia overlay={
			<CardTitle
				title = "Matt, Doreen and Karl"
				subtitle = "Members of our team."
				subtitleStyle = {{
					color: imgSubtitleColor,
				}}
			/>
		}>
			{/*
			<img src={'https://firebasestorage.googleapis.com/v0/b/metromeduc.appspot.com/o/images%2Fteam%2Fthree-medics.jpg?alt=media&token=41848778-abf1-49bf-95c5-864797eaedeb'} style={{marginBottom:1}} />
			*/}
			<img src={require('../../images/doctors/three-medics.jpg')} style={{marginBottom:1}} />
		</CardMedia>

		<CardText style={{ textAlign:'left' }}>
			<h5>At Metromed Urgent Care we treat patients of all ages, with a variety of conditions:</h5>

			<Table className="conditions-two-columns" selectable={false}>
				<TableBody displayRowCheckbox={false} stripedRows={true} selectable={false}>
					{conditionsPaired.map((item, i) => (
						<TableRow key={item[0]}>
							<TableRowColumn style={{fontSize:16}}>{item[0]}</TableRowColumn>
							<TableRowColumn style={{fontSize:16}}>{item[1]}</TableRowColumn>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<Table className="conditions-one-column" selectable={false}>
				<TableBody displayRowCheckbox={false} stripedRows={true}>
					{conditions.map((item, i) => (
						<TableRow key={i}>
							<TableRowColumn style={{fontSize:16}}>{item}</TableRowColumn>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<div style={{ marginTop:20 }}>
				<em style={{ color:accentColor }}>* If you feel that you need to be admitted to the hospital then it is time to go to emergency room.</em>
			</div>
		</CardText>
	</Card>
);