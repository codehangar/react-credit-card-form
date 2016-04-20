import { createStore, combineReducers } from 'redux';
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

const store = createStore(combineReducers({
  user: modelReducer('user', initialUserState),
  userForm: formReducer('user', initialUserState),
  cc: modelReducer('user', intialCCState),
  ccForm: formReducer('cc', intialCCState)
}));

export default store;