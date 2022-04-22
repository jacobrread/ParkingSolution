import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Paper } from './common/paper';
import { Input } from './common/input'
import { useNavigate } from "react-router-dom";
import { db } from './utils/firebase';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [permitId, setPermitId] = useState('');
  const navigate = useNavigate();

  const signUp = async () => {
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
    if (firstName === '') {
      setErrorMessage('First name cannot be blank.');
      return;
    }
    if (lastName === '') {
      setErrorMessage('Last name cannot be blank.');
      return;
    }

    // TODO: give user a warning that password must be a certain length

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      const doc = await db.collection('usersCollection').add({
        
        id: permitId,
        phone: phoneNumber,
        auth: auth.currentUser.uid,
      });
      console.log("original: " + doc.id);
      doc.set = auth.currentUser.uid;
      console.log("new" + doc.id);

      setTimeout(() => {
        navigate('/');
      }, 1500);

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="card">
      <Paper>
        <div>First Name</div>
        <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <div>Last Name</div>
        <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
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
          <button type="button" onClick={signUp}>
            Sign up
          </button>
        </div>
        <div className="flex">{errorMessage}</div>
      </Paper>
    </div>
  );
};
