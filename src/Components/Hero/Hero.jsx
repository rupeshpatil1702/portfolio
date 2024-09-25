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
        And I'm <JobTitle />
      </p>
      <p className="hero-description">
        Motivated and hard-working MCA student with experience in Software
        Development and Web Development . Passionate about exploring new
        technologies and using them for problem-solving. I enjoy implementing
        creative solutions to common problems.
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
            href="https://drive.google.com/file/d/1CN8A1gN0FynsMOuPMpO8YuRY8oR6proG/view?usp=drive_link"
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
