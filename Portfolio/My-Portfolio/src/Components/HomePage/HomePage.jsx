import React from "react";
import "./HomePage.css";
export default function HomePage(props) {

  const{bio,avatar_url,name,location}=props.Data

  return (
    <section className="Home">
      <div class="home-content">
        <h3>Hello, I'm</h3>
        <h1>
          <span class="highlight">{name}</span>
        </h1>
        <h2>{bio} </h2>
        <p>
         {location}
        </p>
       
        <div class="buttons">
          <a href="https://github.com/Ashutoshhere18" class="btn">
            View Projects
          </a>
          <a href="https://www.linkedin.com/in/ashutosh-mishra-26633334b" class="btn secondary">
            Hire me
          </a>
        </div>
      </div>
       <div class="home-image">
        <img src={avatar_url} alt="" />
      </div>
    </section>
  );
}
