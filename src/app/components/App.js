import React from 'react';
import { fade } from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { getShadowHexColor } from '../utils/colors';
import { getInitIndex } from '../utils/navigation';
import { getMenuItems } from '../data/menu-items';

import AppBar from './layout/AppBar';
import AppTabs from './layout/AppTabs';
import Home from '../routes/Home';
import Drawer from'./layout/Drawer';
import Footer from './layout/Footer';

// require('./styles/skeleton.scss');
require('../styles/layout.scss');
require('../styles/typography.scss');

import {
	blue50, blue100, blue200, blue500, blue700, blue800, blue900,
	blueGrey500, blueGrey700, blueGrey900,
	cyan500, cyan700, cyan900, cyanA400, cyanA700,
	green50, green100, green200, green300, green400, green500, green700, green900, greenA400,
	grey50, grey100, grey200, grey300, grey400, grey500, grey600, grey700, grey800, grey900,
	orange500, orangeA700,
	pink100, pink300, pink500, pink700, pink800, pink900,
	purple700, purple900,
	red500, red700,
	teal500, teal900,
	yellow500, yellow800,
} from 'material-ui/styles/colors';


// Dark palette
const defaultColor = grey700;
darkBaseTheme.palette.primary1Color = blue900;
darkBaseTheme.palette.primary2Color = blue800;
darkBaseTheme.palette.primary3Color = blue500;

darkBaseTheme.palette.accent1Color = pink800;
darkBaseTheme.palette.accent2Color = pink900;
darkBaseTheme.palette.accent3Color = pink100;

darkBaseTheme.palette.textColor = grey400;
darkBaseTheme.palette.secondaryTextColor = blue50;
darkBaseTheme.palette.alternateTextColor = grey50;

darkBaseTheme.palette.canvasColor = grey900;
darkBaseTheme.palette.borderColor = grey200;
darkBaseTheme.palette.disabledColor = pink500;
darkBaseTheme.palette.pickerHeaderColor = yellow500;
darkBaseTheme.palette.clockCircleColor = yellow500;
darkBaseTheme.palette.shadowColor = grey600;


// Light palette
lightBaseTheme.palette.primary1Color = blue500;
lightBaseTheme.palette.primary2Color = blue700;
lightBaseTheme.palette.primary3Color = blue900;

// lightBaseTheme.palette.accent1Color = 
// lightBaseTheme.palette.accent2Color = 
// lightBaseTheme.palette.accent3Color = 

// lightBaseTheme.palette.textColor = 
// lightBaseTheme.palette.secondaryTextColor = 
lightBaseTheme.palette.alternateTextColor = grey50;

// lightBaseTheme.palette.canvasColor = 
// lightBaseTheme.palette.borderColor = 
// lightBaseTheme.palette.disabledColor = 
// lightBaseTheme.palette.pickerHeaderColor = 
// lightBaseTheme.palette.clockCircleColor = 
// lightBaseTheme.palette.shadowColor = 


class Layout extends React.Component {

	constructor(props) {
		super(props);
		this.handleActive 	   = this.handleActive.bind(this);
		this.pushToRouter 	   = this.pushToRouter.bind(this);
		this.toggleAppbarFixed = this.toggleAppbarFixed.bind(this);
		this.setRoute 		   	 = this.setRoute.bind(this);
		this.setMainState 	   = this.setMainState.bind(this);
		this.setTheme 		   	 = this.setTheme.bind(this);
		this.switchLanguage    = this.switchLanguage.bind(this);
		this.toggleDrawer 	   = this.toggleDrawer.bind(this);
		this.state = {
			palette: darkBaseTheme.palette,
		};
	}

	componentWillMount() {
		var isThemeDark, isAppbarFixed;
		const pathname = this.props.location.pathname;
		const initIndex = getInitIndex(pathname);
		if (localStorage) {
			isAppbarFixed = localStorage.getItem('isAppbarFixed');
			isThemeDark = localStorage.getItem('isThemeDark');
		}
		if (!isThemeDark) isThemeDark = true;
		if (!isAppbarFixed) isAppbarFixed = true;
		const isThemeDarkBoolean = isThemeDark === "true" ? true : false;
		this.setState({
			isAppbarFixed: isAppbarFixed,
			isPopoverOpen: false,
			footerMenuValue: 3,
			initialSelectedIndex: initIndex,
			isDrawerOpen: false,
			language: 'english',
			isThemeDark: isThemeDarkBoolean,
			route: pathname,
			tabIndex: initIndex,
		});
		this.setTheme(isThemeDarkBoolean);
	}

