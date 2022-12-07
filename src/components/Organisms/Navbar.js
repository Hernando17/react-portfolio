import React from "react";
import "../../assets/css/style.scss";
import { useNavigate, useLocation, Link } from "react-router-dom";
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
    <nav className="navbar">
      <ul className="desktop">
        <li>
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
            Main
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/career"
            className={location.pathname === "/career" ? "active" : ""}
          >
            Career
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className={location.pathname === "/project" ? "active" : ""}
          >
            Project
          </Link>
        </li>
      </ul>
      <ul className="mobile">
        <li>
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/about" ? "active" : ""}
            to="/about"
          >
            <FaUserAlt />
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/contact" ? "active" : ""}
            to="/contact"
          >
            <FaPhoneAlt />
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/career" ? "active" : ""}
            to="/career"
          >
            <FaUserTie />
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className={location.pathname === "/project" ? "active" : ""}
          >
            <FaRegFileCode />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
