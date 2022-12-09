import React from "react";
import "../../assets/css/style.scss";
import { Navbar, ButtonOutline } from "../../components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import mylogo from "../../assets/img/mylogo.jpg";
import AOS from "aos";
import { Button } from "@mui/material";

export default function Main() {
  let navigate = useNavigate();
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <section id="main">
        {/* <motion.div
                    className="paragraph"
                    initial={{ position: "relative", y: "100%" }}
                    animate={{ position: "relative", y: "0" }}
                    exit={{ position: "relative", y: "100%" }}
                    transition={{ transition: { duration: 1 } }}
                > */}
        <div className="main-content" data-aos="fade-right">
          <h1 className="main-title">HELLO THERE, MY NAME IS HERNANDO</h1>
          <p style={{ marginBottom: 20, fontSize: 24 }}>Find more about me</p>

          <ButtonOutline name="About" onClick={() => navigate("/about")} />
          {/* <Button
            variant="outlined"
            style={{ borderColor: "white", marginRight: 8, marginTop: 8 }}
            href="../../../src/assets/pdf/cv.pdf"
            download
          >
            <p style={{ color: "white" }}>Download CV</p>
          </Button> */}
        </div>
        {/* </motion.div>
                <motion.div
                    initial={{ position: "relative", y: "-100%" }}
                    animate={{ position: "relative", y: "0" }}
                    exit={{ position: "relative", y: "-100%" }}
                    transition={{ transition: { duration: 1 } }}
                > */}
        <img
          src={mylogo}
          alt="MyPhoto.jpg"
          className="logo"
          style={{ borderRadius: "100px" }}
          data-aos="fade-left"
        />
        {/* </motion.div> */}
      </section>
    </div>
  );
}
