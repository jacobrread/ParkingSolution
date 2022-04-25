import { useState, useEffect } from 'react';
import { getAuth, updateEmail, updatePassword } from 'firebase/auth';
import { Paper } from './common/paper';
import { Input } from './common/input'
import { db } from './utils/firebase';
import { updateDoc } from "firebase/firestore";


export default function Update() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [permitId, setPermitId] = useState('');
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [email, setEmail] = useState(currentUser.email);
  const [emailConfirmation, setEmailConfirmation] = useState(currentUser.email);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [docId, setDocId] = useState('');


  // const getDocId = async () => {
  //   let docId;
  //   db.collection("usersCollection").get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       if(doc.data().auth == auth.currentUser.uid){
  //         docId = doc.id;
  //         setDocId(doc.id);
  //         console.log("in function: " + docId);
  //       }
  //     });
  //   });
  // }

  useEffect(() => {
    db.collection("usersCollection")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if(doc.data().auth == auth.currentUser.uid){
          setPhoneNumber(doc.data().phone);
          setPermitId(doc.data().id);
          setDocId(doc.id);
        }
      });
    });
  },[]);

  const changePhoneNumber = async () => {
    if (phoneNumber === '') {
      setStatusMessage('Password must not be blank');
      return;
    }

    db.collection("usersCollection")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(async function (doc) {  
        if(doc.data().auth == auth.currentUser.uid){
          console.log("in function: " + doc.id);
          console.log(doc)
          await updateDoc(db.collection("usersCollection").doc(doc.id), {phone: phoneNumber});
        }
      }); 
    });
  }

  const changePermitId = async () => {
    if (permitId === '') {
      setStatusMessage('Permit Id must not be blank');
    }
    db.collection("usersCollection")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(async function (doc) {  
        if(doc.data().auth == auth.currentUser.uid){
          console.log("in function: " + doc.id);
          console.log(doc)
          await updateDoc(db.collection("usersCollection").doc(doc.id), {id: permitId});
        }
      }); 
    });
  };

  const changePassword = async () => {
    if (password !== passwordConfirmation || password === '') {
      setStatusMessage('Error updating password');
      return;
    } 

    updatePassword(currentUser, password).then(() => {
      console.log('Password updated');
    }).catch((error) => {
      console.log(error);
      setStatusMessage(error);
    });
  }

  const changeEmail = async () => {
    if (email !== emailConfirmation || email === '') {
      setStatusMessage('Error updating email');
      return;
    }

    updateEmail(currentUser, email).then(() => {
      console.log('Email updated');
    }).catch((error) => {
      setStatusMessage(error);
    }); 
  }


  const deleteProfile = async () => {
  // await getDocId().then(() => {
  //   console.log("1st: " + docId);
  //   console.log("2nd: " + currentUser.uid);
  //   deleteDoc(doc(db, docId, currentUser.uid));
  // });

    currentUser.delete().then(function() {
      console.log("User deleted");
    }).catch(function(error) {
      setStatusMessage(error);
      return;
    });
  }
  
  return (
    <div>
      <div className="card">
        <Paper>
          
          <div className='spacing'>
            <div>Email</div>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div>Confirm Email</div>
            <Input type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
            <div className='action'>
              <button type="button" onClick={changeEmail} className="customButton">
                Update email
              </button>
            </div>
          </div>
          
          <div className='spacing'>
            <div>New Password</div>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div>Confirm Password</div>
            <Input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <div className='action'>
              <button type="button" onClick={changePassword} className="customButton">
                Update password
              </button>
            </div>
          </div>
          
          <div className='spacing'>
            <div>Phone Number</div>
            <Input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <div className='action'>
              <button type="button" onClick={changePhoneNumber} className="customButton">
                Update phone number
              </button>
            </div>
          </div>

          <div className='spacing'>
            <div>Permit ID</div>
            <Input type="text" value={permitId} onChange={(e) => setPermitId(e.target.value)} />
            <div className='action'>
              <button type="button" onClick={changePermitId} className="customButton">
                Update permit id
              </button>
            </div>
          </div>   

        </Paper>
      </div>
      <button type="button" onClick={deleteProfile} className='deleteButton'>Delete Account</button>
      <div>{statusMessage}</div>
    </div>
  );
};