import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAg8226c88-GCny4sAt2Rgs8iDUUlTcXXo",
  authDomain: "swinter-500.firebaseapp.com",
  projectId: "swinter-500",
  storageBucket: "swinter-500.appspot.com",
  messagingSenderId: "1077638961469",
  appId: "1:1077638961469:web:377a5d4807a20621494d54"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);


export { auth, googleProvider, db }