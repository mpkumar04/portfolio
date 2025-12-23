import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Dart", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Canva", img: "https://img.icons8.com/color/48/canva.png" },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Power BI", img: "https://img.icons8.com/color/48/power-bi.png" },
    { name: "Photoshop", img: "https://img.icons8.com/color/48/adobe-photoshop.png" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="skill-inner">
                  <img src={skill.img} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .skills-section {
          padding: var(--spacing-xl) 0;
          background: var(--bg-primary);
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.6rem;
          margin-top: 2.5rem;
        }

        .skill-card {
          flex: 1 1 90px; /* flexible width, min 90px */
          max-width: 120px; /* optional max width */
          height: auto; /* auto height */
          perspective: 1000px;
        }

        .skill-inner {
          width: 100%;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          transform-style: preserve-3d;
          border-radius: 12px;
          background: var(--bg-tertiary);
        }

        .skill-card:hover .skill-inner {
          transform: rotateY(15deg) rotateX(10deg) scale(1.1);
          box-shadow: 0 0 20px rgba(99,102,241,0.7), 0 10px 25px rgba(99,102,241,0.3);
        }

        .skill-inner img {
          width: 38px;
          height: 38px;
          margin-bottom: 0.4rem;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .skill-inner span {
          font-size: 0.78rem;
          color: var(--text-secondary);
          text-align: center;
          transition: color 0.3s ease;
        }

        .skill-card:hover span {
          color: var(--primary);
        }

        @media (max-width: 640px) {
          .skill-card {
            flex: 1 1 70px; /* smaller cards on mobile */
          }

          .skill-inner img {
            width: 28px;
            height: 28px;
          }

          .skill-inner span {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
