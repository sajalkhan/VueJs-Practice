import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDehvJjwkiqg_Fp_WeRtZOi46cqgyME-50",
  authDomain: "vuejs-practice-48e71.firebaseapp.com",
  projectId: "vuejs-practice-48e71",
  storageBucket: "vuejs-practice-48e71.appspot.com",
  messagingSenderId: "966178156169",
  appId: "1:966178156169:web:39dee4f4a8037ec5492058",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;
