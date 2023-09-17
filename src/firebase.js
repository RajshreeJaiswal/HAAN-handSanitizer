// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCsLfOcGiClnb-Mpu2fYkJjnQNqYv_16lk",
  authDomain: "autentication-f5b63.firebaseapp.com",
  projectId: "autentication-f5b63",
  storageBucket: "autentication-f5b63.appspot.com",
  messagingSenderId: "332014190437",
  appId: "1:332014190437:web:0eb6d96838fb7a2069ab8c",
  measurementId: "G-J8W6BK640N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export{app,auth};
