import { createStore, combineReducers } from 'redux';
import {
  modelReducer,
  formReducer
} from 'react-redux-form';

const initialUserState = {
  firstName: '',
  lastName: ''
};

const store = createStore(combineReducers({
  user: modelReducer('user', initialUserState),
  userForm: formReducer('user', initialUserState)
}));

export default store;