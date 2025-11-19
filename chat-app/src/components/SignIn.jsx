import React, { useEffect, useState } from 'react'
import {signin,fetchUser} from '../slices/userSlices'
import {useDispatch,useSelector} from 'react-redux'





export default function SignIn() {


    const dispatch=useDispatch();
    useEffect(()=>{
  dispatch(fetchUser());
},[])

   const {users}= useSelector((state)=>state.user)
    const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


  return (
    <div>
        <div>
            {
                users.map((user,i)=><h2 key={i}>{user.email}</h2>)
            }
        </div>
      <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={()=>{
        dispatch(signin({email,password}))
      }}>Sign In</button>
    </div>
  )
}

