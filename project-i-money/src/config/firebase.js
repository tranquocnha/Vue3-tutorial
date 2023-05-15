import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqMY_e12OpvjZGQp26F8n8xFaupnK5WWg",
  authDomain: "filebase-f9219.firebaseapp.com",
  projectId: "filebase-f9219",
  storageBucket: "filebase-f9219.appspot.com",
  messagingSenderId: "31298982916",
  appId: "1:31298982916:web:a45673ed3ec6cc4e619151",
  measurementId: "G-B0FDWTSGKE",
};

const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);

// Get a list of cities from your database
export { projectFirestore, projectAuth };
