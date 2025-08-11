// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        EduTrack <span className="highlight">LMS</span>
      </div>

      <ul className="navbar-links">
        <li onClick={() => setPage("dashboard")}>Dashboard</li>
        <li onClick={() => setPage("courses")}>Courses</li>
        <li onClick={() => setPage("students")}>Students</li>
        <li onClick={() => setPage("categories")}>Categories</li>
      </ul>
    </nav>
  );
};

export default Navbar;
