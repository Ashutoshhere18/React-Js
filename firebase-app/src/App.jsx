
import { useState } from 'react'
import './App.css'
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
function App() {

  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");

 const handleSignUp=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(()=>alert("SignUp Successfully!!"))
    .catch((error)=>alert(error.message));
 }

  return (
    <>
      <input type="text" placeholder='enter email' onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="text" placeholder='enter password' onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={handleSignUp}>Sign up</button>
    </>
  )
}

export default App;

