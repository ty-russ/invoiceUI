import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEFFwk7ttkEmJr9M1bG4HJgguOjdErEwU",
  authDomain: "invoice-base-42aef.firebaseapp.com",
  projectId: "invoice-base-42aef",
  storageBucket: "invoice-base-42aef.appspot.com",
  messagingSenderId: "1057856378852",
  appId: "1:1057856378852:web:c7e602619511598a0f59f1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
