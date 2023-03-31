import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import InputUploadReducer from './reducers/InputUploadReducer';
import LoginReducer from './reducers/LoginReducer';
import KhachReducer from './reducers/KhachReducer';
import FilterReducer from './reducers/FilterReducer';

const composeEnchancers = composeWithDevTools();

const rootReducer = combineReducers({
  KhachReducer,
  InputUploadReducer,
  LoginReducer,
  FilterReducer
});

const store = createStore(rootReducer, composeEnchancers);

export default store;
