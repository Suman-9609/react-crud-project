// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2pu2R0yL-W4DFPIjv8qaJ1PCTpjm_EcE",
  authDomain: "project-5-98636.firebaseapp.com",
  projectId: "project-5-98636",
  storageBucket: "project-5-98636.appspot.com",
  messagingSenderId: "1091867870855",
  appId: "1:1091867870855:web:5d5df4b174c6094e9e9a22",
  measurementId: "G-VT212FRC8F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

