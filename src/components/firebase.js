import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBZRenbBbUcf2ZebdwkHfu1_dl6En0MnA",
  authDomain: "whatsapp-clone-a133d.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-a133d.firebaseio.com",
  projectId: "whatsapp-clone-a133d",
  storageBucket: "whatsapp-clone-a133d.appspot.com",
  messagingSenderId: "1087962616362",
  appId: "1:1087962616362:web:d472f1cc48a86faff6a953",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
