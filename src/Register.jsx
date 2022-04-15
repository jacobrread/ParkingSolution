import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

    const auth = getAuth();
    const user = createUserWithEmailAndPassword(auth, email, password)
    console.log(user);
  };

  return (
    <div className="flex flex-row justify-center m-4">
      <div className="w-96">
        <div className='page'>
          <div>First Name</div>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <div>Last Name</div>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <div>Email</div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div>Confirm Email</div>
          <input type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
          <div>Password</div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div>Confirm Password</div>
        </div>
        {/* <Paper>
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
          <div className="flex flex-row justify-end mt-2">
            <Button type="button" onClick={signUp}>
              Sign up
            </Button>
          </div>
          <div className="flex">{errorMessage}</div>
        </Paper> */}
      </div>
    </div>
  );
};
