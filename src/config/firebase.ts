// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGwaZ-hr1oCSRTYqX_FOjO248eJSg6lCU",
  authDomain: "social-media-proj1.firebaseapp.com",
  projectId: "social-media-proj1",
  storageBucket: "social-media-proj1.appspot.com",
  messagingSenderId: "535164761356",
  appId: "1:535164761356:web:d734def04476295ccdc529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);