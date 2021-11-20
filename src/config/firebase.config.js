// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqYvd6Cbd7As-9svmdZeRfM3gnkkbQWeM",
  authDomain: "test-todo-f5cd9.firebaseapp.com",
  databaseURL: "https://test-todo-f5cd9-default-rtdb.firebaseio.com",
  projectId: "test-todo-f5cd9",
  storageBucket: "test-todo-f5cd9.appspot.com",
  messagingSenderId: "562149741201",
  appId: "1:562149741201:web:bc3aad3dd1120493f8a530",
  measurementId: "G-DYEZ3QXPEZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const todosRef = collection(db, "todos");
