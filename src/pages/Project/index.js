import React from "react";
import { Navbar } from "../../components";
import "../../assets/css/style.scss";
import Telefon from "../../assets/img/project/Telefon.png";
import { project } from "../../resources/project";

export default function Project() {
    return (
        <div>
            <Navbar />
            <div className="project-container">
                <h1 className="title">Project</h1>
                <div className="project-content">
                    {project.map((data, index) => (
                        <div className="project-card" key={index}>
                            <img src={Telefon} className="project-image" />
                            <div className="card-text">
                                <p>{data.name}</p>
                                <div
                                    className="project-category"
                                    style={{
                                        backgroundColor:
                                            data.category == "Website"
                                                ? "rgb(236, 61, 61)"
                                                : data.category == "Mobile App"
                                                ? "blue"
                                                : "orange",
                                    }}
                                >
                                    <p>{data.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
