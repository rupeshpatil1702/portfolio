// import React, { useState, useRef } from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.svg";
// // import underline from '../../assets/nav_underline.svg';
// import AnchorLink from "react-anchor-link-smooth-scroll";
// // import logo from './Rupesh.svg';
// import menu_open from "../../assets/menu_open.svg";
// import menu_close from "../../assets/menu_close.svg";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const menuRef = useRef();

//   const openMenu = () => {
//     menuRef.current.style.right = "0";
//   };
//   const closeMenu = () => {
//     menuRef.current.style.right = "-350px";
//   };
//   return (
    
//       <div className="navbar">
//         <div className="rupesh">
//           <p>
//             <span className="gradient-text">R</span>upesh
//           </p>
//         </div>
//         {/* <img src={logo} alt="" height="108px" /> */}
//         <img
//           src={menu_open}
//           onClick={openMenu}
//           alt=""
//           className="nav-mob-open"
//         />
//         <ul ref={menuRef} className="nav-menu">
//           <img
//             src={menu_close}
//             onClick={closeMenu}
//             alt=""
//             className="nav-mob-close"
//           />

//           <li>
//             <AnchorLink className="anchor-link" href="#home">
//               <p
//                 className={menu === "home" ? "gradient-item" : ""}
//                 onClick={() => setMenu("home")}
//               >
//                 Home
//               </p>
//             </AnchorLink>
//             {/* Uncomment if you want an underline effect */}
//             {/* {menu === "home" ? <img src={underline} alt="" /> : null} */}
//           </li>

//           <li>
//             <AnchorLink className="anchor-link" offset={50} href="#about">
//               <p
//                 className={menu === "about" ? "gradient-item" : ""}
//                 onClick={() => setMenu("about")}
//               >
//                 About
//               </p>
//             </AnchorLink>{" "}
//             {/* {menu === "about" ? <img src={underline} alt="" /> : <></>} */}
//           </li>

//           <li>
//             <AnchorLink className="anchor-link" offset={50} href="#skills">
//               <p
//                 className={menu === "skills" ? "gradient-item" : ""}
//                 onClick={() => setMenu("skills")}
//               >
//                 Skills
//               </p>
//             </AnchorLink>{" "}
//             {/* {menu === "about" ? <img src={underline} alt="" /> : <></>} */}
//           </li>

//           <li>
//             <AnchorLink className="anchor-link" offset={50} href="#project">
//               <p
//                 className={menu === "project" ? "gradient-item" : ""}
//                 onClick={() => setMenu("project")}
//               >
//                 Projects
//               </p>
//             </AnchorLink>
//             {/* {menu === "project" ? <img src={underline} alt="" /> : <></>} */}
//           </li>
//           <li>
//             <AnchorLink className="anchor-link" offset={50} href="#contact">
//               <p
//                 className={menu === "contact" ? "gradient-item" : ""}
//                 onClick={() => setMenu("contact")}
//               >
//                 Contact
//               </p>
//             </AnchorLink>
//             {/* {menu === "contact" ? <img src={underline} alt="" /> : <></>} */}
//           </li>
//         </ul>
//         <div className="nav-connect">
//           {" "}
//           <AnchorLink className="anchor-link" offset={50} href="#contact">
//             {" "}
//             Connect With Me
//           </AnchorLink>
//         </div>
//      </div>
//   );
// };

// export default Navbar;


import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "project", "contact"];
      let currentSection = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight) {
            currentSection = section;
          }
        }
      });
      setMenu(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="rupesh">
        <p>
          <span className="gradient-text">R</span>upesh
        </p>
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        {["home", "about", "skills", "project", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink className="anchor-link" href={`#${item}`}>
              <p
                className={menu === item ? "gradient-item" : ""}
                onClick={() => setMenu(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </AnchorLink>
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
