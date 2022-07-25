// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE7nqQqAkEnGpzbK4d4eZ-ssFlEOzGO08",
  authDomain: "insta-2-6a874.firebaseapp.com",
  projectId: "insta-2-6a874",
  storageBucket: "insta-2-6a874.appspot.com",
  messagingSenderId: "170310687503",
  appId: "1:170310687503:web:f739fa49c5ecd2863f3c7a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
