// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGPcbaTqkJHjjsUinA64AWeuAW2dQAfvM",
  authDomain: "car-doctors-498a4.firebaseapp.com",
  projectId: "car-doctors-498a4",
  storageBucket: "car-doctors-498a4.appspot.com",
  messagingSenderId: "803339531702",
  appId: "1:803339531702:web:c97f1a8f2d9eaadf0d7d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;