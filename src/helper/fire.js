import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBF6xc8wsShycI2EzcHIEbXGpI4OLd0na8",
    authDomain: "trivera-fefdc.firebaseapp.com",
    projectId: "trivera-fefdc",
    storageBucket: "trivera-fefdc.appspot.com",
    messagingSenderId: "983432686883",
    appId: "1:983432686883:web:dd0307a8061838321f3096"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;