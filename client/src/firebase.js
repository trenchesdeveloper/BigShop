import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVaD8zdDbDlBryu8FF4WABfHzih-hcrs8",
  authDomain: "bigshop-9e8a9.firebaseapp.com",
  projectId: "bigshop-9e8a9",
  storageBucket: "bigshop-9e8a9.appspot.com",
  messagingSenderId: "264048827468",
  appId: "1:264048827468:web:acb607e0a0e9ed3225a8e9",
};

// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
