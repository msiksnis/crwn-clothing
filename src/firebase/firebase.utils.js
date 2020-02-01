import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCfMAnfrYo48zQ_ETS3ALwm9quX8nJGFWs",
  authDomain: "crwn-c25a9.firebaseapp.com",
  databaseURL: "https://crwn-c25a9.firebaseio.com",
  projectId: "crwn-c25a9",
  storageBucket: "crwn-c25a9.appspot.com",
  messagingSenderId: "664591662954",
  appId: "1:664591662954:web:3e5db7190f5e15f7196f13",
  measurementId: "G-2WL0LV44Z9"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
