import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiUv8qW_WnwkKoB4jeWUqigXnnSSqUR4k",
  authDomain: "slack-d5b1b.firebaseapp.com",
  databaseURL: "https://slack-d5b1b.firebaseio.com",
  projectId: "slack-d5b1b",
  storageBucket: "slack-d5b1b.appspot.com",
  messagingSenderId: "165132483902",
  appId: "1:165132483902:web:626fa229034197c7c5c06f",
  measurementId: "G-7NL4P8QW7C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig),
  db = firebaseApp.firestore(),
  auth = firebase.auth(),
  provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
