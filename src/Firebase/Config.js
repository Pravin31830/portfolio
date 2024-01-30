import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA6Qe59G8FlMhPhnsgFmWNXwiXAJBCUBuA",
  authDomain: "portfolio-82be6.firebaseapp.com",
  projectId: "portfolio-82be6",
  storageBucket: "portfolio-82be6.appspot.com",
  messagingSenderId: "592597622954",
  appId: "1:592597622954:web:269cbe6ae1d83b3ef3b0d3"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export {database};
