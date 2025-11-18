
import { useState } from 'react'
import './App.css'
import {auth,provider,db} from './firebase'
import {collection,addDoc} from 'firebase/firestore'
import { createUserWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
function App() {

  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");

 const handleSignUp=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(()=>alert("SignUp Successfully!!"))
    .catch((error)=>alert(error.message));
 }

  const handleGoogleSignIn=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      const credential=result.user;
      alert("Sign in Successfully!!"+credential.email);
    }).catch(err=>err.message);
  }

  const handleFirestore=()=>{
   addDoc(collection(db,"Todo",{
    "Title":"Get up early",
    "Time":"6"
   })).then(()=>alert("Data added successfully!!")).catch(err=>alert(err.message))
  }

  return (
    <>
      <input type="text" placeholder='enter email' onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="text" placeholder='enter password' onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleGoogleSignIn}>Sign in with google</button>
      <button onClick={handleFirestore}>Add Data</button>
    </>
  )
}

export default App;

