import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEZk135GBzayIC8YBbLZfRi1DQ0TB9g5Y",
    authDomain: "square-inventory-26243.firebaseapp.com",
    projectId: "square-inventory-26243",
    storageBucket: "square-inventory-26243.appspot.com",
    messagingSenderId: "600270856244",
    appId: "1:600270856244:web:e7fa28a03b53739ab96a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


export default auth;