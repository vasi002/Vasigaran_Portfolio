import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          number: { value: 90, density: { enable: true, area: 800 } },
          color: { value: ["#00ffff", "#ff00ff"] },
          shape: { type: ["circle", "triangle"] },
          opacity: {
            value: 0.6,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.2, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 3, size_min: 0.5, sync: false },
          },
          links: {
            enable: true,
            distance: 140,
            color: "#00ffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticleBackground;
