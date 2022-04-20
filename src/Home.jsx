import './App.css';
import { Link, NavigationType, useNavigate } from "react-router-dom";
import './utils/firebase';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged ,signOut } from 'firebase/auth';


function Home() {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [permit, setPermit] = useState('');

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

  let navigate = useNavigate();

  const logout = () => {
    const auth = getAuth();
    signOut(auth);
    navigate('login');
  }

  const clear = () => {
    setMessage('');
    setPermit('');
  }

  const send = () => {
    //send text message
  }

  return (
    <div className="Home">
      <div className="topnav">
        <div className="dropdown">
        </div>
        <h1 className="header-text">Welcome { user && user.email }</h1>
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
      <div className='center'>
        <div className='center'>
        <h1>Message A Car</h1>
        <div >Permit ID</div>
        <input className='glowing-border input' type="number" placeholder="Enter Permit ID" value={permit} onChange={(event) =>{setPermit(event.target.value)}}/>
        <div>Message</div>
        <textarea type="text" className="glowing-border input" placeholder="Message..." value={message} onChange={(event) =>{setMessage(event.target.value)}}/> 
        <div>
        <button className="">Send</button>
        <button onClick={clear}>Clear</button>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Home;


// For sending Text Messages

// hit the endpoint on frontend to use use Firebase functions
// use firebase functions to interact with twillio
// if we want we can then use twillio to send messages back to the sender by doing the reverse order

// cs 5250 and cs 52605