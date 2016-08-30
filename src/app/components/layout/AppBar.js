import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import LeftIcon from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/expand-more';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import React from 'react';
import Toggle from 'material-ui/Toggle';

export default ({ isAppbarFixed, isThemeDark, language, setTheme, switchLanguage, toggleAppbarFixed, toggleDrawer, toggleTheme }) => (
	<AppBar style = {{
		position: isAppbarFixed ? 'fixed' : 'relative',
	}}
		title = {
			<div>
				<span className="appbar-title-full">Metromed Urgent Care</span>
				<span className="appbar-title-short">Metromed UC</span>
			</div>
		}
		titleStyle = {{ textAlign:'center' }}
	
		showMenuIconButton = { true }

		iconElementLeft = {
			<IconButton onTouchTap={toggleDrawer}><LeftIcon /></IconButton>
		}

		iconElementRight = {
			<IconMenu
				iconButtonElement = { <IconButton><MoreVert /></IconButton> }
				targetOrigin = {{ horizontal:'right', vertical:'top' }}
				anchorOrigin = {{ horizontal:'right', vertical:'top' }}
			>
				<MenuItem 
					primaryText = "Reload this page" 
					onTouchTap = { () => { location.reload() } }
				/>

				<MenuItem 
					primaryText = "Telemedicine"
					containerElement = { <Link to="/telemed" /> }
				/>

				<MenuItem 
					primaryText = { isThemeDark ? "Light interface" : "Dark interface" }
					onTouchTap = { () => setTheme(!isThemeDark) }
				/>

				<MenuItem 
					primaryText = { isAppbarFixed ? "Unstick app bar" : "Stick app bar" }
					onTouchTap = { toggleAppbarFixed }
				/>

				{/*
				<MenuItem 
					primaryText = "Photo gallery"
					containerElement = { <Link to="/gallery" /> }
				/>

				<MenuItem 
					primaryText = { language === 'english' ? "Switch to Spanish" : "Switch to English" }
					onTouchTap = { switchLanguage }
				/>
				*/}
			</IconMenu>
		}

		iconStyleRight = {{
			margin: 'auto',
		}}
	/>
);