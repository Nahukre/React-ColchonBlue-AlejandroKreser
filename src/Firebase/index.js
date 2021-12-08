import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0uFw_y6JMPv-f87483B4-X1IirBFGIkM",
  authDomain: "colchon-blue.firebaseapp.com",
  projectId: "colchon-blue",
  storageBucket: "colchon-blue.appspot.com",
  messagingSenderId: "742242936756",
  appId: "1:742242936756:web:a0252438e46dd48a64b4e1",
  measurementId: "G-4LBMC2KVYK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const getFirebase = () => app;

export { getFirestore, db };

