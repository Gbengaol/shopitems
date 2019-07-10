import firebase from 'firebase/app'; //Import Firebase 
import 'firebase/firestore'; //For Firebase Database
import 'firebase/auth'; //For Firebase Authentication


const config = {
    apiKey: "AIzaSyDp48mmMnQ0YD4XX59xzYbPhlK_0WeMnyM",
    authDomain: "shopitems-eed91.firebaseapp.com",
    databaseURL: "https://shopitems-eed91.firebaseio.com",
    projectId: "shopitems-eed91",
    storageBucket: "",
    messagingSenderId: "733796509453",
    appId: "1:733796509453:web:3658b9d696a98bc7"
  };

firebase.initializeApp(config); // Firebase Configuration

export const auth = firebase.auth(); // To use firebase authenntication
export const firestore = firebase.firestore(); // To use firebase database

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider); // To use Google for signin

export default firebase;