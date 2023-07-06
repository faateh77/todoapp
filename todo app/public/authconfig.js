
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfbclcVGRDL0xPVDxD7DxQc-DudUfttl8",
  authDomain: "todoapp-46c8f.firebaseapp.com",
  projectId: "todoapp-46c8f",
  storageBucket: "todoapp-46c8f.appspot.com",
  messagingSenderId: "178957092402",
  appId: "1:178957092402:web:e162cbd265bae77ed81e2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
 const auth = getAuth(app);
 export{
    database,
    ref,
    set,
    push,
    onValue,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
 };