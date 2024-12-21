// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApC7RuY8QVed3I4m9TUmt9dyUR1ky30NE",
  authDomain: "b10-a11-61a37.firebaseapp.com",
  projectId: "b10-a11-61a37",
  storageBucket: "b10-a11-61a37.firebasestorage.app",
  messagingSenderId: "988148441339",
  appId: "1:988148441339:web:9da72e88430b964a40105e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
