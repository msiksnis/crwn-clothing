import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAjf4ZE1jLIHh6-SHxB7sp9fVSCiroQ5Tc",
  authDomain: "crwn-db-25320.firebaseapp.com",
  databaseURL: "https://crwn-db-25320.firebaseio.com",
  projectId: "crwn-db-25320",
  storageBucket: "crwn-db-25320.appspot.com",
  messagingSenderId: "664186508142",
  appId: "1:664186508142:web:1d094a8a976e46e0d1677f",
  measurementId: "G-0N624X31VH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
