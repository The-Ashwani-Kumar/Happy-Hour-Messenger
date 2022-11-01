import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAkiye9JGzH70Tv0B3rdtgEOf4vucGUIa4",
    authDomain: "happy-hour-679e5.firebaseapp.com",
    projectId: "happy-hour-679e5",
    storageBucket: "happy-hour-679e5.appspot.com",
    messagingSenderId: "807455138477",
    appId: "1:807455138477:web:ad9d31db99e60f1e005c24"
  }).auth();