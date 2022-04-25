import './App.css';
import { useNavigate } from "react-router-dom";
import './utils/firebase';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged ,signOut } from 'firebase/auth';
import {db} from './utils/firebase';


export default function Home() {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [permit, setPermit] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

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
    navigate('/login');
  }

  const clear = () => {
    setMessage('');
    setPermit('');
  }
  

  async function send(number) {
    try {
      await db.collection('Messages').add({
        to: '+1' + number,
        body: message,
      });
    } catch (error) {
      console.log(error);
    }
    clear();
  };


  const getPhoneForPermit = async () => {
      db.collection("usersCollection")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if(doc.data().id == permit){
              setPhoneNumber(doc.data().phone);
              send(doc.data().phone);
              setWarningMessage('Message sent!');
            }
        });

    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    setWarningMessage("Could not find phone for permit. Enter a valid permit number.");
  }

  const updateInfo = async () => {
    navigate('/update');
  }

  return (
    <div className="Home">
      <div className="topnav">
        <button onClick={updateInfo} className='logout-button'>Update Profile</button>
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
          <button onClick={getPhoneForPermit}>Send</button>
          <button onClick={clear}>Clear</button>
        </div>
        <div>{warningMessage}</div>
      </div>
      </div>

    </div>
  );
}
