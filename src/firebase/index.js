import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore";
import { 
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword
 } from "firebase/auth"

 
const firebaseConfig = {
  apiKey: "AIzaSyBlH56mSY9SkISO-3IwTmGZBOxrQjp5jlc",
  authDomain: "reservation-de-logement-ab54d.firebaseapp.com",
  projectId: "reservation-de-logement-ab54d",
  storageBucket: "reservation-de-logement-ab54d.appspot.com",
  messagingSenderId: "364173680714",
  appId: "1:364173680714:web:7f13a9cdbf55cec900c6b3",
  measurementId: "G-311C7L6FTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);
// connectAuthEmulator(auth,"http://localhost:8080");


export{
    db,
    auth
}
