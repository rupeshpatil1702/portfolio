// import React from "react";
// import "./Project.css";

// const Project = () => {
//   return (
//     <div id="project" className="project">
//       <div className="project-title">
//         <h1>Projects</h1>
//       </div>

//       {/* ===================== SAP PROJECTS ===================== */}

//       <div className="project-build">
//         <div className="project-name">
//           SAP Intelligent Operations Hub
//         </div>
//         <span className="tech">Tech Stack :- </span>
//         <span className="tech-stack">
//           SAP UI5 | OData | ABAP | SAP Fiori | Node.js | AI Integration
//         </span>
//         <div className="project-description">
//           <p>
//             A cross-module AI-powered dashboard built on SAP UI5 and Fiori
//             that enables users to interact with live SAP data across SD, MM,
//             FI, and HR modules using natural language. The core idea is a
//             unified command center where users can type queries like "Show me
//             open purchase orders from last week over ₹50,000" and the system
//             intelligently converts that into a live OData call and renders
//             the result in real time.
//           </p>
//           <p>
//             The frontend is built using SAP UI5 with a persistent AI chat
//             panel alongside module-specific views for Sales, Materials,
//             Finance, and HR data. The AI layer sits as a Node.js middleware
//             that takes natural language input, processes it using an AI model
//             with a system prompt describing the OData entity structure, and
//             generates structured OData queries with the right filters,
//             expansions, and selections — which are then executed against the
//             SAP Gateway services.
//           </p>
//           <p>
//             The backend exposes OData services for entities like
//             SalesOrderSet, PurchaseOrderSet, GLAccountSet, and EmployeeSet.
//             This project demonstrates a full-stack SAP capability — UI5
//             bindings, OData service design, SAP module data models — with a
//             practical AI layer on top that transforms how business users
//             interact with SAP data.
//           </p>
//         </div>
//         <div className="project-check">
//           <button
//             onClick={() =>
//               window.open(
//                 "https://github.com/rupeshpatil1702",
//                 "_blank"
//               )
//             }
//           >
//             View on GitHub
//           </button>
//         </div>
//       </div>

//       <div className="project-build">
//         <div className="project-name">
//           RF Application — WM Transfer Orders
//         </div>
//         <span className="tech">Tech Stack :- </span>
//         <span className="tech-stack">
//           SAP Module Pool | ABAP | WM Module
//         </span>
//         <div className="project-description">
//           <p>
//             Developed an RF (Radio Frequency) application in the SAP WM
//             (Warehouse Management) module using Module Pool programming for
//             efficient creation of Transfer Orders on the shop floor. The
//             application streamlined warehouse operations by enabling
//             real-time data entry through RF devices, significantly reducing
//             dependency on manual processes.
//           </p>
//           <p>
//             The solution replaced a heavily manual workflow, achieving a
//             40% reduction in manual processing time. The screen-based
//             Module Pool design ensured a smooth, guided user experience
//             optimized for RF device constraints, improving overall warehouse
//             efficiency and accuracy during Transfer Order creation.
//           </p>
//         </div>
//         <div className="project-check">
//           <button
//             onClick={() =>
//               window.open(
//                 "https://github.com/rupeshpatil1702",
//                 "_blank"
//               )
//             }
//           >
//             View on GitHub
//           </button>
//         </div>
//       </div>

//       {/* ===================== COLLEGE PROJECTS ===================== */}

