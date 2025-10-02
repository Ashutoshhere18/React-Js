import React, { useEffect, useState } from 'react'
import SignIn from './SignIn';

export default function PrivateRoute({children}) {
    const [user,Setuser]=useState({});
    const getUser=()=>{
        const res=JSON.parse(localStorage.getItem("user"));
        Setuser(res);
    }
    useEffect(()=>{getUser()},[]);
     
    if(!user){
          return <SignIn/>
    }
      return children;

}
