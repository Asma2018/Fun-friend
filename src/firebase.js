import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyA4NZ081au0Z9YVI50nQWd3UJwj759shSQ",
    authDomain: "fun-food-friends-e4fe1.firebaseapp.com",
    databaseURL: "https://fun-food-friends-e4fe1.firebaseio.com",
    projectId: "fun-food-friends-e4fe1",
    storageBucket: "fun-food-friends-e4fe1.appspot.com",
    messagingSenderId: "263861239048"
  };
  firebase.initializeApp(config);
  
  export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

  export default firebase;
