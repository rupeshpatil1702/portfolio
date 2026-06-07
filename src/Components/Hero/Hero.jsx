import React from "react";
import "./Hero.css";
import profile from "./profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import JobTitle from "../JobTitle/JobTitle";
// import resume from "./Rupesh Patil";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        className="heroprofile"
        src={profile}
        height="240px"
        width="240px"
        alt="Profile"
      />
      <h1>
        Hello I'm <span className="rupesh">Rupesh Patil</span>
      </h1>
      <p>
        I'm <JobTitle />
      </p>
      <p className="hero-description">
        I am an SAP ABAP Consultant with 1 year of experience in designing,
        developing, and supporting SAP solutions. My expertise includes ABAP
        development, Reports, Enhancements, Forms, OData Services, CDS Views,
        SAP UI5, and SAP Integration technologies. I enjoy building efficient,
        scalable, and business-focused applications that help organizations
        streamline their processes and improve productivity.
      </p>
      <p className="hero-description">
        I am passionate about solving complex business challenges through
        technology and continuously expanding my knowledge of the SAP ecosystem.
        I thrive in collaborative environments where I can work closely with
        functional consultants, developers, and stakeholders to deliver
        high-quality solutions. With a strong commitment to learning and
        professional growth, I am currently enhancing my expertise in modern SAP
        technologies such as RAP, CAP, SAP BTP, and AI-powered enterprise
        applications. My goal is to leverage technology to create innovative,
        reliable, and impactful solutions that drive business success.
      </p>
      <p className="hero-description">
        Beyond SAP development, I have a keen interest in Artificial
        Intelligence and Enterprise Automation. I enjoy exploring how AI can be
        integrated with SAP systems to create intelligent business applications
        and improve decision-making processes.
      </p>
      <div className="hero-action">
        {/* <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div> */}
        <div className="hero-resume">
          {/* <a
            href="Rupesh Patil.pdf" // Ensure this path is correct
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "25px",
            }}
          > */}
          <a
            href="/portfolio/Rupesh Patil.pdf"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "25px",
            }}
          >
            Download CV
          </a>
        </div>

        {/* <div className="hero-resume">
          <a
            href= "./Rupesh Patil.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "25px",
            }}
          >
            Download CV
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
