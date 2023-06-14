// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZnlWQMQ7vOOAnM8hsQ8n_Jc9Tmdv-yfY",
  authDomain: "website-db-3464e.firebaseapp.com",
  projectId: "website-db-3464e",
  storageBucket: "website-db-3464e.appspot.com",
  messagingSenderId: "573871044707",
  appId: "1:573871044707:web:64c82d1f1400c79e40e056"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
