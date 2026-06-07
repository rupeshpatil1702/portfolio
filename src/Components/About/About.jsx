import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "./profile.jpg";

const skills = [
  { name: "Core ABAP", proficiency: 90 },
  { name: "OO ABAP", proficiency: 70 },
  { name: "CDS View", proficiency: 75 },
  { name: "ODATA", proficiency: 80 },
  { name: "SAP UI5", proficiency: 60 },
  { name: "Reports", proficiency: 90 },
  { name: "Data Dictionary", proficiency: 80 },
  { name: "SAP Script", proficiency: 70 },
  { name: "SAP Smart Forms", proficiency: 90 },
  { name: "SAP Adobe Forms", proficiency: 80 },
  { name: "BADI", proficiency: 80 },
  { name: "User Exits", proficiency: 70 },
  { name: "Customer Exits", proficiency: 60 },
  { name: "SQL", proficiency: 80 },
];

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About </h1>
        {/* <img src={theme_pattern} alt="Theme pattern" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img}
            alt="Profile of Rupesh Patil"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Rupesh Patil, an SAP ABAP Developer based in Pune with 1 year
              of hands-on experience building and customizing SAP solutions at
              Automatic Infotech.
            </p>
            <p>
              I enjoy working on challenging problems and turning complex
              business requirements into clean, working solutions. My work
              covers RICEFW, OData services, and SAP UI5 — collaborating closely
              with functional consultants to deliver results that make a real
              difference.
            </p>

            <p>
              I'm always learning and growing, currently deepening my knowledge
              in S/4HANA and Fiori development. I take ownership of my work and
              genuinely care about the quality of what I build.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
