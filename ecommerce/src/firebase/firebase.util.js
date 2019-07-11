import firebase from 'firebase/app'; //Import Firebase 
import 'firebase/firestore'; //For Firebase Database
import 'firebase/auth'; //For Firebase Authentication

// Configuration fiile is unique for every project created on Firebase

const config = {
    apiKey: "AIzaSyDp48mmMnQ0YD4XX59xzYbPhlK_0WeMnyM",
    authDomain: "shopitems-eed91.firebaseapp.com",
    databaseURL: "https://shopitems-eed91.firebaseio.com",
    projectId: "shopitems-eed91",
    storageBucket: "",
    messagingSenderId: "733796509453",
    appId: "1:733796509453:web:3658b9d696a98bc7"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth){ return; }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set ({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message)
        }
    } 
    return userRef; 
}

firebase.initializeApp(config); // Firebase Configuration with the project config file

export const auth = firebase.auth(); // To use firebase authenntication
export const firestore = firebase.firestore(); // To use firebase database

const provider = new firebase.auth.GoogleAuthProvider(); //Using Google Firebase(Could also be Facebook, twitter, etc)
provider.setCustomParameters({ prompt: 'select_account' }); //Prompt a select account window

export const signInWithGoogle = () => auth.signInWithPopup(provider); // To use Google for signin

export default firebase;