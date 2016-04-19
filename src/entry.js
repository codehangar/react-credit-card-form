
// TEMPLATES
require.context('./', true, /\.html$/);

//Bootstrap
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);