import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './utils/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log('signed in');
      navigate('/');
    }).catch((error) => {
      console.log("error was caught");
      setErrorMessage("There was a problem logging in. Please try again.");
    });

    // TODO: why does it send you to the home page when you click enter? but not the sign in button?
  }

  const register = () => {
    navigate('/');
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
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="action">
          <button onClick={register}>Register</button>
          <button onClick={signIn}>Sign in</button>
          <button onClick={logout}>Logout</button>

        </div>
          <p>{errorMessage}</p>
       
      </form>
    </div>
  );
}
