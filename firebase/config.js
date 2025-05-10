// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5zIdq6L4gFAyzP0uWc-SC8colIXpWg8U",
  authDomain: "student-dashboard-9839d.firebaseapp.com",
  projectId: "student-dashboard-9839d",
  storageBucket: "student-dashboard-9839d.firebasestorage.app",
  messagingSenderId: "179144297531",
  appId: "1:179144297531:web:0a2cb393397f6d3aca201e",
  measurementId: "G-0NJCBHSK74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
let firebaseApp;
if (typeof window !== 'undefined') {
  firebaseApp = initializeApp(firebaseConfig);
}
export { auth, provider, signInWithPopup, signOut };
