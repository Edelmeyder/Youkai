// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, setPersistence, onAuthStateChanged } from "firebase/auth";
import { DatabaseReference, getDatabase, ref, set, update, remove } from "firebase/database";
import React, { JSXElementConstructor } from 'react';
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
let playerId : string;
let playerRef : DatabaseReference;
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
signInAnonymously(auth).catch((error) => {
	console.log(error.code + ": " + error.message);
}).then(() => {
	window.addEventListener('beforeunload', () => {
		remove(playerRef);
	})
});
const authChange = onAuthStateChanged(auth, (user) => {
	if (user) {
		playerId = user.uid;
		playerRef = ref(database, "players/" + playerId);
		set(playerRef , {
			id: playerId,
			table: ""
		})
	} else {
	}
})


const App = () => {
  return (
	<div>
	  <h1>Hello, world!</h1>
	  <p>Welcome to Youkai!</p>
	  <LogIn/>
	</div>
  );
}

class LogIn extends React.Component <{}, {name: string, table: string}> {
	constructor(props:any) {
		super(props);
		this.state = {
			name: "",
			table: "",
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeTable = this.handleChangeTable.bind(this);
	}
	handleChangeName(event:any) {
		this.setState({
			name: event.target.value,
		});
	}
	handleChangeTable(event:any) {
		this.setState({
			table: event.target.value,
		});
	}
	handleSubmit(event: React.FormEvent<HTMLFormElement>){
		event.preventDefault();
		update(playerRef, {
			name: this.state.name,
			table: this.state.table
		});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<fieldset>
					<legend>Name:</legend>
					<input type="text" name="name" placeholder="John Doe" value={this.state.name} onChange={this.handleChangeName} required/>
				</fieldset>
				<fieldset>
					<legend>Table:</legend>
					<input type="text" name="table" placeholder="Leave empty to create a new table" value={this.state.table} onChange={this.handleChangeTable}/>
				</fieldset>
				<button type="submit">Enter</button>
			</form>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);