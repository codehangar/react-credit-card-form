import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  modelReducer,
  formReducer
} from 'react-redux-form';

const initialUserState = {
  firstName: '',
  lastName: ''
};

const intialCCState = {
  name: "",
  number: "",
  expMonth: "",
  expYear: "",
  cvc: ""
};

const store = applyMiddleware(thunk)(createStore)(combineReducers({
  user: modelReducer('user', initialUserState),
  userForm: formReducer('user', initialUserState),
  cc: modelReducer('cc', intialCCState),
  ccForm: formReducer('cc', intialCCState)
}));

export default store;