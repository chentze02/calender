import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import "firebase/auth"
import {getAuth} from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyDpdwc4qd5ARwTOZXnI1xi2ZL7NNiPIEdg",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = getAuth(app);
export default app