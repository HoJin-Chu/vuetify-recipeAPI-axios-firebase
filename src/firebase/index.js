import firebase from 'firebase';

var config = {
    apiKey: 'AIzaSyCX2bad8nMq0S4GKx5HqypaOuDVczl9i8U',
    authDomain: 'vue-recipe-22dd9.firebaseapp.com',
    databaseURL: 'https://vue-recipe-22dd9.firebaseio.com',
    projectId: 'vue-recipe-22dd9',
    storageBucket: 'vue-recipe-22dd9.appspot.com',
    messagingSenderId: '788480973926'
};

// eslint-disable-next-line prettier/prettier
firebase.initializeApp(config)