import React from "react";
import "../../assets/css/style.css";
import { Navbar } from "../../components";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ position: "relative", y: "100%" }}
        animate={{ position: "relative", y: "0" }}
        exit={{ position: "relative", y: "100%" }}
        transition={{ transition: { duration: 1 } }}
      >
        <section id="main">
          <div className="main-content">
            <h3>Hello, my name is Hernando</h3>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
