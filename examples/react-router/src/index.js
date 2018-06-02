import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import Home from './common/Home'
import Tv from './common/Tv'
import Show from './common/Show'
import ShowSub from './common/ShowSub'

ReactDOM.render(
  <Router>
    <App>
      <Route path="/home" component={ Home }/>
      <Route path="/tv" component={ Tv } />
      <Route path="/tv/show" component={ Show } />
      <Route path="/tv/show/show_sub" component={ ShowSub } />
    </App>
  </Router>,
  document.getElementById('root')
);
