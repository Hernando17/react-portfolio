import {
    FaHome,
    FaUserAlt,
    FaPhoneAlt,
    FaUserTie,
    FaRegFileCode,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";


export default function Tabbar() {
    const location = useLocation();

    return (
        <nav className="tabbar">
            <div className="container">
                <ul className="tabbar-content">
                    <li className={location.pathname === "/" ? "active" : ""} >
                        <Link to="/" className={location.pathname === "/" ? "active" : ""} >
                            <FaHome size="18" color={location.pathname === "/" ? "#1e1e1e" : "#fff"} />
                        </Link>
                    </li>
                    <li className={location.pathname === "/about" ? "active" : ""} >
                        <Link to="/about" className={location.pathname === "/about" ? "active" : ""} >
                            <FaUserAlt color={location.pathname === "/about" ? "#1e1e1e" : "#fff"} />
                        </Link>
                    </li>
                    <li>
                        <FaPhoneAlt />
                    </li>
                    <li>
                        <FaUserTie />
                    </li>
                    <li>
                        <FaRegFileCode />
                    </li>
                </ul>
            </div>
        </nav>
    )
}