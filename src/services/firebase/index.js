import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPIGQDIhixeSR6aQO08vEJC1E4LNLb-08",
  authDomain: "proyectorarce.firebaseapp.com",
  projectId: "proyectorarce",
  storageBucket: "proyectorarce.appspot.com",
  messagingSenderId: "494328155273",
  appId: "1:494328155273:web:a120845ef0bcc433e90a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)