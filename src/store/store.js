import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const composeEnchancers = composeWithDevTools();

const store = createStore(rootReducer, composeEnchancers);

export default store;
