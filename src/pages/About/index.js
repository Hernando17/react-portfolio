import React from "react";
import "../../assets/css/style.css";
import { Navbar } from "../../components";
import { motion } from "framer-motion";
import foto2 from "../../assets/img/foto2.jpg";

export default function About() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <motion.div
          initial={{ position: "relative", y: "100%" }}
          animate={{ position: "relative", y: "0" }}
          exit={{ position: "relative", y: "100%" }}
          transition={{ transition: { duration: 1 } }}
        >
          <div className="hero-container">
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
              <div className="about-description">
                <p>
                  Hello, my name is Hernando. I'm currently work as Full Stack
                  Developer, and usually code with PHP and Javascript. And also
                  using ReactJs, React Native and Laravel for the Framework.
                </p>
                <p style={{ marginTop: 12 }}>
                  I can also can operate Graphic Design and Video Editor
                  software like Adobe Photoshop, Adobe Illustrator, and Adobe
                  Premiere Pro.
                </p>
              </div>
              <img src={foto2} style={{ borderRadius: 100 }} className="logo" />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
