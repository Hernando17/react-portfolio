import React from "react";
import Router from "./routers";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router />
    </AnimatePresence>
  );
}

export default App;
