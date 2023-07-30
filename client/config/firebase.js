import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4lvUo11br9PdrI4daykwLK0FuKEeG-Ec",
  authDomain: "gomifood-156f5.firebaseapp.com",
  projectId: "gomifood-156f5",
  storageBucket: "gomifood-156f5.appspot.com",
  messagingSenderId: "407405310084",
  appId: "1:407405310084:web:69436cb77856cc84f112d1",
  measurementId: "G-XLM8F6NND3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);