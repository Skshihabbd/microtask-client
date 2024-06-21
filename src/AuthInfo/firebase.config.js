// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoW_JnXKrrWyuqvS_A_bMXoHtcTLD57M0",
  authDomain: "pico-earning.firebaseapp.com",
  projectId: "pico-earning",
  storageBucket: "pico-earning.appspot.com",
  messagingSenderId: "415971996511",
  appId: "1:415971996511:web:1bd4d9b130bb3e9857fcea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app) 
export default auth;