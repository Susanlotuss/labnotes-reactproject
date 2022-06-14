// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC0623XgTZzmOPu7n_JdDbKjB3Ui3SA_A",
  authDomain: "knittingnotes-db357.firebaseapp.com",
  projectId: "knittingnotes-db357",
  storageBucket: "knittingnotes-db357.appspot.com",
  messagingSenderId: "202186305004",
  appId: "1:202186305004:web:2d0adbd3523f0962f724c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);