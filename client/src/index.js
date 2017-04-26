import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import createBrowserHistory from 'history/createBrowserHistory';

import Routes from './routes';

const history = createBrowserHistory()
ReactDOM.render(
  <Routes history={history} />,
  document.getElementById('root')
);
