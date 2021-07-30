import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDrGn_5QDWsDJR8-TxRW6wFAmJLBJSSEpU",
    authDomain: "howmanystars-69f13.firebaseapp.com",
    databaseURL: "https://howmanystars-69f13-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "howmanystars-69f13",
    storageBucket: "howmanystars-69f13.appspot.com",
    messagingSenderId: "535000907255",
    appId: "1:535000907255:web:bd39b329afd6bbbe2142f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  export default firebase; ;
  export { db };

