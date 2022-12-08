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

    if (loading) {
        return (
            <div className="welcome">
                <h1 style={{ color: "white" }}>WELCOME</h1>
            </div>
        );
    } else {
        return (
            <AnimatePresence exitBeforeEnter>
                <Router />
            </AnimatePresence>
        );
    }
}

export default App;
