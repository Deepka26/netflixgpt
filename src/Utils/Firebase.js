// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkCcOw-P_WhSEtv76ljesmqWHVrX7TRWM",
  authDomain: "netflixgpt-76aa5.firebaseapp.com",
  projectId: "netflixgpt-76aa5",
  storageBucket: "netflixgpt-76aa5.appspot.com",
  messagingSenderId: "116530152565",
  appId: "1:116530152565:web:b92386ba46d9886c07243c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();