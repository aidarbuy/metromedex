function getRouteName(index) {
	switch (index) {
		case 0  : return "/";
		case 1  : return "/about";
		case 2  : return "/services";
		case 3  : return "/doctors";
		case 4  : return "/articles";
		case 5  : return "/location";
		case 6  : return "/virtual";
		default : return "/";
	}
}

function getInitIndex(route) {
	switch (route) {
		case "/"          : return 0;
		case "/about"     : return 1;
		case "/services"  : return 2;
		case "/doctors"   : return 3;
		case "/doctors/roshelle-beckwith" : return 3;
		case "/doctors/matthew-beckwith"  : return 3;
		case "/doctors/patricia-micozzi"  : return 3;
		case "/doctors/brian-rader"       : return 3;
		case "/articles"  : return 4;
		case "/location"  : return 5;
		case "/virtual"   : return 6;
		default           : return 1;
	}
}

module.exports = { getInitIndex, getRouteName };