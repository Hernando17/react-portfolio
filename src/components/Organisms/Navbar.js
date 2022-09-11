import React from "react";
import "../../assets/css/style.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [navUl, setNavUl] = React.useState(false);
  let navigate = useNavigate();

  return (
    <div className="center">
      <nav className="navbar">
        <ul className={navUl ? "active" : ""}>
          <li>
            <a onClick={() => navigate(`/`)}>Main</a>
          </li>
          <li>
            <a onClick={() => navigate(`/about`)}>About</a>
          </li>
          <li>
            <a onClick={() => navigate(`/contact`)}>Contact</a>
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
