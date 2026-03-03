import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyBM-gkBGSWu0YtAV4ZvlxMYTWJUWmhyuWA",
  authDomain: "appigreja-a0490.firebaseapp.com",
  databaseURL: "https://appigreja-a0490-default-rtdb.firebaseio.com",
  projectId: "appigreja-a0490",
  storageBucket: "appigreja-a0490.firebasestorage.app",
  messagingSenderId: "704830539471",
  appId: "1:704830539471:web:8cd25fe3356b574baa99ba"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const storage = getStorage(app);