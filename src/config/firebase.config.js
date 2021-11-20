// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection } from "firebase/firestore";

import { firebaseConfig } from "../local.env";
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const todosRef = collection(db, "todos");
