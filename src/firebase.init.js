import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.api_Key,
    authDomain: process.env.auth_Domain,
    projectId: process.env.project_Id,
    storageBucket: process.env.storage_Bucket,
    messagingSenderId: process.env.messaging_Sender_Id,
    appId: process.env.app_Id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


export default auth;