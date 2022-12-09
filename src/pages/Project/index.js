import React from "react";
import { Navbar } from "../../components";
import "../../assets/css/style.scss";

import { project } from "../../resources/project";
import AOS from "aos";

export default function Project() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="project-container">
        <h1 className="project-title" data-aos="fade-down">
          Project
        </h1>
        <div className="project-content" data-aos="fade-up">
          {project.map((data, index) => (
            <div className="project-card" key={index}>
              <img src={data.img} className="project-image" />
              <div className="card-text">
                <p>{data.name}</p>
                <div
                  className="project-category"
                  style={{
                    backgroundColor:
                      data.category == "Website"
                        ? "#e6564c"
                        : data.category == "Mobile App"
                        ? "#3956fa"
                        : "#f7b80a",
                  }}
                >
                  <p>{data.category}</p>
                </div>
              </div>
              <div className="project-language">
                {data.language.map((item, key) => (
                  <p
                    key={key}
                    style={{
                      fontSize: "14px",
                      backgroundColor: "gray",
                      margin: 2,
                      padding: 2,
                      borderRadius: 4,
                    }}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
