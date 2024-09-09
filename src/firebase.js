// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ4En9g5VjhOXJy1izyVBPmh1Tzp20hVA",
  authDomain: "board-infinity-project.firebaseapp.com",
  projectId: "board-infinity-project",
  storageBucket: "board-infinity-project.appspot.com",
  messagingSenderId: "999133146608",
  appId: "1:999133146608:web:4cc8a9a1f13c1038f70135",
  measurementId: "G-1VYE88FRWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);
