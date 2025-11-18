import React, { useState } from 'react'
import {signin} from '../slices/userSlices'
import {useDispatch,useSelector} from 'react-redux'

const dispatch=useDispatch();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

export default function SignIn() {
  return (
    <div>
      <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={()=>{
        dispatch(signin({email,password}))
      }}>Sign In</button>
    </div>
  )
}

