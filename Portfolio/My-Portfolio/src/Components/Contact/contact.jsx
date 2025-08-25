import React, { useRef, useState } from "react";
import "./Contact.css";

export default function Contact() {
 
  const [user,Setuser]=useState({
    name:"",
    email:"",
    phone:"",
    idea:""
  })

  const handleSubmit = () => {
   console.log(user);
  };

 
  const handleInput=(e)=>{
     const key=e.target.name;
     const value=e.target.value;

     const temp={...user};
     temp[key]=value;

     Setuser(temp);
  }
  return (
    <div className="contact-div">
      <div className="contact">
        <h2>Contact Form</h2>
        <input type="text"  value={user.name} onChange={handleInput} placeholder="Enter your name" />
        <input type="email"  value={user.email} onChange={handleInput}  placeholder="example@mail.com"  />
        <input type="tel" value={user.phone} onChange={handleInput} placeholder="Enter your mobile no."  />
        <input type="text"  value={user.idea} onChange={handleInput}  placeholder="Enter your idea.." />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="display">
        <p>Name :{user.name}</p>
        <p> Email:{user.email}</p>
        <p>Phone No: {user.phone}</p>
        <p>Idea:{user.idea}</p>
      </div>
    </div>
  );
}
