// // import React from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import "./Navbar.css";

// // const navItems = [
// //   { name: "Home", path: "/" },
// //   { name: "About", path: "/about" },
// //   { name: "Projects", path: "/projects" },
// //   { name: "Skills", path: "/skills" },
// //   { name: "Resume", path: "/resume" },
// //   { name: "Articles", path: "/articles" },
// //   { name: "Coding", path: "/coding" },
// //   { name: "Contact", path: "/contact" }
// // ];

// // function Navbar() {
// //   const location = useLocation();

// //   return (
// //     <motion.nav className="navbar" initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7 }}>
// //       <div className="nav-logo">Vasigaran.dev</div>
// //       <ul className="nav-links">
// //         {navItems.map((item, idx) => (
// //           <li key={idx}>
// //             <Link to={item.path} className={location.pathname === item.path ? "nav-link active" : "nav-link"}>
// //               {item.name}
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </motion.nav>
// //   );
// // }
// // export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       {/* <div className="nav-logo">Vasigaran</div> */}
//       {/* <div className="nav-logo">
//   <span className="logo-icon">🤩</span>
//   <span className="logo-text">Vasi</span>
// </div> */}


//       {/* Desktop & Mobile Links */}
//       <div className={`nav-links ${isOpen ? "open" : ""}`}>
//         <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
//         <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
//         <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
//         <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
//         <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
//         <Link to="/articles" onClick={() => setIsOpen(false)}>Articles</Link>
//         <Link to="/coding" onClick={() => setIsOpen(false)}>Coding Profiles</Link>
//         <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
//       </div>

//       {/* Three-dot menu for mobile */}
//       <div
//         className={`three-dots ${isOpen ? "active" : ""}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      
      {/* Logo */}
      <div className="nav-logo">
        <span className="logo-text">Vasi.dev</span>
      </div>

      {/* Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
        <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
        <NavLink to="/resume" onClick={() => setIsOpen(false)}>Resume</NavLink>
        <NavLink to="/articles" onClick={() => setIsOpen(false)}>Articles</NavLink>
       <NavLink to="/coding" onClick={() => setIsOpen(false)}>Coding Profiles</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
      </div>

      {/* Mobile Menu */}
      <div
        className={`three-dots ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;