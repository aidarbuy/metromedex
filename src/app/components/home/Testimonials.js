import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import { List, ListItem } from 'material-ui/List';
import ListItemDivider from '../ui/ListItemDivider';
import Paper from 'material-ui/Paper';
import React from 'react';
import testimonials from '../../data/testimonials'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

const styles = {
	primaryText : {
		fontSize: 18,
		lineHeight: 1.4,
		textAlign: 'left',
		marginLeft: 40,
	},
};

export default ({ secondaryTextColor }) => (
	<Paper style={{ marginTop:20 }}>
		<Toolbar>
			<ToolbarGroup style={{marginLeft:'auto',marginRight:'auto'}}>
				<ToolbarTitle text="Testimonials" />
			</ToolbarGroup>
		</Toolbar>

		<List className="list">
			{testimonials.map((item, index, arr) => (
				<div key={index}>
					<ListItem disabled={true}
						leftAvatar={<Avatar src={require('../../images/testimonials/' + item.img)} size={70}/>}

						primaryText={<p style={styles.primaryText}>{item.text}</p>}

						secondaryText={
							<div style={{
								color: secondaryTextColor,
								textAlign: 'left',
								marginLeft: 40,
							}}>
								<strong>{item.name}</strong>,&nbsp;<span>{item.city}</span>
							</div>
						}

						secondaryTextLines={2}

						style={{border:'0px solid grey'}}
					/>

					<ListItemDivider length={arr.length} />
				</div>
			))}
		</List>
	</Paper>
);
