import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-CKRJjELp4HFkV0AnOWhLU3Hp4BWYl50",
  authDomain: "crown-store-40b11.firebaseapp.com",
  databaseURL: "https://crown-store-40b11.firebaseio.com",
  projectId: "crown-store-40b11",
  storageBucket: "crown-store-40b11.appspot.com",
  messagingSenderId: "238053096284",
  appId: "1:238053096284:web:2a42e79e4231157f91df99",
  measurementId: "G-R0P6WNNJW5"
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
