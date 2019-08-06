import { createStore, applyMiddleware } from 'redux'; //Import store and applyMiddleware from redux
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; //Middleware

import rootReducer from '../root-reducer'; //Import rootReducer from rootreducer file

const middlewares = [ logger ]; // All middlewares (no matter their number) go into this array

export const store = createStore (rootReducer, applyMiddleware(...middlewares));
export const persistor =  persistStore(store);

export default {store, persistor }; //To be put into App.js so the entire app can have access to it