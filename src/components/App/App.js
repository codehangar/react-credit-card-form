import React from 'react';
import ReactCreditCardForm from '../ReactCreditCardForm/ReactCreditCardForm';
import UserForm from '../UserForm/UserForm';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import store from '../../store.js';

const handleSubmit = (user) => {
  // actions.submit('user', somePromise)
  console.log("App.js user", user)
}

const App = () => (
  <Provider store={ store }>
    <div>
      <ReactCreditCardForm data={{test: 'hello world'}} handleSubmit={(user) => handleSubmit(user)}/>
      <UserForm handleSubmit={(user) => handleSubmit(user)}/>
    </div>
  </Provider>
);

module.exports = App;
