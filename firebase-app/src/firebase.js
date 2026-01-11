
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZN-yxqlrISPKl69VKRLukzYglJ6BqAxA",
  authDomain: "fir-app-f7c25.firebaseapp.com",
  projectId: "fir-app-f7c25",
  storageBucket: "fir-app-f7c25.firebasestorage.app",
  messagingSenderId: "1044390592441",
  appId: "1:1044390592441:web:8e5c53052f08d7c1024068",
  measurementId: "G-HCXC4RR2YX"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);