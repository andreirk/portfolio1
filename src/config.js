import firebase from 'firebase'

export const appName = 'myportik1'

export const config = {
  apiKey: "AIzaSyBL3suLtgKU2fpF9rU2eB7LO7Wc1cNAT3A",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: `${appName}`,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "333026057343"
}

firebase.initializeApp(config)
