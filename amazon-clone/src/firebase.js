// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// import { getFirestore } from 'firebase/firestore/lite';
import firebase from 'firebase';
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfdNEfueR2KDJ4Uz_KUXkILtEmwY-1Uuk",
  authDomain: "clone-d23b5.firebaseapp.com",
  projectId: "clone-d23b5",
  storageBucket: "clone-d23b5.appspot.com",
  messagingSenderId: "127107247027",
  appId: "1:127107247027:web:18cf8df710e597f2e539c6",
  measurementId: "G-05GLRXMD73"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = app.firestore();
// const db = getFirestore(app);
// const auth = getAuth();
const auth = firebase.auth();

export {auth,db};