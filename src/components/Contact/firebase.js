// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ4VoNC_x2WviOLNZ1oNoEA0eYLNgpaSo",
  authDomain: "my-reume-d423c.firebaseapp.com",
  projectId: "my-reume-d423c",
  storageBucket: "my-reume-d423c.firebasestorage.app",
  messagingSenderId: "323028004360",
  appId: "1:323028004360:web:ec6bc6f0fb80e0af376bbd",
  measurementId: "G-ZDLL4GVWTG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 