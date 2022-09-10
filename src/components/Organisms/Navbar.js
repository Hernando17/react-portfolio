import React from "react";
import "../../assets/css/style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <a href="#about">About</a>
        <a>Contact</a>
        <a>Education</a>
        <a>Career</a>
        <a>Project</a>
      </div>
    </nav>
  );
}
