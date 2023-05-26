// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxzavCalncEjFd5ybJx1DyuwjYrzJ9elA",
  authDomain: "chatapp-d7174.firebaseapp.com",
  projectId: "chatapp-d7174",
  storageBucket: "chatapp-d7174.appspot.com",
  messagingSenderId: "910552692731",
  appId: "1:910552692731:web:872f5c3a8ce74e19b1bd5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
