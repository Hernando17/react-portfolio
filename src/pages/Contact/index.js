import React from "react";
import "../../assets/css/style.css";
import { Navbar } from "../../components";
import { FaInstagram, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import AOS from "aos";

export default function Contact() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="contact">
      <Navbar />
      <div className="contact-container">
        <h1 className="title">Contact</h1>
        <div className="contact-description" data-aos="fade-right">
          <div className="contact-item">
            <FaInstagram size={24} />
            <a
              href="https://www.instagram.com/hernando.exe/"
              className="contact-value"
            >
              hernando.exe
            </a>
          </div>
          <div className="contact-item">
            <FaGithub size={24} />
            <a href="https://github.com/Hernando17" className="contact-value">
              Hernando17
            </a>
          </div>
          <div className="contact-item">
            <FaLinkedin size={24} />
            <a
              href="https://www.linkedin.com/in/hernando-ong-9588aa211/"
              className="contact-value"
            >
              Hernando Ong
            </a>
          </div>
          <div className="contact-item">
            <FaEnvelope size={24} />
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrlFXwlbFZgjfmQmgmjDdjPRLcRNRqqmfJwVrdgWZKbtPNfCDZMxdfnwRbtjvnjCKkzqrL"
              className="contact-value"
            >
              hernandoong22@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
