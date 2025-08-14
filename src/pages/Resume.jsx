import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Resume
      </motion.h2>
      <motion.div
        className="resume-preview"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <iframe src="/Resume.pdf" width="100%" height="600px" title="Resume PDF" />
      </motion.div>
      <motion.a
        href="/Resume.pdf"
        className="download-btn"
        download
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Download Resume
      </motion.a>
    </div>
  );
}
export default Resume;
