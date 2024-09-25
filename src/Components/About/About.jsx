// import React from "react";
// import "./About.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "./profile.jpg";

// const skills = [
//   { name: "Java", proficiency: 90 },
//   { name: "DSA", proficiency: 95 },
//   { name: "SQL", proficiency: 80 },
//   { name: "HTML & CSS", proficiency: 80 },
//   { name: "Python", proficiency: 90 },
//   { name: "Jaa Js", proficiency: 60 },
//     { name: "Node Js", proficiency: 60 },
//   { name: "React Js", proficiency: 60 },

// ];

// const About = () => {
//   return (
//     <div id="about" className="about">
//       <div className="about-title">
//         <h1>About Me</h1>
//         <img src={theme_pattern} alt="Theme pattern" />
//       </div>
//       <div className="about-sections">
//         <div className="about-left">
//           <img
//             src={profile_img}
//             alt="Profile of Rupesh Patil"
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>
//         <div className="about-right">
//           <div className="about-para">
//             <p>
//               Hi! I am Rupesh Patil, an MCA student from Pimpri Chinchwad
//               College of Engineering, Pune. I have experience in software and
//               web development. I am passionate about exploring new technologies
//               and implementing creative solutions to common problems.
//               gfg
// lorem100
//               gfgdfg
//             </p>
//           </div>
//           {/* <div className="about-skills">
//             {skills.map((skill) => (
//               <div className="about-skill" key={skill.name}>
//                 <p>{skill.name}</p>
//                 <div className="skill-bar">
//                   <div
//                     className="skill-fill"
//                     style={{ width: `${skill.proficiency}%` }}
//                   ></div>
//                 </div>
//                 <span className="skill-percentage">{skill.proficiency}%</span>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </div>
//       {/* <div className="about-achievements">
//         <div className="about-achievement">
//           <a
//             href="https://www.hackerrank.com/certificates/54bb23a8b312"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ textDecoration: "none", color: "inherit" }}
//           >
//             <h1>Python Developer</h1>
//             <p>HackerRank Certification Test</p>
//           </a>
//         </div>
//         <hr />

//         <div className="about-achievement">
//           <a
//             href="https://www.hackerrank.com/certificates/03292c0185b5"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ textDecoration: "none", color: "inherit" }}
//           >
//             <h1>Java Developer</h1>
//             <p>HackerRank Certification Test</p>
//           </a>
//         </div> */}
//       {/* </div> */}
//     </div>
//   );
// };

// export default About;




import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "./profile.jpg";

const skills = [
  { name: "Java", proficiency: 90 },
  { name: "DSA", proficiency: 95 },
  { name: "SQL", proficiency: 80 },
  { name: "HTML & CSS", proficiency: 80 },
  { name: "Python", proficiency: 90 },
  { name: "JavaScript", proficiency: 60 },
  { name: "Node Js", proficiency: 60 },
  { name: "React Js", proficiency: 60 },
];

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
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
              Hi! I am Rupesh Patil, an MCA student from Pimpri Chinchwad
              College of Engineering, Pune. I have experience in software and
              web development. I am passionate about exploring new technologies
              and implementing creative solutions to common problems.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem quos, fugiat impedit maxime ut, pariatur praesentium autem distinctio eaque eius similique, ipsam iure non mollitia necessitatibus aliquam minus! Quia!lorem100
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit non aperiam nesciunt mollitia voluptatibus saepe iure nostrum, aut esse deserunt vero, omnis neque consequuntur sequi necessitatibus eligendi quia cumque beatae. Optio cupiditate unde labore praesentium rerum natus rem quaerat enim facilis, provident est fugit mollitia obcaecati magni a ut non earum repellendus beatae similique at corporis assumenda excepturi? Odio error provident quisquam exercitationem expedita, veniam nobis eum aut vel voluptatem impedit numquam repudiandae. Consectetur laboriosam rem soluta voluptatem explicabo odit quidem impedit incidunt, officia sunt culpa reprehenderit magni quod! Quod voluptatem ea ab consectetur officia? Consectetur voluptates vitae sapiente praesentium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
