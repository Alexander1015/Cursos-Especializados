import firebase from "firebase";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeiZ8Z0fyYN35_DFolR3wWZAjFkwPeOME",
  authDomain: "react-native-w-firebase.firebaseapp.com",
  projectId: "react-native-w-firebase",
  storageBucket: "react-native-w-firebase.appspot.com",
  messagingSenderId: "921331518831",
  appId: "1:921331518831:web:e84707538a150a4ec3ec9a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
    firebase,
    db,
}