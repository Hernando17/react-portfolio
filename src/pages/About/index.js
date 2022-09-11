import React from "react";
import "../../assets/css/style.css";
import { Navbar } from "../../components";
import { motion } from "framer-motion";

export default function About({ isVisible }) {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ position: "relative", y: "100%" }}
        animate={{ position: "relative", y: "0" }}
        exit={{ position: "relative", y: "100%" }}
        transition={{ transition: { duration: 1 } }}
      >
        <section id="hero">
          <h3>Welcome to Portfolio website</h3>
        </section>
      </motion.div>
    </div>
  );
}
