import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store, persistor } from './redux/store/store'; //Bring in store into the entire app
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
               <App /> 
            </PersistGate>            
        </BrowserRouter>
    </Provider>   
, document.getElementById('root'));