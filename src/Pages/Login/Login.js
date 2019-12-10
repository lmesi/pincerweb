import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import firebase from '../../firebase'

const Login = (props) => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const handleLogin = ()=> {
        firebase
            .auth()
            .signInWithEmailAndPassword(emailText, passwordText)
            .then(user => {
                console.log(user.user.displayName)
            })
            .catch(function(error) {
                console.log(error.message)
            });
    }
    return (
        <div>
            <h1>Login</h1>
            <input 
                type="email" 
                placeholder="Email"
                onChange={e => setEmailText(e.target.value)} />
            <input 
                type="password" 
                placeholder="Password"
                onChange={e => setPasswordText(e.target.value)} />
            <button
                onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}

export default Login
