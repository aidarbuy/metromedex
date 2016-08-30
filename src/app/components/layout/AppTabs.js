import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import React from 'react';
import { Tab, Tabs } from 'material-ui/Tabs';
import { getMenuItems } from '../../data/menu-items';

export default ({ bgColor, handleActive, isAppbarFixed, route }) => (
	<div style={{
		background: bgColor,
		paddingTop: isAppbarFixed ? 64 : 'initial',
	}}>
		{/* Main icons and text tab navigation */}
		<Tabs className="apptabs-icons-labels" value={route} style={{
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingTop: 7,
			maxWidth: 1000,
		}}>
			{getMenuItems().map((item, i) => (
				<Tab
					icon 		 = { item.icon }
					key 		 = { i }
					label 	 = { item.name }
					onActive = { handleActive }
					value 	 = { item.route }
				/>
			))}
		</Tabs>

		{/* Main icons tab wide navigation */}
		<Tabs className="apptabs-7-icons" value={route}>
			{getMenuItems().map((item, i) => (
				<Tab
					icon 		 = { item.icon }
					key 		 = { i }
					onActive = { handleActive }
					value 	 = { item.route }
				/>
			))}
		</Tabs>

		{/* Main icons tab narrow navigation */}
		<Tabs className="apptabs-5-icons" value={route}>
			{getMenuItems().map((item, i) => {
				if (i < 4 || i === 5) return (
					<Tab
						icon 		 = { item.icon }
						key 		 = { i }
						onActive = { handleActive }
						value 	 = { item.route }
					/>
				);
			})}
		</Tabs>
	</div>
);