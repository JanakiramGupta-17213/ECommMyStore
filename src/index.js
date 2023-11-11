import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';

const rootElement = document.getElementById('root');

import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import productReducer from './reducers/productsReducer';

const rootReducer = combineReducers({
  products: productReducer,
  // We can add other reducers as needed
});

const store =  configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
