import React from "react";
import { motion } from "framer-motion";
import "./Articles.css";

const articles = [
  { title: "Coming Soon: Blog Integration", summary: "Stay tuned for technical blogs and project breakdowns." }
];

function Articles() {
  return (
    <div className="articles-container">
      <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Articles
      </motion.h2>
      <div className="articles-list">
        {articles.map((a, i) => (
          <motion.div className="article-card" key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1 }}>
            <h3>{a.title}</h3>
            <p>{a.summary}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Articles;
