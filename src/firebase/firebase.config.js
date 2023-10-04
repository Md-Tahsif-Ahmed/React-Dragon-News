// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWYIQ3q0vWxGNLDgMozpEvCEgVbG7wRRw",
  authDomain: "react-dragon-news-c3e47.firebaseapp.com",
  projectId: "react-dragon-news-c3e47",
  storageBucket: "react-dragon-news-c3e47.appspot.com",
  messagingSenderId: "572672864821",
  appId: "1:572672864821:web:fbfd30c55b2e280fadf77c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;