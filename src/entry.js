
// TEMPLATES
require.context('./', true, /\.html$/);

// SCSS
require('./index.scss')

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);