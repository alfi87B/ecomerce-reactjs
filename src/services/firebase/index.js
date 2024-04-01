import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6EOE5M2Y_Ais6trQlxiB8E8zEzogi_kM",
  authDomain: "berca-alfredo-reacts.firebaseapp.com",
  projectId: "berca-alfredo-reacts",
  storageBucket: "berca-alfredo-reacts.appspot.com",
  messagingSenderId: "95317027613",
  appId: "1:95317027613:web:78e9b0ecdbd9c02a0c8ff4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


