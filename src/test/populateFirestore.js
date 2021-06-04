const firebase = require('firebase');
require('firebase/firestore');

const { reservations, restaurants, dateAvailabilities, reviews } = require('./testData');

var firebaseConfig = {
    apiKey: "AIzaSyAnBXCTOxjwqxsuraQwrFM_fxcui8d4oZk",
    authDomain: "restaurants-reservations-75a2a.firebaseapp.com",
    projectId: "restaurants-reservations-75a2a",
    storageBucket: "restaurants-reservations-75a2a.appspot.com",
    messagingSenderId: "287216275235",
    appId: "1:287216275235:web:8d9a09d616910b350a4696",
    measurementId: "G-105EFR9F7H"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  function populateCollection(collectionName, items) {
      return Promise.all(items.map(item => {
          const { id, ...data } = item;
          return db.collection(collectionName)
            .doc(id)
            .set(data);
      }));
  }

  Promise.all([
      populateCollection('reservations', reservations),
      populateCollection('reviews', reviews),
      populateCollection('restaurants', restaurants),
      populateCollection('dateAvailabilities', dateAvailabilities),
  ])
  .then(() => {
      console.log('Done!');
      process.exit(0);
  })
  .catch(err => {
      console.log(err);
  });