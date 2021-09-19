// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvJVz5fBbzO-F3mol8cH0OJUBVNg7wano",
  authDomain: "studybuddy-1702a.firebaseapp.com",
  projectId: "studybuddy-1702a",
  storageBucket: "studybuddy-1702a.appspot.com",
  messagingSenderId: "372061217605",
  appId: "1:372061217605:web:55107ef31514dd0f03942c"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };