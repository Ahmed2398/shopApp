// new V9 imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// Config 
const firebaseConfig = {
    apiKey: "AIzaSyBGgKbnpnNQt6kqt9-Mck7QLoN45TQNhec",
    authDomain: "ecommerce-9c4bc.firebaseapp.com",
    databaseURL: "https://ecommerce-9c4bc-default-rtdb.firebaseio.com",
    projectId: "ecommerce-9c4bc",
    storageBucket: "ecommerce-9c4bc.appspot.com",
    messagingSenderId: "54387911348",
    appId: "1:54387911348:web:b5b441ced9d3f28807c5e1"
};
  
/// init firebase
firebase.initializeApp(firebaseConfig)

// init services
// asm DB (projectFirestore)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorge = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth,  projectFirestore,  projectStorge, timestamp }