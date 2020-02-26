import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyCMnZFjIoZ3YRuSlogpLuBSt7CCS3wl8WI",
    authDomain: "todolist-app-6c8a1.firebaseapp.com",
    databaseURL: "https://todolist-app-6c8a1.firebaseio.com",
    projectId: "todolist-app-6c8a1",
    storageBucket: "todolist-app-6c8a1.appspot.com",
    messagingSenderId: "269900790201",
    appId: "1:269900790201:web:6dea9c926e250d13fa1e68"
    
})

export {firebaseConfig as firebase}