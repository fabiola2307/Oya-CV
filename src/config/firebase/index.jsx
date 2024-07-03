// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHnEKA7bdKc-FgPgCXxCtlRC2InA2Lq8I",
  authDomain: "oya-cv.firebaseapp.com",
  databaseURL: "https://oya-cv-default-rtdb.firebaseio.com/",
  projectId: "oya-cv",
  storageBucket: "oya-cv.appspot.com",
  messagingSenderId: "548918624617",
  appId: "1:548918624617:web:4c926ab1886551857b7df8",
  measurementId: "G-QKNC5FCPGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