//       {/* <div className="project-build">
//         <div className="project-name">Job Portal</div>
//         <span className="tech">Tech Stack :- </span>
//         <span className="tech-stack">
//           React Js | Node Js | MongoDB | Express Js
//         </span>
//         <div className="project-description">
//           <p>
//             The Job Portal is a comprehensive web application designed to
//             connect job seekers with employers, streamlining the hiring
//             process for both parties. This platform allows users to create
//             secure accounts, manage their profiles, and upload resumes,
//             providing a centralized hub for their job search. Job seekers
//             can easily browse and filter job listings by various criteria
//             such as category, location, and salary, enabling them to find
//             opportunities that match their skills and preferences.
//           </p>
//           <p>
//             For employers, the Job Portal offers an intuitive dashboard to
//             post job listings, review applications, and communicate with
//             candidates efficiently. They can manage their job postings, set
//             application deadlines, and view analytics to better understand
//             the hiring landscape. The portal also includes a resume builder
//             feature, empowering job seekers to create professional resumes
//             easily. With real-time notifications for new job postings and
//             application updates, both job seekers and employers remain
//             engaged and informed.
//           </p>
//         </div>
//         <div className="project-check">
//           <button
//             onClick={() =>
//               window.open(
//                 "https://github.com/rupeshpatil1702/Job-Portal",
//                 "_blank"
//               )
//             }
//           >
//             Check Now
//           </button>
//         </div>
//       </div> */}

//       {/* <div className="project-build">
//         <div className="project-name">Crop Recommendation System</div>
//         <span className="tech">Tech Stack :- </span>
//         <span className="tech-stack"> Python </span>
//         <div className="project-description">
//           <p>
//             The Crop Recommendation System is an innovative web application
//             designed to assist farmers in making informed decisions about
//             which crops to plant based on various environmental factors and
//             soil conditions. By utilizing advanced algorithms and data
//             analytics, the system analyzes parameters such as soil type,
//             temperature, rainfall, and humidity to recommend the most
//             suitable crops for a specific region.
//           </p>
//           <p>
//             Users can input specific data related to their land and
//             environmental conditions, and the system processes this
//             information to generate tailored recommendations. Additionally,
//             the application provides insights into best farming practices,
//             crop rotation strategies, and pest management, offering a
//             comprehensive resource for farmers.
//           </p>
//         </div>
//         <div className="project-check">
//           <button
//             onClick={() =>
//               window.open(
//                 "https://github.com/rupeshpatil1702/Crop-Recommendation-System",
//                 "_blank"
//               )
//             }
//           >
//             Check Now
//           </button>
//         </div>
//       </div> */}

//       {/* <div className="project-build">
//         <div className="project-name">Crypto Market Application</div>
//         <span className="tech">Tech Stack :- </span>
//         <span className="tech-stack">
//           React Js | HTML | CSS | REST APIs
//         </span>
//         <div className="project-description">
//           <p>
//             The Crypto Market Application provides real-time data and
//             analytics for various cryptocurrencies. Built using ReactJS for
//             dynamic content rendering and state management, the application
//             allows users to monitor the latest cryptocurrency prices, market
//             capitalization, and trends with the help of API integration.
//             The interface is user-friendly and responsive across devices,
//             and visually displays historical market trends through dynamic
//             graphs.
//           </p>
//         </div>
//         <div className="project-check">
//           <button
//             onClick={() =>
//               window.open(
//                 "https://github.com/rupeshpatil1702/cryptoapp.git",
//                 "_blank"
//               )
//             }
//           >
//             Check Now
//           </button>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Project;


