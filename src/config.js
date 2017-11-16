import firebase from 'firebase'

export const appName = 'myportik1'

firebase.initializeApp({
    apiKey: "AIzaSyBL3suLtgKU2fpF9rU2eB7LO7Wc1cNAT3A",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: `${appName}`,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "333026057343"
})
