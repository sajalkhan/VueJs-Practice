import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDehvJjwkiqg_Fp_WeRtZOi46cqgyME-50",
  authDomain: "vuejs-practice-48e71.firebaseapp.com",
  projectId: "vuejs-practice-48e71",
  storageBucket: "vuejs-practice-48e71.appspot.com",
  messagingSenderId: "966178156169",
  appId: "1:966178156169:web:39dee4f4a8037ec5492058",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
