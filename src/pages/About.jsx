import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="gradient-blur"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="about-bio"
      >
        I'm Vasigaran Ravi, a versatile and detail-oriented Software Engineer proficient in software development,
        manual and automated software testing, and web technologies. I enjoy combining my analytical mindset with
        hands-on technical work to build and test scalable, responsive web solutions.
      </motion.p>

      <motion.div className="timeline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        <div className="timeline-item">
          <div className="timeline-date">Dec 2024 – Present</div>
          <div className="timeline-content">
            <h4>Software Engineer at Altaradius Technologies Pvt Ltd,Chennai</h4>
            <ul>
              <li>Performed software development and Selenium testing across various projects</li>
              <li>Executed manual and automated testing, built test cases</li>
              <li>Worked with Microsoft SQL, JIRA, and built responsive UI with HTML, CSS, Bootstrap</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default About;
