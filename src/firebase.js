// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nextland-66303.firebaseapp.com",
  projectId: "nextland-66303",
  storageBucket: "nextland-66303.appspot.com",
  messagingSenderId: "214767631932",
  appId: "1:214767631932:web:e74c19c01d4b6f540e4d39",
  measurementId: "G-ZERL3SMXTP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);