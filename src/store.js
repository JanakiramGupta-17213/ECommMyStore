// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Install if not already done: npm install redux-thunk
import cartReducer from './reducers/cartReducer'; // Create this file

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
