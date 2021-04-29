import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCc521u8wQFEGW69ICwapWEGNz9OVPdI4Q",
  authDomain: "kklar-5d4b3.firebaseapp.com",
  projectId: "kklar-5d4b3",
  storageBucket: "kklar-5d4b3.appspot.com",
  messagingSenderId: "79542358961",
  appId: "1:79542358961:web:36d450b8d5b636c7a1e390",
  measurementId: "G-R5TW0M3ZKD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
