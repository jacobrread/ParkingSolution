import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './utils/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate('/');
    }).catch((error) => {
      setErrorMessage("There was a problem logging in. Please try again.");
    });

    // TODO: why does it send you to the home page when you click enter? but not the sign in button?
  }

  const register = () => {
    navigate('/register');
  }

  const sendMessage = () => {
    navigate('/sendMessage');
  }

  return (
    <div>
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
            <button type="button" onClick={register}>Register</button>
            <button type="button" onClick={signIn}>Sign in</button>
          </div>

          <p>{errorMessage}</p>
        
        </form>
      </div>
      <div className='login-form'>
        <div className='action'>
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
}
