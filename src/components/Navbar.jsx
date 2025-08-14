import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Resume", path: "/resume" },
  { name: "Articles", path: "/articles" },
  { name: "Coding", path: "/coding" },
  { name: "Contact", path: "/contact" }
];

function Navbar() {
  const location = useLocation();

  return (
    <motion.nav className="navbar" initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7 }}>
      <div className="nav-logo">Vasigaran.dev</div>
      <ul className="nav-links">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link to={item.path} className={location.pathname === item.path ? "nav-link active" : "nav-link"}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
export default Navbar;