	getChildContext() {
		return {
			muiTheme: this.state.muiTheme,
		};
	}

	handleActive(tab) {
		const { value } = tab.props;
		this.pushToRouter(value);
		this.setState({route:value});
	}

	pushToRouter(route) {
		this.context.router.push(route);
	}

	setMainState(prop) {
		this.setState(prop);
	}

	setRoute(route) {
		this.pushToRouter(route);
		this.toggleDrawer();
		this.setState({route});
	}

	setTheme(isThemeDark) {
		const themeArr = isThemeDark ? [darkBaseTheme, true] : [lightBaseTheme, false];
		this.setState({ muiTheme: getMuiTheme(themeArr[0]), isThemeDark: themeArr[1] });
		document.body.style.color = themeArr[0].palette.textColor;
		document.body.style.backgroundColor = themeArr[0].palette.canvasColor;
		localStorage.setItem('isThemeDark', themeArr[1]);
	}

	switchLanguage() {
		console.debug('switchLanguage()');
		switch (this.state.language) {
			case 'english': this.setState({language:'spanish'}); break;
			case 'spanish': this.setState({language:'english'}); break;
		}
	}

	toggleAppbarFixed() {
		this.setState({ isAppbarFixed: !this.state.isAppbarFixed });
		localStorage.setItem('isAppbarFixed', this.state.isAppbarFixed);
	}

	toggleDrawer() {
		this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
	}

	render() {
		const {
			initialSelectedIndex,
			footerMenuValue,
			isAppbarFixed,
			isDrawerOpen,
			isThemeDark,
			language,
			muiTheme,
			route
		} = this.state;

		const { 
			accent1Color, accent2Color, accent3Color, alternateTextColor,
			borderColor, canvasColor, pickerHeaderColor,
			primary1Color, primary2Color, primary3Color,
			textColor, shadowColor,
		} = muiTheme.palette;

		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div className="layout">

					{/* Main Toolbar, can open AppLeftNav */}
					<AppBar
						isAppbarFixed={isAppbarFixed}
						isThemeDark={isThemeDark}
						language={language}
						pushToRouter 			= { this.pushToRouter }
						setTheme 		  		= { this.setTheme }
						switchLanguage 	  = { this.switchLanguage }
						titleColor 			  = { alternateTextColor }
						toggleAppbarFixed = { this.toggleAppbarFixed }
						toggleDrawer   	  = { this.toggleDrawer }
						toggleTheme    	  = { this.toggleTheme }
					/>

					{/* Main tabs navigation */}
					<AppTabs
						bgColor = { primary1Color }
						handleActive = { this.handleActive }
						appbarPosition = "relative"
						isAppbarFixed = { isAppbarFixed }
						route = { route }
					/>

					{/* Render all children here */}
					{ this.props.children }

					{/* Left navigation drawer, opens on click */}
					<Drawer
						emailColor 	  = { isThemeDark ? textColor : alternateTextColor }
						isDrawerOpen  = { this.state.isDrawerOpen }
						menuItems 	  = { getMenuItems(primary2Color) }
						menuItemColor = { primary2Color }
						phoneColor 	  = { accent2Color }
						setRoute   	  = { this.setRoute }
						toggleDrawer  = { this.toggleDrawer }
					/>

					{/* Main footer with icons links to social pages */}
					<Footer
						bgColor 		  		= { accent2Color }
						footerMenuValue 	= { footerMenuValue }
						getShadowHexColor = { getShadowHexColor }
						isThemeDark 	  	= { isThemeDark }
						primary3Color 	  = { primary3Color }
						setMainState    	= { this.setMainState }
						setTheme    	  	= { this.setTheme }
						shadowColor 	  	= { shadowColor }
						textColor 		  	= { textColor }
						thumbColor 		  	= { primary1Color }
						trackColor 		  	= { canvasColor }
					/>
				</div>
			</MuiThemeProvider>
		);
	}
}

Layout.contextTypes = {
	location: React.PropTypes.object,
	router: React.PropTypes.object,
};

Layout.childContextTypes = {
	muiTheme: React.PropTypes.object,
};

export default Layout;