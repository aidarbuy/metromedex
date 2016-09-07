import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import dataCustomServices from '../../data/custom-services';
import FlatButton from 'material-ui/FlatButton';
import IconAidKit from '../icons/IconAidKit';
import IconHeart from '../icons/IconHeart';
import IconHistory from '../icons/IconHistory';
import IconImages from '../icons/IconImages';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'react-router';
import React from 'react';

const styles = {
	Card : {
		padding: 20,
		paddingTop: 40,
		textAlign: 'center',
		minHeight: 380,
		marginTop: 'auto',
		marginBottom: 'auto',
	},
	CardText : {
		margin: 0,
		padding: 0,
		marginTop: 20,
		marginBottom: 20,
		// border:'1px solid blue',
		fontSize: 16,
	},
	CardTitle : {
		// margin: 0,
		// marginTop: 10,
		padding: 0,
	},
	p : {
		margin: 0,
		padding: 0
	},
};

const getIconStyle = (iconColor, hoverColor) => {
	return {
		display: 'inline-block',
		color: iconColor,
		hover: hoverColor,
		width: 70,
		height: 70,
	};
}

const getIcon = (i, iconColor, hoverColor) => {
	switch (i) {
		case 0: return <IconHeart styles={getIconStyle(iconColor, hoverColor)} />;
		case 1: return <IconAidKit styles={getIconStyle(iconColor, hoverColor)} />;
		case 2: return <IconImages styles={getIconStyle(iconColor, hoverColor)} />;
		case 3: return <IconHistory styles={getIconStyle(iconColor, hoverColor)} />;
	}
}

export default ({ iconColor, hoverColor, titleColor }) => (
	<div className="flex-container" style={{ marginTop:0, marginBottom:0 }}>
		{dataCustomServices.map((item, i) => (
			<div className="custom-services-item" key={i}>
				<Card style={styles.Card}>
					<CardMedia>
						{getIcon(i, iconColor, hoverColor)}
					</CardMedia>

					<CardTitle
						style 	   = { styles.CardTitle }
						title      = { item.name }
						titleColor = { titleColor }
					/>

					<CardText style={styles.CardText}>
						<p style={styles.p}
							dangerouslySetInnerHTML={{ __html:item.desc }}
						/>
					</CardText>

					<CardActions>
						<RaisedButton 
							href       = { item.href }
							label      = { item.button }
							primary    = { false }
							secondary  = { true }
						/>
					</CardActions>
				</Card>
			</div>
		))}
	</div>
);