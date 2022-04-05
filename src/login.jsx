import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword ,connectAuthEmulator } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuQIQ6TraMrTBi8MVsuyoszX_ocDb54Gg",
  authDomain: "parking-solution-3dbd4.firebaseapp.com",
  projectId: "parking-solution-3dbd4",
  storageBucket: "parking-solution-3dbd4.appspot.com",
  messagingSenderId: "490731218642",
  appId: "1:490731218642:web:435ebe8e27700a99266f0b",
  measurementId: "G-M21TC885FE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
connectAuthEmulator(auth, 'http://localhost:9099');

const loginEmailPassword = async () => {
  const email = txtEmail.value;
  const password = txtPassword.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user);
  } catch(error) {
    console.log(error);
    // put method to log error message on login screen here
  }
}

const createAccount = async () => {
  const email = txtEmail.value;
  const password = txtPassword.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user);
  } catch(error) {
    console.log(error);
    // put method to log error message on login screen here
  }
}