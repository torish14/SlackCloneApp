import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if(!firebase.app.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDPtgGX2peTSXI2kv0T88iTuQlm8ps4IJY",
    authDomain: "slack-clone-app-95304.firebaseapp.com",
    databaseURL: "https://slack-clone-app-95304.firebaseio.com",
    projectId: "slack-clone-app-95304",
    storageBucket: "slack-clone-app-95304.appspot.com",
    messagingSenderId: "69617890975",
    appId: "1:69617890975:web:4460bcaab4e8312d4054aa",
    measurementId: "G-7LRQQ3WN86"
  };
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()
export {
  firebase,
  db
}
