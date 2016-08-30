import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
require('../../styles/bluebar.scss');

const styles = {
	CardTitle : {
		fontWeight: 400,
		paddingBottom: 0,
		paddingTop: 30,
	},
	CardText : {
		fontSize: 19,
		fontWeight: 400,
		lineHeight: 1.4,
		verticalAlign: 'middle',
		display: 'inline-block',
	},
};

const hours = [
	["Sunday", "closed"],
	["Monday &ndash; Friday", "10 am - 8 pm"],
	["Saturday", "closed"],
];

const getLinkStyles = (linkColor) => {
	return {
		color: linkColor,
		// textDecoration: 'none',
	};
};

export default ({ titleColor, textColor, colonColor, bgColorA, bgColorB, bgColorC, bgColorD }) => (
	<div className="flex-container">
		<div className="bluebar-item">
			<Card className="cell" style={{ background:bgColorA }}>
				<CardTitle title="Contact Info" titleColor={titleColor} style={styles.CardTitle}/>
				<CardText color={textColor} style={styles.CardText}>
					<p>
						<a href="tel:7036874158" style={getLinkStyles(textColor)}>
							<span>(703) 687-4158</span>
						</a>
					</p>
					<p>
						<a href="/location" style={getLinkStyles(textColor)}>
							<span>952 Edwards Ferry Rd NE</span>
						</a>
						<br/>
						<a href="/location" style={getLinkStyles(textColor)}>
							<span>Leesburg, VA 20176</span>
						</a>
					</p>
					<p>
						<a href="mailto:info@metromeduc.com" style={getLinkStyles(textColor)}>
							<span>info@metromeduc.com</span>
						</a>
					</p>
				</CardText>
			</Card>
		</div>

		<div className="bluebar-item">
			<Card className="cell" style={{ background:bgColorB }}>
				<CardTitle title="Hours of Operation" titleColor={titleColor} style={styles.CardTitle}/>
				<CardText color={textColor} style={styles.CardText}>
					<Table style={{background: bgColorA}}>
						<TableBody displayRowCheckbox={false}>
							{hours.map((arr, i) => (
								<TableRow key={i}>
									<TableRowColumn style={{
										padding: 0,
										color: textColor,
										fontSize: 'inherit',
										fontWeight: 'inherit',
										textAlign: 'right',
										width: '45%',
									}} dangerouslySetInnerHTML={{__html:arr[0]}} />
									<TableRowColumn style={{
										padding: 0,
										fontSize: 'inherit',
										fontWeight: 'inherit',
										width: '5%',
										textAlign: 'center',
										color: colonColor,
									}}>:</TableRowColumn>
									<TableRowColumn style={{
										padding: 0,
										color: textColor,
										fontSize: 'inherit',
										fontWeight: 'inherit',
										width: '45%',
										textAlign: 'left',
									}}>{arr[1]}</TableRowColumn>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardText>
			</Card>
		</div>

		<div className="bluebar-item">
			<Card className="cell" style={{ background:bgColorC }}>
				<CardTitle title="Urgent Care" titleColor={titleColor} style={styles.CardTitle} />
				<CardText color={textColor} style={styles.CardText}>
					<p>Our Emergency Medicine doctors can diagnose and treat a wide variety of illnessess and injuries.</p>
				</CardText>
			</Card>
		</div>

		<div className="bluebar-item">
			<Card className="cell" style={{ background:bgColorD }}>
				<CardTitle title="Holidays" titleColor={titleColor} style={styles.CardTitle}/>
				<CardText color={textColor} style={styles.CardText}>
					<p>Major Holidays Observed</p>
					<Divider style={{background: textColor}} />
					{/*<p>No Appointments Necessary</p>*/}
					<p style={{fontWeight:500, fontSize:'110%'}}>We are closed July 4th</p>
				</CardText>
			</Card>
		</div>
	</div>
);