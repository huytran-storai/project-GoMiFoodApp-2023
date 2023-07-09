// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbl18pW4uXQoPfUJUPmrlQmZmRHd-n2R4",
  authDomain: "reactnative-login-19c77.firebaseapp.com",
  projectId: "reactnative-login-19c77",
  storageBucket: "reactnative-login-19c77.appspot.com",
  messagingSenderId: "938031671320",
  appId: "1:938031671320:web:d6be0905457e679f5efb6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);