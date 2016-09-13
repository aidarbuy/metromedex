import React from "react";
// import { Route, IndexRoute }  from "react-router";
import App      from './components/App';
import Home     from './routes/Home';
// import About    from './routes/About';
// import Article  from './routes/Article';
// import Articles from './routes/Articles';
// import Doctor   from './routes/Doctor';
// import Doctors  from './routes/Doctors';
// import Location from './routes/Location';
// import Services from './routes/Services';
// import Virtual  from './routes/Virtual';
// import Gallery  from './routes/Gallery';
// import Telemed  from './routes/Telemed';
// import TestLab  from './routes/TestLab';

export default [{
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Home').default)
        })
      }
    },
    {
      path: '/about',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/About').default)
        })
      }
    },
    {
      path: '/services',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Services').default)
        })
      }
    },
    {
      path: '/doctors',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Doctors').default)
        })
      }
    },
    {
      path: '/doctors/:id',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Doctor').default)
        })
      }
    },
    {
      path: '/articles',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Articles').default)
        })
      }
    },
    {
      path: '/articles/:id',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Article').default)
        })
      }
    },
    {
      path: '/location',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Location').default)
        })
      }
    },
    {
      path: '/virtual',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Virtual').default)
        })
      }
    },
    {
      path: '/gallery',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Gallery').default)
        })
      }
    },
    {
      path: '/telemed',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Telemed').default)
        })
      }
    },
    {
      path: '/testlab',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Testlab').default)
        })
      }
    },
  ]
}];

// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={Home}/>
//     <Route path="/about" component={About}/>
//     <Route path="/articles" component={Articles}>
//       <Route path="/articles/:id" component={Article}/>
//     </Route>
//     <Route path="/doctors" component={Doctors}>
//       <Route path="/doctors/:id" component={Doctor}/>
//     </Route>
//     <Route path="/gallery" component={Gallery}/>
//     <Route path="/location" component={Location}/>
//     <Route path="/services" component={Services}/>
//     <Route path="/virtual" component={Virtual}/>
//     <Route path="/telemed" component={Telemed}/>
//     <Route path="/testlab" component={TestLab}/>
//   </Route>
// );