import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import ReadMoreIcon  from 'material-ui/svg-icons/action/description';

export default ({ title, subtitle, teaser, image, href}) => (
	<Card style={{minHeight:400}}>
		<CardMedia style={{minHeight:100}} overlay={
			<CardTitle
				title 	 = { title }
				subtitle = { subtitle }
			/>
		}>
			<img src={href} />
		</CardMedia>

		<CardText
			dangerouslySetInnerHTML = {{ __html: teaser }}
			style = {{ fontSize:16, textAlign:'left' }}
		/>

		<CardActions style={{ textAlign:'right' }}>
			<RaisedButton
				containerElement = {
					<Link to={'/articles/' + image} />
				}
				icon 		  = { <ReadMoreIcon /> }
				label 		  = { "Read more" }
				labelPosition = { "before" }
				primary 	  = { false }
				secondary 	  = { true }
			/>
		</CardActions>
	</Card>
);