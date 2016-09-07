import dataSocial from '../../data/social';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconButton from 'material-ui/IconButton';
import IconFacebook from '../icons/IconFacebook';
import IconGoogle from '../icons/IconGooglePlus';
import IconInstagram from '../icons/IconInstagram';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import React from 'react';

const Icon = React.createClass({
	render() {
		switch (this.props.iconName) {
			case 'IconFacebook':
				return <IconFacebook styles={this.props.styles} />;
			case 'IconInstagram':
				return <IconInstagram styles={this.props.styles} />;
			case 'IconGoogle':
				return <IconGoogle styles={this.props.styles} />;
			default:
				return null;
		}
	}
});

export default ({ 
	anchorEl, bgColor, footerMenuValue, getShadowHexColor,
	isPopoverOpen, isThemeDark, primary3Color, 
	setMainState, setTheme, shadowColor, 
	textColor, thumbColor, trackColor,
}) => (
	<Toolbar style={{ marginTop:30 }}>

		<ToolbarGroup firstChild={false}>
			{dataSocial.slice(0, 3).map((icon, index) => (
				<a key={icon.name} href={icon.href}>
					<IconButton touch tooltip={icon.desc} tooltipPosition="top-right" style={{marginTop:4}} tooltipStyles={{textTransform:'none'}}>
						<Icon
							iconName = { icon.icon }
							styles = {{ 
								boxShadow: '1px 1px 3px' + getShadowHexColor(shadowColor),
							}}
						/>
					</IconButton>
				</a>
			))}
		</ToolbarGroup>

		{/*
		<ToolbarGroup firstChild={true}>
	    <RaisedButton
			onTouchTap = { () => setMainState({ isPopoverOpen:true, anchorEl: }) }
			label = "Social"
		/>
			<Popover
				open = { isPopoverOpen }
				anchorEl = { anchorEl }
				anchorOrigin = {{ horizontal: 'left', vertical: 'bottom' }}
				targetOrigin = {{ horizontal: 'left', vertical: 'top' }}
				onRequestClose = { () => setMainState({ isPopoverOpen:false }) }
			>
				<Menu>
					<MenuItem primaryText="Refresh" />
					<MenuItem primaryText="Help &amp; feedback" />
					<MenuItem primaryText="Settings" />
					<MenuItem primaryText="Sign out" />
				</Menu>
			</Popover>
		</ToolbarGroup>

		<ToolbarGroup>
			<Toggle
				className = "footer-theme-toggle"
				onToggle 	= {(e, toggled) => { setTheme(toggled) }}
				style 		= {{ margin:'auto' }}
				toggled 	= { isThemeDark }
			/>
		</ToolbarGroup>
		*/}

		<ToolbarGroup lastChild={false}>
			<ToolbarTitle
				style = {{ fontSize:16, color:textColor }}
				text  = "&copy; 2016 Amygdala LLC"
			/>
		</ToolbarGroup>
	</Toolbar>
);