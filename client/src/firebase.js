// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7e4be.firebaseapp.com",
  projectId: "mern-estate-7e4be",
  storageBucket: "mern-estate-7e4be.appspot.com",
  messagingSenderId: "490790211865",
  appId: "1:490790211865:web:832ccee0412637cfaf3588"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);