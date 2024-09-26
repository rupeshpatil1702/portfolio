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
        As a highly motivated and dedicated MCA student, I have cultivated a
        robust skill set in Software and Web Development. My academic journey
        has provided me with valuable hands-on experience in various programming
        languages and frameworks, which I enjoy applying to solve real-world
        challenges. I am particularly passionate about exploring emerging
        technologies and their potential to drive innovation and efficiency.
      </p>
      <p className="hero-description">
        I thrive in collaborative environments where I can exchange ideas and
        learn from others, as I believe that teamwork often leads to the most
        creative solutions. My enthusiasm for problem-solving motivates me to
        think outside the box and implement unique strategies that address
        common issues. I am committed to continuous learning and professional
        growth, always seeking opportunities to expand my knowledge and skills.
        Ultimately, I aspire to leverage my technical expertise and creative
        mindset to contribute positively to the tech industry, delivering
        impactful solutions that enhance user experiences and drive success.
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
