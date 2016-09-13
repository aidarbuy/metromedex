import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import routes from './Routes';
// for onTouchTap (stackoverflow.com/a/34015469/988941)
require('react-tap-event-plugin')();

// Providing store over context
// Provider.childContextTypes = {
// 	store: React.PropTypes.object
// };

// facebook.github.io/react/docs/top-level-api.html#react.render
// onUpdate={()=> window.scrollTo(0, 0)
render(
	<Provider store={createStore(reducer)}>
		<Router routes={routes} history={browserHistory}/>
	</Provider>,
  document.getElementById('app')
);