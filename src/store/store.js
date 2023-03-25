import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import InputUploadReducer from './reducers/InputUploadReducer';
import LoginReducer from './reducers/LoginReducer';

const composeEnchancers = composeWithDevTools();

const rootReducer = combineReducers({
  InputUploadReducer,
  LoginReducer
});

const store = createStore(rootReducer, composeEnchancers);

export default store;
