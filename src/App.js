import React from "react";
import Router from "./routers";
import "./assets/css/style.scss";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <AnimatePresence exitBeforeEnter>
      {loading ? (
        <div className="welcome">
          <h1 style={{ color: "white" }}>WELCOME</h1>
        </div>
      ) : (
        ""
      )}
      <Router />
    </AnimatePresence>
  );
}

export default App;
