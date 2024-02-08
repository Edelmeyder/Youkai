// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, setPersistence } from "firebase/auth";
import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf4LAJXokM4uSjQNlp1Ar0axPooMswig0",
  authDomain: "youkai-9cc93.firebaseapp.com",
  databaseURL: "https://youkai-9cc93-default-rtdb.firebaseio.com",
  projectId: "youkai-9cc93",
  storageBucket: "youkai-9cc93.appspot.com",
  messagingSenderId: "127909181471",
  appId: "1:127909181471:web:1a2d6e2f8a324587627d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const signIn = signInAnonymously(auth);

const App = () => {
  return (
	<div>
	  <h1>Hello, world!</h1>
	  <p>Welcome to Youkai!</p>
	</div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);