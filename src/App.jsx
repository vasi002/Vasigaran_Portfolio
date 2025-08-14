// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Articles from "./pages/Articles";
import CodingProfiles from "./pages/CodingProfiles";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/coding" element={<CodingProfiles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
