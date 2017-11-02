import firebase from 'firebase'

export const appName = 'advreact-1610'

firebase.initializeApp({
    apiKey: "AIzaSyBj911t9w8xd-h4Ys7E-eJU2O-Sh4He8VE",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: "advreact1610",
    storageBucket: "advreact1610.appspot.com",
    messagingSenderId: "478380270239"
})
