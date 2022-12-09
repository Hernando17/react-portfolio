import React from "react";
import Router from "./routers";
import "./assets/css/partials/welcome.scss";
import "./assets/css/style.scss";
import { motion, AnimatePresence } from "framer-motion";

function App() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    });

    if (loading) {
        return (
            <div className="welcome">
                <svg viewBox="0 0 1320 300">
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        Welcome
                    </text>
                </svg>
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
