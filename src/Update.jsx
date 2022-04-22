import './App.css';
import { useNavigate } from "react-router-dom";
import './utils/firebase';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged ,signOut } from 'firebase/auth';


export default function Update() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    
     if (!user) {
       navigate('/login');
     } else {
      setUser(user)
     }
    });
  }, []);


  const logout = () => {
    const auth = getAuth();
    signOut(auth);
    navigate('login');
  }

  const sendMessage = () => {
    navigate('/sendMessage');
  }

  return (
    <div className="Home">
      <div className="topnav">
        <button onClick={sendMessage}>Send Message</button>
        <h1 className="header-text">Welcome { user && user.email }</h1>
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
      <div className='center'>
        <p>Put update stuff here</p>
      </div>

    </div>
  );
}
