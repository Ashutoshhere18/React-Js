import React from 'react'
import {replace, useNavigate} from 'react-router'
export default function LoginPage() {
    const navigate=useNavigate();
  return (
    <div>
      <h1>This is login page</h1>
      <button onClick={()=>{
        navigate("/About",{replace:true});
      }}>Submit</button>
    </div>
  )
}
