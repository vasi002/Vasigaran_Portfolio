
import React from "react";
import { motion } from "framer-motion";
import "./Articles.css";

const articles = [
  {
    title: "Behind the Code: How I Built a Pharmacy Website",
    seoTitle:
      "Building a Responsive Pharmacy Web Application with Bootstrap & UI Testing",
    intro:
      "While working on my Pharmacy Website project, I aimed to create a responsive, user-friendly interface that works seamlessly across devices. Using HTML, CSS, and Bootstrap 5, I focused on clean design and accessibility. In this post, I’ll take you through the development process, UI testing strategies, and lessons I learned about creating a smooth online shopping experience.",
  },
  {
    title: "My Journey into Software Engineering",
    seoTitle:
      "From College Projects to Industry Work: My Journey as a Software Engineer",
    intro:
      "From writing my first lines of Java code in college to working on real-world projects at Altaradius Technologies, my software engineering journey has been both challenging and rewarding. Along the way, I’ve developed skills in development, manual testing, and automation with Selenium, while learning to adapt quickly to new technologies. This is my story so far — and the exciting road ahead.",
  },
  {
    title: "Optimizing AI Performance in Real-Time Object Detection",
    seoTitle:
      "Boosting YOLOv8 Object Detection Speed & Accuracy with PyTorch & OpenCV",
    intro:
      "Real-time object detection is powerful — but speed and accuracy are often at odds. In my final year project, I implemented YOLOv8 with PyTorch and OpenCV, then fine-tuned performance metrics to achieve faster detection without compromising accuracy. Here’s how I approached optimization, the tools I used, and the results I achieved.",
  },
  {
    title: "The Top 5 Tools I Use Every Day as a Developer & Tester",
    seoTitle:
      "My Essential Developer & QA Toolkit — From Selenium to Postman",
    intro:
      "As a software engineer working across development and QA, I rely on a mix of tools that help me build, test, and deliver better software. Selenium WebDriver, Postman, JIRA, and other key platforms are part of my daily workflow. In this post, I’ll share my top five tools, how I use them, and why they’ve become indispensable.",
  },
  {
    title: "From Tutorial to Production: Deploying a Responsive Web Interface",
    seoTitle:
      "Turning Learning into Delivery — My Process for Deploying a Responsive Web App",
    intro:
      "Learning web development through courses and tutorials is one thing — delivering a real product is another. I took my skills from HTML, CSS, and Bootstrap practice projects and applied them to production-ready applications at work. In this article, I’ll walk you through my deployment process, testing approach, and tips for making the leap from learning to building for clients.",
  },
];

const Articles = () => {
  return (
    <section className="articles-page">
      <h1 className="articles-heading">Articles & Insights</h1>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <h2>{article.title}</h2>
            <h4 className="seo-title">{article.seoTitle}</h4>
            <p>{article.intro}</p>
            <a href="#" className="read-more">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
