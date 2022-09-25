import React from "react";
import { Navbar } from "../../components";
import "../../assets/css/style.css";
import Telefon from "../../assets/img/project/Telefon.png";

export default function Project() {
  const data = [
    {
      name: "Telefon",
      language: [
        {
          name: "Laravel",
        },
        {
          name: "PHP",
        },
        {
          name: "Bootstrap",
        },
        {
          name: "MySQL",
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="project-container">
        <h1 className="title">Project</h1>
        <div className="project-content">
          <div className="project-card">
            <img src={Telefon} className="project-image" />
            <p>Telefon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
