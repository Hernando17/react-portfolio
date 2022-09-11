import React from "react";
import "../../assets/css/style.css";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaPhoneAlt,
  FaUserTie,
  FaRegFileCode,
} from "react-icons/fa";

export default function Navbar() {
  let navigate = useNavigate();

  return (
    <div className="center">
      <nav className="navbar">
        <ul className="desktop">
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
        <ul className="mobile">
          <li>
            <a onClick={() => navigate(`/`)}>
              <FaHome />
            </a>
          </li>
          <li>
            <a onClick={() => navigate(`/about`)}>
              <FaUserAlt />
            </a>
          </li>
          <li>
            <a onClick={() => navigate(`/contact`)}>
              <FaPhoneAlt />
            </a>
          </li>
          <li>
            <a>
              <FaUserTie />
            </a>
          </li>
          <li>
            <a>
              <FaRegFileCode />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
