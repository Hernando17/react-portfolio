import React from "react";
import "../../assets/css/style.css";

export default function Navbar() {
  const [navUl, setNavUl] = React.useState(false);

  return (
    <nav className="navbar">
      <ul className={navUl ? "active" : ""}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Education</a>
        </li>
        <li>
          <a>Career</a>
        </li>
        <li>
          <a>Project</a>
        </li>
      </ul>
      <div
        className="hamburger"
        onClick={() => (navUl ? setNavUl(false) : setNavUl(true))}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}
