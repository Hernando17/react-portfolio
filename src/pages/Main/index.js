import React from "react";
import "../../assets/css/style.css";
import { Navbar } from "../../components";

export default function Main() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <h3>Welcome to Portfolio website</h3>
      </section>
      <main>
        <section id="about">
          <h3>Portfolio</h3>
        </section>
      </main>
    </div>
  );
}
