// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ce421.firebaseapp.com",
  projectId: "mern-estate-ce421",
  storageBucket: "mern-estate-ce421.appspot.com",
  messagingSenderId: "633810896282",
  appId: "1:633810896282:web:f37f00379b2b5f28dda623",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
