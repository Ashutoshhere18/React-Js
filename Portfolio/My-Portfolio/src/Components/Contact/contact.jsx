import React, { useRef } from "react";
import "./Contact.css";

export default function Contact() {
  const email = useRef(null);
  const phone = useRef(null);

  const handleSubmit = () => {
    console.log("Email:", email.current.value);
    console.log("Phone:", phone.current.value);
  };

  return (
    <div className="contact-div">
      <div className="contact">
        <h2>Contact Form</h2>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="example@mail.com" ref={email} />
        <input type="tel" placeholder="Enter your mobile no." ref={phone} />
        <input type="text" placeholder="Enter your idea.." />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
