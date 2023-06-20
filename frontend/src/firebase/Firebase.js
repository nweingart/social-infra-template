// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Add your own firebase config info here
const firebaseConfig = {
  apiKey: "AIzaSyAnD3NX19p4Ofb-tKFvBw-Ks9JiplFAvPM",
  authDomain: "grapevine-2fe68.firebaseapp.com",
  projectId: "grapevine-2fe68",
  storageBucket: "grapevine-2fe68.appspot.com",
  messagingSenderId: "1053148366638",
  appId: "1:1053148366638:web:8cbfbce460203f71075cbf",
  measurementId: "G-E7ER3YPM48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
