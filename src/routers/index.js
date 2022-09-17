import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, About, Contact, Career, Project } from "../pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/career" element={<Career />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}
