import React from 'react'
import {useNavigate} from 'react-router'

export default function SignIn() {

    const Navigate=useNavigate();
   
  return (
    <div>
      <input type="text" placeholder='Enter Username...'/>
      <input type="password" placeholder='Enter Password..' />
      <button onClick={()=>{
        Navigate("/Home")
      }}>Sign In</button>
    </div>
  )
}
