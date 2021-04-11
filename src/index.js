import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import PatientReducer from "./Containers/Patient/store/PatientReducer";
import axios from "axios";
import login from "../src/Containers/Login/store/LoginReducer";
import interfaceUtilityReducer from './Containers/InterfaceUtility/store/InterfaceUtilityReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

axios.defaults.baseURL = 'https://localhost:44383/';
// axios.defaults.baseURL = 'https://localhost:5001/';


const rootReducer = combineReducers({
    patient: PatientReducer,
    login: login,
    ui: interfaceUtilityReducer,

});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App}/>

        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