import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div id="project" className="project">
      <div className="project-title">
        <h1>Projects</h1>
      </div>

      {/* ===================== SAP PROJECTS ===================== */}

      <div className="project-build">
        <div className="project-name">SAP Intelligent Operations Hub</div>
        <span className="tech">Tech Stack :- </span>
        <span className="tech-stack">
          SAP UI5 | OData | ABAP | SAP Fiori | Node.js | AI Integration
        </span>
        <div className="project-description">
          <ul>
            <li>
              A cross-module AI-powered dashboard built on SAP UI5 and Fiori
              that enables users to interact with live SAP data across SD, MM,
              FI, and HR modules using natural language.
            </li>
            <li>
              Users can type queries like "Show me open purchase orders from
              last week over ₹50,000" and the system intelligently converts
              that into a live OData call and renders the result in real time.
            </li>
            <li>
              The AI layer sits as a Node.js middleware that takes natural
              language input, processes it using an AI model, and generates
              structured OData queries with the right filters, expansions, and
              selections — executed against SAP Gateway services.
            </li>
            <li>
              Backend exposes OData services for SalesOrderSet,
              PurchaseOrderSet, GLAccountSet, and EmployeeSet — demonstrating
              full-stack SAP capability with a practical AI layer on top.
            </li>
          </ul>
        </div>
        <div className="project-check">
          <button
            onClick={() =>
              window.open("https://github.com/rupeshpatil1702", "_blank")
            }
          >
            Check Now
          </button>
        </div>
      </div>

      <div className="project-build">
        <div className="project-name">RF Application — WM Transfer Orders</div>
        <span className="tech">Tech Stack :- </span>
        <span className="tech-stack">SAP Module Pool | ABAP | WM Module</span>
        <div className="project-description">
          <ul>
            <li>
              Developed an RF application in the SAP WM module using Module
              Pool programming for efficient creation of Transfer Orders on
              the shop floor.
            </li>
            <li>
              Enabled real-time data entry through RF devices, significantly
              reducing dependency on manual processes and achieving 40%
              reduction in manual processing time.
            </li>
            <li>
              Screen-based Module Pool design ensured a smooth, guided user
              experience optimized for RF device constraints, improving overall
              warehouse efficiency and accuracy.
            </li>
          </ul>
        </div>
        <div className="project-check">
          <button
            onClick={() =>
              window.open("https://github.com/rupeshpatil1702", "_blank")
            }
          >
            Check Now
          </button>
        </div>
      </div>

      {/* ===================== COLLEGE PROJECTS ===================== */}

      {/* <div className="project-build">
        <div className="project-name">Job Portal</div>
        <span className="tech">Tech Stack :- </span>
        <span className="tech-stack">
          React Js | Node Js | MongoDB | Express Js
        </span>
        <div className="project-description">
          <ul>
            <li>Comprehensive web application connecting job seekers with employers.</li>
            <li>Users can create accounts, manage profiles, upload resumes, and browse job listings.</li>
            <li>Employers get an intuitive dashboard to post jobs, review applications, and communicate with candidates.</li>
            <li>Includes resume builder, real-time notifications, and responsive design across all devices.</li>
          </ul>
        </div>
        <div className="project-check">
          <button onClick={() => window.open("https://github.com/rupeshpatil1702/Job-Portal", "_blank")}>
            Check Now
          </button>
        </div>
      </div> */}

      {/* <div className="project-build">
        <div className="project-name">Crop Recommendation System</div>
        <span className="tech">Tech Stack :- </span>
        <span className="tech-stack">Python</span>
        <div className="project-description">
          <ul>
            <li>Innovative web application helping farmers decide which crops to plant based on soil and environmental conditions.</li>
            <li>Analyzes parameters like soil type, temperature, rainfall, and humidity to recommend suitable crops.</li>
            <li>Provides insights on best farming practices, crop rotation strategies, and pest management.</li>
          </ul>
        </div>
        <div className="project-check">
          <button onClick={() => window.open("https://github.com/rupeshpatil1702/Crop-Recommendation-System", "_blank")}>
            Check Now
          </button>
        </div>
      </div> */}

      {/* <div className="project-build">
        <div className="project-name">Crypto Market Application</div>
        <span className="tech">Tech Stack :- </span>
        <span className="tech-stack">React Js | HTML | CSS | REST APIs</span>
        <div className="project-description">
          <ul>
            <li>Real-time cryptocurrency data and analytics application built with ReactJS.</li>
            <li>Monitors latest prices, market capitalization, and trends using API integration.</li>
            <li>Displays historical market trends through dynamic graphs with responsive design across all devices.</li>
          </ul>
        </div>
        <div className="project-check">
          <button onClick={() => window.open("https://github.com/rupeshpatil1702/cryptoapp.git", "_blank")}>
            Check Now
          </button>
        </div>
      </div> */}

    </div>
  );
};

export default Project;