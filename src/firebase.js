import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDeu_h30HO5JNo9qedg1Ybv9Ia3At1NpQ8",
    authDomain: "react-goal-coach-4696c.firebaseapp.com",
    databaseURL: "https://react-goal-coach-4696c.firebaseio.com",
    projectId: "react-goal-coach-4696c",
    storageBucket: "",
    messagingSenderId: "945077311672"
  };


export const firebaseApp =  firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');