// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL42yv6ljCK0fGm6yr9koqD5mxAIcOL9M",
  authDomain: "netflix-a7491.firebaseapp.com",
  projectId: "netflix-a7491",
  storageBucket: "netflix-a7491.appspot.com",
  messagingSenderId: "93653882567",
  appId: "1:93653882567:web:1501c1e38cce9980d5d0e2",
  measurementId: "G-11HJT7MKBV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
