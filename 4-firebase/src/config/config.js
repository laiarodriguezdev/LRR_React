// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVHPC2__BnMZfEzhSnIAIaWS-iPXLo1HU",
  authDomain: "fir-tmdb-1d087.firebaseapp.com",
  projectId: "fir-tmdb-1d087",
  storageBucket: "fir-tmdb-1d087.appspot.com",
  messagingSenderId: "522605871916",
  appId: "1:522605871916:web:f8ef9bb9eec19a632da289",
  measurementId: "G-LQ9FW151WR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };