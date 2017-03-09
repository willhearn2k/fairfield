import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from './views/home/index.jsx';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Home);

if (module.hot) {
  module.hot.accept('./views/home/index.jsx', () => { render(Home) })
}