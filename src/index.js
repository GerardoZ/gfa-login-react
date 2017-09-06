import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyAWgTeUAyG6ysiBqm6te5WrPUlnBcE2o-s",
    authDomain: "gfa-login-react.firebaseapp.com",
    databaseURL: "https://gfa-login-react.firebaseio.com",
    projectId: "gfa-login-react",
    storageBucket: "gfa-login-react.appspot.com",
    messagingSenderId: "801795978772"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
