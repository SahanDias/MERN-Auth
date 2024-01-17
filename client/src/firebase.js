// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-mern-diaz.firebaseapp.com",
  projectId: "auth-mern-diaz",
  storageBucket: "auth-mern-diaz.appspot.com",
  messagingSenderId: "214236890631",
  appId: "1:214236890631:web:3e94c34255800886f50ca2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);