import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Contact Me
      </motion.h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <motion.button whileTap={{ scale: 1 }} className="send-btn"type="submit">
          Send Message
        </motion.button>
      </form>

      {submitted && (
        <motion.div className="confirmation" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          ✅ Your message has been sent!
        </motion.div>
      )}

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/vasigaran-r-948ab8203/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/vasi002" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.instagram.com/mr_vasi._/?next=%2F" target="_blank" rel="noopener noreferrer">Instagram</a>
        <button onClick={() => navigator.clipboard.writeText("vasigaranr@gmail.com")}>📋 Copy Email</button>
      </div>
    </div>
  );
}
export default Contact;
