
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ecommerce-react-bc018.firebaseapp.com",
  projectId: "ecommerce-react-bc018",
  storageBucket: "ecommerce-react-bc018.appspot.com",
  messagingSenderId: "947531109704",
  appId: "1:947531109704:web:7d00fc8b9ba50388094f7d"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
