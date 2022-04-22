import './App.css';
import { useNavigate } from "react-router-dom";
import './utils/firebase';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { auth } from './utils/firebase';


export default function SendMessage() {
  const [message, setMessage] = useState('');
  const [permit, setPermit] = useState('');
  let navigate = useNavigate();

  const clear = () => {
    setMessage('');
    setPermit('');
  }

  const send = () => {
    const auth = getAuth();

    //send text message
    auth.firestore().collection('messages').add({
      to: '+13854454944',
      body: 'Hello from Firebase!'
    });
  }

  const login = () => {
    navigate('/login');
  }

  return (
    <div>
      <div className="topnav">
        <button onClick={login} className="logout-button">Login</button>
        <h1 className="header-text">Old Farm Parking</h1>
        <div className="dropdown" />
      </div>
      <div className='center'>
        <div className='center'>
        <h1>Message A Car</h1>
        <div >Permit ID</div>
        <input className='glowing-border input' type="number" placeholder="Enter Permit ID" value={permit} onChange={(event) =>{setPermit(event.target.value)}}/>
        <div>Message</div>
        <textarea type="text" className="glowing-border input" placeholder="Message..." value={message} onChange={(event) =>{setMessage(event.target.value)}}/> 
        <div>
        <button onClick={send}>Send</button>
        <button onClick={clear}>Clear</button>
        </div>
      </div>
      </div>

    </div>
  );
}
