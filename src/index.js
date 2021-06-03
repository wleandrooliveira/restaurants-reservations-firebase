import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app'
import 'firebase/analytics';
import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAnBXCTOxjwqxsuraQwrFM_fxcui8d4oZk",
  authDomain: "restaurants-reservations-75a2a.firebaseapp.com",
  projectId: "restaurants-reservations-75a2a",
  storageBucket: "restaurants-reservations-75a2a.appspot.com",
  messagingSenderId: "287216275235",
  appId: "1:287216275235:web:8d9a09d616910b350a4696",
  measurementId: "G-105EFR9F7H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
