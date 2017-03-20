import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home/index.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Touch Tap
injectTapEventPlugin();

ReactDOM.render(<Home />, document.getElementById('app'));
