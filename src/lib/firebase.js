import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAjgJRgWzoEMUTSdjTWY5Ys7pIttvVybPE",
    authDomain: "mechano2028.firebaseapp.com",
    projectId: "mechano2028",
    storageBucket: "mechano2028.firebasestorage.app",
    messagingSenderId: "113191896817",
    appId: "1:113191896817:web:e1e404fea1a345759f0b50"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
