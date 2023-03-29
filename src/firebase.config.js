// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvoTueF9S2akbFJoLlT7xUnxKAoyLyC4s",
  authDomain: "my-ecommerce-3cb07.firebaseapp.com",
  projectId: "my-ecommerce-3cb07",
  storageBucket: "my-ecommerce-3cb07.appspot.com",
  messagingSenderId: "302802489893",
  appId: "1:302802489893:web:7d0206d39a75def64325cc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;