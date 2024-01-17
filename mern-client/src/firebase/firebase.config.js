// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGrR3IjVGB9hJwKWN-3M8HlFB76CFTxjA",
    authDomain: "mern-book-inventory-418ec.firebaseapp.com",
    projectId: "mern-book-inventory-418ec",
    storageBucket: "mern-book-inventory-418ec.appspot.com",
    messagingSenderId: "877462217229",
    appId: "1:877462217229:web:8b8ab30fdc7fe97983ab44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;