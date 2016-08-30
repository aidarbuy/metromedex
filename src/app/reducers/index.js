import appBar from './appBar';
import appFooter from './appFooter';
import appTabs from './appTabs';
import { combineReducers } from 'redux';
import leftNav from './leftNav';
import router from './router';

export default combineReducers({
  appBar,
  appFooter,
  appTabs,
  leftNav,
  router,
});