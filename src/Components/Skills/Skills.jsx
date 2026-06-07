import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
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

  return (
    <div id="skills" className="skills-section">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="parts">
        <div className="about-skills">
          {skills.map((skill) => (
            <div className="about-skill" key={skill.name}>
              <div className="skill-name-container">
                <div className="skill-name">{skill.name}</div>
                <span className="skill-percentage">{skill.proficiency}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
