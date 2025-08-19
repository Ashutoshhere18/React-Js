import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <section className="Nav-section">
      <div className="brand">
           <a href="#home" className="brand">
  <span className="logo-box">AT</span>
  <span className="logo-text">
    Mishra<span className="logo-apostrophe">'s</span>
    <span className="logo-portfolio">Portfolio</span>
  </span>
</a>

      </div>
      <div className=" Navbar-content">
        <a href="">Home</a>
        <a href="">About me</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Experience</a>
        <a href="">Contact</a>
      </div>
    </section>
  );
}
