require('./styles/style.scss');

import React from 'react';
import {render} from 'react-dom';
import bootstrap from 'bootstrap';

import App from './components/index';

const mountNode = document.getElementById('app');

render(<App />, mountNode);