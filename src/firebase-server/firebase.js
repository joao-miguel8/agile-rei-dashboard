import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnmKkHNtM3kWo7CnAFFv4MRfnmG_vozRs",
  authDomain: "agile-rei-dashboard.firebaseapp.com",
  projectId: "agile-rei-dashboard",
  storageBucket: "agile-rei-dashboard.appspot.com",
  messagingSenderId: "851427261183",
  appId: "1:851427261183:web:b467bc51ddd8057a8a2aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

