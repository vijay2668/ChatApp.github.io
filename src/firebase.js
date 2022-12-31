import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCroXx9amVAxR3i3yTaLy_Of7QPytYGyJQ",
  authDomain: "chatapp-c26d5.firebaseapp.com",
  projectId: "chatapp-c26d5",
  storageBucket: "chatapp-c26d5.appspot.com",
  messagingSenderId: "894736280061",
  appId: "1:894736280061:web:428a43402f8da57ec7d194"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
