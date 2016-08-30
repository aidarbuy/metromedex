// Icons
import HomeIcon from 'material-ui/svg-icons/action/home';
import AboutIcon from 'material-ui/svg-icons/action/info';
import ServicesIcon from 'material-ui/svg-icons/maps/local-hospital';
import DoctorsIcon from 'material-ui/svg-icons/social/people';
import ArticlesIcon from 'material-ui/svg-icons/av/library-books';
import LocationIcon from 'material-ui/svg-icons/maps/place';
import VirtualIcon from 'material-ui/svg-icons/action/three-d-rotation';
import React from 'react';

const getMenuItems = (iconColor) => {
	return [{
		name: "Home",
		icon: <HomeIcon style={{fill:iconColor}} />,
		route: '/',
	},{
		name: "About Us",
		icon: <AboutIcon style={{fill:iconColor}} />,
		route: '/about',
	},{
		name: "Services",
		icon: <ServicesIcon style={{fill:iconColor}} />,
		route: '/services',
	},{
		name: "Doctors",
		icon: <DoctorsIcon style={{fill:iconColor}} />,
		route: '/doctors',
	},{
		name: "Articles",
		icon: <ArticlesIcon style={{fill:iconColor}} />,
		route: '/articles',
	},{
		name: "Location",
		icon: <LocationIcon style={{fill:iconColor}} />,
		route: '/location',
	},{
		name: "Virtual",
		icon: <VirtualIcon style={{fill:iconColor}} />,
		route: '/virtual',
	}];
};

module.exports = {
	getMenuItems,
};