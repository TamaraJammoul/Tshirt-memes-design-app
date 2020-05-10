import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB5h-rTBezUGVOwyg41K692fnhD2qBaLNA",
  authDomain: "mytshirtapp-311c5.firebaseapp.com",
  databaseURL: "https://mytshirtapp-311c5.firebaseio.com",
  projectId: "mytshirtapp-311c5",
  storageBucket: "mytshirtapp-311c5.appspot.com",
  messagingSenderId: "545981564081",
  appId: "1:545981564081:web:e3b01dc8c0456b58cfce90",
  measurementId: "G-0P4961NXPX",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
