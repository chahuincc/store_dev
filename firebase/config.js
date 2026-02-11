// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBsYFf7RfkkBSIXlO7_oxK2sCBggp0sBA",
  authDomain: "store-chahuin.firebaseapp.com",
  projectId: "store-chahuin",
  storageBucket: "store-chahuin.appspot.com",
  messagingSenderId: "877252614790",
  appId: "1:877252614790:web:9d0ab5a203e08e77850f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()