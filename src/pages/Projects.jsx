import React from "react";
import "./Projects.css";
import GradientBlobs from "../components/GradientBlobs";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Pharmacy Website",
    description: "Built with HTML, CSS, Bootstrap. Fully responsive and accessible.",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "#",
    github: "#"
  },
   {
    title: "Ecommerce Website testing",
    description: "Website tesing in Automation by using Selenium in java",
    tech: ["JAVA","Selenium"],
    link: "#",
    github: "#"
  },
  {
    title: "Ecommerce Website testing",
    description: "Website tesing in Automation by using Selenium in java",
    tech: ["JAVA","Selenium"],
    link: "#",
    github: "#"
  },
  {
    title: "Object Detection System",
    description: "YOLOv8 + PyTorch model to detect medical items in images.",
    tech: ["Python", "YOLOv8", "PyTorch"],
    link: "#",
    github: "#"
  }
];

function Projects() {
  return (
    <section className="projects">
      <GradientBlobs />
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-item">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noreferrer">Live</a>
              <a href={project.github} target="_blank" rel="noreferrer">Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
