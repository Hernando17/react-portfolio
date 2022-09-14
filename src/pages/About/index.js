import React from "react";
import "../../assets/css/style.css";
import { Navbar } from "../../components";
import { motion } from "framer-motion";
import foto2 from "../../assets/img/foto2.jpg";
import AOS from "aos";

export default function About() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about-container">
      <Navbar />
      <section id="about" data-aos="fade-down">
        <div>
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
      <div className="about-item margin-page">
        <div data-aos="fade-right">
          <div className="education-container">
            <h2 style={{ color: "white" }}>Education</h2>
            <div className="education-list">
              <h5>2022 - 2025</h5>
              <p>Universitas Internasional Batam</p>
              <p>College</p>
            </div>
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
        <div data-aos="fade-right">
          <div className="skills-container">
            <h2 style={{ color: "white" }}>Skills</h2>
            <div className="education-list">
              <h5>Programming</h5>
              <p>PHP, Javascript, Laravel, React Js, React Native</p>
            </div>
            <div className="education-list">
              <h5>Graphic Design</h5>
              <p>Adobe Photoshop, Adobe Illustrator</p>
            </div>
            <div className="education-list">
              <h5>Video Editing</h5>
              <p>Adobe Premiere Pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
