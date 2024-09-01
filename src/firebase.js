// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqvS7x5dN1XtnJmjcEBLUSASN-EGd67Jg",
  authDomain: "podcast-platform-b75e6.firebaseapp.com",
  projectId: "podcast-platform-b75e6",
  storageBucket: "podcast-platform-b75e6.appspot.com",
  messagingSenderId: "311627293068",
  appId: "1:311627293068:web:add75ef61c7177ea8e36a9",
  measurementId: "G-ZLELFH3TQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };