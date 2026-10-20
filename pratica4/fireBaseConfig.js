import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMESdyPM2T_KXbePHuHf8cFGtBfjF5VPw",
  authDomain: "db-devmob.firebaseapp.com",
  projectId: "db-devmob",
  storageBucket: "db-devmob.firebasestorage.app",
  messagingSenderId: "112623432397",
  appId: "1:112623432397:web:01892d9ccbf99541b36f84",
  measurementId: "G-RZQ3P31FEX"
};

if (!firebase.apps.length) {
 firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };