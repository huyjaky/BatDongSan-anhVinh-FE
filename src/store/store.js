import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import LoginReducer from './reducers/LoginReducer';
import KhachReducer from './reducers/KhachReducer';
import FilterReducer from './reducers/FilterReducer';
import InputUploadReducer from './reducers/InputUploadReducer';

const composeEnchancers = composeWithDevTools();

const rootReducer = combineReducers({
  KhachReducer,
  LoginReducer,
  FilterReducer,
  InputUploadReducer
});

const store = createStore(rootReducer, composeEnchancers);

export default store;
