import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAq0g47DtIt-H61IAUe2rk8BcUp0exNRbg",
    authDomain: "facebook-messenger-clone-b3543.firebaseapp.com",
    projectId: "facebook-messenger-clone-b3543",
    storageBucket: "facebook-messenger-clone-b3543.appspot.com",
    messagingSenderId: "475859962154",
    appId: "1:475859962154:web:f9cb5da821812c517cf653",
    measurementId: "G-202BK79LW8"
});

const db = firebaseApp.firestore();
export default db;

