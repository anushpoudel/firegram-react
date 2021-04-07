import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8OhRBvKhXhwYtNgOeUPJLb_FXdxmXnJo",
  authDomain: "firegram-react-aa8fa.firebaseapp.com",
  projectId: "firegram-react-aa8fa",
  storageBucket: "firegram-react-aa8fa.appspot.com",
  messagingSenderId: "925592814370",
  appId: "1:925592814370:web:2b986b309e2a6a07ef5b7b",
  measurementId: "G-1353SCH64W",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
