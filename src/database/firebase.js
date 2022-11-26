import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyC0Pg2A8L1Aa7Dhi6jlZgpbAHWQNygO6AA",
  authDomain: "barboot-2730a.firebaseapp.com",
  projectId: "barboot-2730a",
  storageBucket: "barboot-2730a.appspot.com",
  messagingSenderId: "546922603519",
  appId: "1:546922603519:web:40d5fca6f5be75ebb3fdca",
});

export const db = getFirestore();
