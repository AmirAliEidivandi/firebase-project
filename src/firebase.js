import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "fir-project-d687b.firebaseapp.com",
    projectId: "fir-project-d687b",
    storageBucket: "fir-project-d687b.appspot.com",
    messagingSenderId: "672177420090",
    appId: "1:672177420090:web:f0124d7cd295b292f5c203",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app)