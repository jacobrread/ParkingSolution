import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './utils/firebase';

export default function Login() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged(setUser);
  }, []);

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password);
  }

  const register = () => {
    const auth = getAuth();
    const user = createUserWithEmailAndPassword(auth, email, password)
    console.log(user);
  }

  const logout = () => {
    const auth = getAuth();
    signOut(auth);
  }

  return (
    <div className="login-form">
      <form>
        <h1>Login</h1>
        <div className="content">
          <div className="input-field">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" autocomplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="action">
          <Link to="/register" onClick={login} className="register">Register</Link>
          <Link to="/" onClick={register} className="signin">Sign In</Link>
        </div>
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      </form>
    </div>
  );
}

// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword ,connectAuthEmulator } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCuQIQ6TraMrTBi8MVsuyoszX_ocDb54Gg",
//   authDomain: "parking-solution-3dbd4.firebaseapp.com",
//   projectId: "parking-solution-3dbd4",
//   storageBucket: "parking-solution-3dbd4.appspot.com",
//   messagingSenderId: "490731218642",
//   appId: "1:490731218642:web:435ebe8e27700a99266f0b",
//   measurementId: "G-M21TC885FE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth();
// connectAuthEmulator(auth, 'http://localhost:9099');

// const loginEmailPassword = async () => {
//   const email = txtEmail.value;
//   const password = txtPassword.value;

//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password)
//     console.log(userCredential.user);
//   } catch(error) {
//     console.log(error);
//     // put method to log error message on login screen here
//   }
// }

// const createAccount = async () => {
//   const email = txtEmail.value;
//   const password = txtPassword.value;

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password)
//     console.log(userCredential.user);
//   } catch(error) {
//     console.log(error);
//     // put method to log error message on login screen here
//   }
// }

/********************************************************* */

// export const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const goToSignUp = () => {
//     navigate('/signup');
//   };

//   const signIn = async () => {
//     // const res = await fetch('/sessions', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify({
//     //     email,
//     //     password,
//     //   }),
//     // });
//     // if (res.status === 201) {
//     //   const result = await res.json();
//     //   // setAuthToken(result.token);
//     //   navigate('/');
//     // } else {
//     //   console.error('An issue occurred when logging in.');
//     // }
//     navigate('/');
//   };

//   return (
//     <>
//       <div class="login-form">
//       <form>
//         <h1>Login</h1>
//         <div class="content">
//           <div class="input-field">
//             <input type="email" placeholder="Email" autocomplete="nope" />
//           </div>
//           <div class="input-field">
//             <input type="password" placeholder="Password" autocomplete="new-password" />
//           </div>
//         </div>
//         <div class="action">
//           <button onClick={goToSignUp}>Register</button>
//           <button onClick={signIn}>Sign in</button>
//         </div>
//       </form>
//     </div>
//     </>
//   );
// };
