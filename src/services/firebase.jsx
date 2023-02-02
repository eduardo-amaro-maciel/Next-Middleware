import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBkPP3LiUndHLq7yF0uIINXmq2pt6KZFmA",
  authDomain: "teste-373623.firebaseapp.com",
  projectId: "teste-373623",
  storageBucket: "teste-373623.appspot.com",
  messagingSenderId: "515199269205",
  appId: "1:515199269205:web:796f6697582d0cf81c17dc",
  measurementId: "G-VEYS2VGNM8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);