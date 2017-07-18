require('./styles/style.scss');

import React from 'react';
import {render} from 'react-dom';
import bootstrap from 'bootstrap';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

import App from './components/index';
import Gallery from './components/Gallery';
import PhotoForm from './components/PhotoForm';

const mountNode = document.getElementById('app');

const Routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Gallery}/>
      <Route path='/admin' component={PhotoForm}/>
    </Route>
  </Router>
)

render(Routes, mountNode);