import React, { useEffect, useState } from 'react'
import {signin,fetchUser} from '../slices/userSlices'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router'

export default function SignIn() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
  dispatch(fetchUser());
},[])

  
    const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


  return (
    <div>
        
      <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={()=>{
        dispatch(signin({email,password}))
        navigate('/home');
      }}>Sign In</button>
    </div>
  )
}

