import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "fir-project-d687b.firebaseapp.com",
    projectId: "fir-project-d687b",
    storageBucket: "fir-project-d687b.appspot.com",
    messagingSenderId: "672177420090",
    appId: "1:672177420090:web:f0124d7cd295b292f5c203",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
