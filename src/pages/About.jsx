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

      <motion.div className="timeline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1}}>
        <div className="timeline-item">
          <div className="timeline-date">June 2024 – Present</div>
          <div className="timeline-content">
            <h4>Software Engineer at Altaradius Technologies Pvt Ltd,Chennai</h4>
            <ul>
                <li>Jun 2024 – Present (Intern:Jun–Dec 2024; Promoted to Full-time).</li>
                <li>Built reusable automation libraries & Page Object Models, reducing script maintenance effort by 25% and accelerating onboarding for new team members.</li>
                <li>Optimized backend validation by executing SQL-based test data setup, cutting release preparation time by 20%.</li>
                <li>Performed comprehensive API testing with Postman/SoapUI, identifying critical defects 15% earlier in the release cycle.</li>
                <li>Collaborated with cross-functional Agile teams to improve sprint velocity and adoption of TDD practices, contributing to a faster release cycle by 10%.</li>
                <li>Developed responsive UI components (HTML/CSS/Bootstrap), improving mobile accessibility score by 25%.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default About;
