import React from "react";
import { motion } from "framer-motion";
import "./CodingProfiles.css";

const profiles = [
  { name: "GitHub", url: "https://github.com/vasi002", color: "#fff", icon: "🐙" },
  { name: "LeetCode", url: "https://leetcode.com/", color: "#f89f1b", icon: "🧠" },
  { name: "Codeforces", url: "https://codeforces.com/", color: "#1f8acb", icon: "⚔️" },
  { name: "HackerRank", url: "https://www.hackerrank.com/", color: "#2ec866", icon: "🏆" }
];

function CodingProfiles() {
  return (
    <div className="coding-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Coding Profiles
      </motion.h2>

      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.url}
            className="profile-card"
            style={{ borderColor: profile.color }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="profile-icon">{profile.icon}</span>
            <span>{profile.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
export default CodingProfiles;