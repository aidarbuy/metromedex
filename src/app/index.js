import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import React, { Component } from 'react';
import reducer from './reducers/index';
import routes  from './Routes';
// // import useScroll from 'react-router-scroll';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Providing store over context
// Provider.childContextTypes = {
// 	store: React.PropTypes.object
// };

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
// render(<Main />, document.getElementById('app'));

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
// ReactDOM.render(
// 	<IntlProvider locale="en-GB">
// 		<Provider store={createStore(reducer)}>
// 			<Router
// 				routes = { routes }
// 				history = { browserHistory }
// 				onUpdate = { ()=> window.scrollTo(0, 0) }
// 			/>
// 		</Provider>
// 	</IntlProvider>,
// 	document.getElementById('app')
// );

render(
	<Provider store={createStore(reducer)}>
		<Router
			routes = { routes }
			history = { browserHistory }
			onUpdate = { ()=> window.scrollTo(0, 0) }
		/>
	</Provider>
	,document.getElementById('app')
);
