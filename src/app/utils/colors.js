import { convertColorToString, decomposeColor } from 'material-ui/utils/colorManipulator';

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function getShadowHexColor(shadowColor) {
	const decomposed = decomposeColor(shadowColor);
	const rgb = decomposed.values;
	return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

module.exports = { componentToHex, getShadowHexColor, rgbToHex };