import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Main, About, Contact } from "../pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
