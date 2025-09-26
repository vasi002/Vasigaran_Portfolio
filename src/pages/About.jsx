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
              <li>Joined as an Intern (Jun–Dec 2024) and transitioned to a full-time Software Engineer role in Dec 2024.</li>
              <li> Performed end-to-end software development and testing activities across multiple projects.</li>
              <li> Executed both manual and automated testing using Selenium, and prepared comprehensive test cases.</li>
              <li> Worked with Microsoft SQL for test data validation and backend verification.</li>
              <li> Developed responsive and user-friendly web application interfaces using HTML, CSS, and Bootstrap.</li>
              <li> Identified, documented,and tracked software defects using JIRA, ensuring timely resolution.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default About;
