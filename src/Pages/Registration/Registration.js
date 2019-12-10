import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import firebase from '../../firebase'

const Registraion = (props) => {
    const [usernameText, setUsernameText] = useState('');
    const [passwordText, setPasswordText] = useState('');
   // const [repeatPasswordText, setRepeatPasswordText] = useState('');
    const [emailText, setEmailText] = useState('');

    const handleRegistration = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(emailText, passwordText)
        .then(user => {
            user.user.updateProfile({displayName: usernameText})
            console.log(user)})
        .catch(function(error) {
            // Handle Errors here.
            console.log(error)
      });
    }
    return (
        <div>
            <h1>Registration</h1>
            <input 
                type="text"
                placeholder="Username" 
                onChange={e => setUsernameText(e.target.value)} />
            <input 
                type="email"
                placeholder="Email"
                onChange={e => setEmailText(e.target.value)} />
            <input
                type="password"
                placeholder="Password"
                onChange={e => setPasswordText(e.target.value)} />
            <input 
                type="password"
                placeholder="Password again" />
            <button onClick={handleRegistration}>Registraion</button>
        </div>
    )
}

export default Registraion
