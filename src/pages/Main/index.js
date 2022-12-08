import React from "react";
import "../../assets/css/style.scss";
import { Navbar, ButtonOutline } from "../../components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import mylogo from "../../assets/img/mylogo.jpg";
import AOS from "aos";

export default function Main() {
    let navigate = useNavigate();
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div>
            <Navbar />
            <section id="main" data-aos="fade-down">
                <motion.div
                    className="paragraph"
                    initial={{ position: "relative", y: "100%" }}
                    animate={{ position: "relative", y: "0" }}
                    exit={{ position: "relative", y: "100%" }}
                    transition={{ transition: { duration: 1 } }}
                >
                    <div className="main-content">
                        <h1 className="main-title">
                            <span className="title-effect">H</span>
                            <span className="title-effect">E</span>
                            <span className="title-effect">L</span>
                            <span className="title-effect">L</span>
                            <span className="title-effect">O</span>
                            <span className="title-effect">, </span>
                            <span className="title-effect">M</span>
                            <span className="title-effect">Y</span>
                            <span className="title-effect"> </span>
                            <span className="title-effect">N</span>
                            <span className="title-effect">A</span>
                            <span className="title-effect">M</span>
                            <span className="title-effect">E</span>
                            <span className="title-effect"> </span>
                            <span className="title-effect">I</span>
                            <span className="title-effect">S</span>
                            <span className="title-effect"> </span>
                            <span className="title-effect">H</span>
                            <span className="title-effect">E</span>
                            <span className="title-effect">R</span>
                            <span className="title-effect">N</span>
                            <span className="title-effect">A</span>
                            <span className="title-effect">N</span>
                            <span className="title-effect">D</span>
                            <span className="title-effect">O</span>
                        </h1>
                        <p style={{ marginBottom: 20, fontSize: 24 }}>
                            Find more about me
                        </p>
                        <ButtonOutline
                            name="About"
                            onClick={() => navigate("/about")}
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ position: "relative", y: "-100%" }}
                    animate={{ position: "relative", y: "0" }}
                    exit={{ position: "relative", y: "-100%" }}
                    transition={{ transition: { duration: 1 } }}
                >
                    <img
                        src={mylogo}
                        alt="MyPhoto.jpg"
                        className="logo"
                        style={{ borderRadius: "100px" }}
                    />
                </motion.div>
            </section>
        </div>
    );
}
