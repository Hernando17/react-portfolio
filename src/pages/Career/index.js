import React from "react";
import { Navbar } from "../../components";
import "../../assets/css/style.scss";
import AOS from "aos";

export default function Career() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const data = [
    {
      time: "July 2022 - Dec 2022",
      company: "PT Mitra Kuadran Teknologi",
      position: "Full Stack Developer",
    },
    {
      time: "October 2020 - March 2021 (6 Months)",
      company: "PT Mitra Kuadran Teknologi",
      position: "Student Intern",
    },
  ];

  return (
    <section id="career">
      <Navbar />
      <div className="career-container" data-aos="fade-right">
        <h1 className="title">Career</h1>
        {data.map((item, index) => (
          <div className="career-content" key={index}>
            <h4>{item.time}</h4>
            <h3>{item.company}</h3>
            <h5>{item.position}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}
