import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
  const skills = [
    { name: "Java", proficiency: 90 },
    { name: "Data Structures and Alogrithm", proficiency: 95 },
    { name: "SQL", proficiency: 80 },
    { name: "HTML & CSS", proficiency: 80 },
    { name: "Python", proficiency: 90 },
    { name: "JavaScript", proficiency: 60 },
    { name: "Node Js", proficiency: 60 },
    { name: "React Js", proficiency: 60 },
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
