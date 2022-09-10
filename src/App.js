import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Main } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
