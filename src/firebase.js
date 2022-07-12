import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5iTZSUbDd3BiMp3RAdNRwPC1ap2j9_ww",
  authDomain: "clone-7b727.firebaseapp.com",
  projectId: "clone-7b727",
  storageBucket: "clone-7b727.appspot.com",
  messagingSenderId: "782648863164",
  appId: "1:782648863164:web:65ce0206adeebc26e0a3b9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();

export { auth, db, provider };
