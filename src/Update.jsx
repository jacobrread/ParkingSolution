
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Paper } from './common/paper';
import { Input } from './common/input'
import { useNavigate } from "react-router-dom";
import { db } from './utils/firebase';

export default function Update() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [permitId, setPermitId] = useState('');
  const auth = getAuth();

  useEffect(() => {
    db.collection("usersCollection")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          if(doc.data().auth == auth.currentUser.uid){
            setPhoneNumber(doc.data().phone);
            setPermitId(doc.data().id);
            
          }
      });

  });

  },[]);

  const currentUser = auth.currentUser;
  const [email, setEmail] = useState(currentUser.email);
  const [emailConfirmation, setEmailConfirmation] = useState(currentUser.email);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const update = async () => {
    if (email === '') {
      setErrorMessage('Email cannot be blank');
      return;
    }
    if (email !== emailConfirmation) {
      setErrorMessage('Email does not match.');
      return;
    }
    if (password === '') {
      setErrorMessage('Password cannot be blank');
      return;
    }
    if (password !== passwordConfirmation) {
      setErrorMessage('Password does not match');
      return;
    }
    if (permitId === '') {
      setErrorMessage('Permit ID cannot be blank.');
      return;
    }
    if (phoneNumber === '') {
      setErrorMessage('Phone number cannot be blank.');
      return;
    }

    //TODO: need to figure out how to update
   
  };
  
  return (
    <div className="card">
      <Paper>
        <div>Email</div>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>Confirm Email</div>
        <Input type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
        <div>Password</div>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div>Confirm Password</div>
        <Input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <div>Phone Number</div>
        <Input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <div>Permit ID</div>
        <Input type="text" value={permitId} onChange={(e) => setPermitId(e.target.value)} />

        <div className='action'>
          <button type="button" onClick={update}>
            Update Account
          </button>
        </div>
        <div className="flex">{errorMessage}</div>
      </Paper>
    </div>
  );
};