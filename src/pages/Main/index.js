import React from "react";
import "../../assets/css/style.css";
import { Navbar, ButtonOutline } from "../../components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import mylogo from "../../assets/img/mylogo.jpg";

export default function Main() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <section id="main">
        <motion.div
          className="paragraph"
          initial={{ position: "relative", y: "100%" }}
          animate={{ position: "relative", y: "0" }}
          exit={{ position: "relative", y: "100%" }}
          transition={{ transition: { duration: 1 } }}
        >
          <div className="main-content">
            <h1 className="title">Welcome to my website</h1>
            <p style={{ marginBottom: 20 }}>Find more about me</p>
            <ButtonOutline name="About" onClick={() => navigate("/about")} />
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
