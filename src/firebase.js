import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCf8VE24j5DXIHGVLrDl-aYlinT8ckt3Lw",
    authDomain: "pincer-7a460.firebaseapp.com",
    databaseURL: "https://pincer-7a460.firebaseio.com",
    projectId: "pincer-7a460",
    storageBucket: "pincer-7a460.appspot.com",
    messagingSenderId: "7450428512",
    appId: "1:7450428512:web:9e0b4d6654cb4c1ba7ef05",
    measurementId: "G-JBFVXP5BFD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
