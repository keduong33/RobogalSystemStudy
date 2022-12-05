// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf1pFf7qNB0AS80e_iUVyHY37eYncRA7c",
  authDomain: "test-app-961ac.firebaseapp.com",
  projectId: "test-app-961ac",
  storageBucket: "test-app-961ac.appspot.com",
  messagingSenderId: "551104753371",
  appId: "1:551104753371:web:23f05a1766cd668dca26fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
