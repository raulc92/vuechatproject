import firebase from 'firebase'
import firestore from 'firebase/firestore'


let firebaseConfig = {
    apiKey: "AIzaSyCR8PxGpVODTYgS52KOCiwz0LZyLAdUL5A",
    authDomain: "real-time-chat-eef38.firebaseapp.com",
    databaseURL: "https://real-time-chat-eef38.firebaseio.com",
    projectId: "real-time-chat-eef38",
    storageBucket: "real-time-chat-eef38.appspot.com",
    messagingSenderId: "1020718796195",
    appId: "1:1020718796195:web:172d29d3d896010a8e5e16",
    measurementId: "G-ZB9KBXLRK7"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore.settings({timestampsInSnapshots: true})
  firebase.analytics();

  export default firebaseApp.firestore()