import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Chrome from './views/chrome/chrome.jsx';
import View1 from './views/view1.jsx';
import View2 from './views/view2.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Chrome}>
        <Route path="/view1" component={View1}/>
        <Route path="/view2" component={View2}/>
    </Route>
  </Router>
), document.getElementById('app'))
