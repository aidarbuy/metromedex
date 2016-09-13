import { Card, CardActions, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

export default React.createClass({
	handleTouchTap(route) {
		this.props.dispatchAction({type:"UPDATE_ROUTE", route});
	},

	render() {
		const { doctor, color } = this.props;
		const fullName = doctor.firstname + " " + doctor.lastname;
		const route = "/doctors/" + doctor.id;
		const colorRGB = hexToRgb(color);
		const bgColor = colorRGB.r + ", " + colorRGB.g + ", " + colorRGB.b;

		return (
			<Card style={{boxSizing:'border-box', minHeight:535}}>
				<CardMedia overlay={<CardTitle title={"Dr. " + fullName}/>} overlayContentStyle={{
					background: 'rgba(' + bgColor + ', 0.7)',
					bottom: -1,
					margin: 0,
					padding: 0,
				}}>
					<img src={require('../../images/doctors/' + doctor.img.big)} />
				</CardMedia>

				<CardTitle
					title={doctor.speciality}
					subtitle={doctor.title}
				/>

				<CardText style={{ fontSize:16 }}>
					{doctor.description[0]}
				</CardText>

				<CardActions style={{ textAlign:'right' }}>
					<RaisedButton
						containerElement={<Link to={route}/>}
						icon={<ArrowForward/>}
						label="Read more"
						labelPosition="before"
						onTouchTap={(route)=> { this.handleTouchTap(route) }}
						secondary={true}
						style={{ marginBottom: 20 }}
					/>
				</CardActions>
			</Card>
		);
	}
});

const hexToRgb = (hex) => {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
};