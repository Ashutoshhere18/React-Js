import React, { useRef } from 'react'


export default function SignIn() {
    const emailRef=useRef("");
    const passwordRef=useRef("");

   const HandleInput=()=>{
     const email=emailRef.current.value;
    const password=passwordRef.current.value;

    localStorage.setItem("user",JSON.stringify({"email":email,"password":password}));

   }
  return (
    <div>
      <input type="email" ref={emailRef} />
      <input type="password" ref={passwordRef} />
      <button onClick={HandleInput}> Sign In</button>
    </div>
  )
}
