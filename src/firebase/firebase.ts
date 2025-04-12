// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjRMxSGYU4VlAm_RyhHt8APwvXKo-WhA",
  authDomain: "data-viz-381b5.firebaseapp.com",
  projectId: "data-viz-381b5",
  storageBucket: "data-viz-381b5.firebasestorage.app",
  messagingSenderId: "665330428028",
  appId: "1:665330428028:web:ec2c9a42adbd33d7c601f9",
  measurementId: "G-279ZM2991D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };