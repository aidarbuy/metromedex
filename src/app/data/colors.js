import {
	cyan500, cyan700, cyan900, cyanA400, cyanA700,
	pink500,
	teal500,
} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

darkBaseTheme.palette.accent1Color = teal500;
lightBaseTheme.palette.primary2Color = cyanA700;

module.exports = { darkBaseTheme, lightBaseTheme };