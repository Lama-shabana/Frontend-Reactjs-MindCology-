// import "firebase/auth";
// export const auth = firebase.initializeApp({
//     apiKey: "AIzaSyCdiWrK19DxDH_NXkSW86_YaKw6x52xUG0",
//     authDomain: "chat-1f141.firebaseapp.com",
//     projectId: "chat-1f141",
//     storageBucket: "chat-1f141.appspot.com",
//     messagingSenderId: "704475096962",
//     appId: "1:704475096962:web:fc6fd7655847f31a8d919b"
// }).auth();
//
// export default  auth;


import * as firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyCdiWrK19DxDH_NXkSW86_YaKw6x52xUG0",
    authDomain: "chat-1f141.firebaseapp.com",
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "chat-1f141",
    storageBucket: "chat-1f141.appspot.com",
    messagingSenderId:  "704475096962",
    appId: "1:704475096962:web:fc6fd7655847f31a8d919b",
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}