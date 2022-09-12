import React from "react";
import "../../assets/css/style.css";
import { Navbar } from "../../components";
import { motion } from "framer-motion";
import foto2 from "../../assets/img/foto2.jpg";
import AOS from "aos";

export default function About() {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="about-container">
      <Navbar />
      <section id="about">
        <div data-aos="fade-right">
          <div className="hero-container">
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
              <div className="about-description" style={{ marginTop: 24 }}>
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
            </div>
          </div>
        </div>
        <div>
          <img src={foto2} style={{ borderRadius: 100 }} className="logo" />
        </div>
      </section>
      <div className="margin-page">
        <h2 style={{ color: "white" }}>Education</h2>
        <div style={{ marginTop: 16, color: "white" }}>
          <div className="education-list">
            <h5>2019 - 2022</h5>
            <p>SMK Multistudi High School</p>
            <p>Vocational High School</p>
          </div>
          <div className="education-list">
            <h5>2016 - 2019</h5>
            <p>SMP Ananda Batam</p>
            <p>Junior High School</p>
          </div>
          <div className="education-list">
            <h5>2010 - 2016</h5>
            <p>SD Ananda Batam</p>
            <p>Elementary School</p>
          </div>
        </div>
      </div>
    </div>
  );
}
