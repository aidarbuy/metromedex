import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import LeftIcon from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import React from 'react';
import { Link } from 'react-router';

export default ({
	isAppbarFixed, isThemeDark, language, setTheme, title,
	switchLanguage, titleColor, toggleAppbarFixed, toggleDrawer, toggleTheme,
})=>(
	<AppBar style={{position: isAppbarFixed ? 'fixed' : 'relative'}}
		title={title} titleStyle={{textAlign:'center'}}
	
		showMenuIconButton={true}

		iconElementLeft={<IconButton onTouchTap={toggleDrawer}><LeftIcon/></IconButton>}

		iconElementRight={
			<IconMenu iconButtonElement={<IconButton><MoreVert/></IconButton>}
				targetOrigin={{horizontal:'right', vertical:'top'}}
				anchorOrigin={{horizontal:'right', vertical:'top'}}>
				<MenuItem primaryText="Reload this page" onTouchTap={()=> {location.reload()}}/>
        <MenuItem primaryText="Photo gallery" containerElement={<Link to="/gallery"/>}/>
				{/*<MenuItem primaryText="Telemedicine" containerElement={<Link to="/telemed"/>}/>*/}
				<MenuItem primaryText={isThemeDark ? "Light interface" : "Dark interface"} onTouchTap={() => setTheme(!isThemeDark)}/>
				<MenuItem primaryText={isAppbarFixed ? "Unstick app bar" : "Stick app bar"} onTouchTap={toggleAppbarFixed}/>
				{/*<MenuItem primaryText={language === 'english' ? "Switch to Spanish" : "Switch to English"} onTouchTap={switchLanguage}/>*/}
			</IconMenu>
		}

		iconStyleRight={{margin:'auto'}}
	/>
);