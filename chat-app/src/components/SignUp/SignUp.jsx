
import React, { useState } from 'react'
import {signUp} from '../../slices/userSlices'
import {useDispatch,useSelector} from 'react-redux'
import '../SignUp/SignUp.css'

export default function SignUp() {

    const dispatch=useDispatch();
    const {users}=useSelector(state=>state.user)
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");

  return (
    <div className="auth-wrapper"> 
        <div className="auth-card">
            
            <h2 className="auth-title">Create Account</h2> 

            <div>
           
                {
                    users.map((user,i)=><h2 key={i} style={{color: '#E2E8F0', fontSize: '14px', textAlign: 'center'}}>{user.email}</h2>)
                }
            </div>

            <input 
                type="text" 
                placeholder='Enter Email' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                className="auth-input" 
            />
            <input 
                type="text" 
                placeholder='Enter Password'
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                className="auth-input" 
            />
            
            <button 
                onClick={()=>dispatch(signUp({email,password}))}
                className="auth-btn" 
            >
                Sign Up
            </button>

            
            <div className="auth-nav-link">
                <span>Already have an account?</span>
                <a href="/">Log In</a> 
            </div>
        </div>
    </div>
  )
}