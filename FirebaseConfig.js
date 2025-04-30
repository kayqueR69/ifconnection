// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { variables } from "./Venv";

const firebaseConfig = {
  apiKey: variables.API_KEY,
  authDomain: variables.AUTH_DOMAIN,
  projectId: variables.PROJECT_ID,
  storageBucket: variables.STORAGE_BUCKET,
  messagingSenderId: variables.MESSAGING_SENDER_ID,
  appId: variables.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore()

const teste = "teste"

export { app , db, auth}