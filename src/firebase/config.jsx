// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF10BxoF1LEfVlj0nR-_lPbqJyIvfeugw",
  authDomain: "fir-project-cb5f9.firebaseapp.com",
  databaseURL: "https://fir-project-cb5f9-default-rtdb.firebaseio.com",
  projectId: "fir-project-cb5f9",
  storageBucket: "fir-project-cb5f9.firebasestorage.app",
  messagingSenderId: "530516365751",
  appId: "1:530516365751:web:7cf9a4e2fc9837d72d5832",
  measurementId: "G-KHFXZ7WE14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
export {app , auth}