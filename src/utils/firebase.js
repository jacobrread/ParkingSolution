// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuQIQ6TraMrTBi8MVsuyoszX_ocDb54Gg",
  authDomain: "parking-solution-3dbd4.firebaseapp.com",
  projectId: "parking-solution-3dbd4",
  storageBucket: "parking-solution-3dbd4.appspot.com",
  messagingSenderId: "490731218642",
  appId: "1:490731218642:web:435ebe8e27700a99266f0b"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };