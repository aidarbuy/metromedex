import React     from "react";
import { Route, Redirect, IndexRoute, NotFoundRoute }  from "react-router";
import Layout    from './Layout';
import About     from './routes/About';
import Article   from './routes/Article';
import Articles  from './routes/Articles';
import Auth      from './routes/Auth';
import Context   from './routes/Context';
import Doctor    from './routes/Doctor';
import Doctors   from './routes/Doctors';
import ES6       from './routes/ES6';
import Gallery   from './routes/Gallery';
import Home      from './routes/Home';
import Location  from './routes/Location';
import MuiTheme  from './routes/MuiTheme';
import Palette   from './routes/Palette';
import Services  from './routes/Services';
import Telemed   from './routes/Telemed';
import TestLab   from './routes/TestLab';
import Virtual   from './routes/Virtual';
import Visa      from './routes/Visa';

/**
 * Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/components/paper
 * The react router will search for a route named 'paper' 
 * and will recursively render its handler and its parent 
 * handler like so: Paper > Components > Master
 */

module.exports = (
  <Route path="/"               component={Layout}>
    <IndexRoute                 component={Home}      />
    <Route path="/about"        component={About}     />
    <Route path="/articles"     component={Articles}  />
    <Route path="/articles/:id" component={Article}   />
    <Route path="/auth"         component={Auth}      />
    <Route path="/context"      component={Context}   />
    <Route path="/doctors"      component={Doctors}   />
    <Route path="/doctors/:id"  component={Doctor}    />
    <Route path="/es6"          component={ES6}       />
    <Route path="/gallery"      component={Gallery}   />
    <Route path="/location"     component={Location}  />
    <Route path="/mui-theme"    component={MuiTheme}  />
    <Route path="/palette"      component={Palette}   />
    <Route path="/services"     component={Services}  />
    <Route path="/telemed"      component={Telemed}   />
    <Route path="/test-lab"     component={TestLab}   />
    <Route path="/virtual"      component={Virtual}   />
    <Route path="/visa"         component={Visa}      />
  </Route>
);