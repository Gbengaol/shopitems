import { createStore, applyMiddleware } from 'redux'; //Import store and applyMiddleware from redux
import logger from 'redux-logger'; //Middleware

import rootReducer from '../root-reducer'; //Import rootReducer from rootreducer file

const middlewares = [ logger ]; // All middlewares (no matter their number) go into this array

const store = createStore (rootReducer, applyMiddleware(...middlewares));

export default store; //To be put into App.js so the entire app can have access to it