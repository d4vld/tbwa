
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { addDoc, getFirestore, collection } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA82Fn-AqBJo1DuUxaYLjlORslZLYFg-C0",
	authDomain: "tbwa-edges.firebaseapp.com",
	databaseURL: "https://tbwa-edges-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "tbwa-edges",
	storageBucket: "tbwa-edges.appspot.com",
	messagingSenderId: "963139093789",
	appId: "1:963139093789:web:4646ba314d25823bdc8df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (name, lastname, email, empresa, cargo, telefono) => 
addDoc(collection(db, 'registro'), {name, lastname, email, empresa, cargo, telefono});




