// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3671AQcQnId4dhtBWj2VQ1KrNUUzHiss",
  authDomain: "react-native-login-7236a.firebaseapp.com",
  projectId: "react-native-login-7236a",
  storageBucket: "react-native-login-7236a.appspot.com",
  messagingSenderId: "663497598795",
  appId: "1:663497598795:web:efa5e384ed3306db84aace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)