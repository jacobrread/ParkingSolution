import './App.css';
import { Link, useNavigate } from "react-router-dom";
import './utils/firebase';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged ,signOut } from 'firebase/auth';


function Home() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
     setUser(user)
    });
  }, []);

  let navigate = useNavigate();

  const logout = () => {
    const auth = getAuth();
    signOut(auth);
    navigate('login');
  }

  return (
    <div className="Home">
      <div className="topnav">
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <Link to="/">My Account</Link>
            <Link to="/">Get Qr Code</Link>
            <Link to="/">Help</Link>
            <Link to="login">Login</Link>
          </div>
        </div>
        <h1 className="header-text">Welcome { user }</h1>
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
      <div className='center'>
        <div className='center'>
        <h1>Message A Car</h1>
        <div>Permit ID</div>
        <input type="number" placeholder="Enter Permit ID" />
        <div>Message</div>
        <textarea type="text" className="glowing-border input" placeholder="Message..."/> 
        <div>
        <button className="">Send</button>
        <button>Clear</button>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Home;
