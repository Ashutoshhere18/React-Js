import React from "react";
import "./HomePage.css";
export default function HomePage() {
  return (
    <section className="Home">
      <div class="home-content">
        <h3>Hello, I'm</h3>
        <h1>
          <span class="highlight">Ashutosh Mishra</span>
        </h1>
        <h2> MERN Stack Developer | BCA Student</h2>
        <p>
          Passionate about building modern, responsive, and user-friendly web
          applications. Currently learning React and full-stack development to
          create impactful digital solutions.
        </p>
        <div class="buttons">
          <a href="#projects" class="btn">
            View Projects
          </a>
          <a href="#contact" class="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
       <div class="home-image">
        <img src="" alt="" />
       </div>
    </section>
  );
}
