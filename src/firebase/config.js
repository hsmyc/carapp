import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD0Ut5fK6h5x_CrHPlVNVZU17FwS09k8fM",
  authDomain: "droid-pro.firebaseapp.com",
  projectId: "droid-pro",
  storageBucket: "droid-pro.appspot.com",
  messagingSenderId: "83972013414",
  appId: "1:83972013414:web:66e66936095128b8a45ca7",
  measurementId: "G-L35CM7PKFE",
};
// initialize the app
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
