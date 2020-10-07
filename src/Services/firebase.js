impor React from 'react'
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAFCDipviwaftdCGD5BiAt1Qqdn73htv7s",
    authDomain: "no-borders-fdd10.firebaseapp.com",
    databaseURL: "https://no-borders-fdd10.firebaseio.com",
    projectId: "no-borders-fdd10",
    storageBucket: "no-borders-fdd10.appspot.com",
    messagingSenderId: "438249227601",
    appId: "1:438249227601:web:b8347ccafd86a7add53f70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;