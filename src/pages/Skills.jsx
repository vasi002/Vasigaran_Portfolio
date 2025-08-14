import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillCategories = {
  Frontend: ["HTML", "CSS", "Bootstrap"],
  Backend: ["Java", "Python"],
  Testing: ["Selenium", "Postman", "JIRA"],
  AI_Tools: ["PyTorch", "OpenCV"]
};

function Skills() {
  return (
    <div className="skills-container">
      <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        My Skills
      </motion.h2>

      <div className="skills-grid">
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <motion.div
            key={category}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{category}</h3>
            <ul>
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
