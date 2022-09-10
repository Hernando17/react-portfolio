import React from "react";
import "../../assets/css/style.css";

export default function Navbar() {
  const [navUl, setNavUl] = React.useState(false);

  return (
    <div className="center">
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
      </nav>
    </div>
  );
}
