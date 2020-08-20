import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import './common/App.css';
import './common/index.css';
import './common/root.css';
import './common/css/textarea__root.css';
import './common/css/custom__root.css';
import './common/css/txt__root.css';

import './common/css/brand-colors__root.css';

import './common/global-breakpoints.css';




ReactDOM.render(
  <React.StrictMode>
       <Router>
          <App />
       </Router>
  </React.StrictMode>,
document.getElementById('root') );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
