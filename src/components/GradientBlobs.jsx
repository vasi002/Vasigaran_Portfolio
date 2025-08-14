import React from "react";
import { motion } from "framer-motion";
import "./GradientBlobs.css";

function GradientBlobs() {
  return (
    <div className="blobs-container">
      <motion.div className="blob blob1" animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="blob blob2" animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
    </div>
  );
}

export default GradientBlobs;
