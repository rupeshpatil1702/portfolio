import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "Associate Consultant",
      company: "Automatic Infotech Private Limited",
      duration: "Aug 2024 – Present",
      location: "Pune, India",
      points: [
        "Developed a custom HR cockpit for employee canteen meal registration, enabling seamless daily booking and efficient data handling; also contributed to backend development using OData service for SAP Fiori application.",
        "Developed an RF application in the WM module for efficient creation of Transfer Orders, improving warehouse processing and achieving 40% reduction in manual processes.",
        "Implemented Implicit Enhancement to validate Purchase Orders during the release process, ensuring data accuracy and adherence to defined business rules.",
        "Implemented BADI to restrict specific order types during QM notification creation, ensuring correct data entry as per business requirements.",
        "Implemented BADI for FI-MM integration to update asset transaction date based on invoice posting date, ensuring accurate financial posting as per business needs.",
        "Worked on SAP Script to Adobe Forms migration ensuring improved form layout, maintainability, and output quality for FI and SD modules.",
      ],
    },
    {
      role: "Junior Associate Consultant",
      company: "Automatic Infotech Private Limited",
      duration: "Feb 2024 – Aug 2024",
      location: "Pune, India",
      points: [
        "Developed shop floor forms using SmartForms for the PM module to support production line operations, enabling efficient data capture and process execution.",
        "Developed a mass document posting solution for the FI module using BAPI, enabling efficient and automated bulk financial postings.",
        "Developed a backorder cancellation solution for the SD module using BDC, updating rejection reasons based on business rules and enabling automated email notifications to customers.",
        "Involved in performance optimization of ABAP programs using ATC, Extended Checks, Runtime Analysis (SAT) and SQL Trace (ST05), contributing to ~10% reduction in execution time while ensuring code quality.",
      ],
    },
  ];

  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
      </div>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-card-left">
              <h2>{exp.role}</h2>
              <h3>{exp.company}</h3>
              <p className="experience-duration">
                {exp.duration} · {exp.location}
              </p>
            </div>
            <div className="experience-card-right">
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;