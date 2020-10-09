import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Music from './pages/Music';
import Album from './pages/Album';

ReactDOM.render(
  <Router>
    <Route exact path='/' component={Home} />
    <Route exact path='/Music' component={Music} />
    <Router exact path ='/Album' component={Album} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
