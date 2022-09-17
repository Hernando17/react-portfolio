import React from "react";
import "../../assets/css/style.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaPhoneAlt,
  FaUserTie,
  FaRegFileCode,
} from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="center">
      <nav className="navbar">
        <ul className="desktop">
          <li>
            <a
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => navigate(`/`)}
            >
              Main
            </a>
          </li>
          <li>
            <a
              className={location.pathname === "/about" ? "active" : ""}
              onClick={() => navigate(`/about`)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => navigate(`/contact`)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className={location.pathname === "/career" ? "active" : ""}
              onClick={() => navigate(`/career`)}
            >
              Career
            </a>
          </li>
          <li>
            <a>Project</a>
          </li>
        </ul>
        <ul className="mobile">
          <li>
            <a
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => navigate(`/`)}
            >
              <FaHome />
            </a>
          </li>
          <li>
            <a
              className={location.pathname === "/about" ? "active" : ""}
              onClick={() => navigate(`/about`)}
            >
              <FaUserAlt />
            </a>
          </li>
          <li>
            <a
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => navigate(`/contact`)}
            >
              <FaPhoneAlt />
            </a>
          </li>
          <li>
            <a
              className={location.pathname === "/career" ? "active" : ""}
              onClick={() => navigate(`/career`)}
            >
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
