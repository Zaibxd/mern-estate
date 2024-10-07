// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-app-5cd3c.firebaseapp.com",
  projectId: "mern-estate-app-5cd3c",
  storageBucket: "mern-estate-app-5cd3c.appspot.com",
  messagingSenderId: "574519907575",
  appId: "1:574519907575:web:58cb986517aff92690aff2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
