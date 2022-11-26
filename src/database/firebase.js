import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


initializeApp({

    apiKey: "AIzaSyAmpi5wXMBQ5f8WMswlGJpfb3oDGc2BlwM",
    authDomain: "boot-bar.firebaseapp.com",
    projectId: "boot-bar",
    storageBucket: "boot-bar.appspot.com",
    messagingSenderId: "51764515720",
    appId: "1:51764515720:web:1f971b1fe2b6e2c674603d"
    
});

export const db = getFirestore();