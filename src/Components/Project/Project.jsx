import React from "react";
import "./Project.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Project = () => {
  return (
    <div id="project" className="project">
      <div className="project-title">
        <h1>Project</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="project-build">
        <div className="project-name">Job Portal</div>
        <span className="tech">Tech Stack :- </span>
        <span className="tech-stack">
          {" "}
          React Js | Node Js | MongoDB | Express Js
        </span>
        <div className="project-description">
          <p>
            The Job Portal is a comprehensive web application designed to
            connect job seekers with employers, streamlining the hiring process
            for both parties. This platform allows users to create secure
            accounts, manage their profiles, and upload resumes, providing a
            centralized hub for their job search. Job seekers can easily browse
            and filter job listings by various criteria such as category,
            location, and salary, enabling them to find opportunities that match
            their skills and preferences. The application process is
            straightforward, allowing users to submit their applications
            directly and track their status throughout the hiring journey.
          </p>
          <p>
            For employers, the Job Portal offers an intuitive dashboard to post
            job listings, review applications, and communicate with candidates
            efficiently. They can manage their job postings, set application
            deadlines, and view analytics to better understand the hiring
            landscape. The portal also includes a resume builder feature,
            empowering job seekers to create professional resumes easily. With
            real-time notifications for new job postings and application
            updates, both job seekers and employers remain engaged and informed.
            Built with a modern technology stack, the Job Portal emphasizes user
            experience through its responsive design, ensuring accessibility
            across all devices. Overall, this project not only enhances the job
            search experience but also addresses a vital need in today's
            competitive job market.
          </p>
        </div>
        <div className="project-check">
          <button
            onClick={() =>
              window.open(
                "https://github.com/rupeshpatil1702/Job-Portal",
                "_blank"
              )
            }
          >
            Check Now
          </button>
        </div>
      </div>
      
      <div className="project-build">
        <div className="project-name">Crop Recommendation System</div>
        <span className="tech">Tech Stack :- </span>

        <span className="tech-stack"> Python </span>

        <div className="project-description">
          <p>
            The Crop Recommendation System is an innovative web application
            designed to assist farmers in making informed decisions about which
            crops to plant based on various environmental factors and soil
            conditions. By utilizing advanced algorithms and data analytics, the
            system analyzes parameters such as soil type, temperature, rainfall,
            and humidity to recommend the most suitable crops for a specific
            region. This empowers farmers to maximize their yields and optimize
            resource usage, ultimately contributing to more sustainable
            agricultural practices.
          </p>
          <p>
            Users can input specific data related to their land and
            environmental conditions, and the system processes this information
            to generate tailored recommendations. Additionally, the application
            provides insights into best farming practices, crop rotation
            strategies, and pest management, offering a comprehensive resource
            for farmers looking to enhance their productivity. With an intuitive
            user interface and easy navigation, the Crop Recommendation System
            makes complex agricultural data accessible and actionable for users
            at all levels of expertise.
          </p>
        </div>
        <div className="project-check">
          <button
            onClick={() =>
              window.open(
                "https://github.com/rupeshpatil1702/Crop-Recommendation-System",
                "_blank"
              )
            }
          >
            Check Now
          </button>
        </div>
      </div>

      <div className="project-build">
        <div className="project-name">Crypto Market Application</div>
        <span className="tech">Tech Stack :- </span>
        <span className="tech-stack">React Js | HTML | CSS | REST APIs</span>
        <div className="project-description">
          <p>
            The Crypto Market Application provides real-time data and analytics
            for various cryptocurrencies. Built using ReactJS for dynamic
            content rendering and state management, the application allows users
            to monitor the latest cryptocurrency prices, market capitalization,
            and trends with the help of API integration. The interface, designed
            with HTML and CSS, is user-friendly and responsive across devices.
            The application also visually displays historical market trends
            through dynamic graphs, making it a comprehensive tool for tracking
            cryptocurrency performance.
          </p>
        </div>
        <div className="project-check">
          <button
            onClick={() =>
              window.open(
                "https://github.com/rupeshpatil1702/cryptoapp.git",
                "_blank"
              )
            }
          >
            Check Now
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Project;
