import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAF10BxoF1LEfVlj0nR-_lPbqJyIvfeugw",
  authDomain: "fir-project-cb5f9.firebaseapp.com",
  databaseURL: "https://fir-project-cb5f9-default-rtdb.firebaseio.com",
  projectId: "fir-project-cb5f9",
  storageBucket: "fir-project-cb5f9.appspot.com",
  messagingSenderId: "530516365751",
  appId: "1:530516365751:web:7cf9a4e2fc9837d72d5832",
  measurementId: "G-KHFXZ7WE14"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
