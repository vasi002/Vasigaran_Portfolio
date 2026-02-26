// import React from "react";
// import { motion } from "framer-motion";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { Typewriter } from "react-simple-typewriter";
// import ParticleBackground from "../components/ParticleBackground";
// import GradientBlobs from "../components/GradientBlobs";

// import "./Hero.module.css";

// function Hero() {
//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   return (
//     <div className="hero-container" style={{ height: "100vh", position: "relative", backgroundColor: "#0f0f0f" }}>
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           fullScreen: { enable: false },
//           background: { color: "#0f0f0f" },
//           particles: {
//             number: { value: 50 },
//             color: { value: "#00ffea" },
//             shape: { type: "circle" },
//             opacity: { value: 0.5 },
//             size: { value: 3 },
//             move: { enable: true, speed: 1, outModes: { default: "bounce" } },
//             links: { enable: true, color: "#00ffea", distance: 150, opacity: 0.4 }
//           },
//           interactivity: {
//             events: { onHover: { enable: true, mode: "repulse" }, resize: true },
//             modes: { repulse: { distance: 100 } }
//           },
//         }}
//         style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}
//       />

//       <div className="hero-content" style={{ position: "relative", zIndex: 1, padding: "2rem", textAlign: "center", color: "white" }}>
//         <motion.h1 initial={{ opacity: 1, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ fontSize: "3rem", marginBottom: "1rem" }}>
//           Hi, I'm Vasigaran Ravi
//         </motion.h1>

//         <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
//           Software Engineer specializing in Web Development, Automation Testing & AI Solutions
//         </motion.p>

//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
//           <a href="/resume" className="cta-btn">Download Resume</a>
//           <a href="/projects" className="cta-btn">View Projects</a>
//           <a href="/contact" className="cta-btn">Contact Me</a>
//         </motion.div>
        
//       </div>

//       <Canvas style={{ height: 300, width: 300, position: "absolute", bottom: 50, right: 50 }}>
//         <OrbitControls enableZoom={false} />
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 2, 2]} />
//         <mesh>
//           <boxGeometry args={[1.5, 1.5, 1.5]} />
//           <meshStandardMaterial color="#00ffea" wireframe />
//         </mesh>
//       </Canvas>
//     </div>
//   );
// }
// export default Hero;


import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./Hero.module.css";

function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className={styles.hero}>
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 40 },
            color: { value: "#00ffea" },
            links: { enable: true, color: "#00ffea", distance: 150 },
            move: { enable: true, speed: 1 },
          },
        }}
        className={styles.particles}
      />

      {/* Left Content */}
      <div className={styles.heroLeft}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className={styles.highlight}>Vasigaran Ravi</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={styles.role}
        >
          Software Engineer | Web Developer | Automation Tester
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className={styles.description}
        >
          I build scalable web applications, automate workflows, and develop 
          intelligent solutions using modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className={styles.buttons}
        >
          <a href="/projects" className={styles.primaryBtn}>View Projects</a>
          <a href="/contact" className={styles.secondaryBtn}>Contact Me</a>
          <a href="https://www.linkedin.com/in/vasigaran-r-948ab8203/" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>LinkedIn</a>
          <a href="https://github.com/vasi002" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>GitHub</a>
          <a href="https://www.instagram.com/mr_vasi._/?next=%2F" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>Instagram</a>

        </motion.div>
      </div>

      {/* Right 3D Element */}
      <div className={styles.heroRight}>
        <Canvas style={{ height: 300, width: 300 }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <mesh rotation={[0.4, 0.4, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#00ffea" wireframe />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

export default Hero;