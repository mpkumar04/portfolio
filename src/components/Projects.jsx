import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import FlutterImg from '../assets/flutter.jpg';
import EcomImg from '../assets/ecom.png';
import MernImg from '../assets/mern.png';

const projects = [
  {
    title: "WasteFoodManagement App",
    description: "Mobile app for food waste management with donation tracking and community support.",
    tags: ["Flutter", "Dart", "Firebase"],
    image: FlutterImg,
    repoLink: "https://github.com/mpkumar04/wastefoodmanagement.git"
  },
  {
    title: "Employee Management System",
    description: "Full-stack employee management solution built with the MERN stack.",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    image: MernImg,
    repoLink: "https://github.com/mpkumar04/MERN-Employee-Management-System.git"
  },
  {
    title: "Mini E-Commerce Website",
    description: "Full-stack mini e-commerce platform.",
    tags: ["React", "Node.js", "Express"],
    image: EcomImg,
    repoLink: "https://github.com/mpkumar04/Mini-Ecommerce-Website.git"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="text-gradient">Work</span></h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="project-image"
                style={{
                  background: typeof project.image === "string" && project.image.includes("linear-gradient")
                    ? project.image
                    : `url(${project.image}) center/cover no-repeat`
                }}
              ></div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <div className="see-more-container">
          <a
            href="https://github.com/mpkumar04"
            target="_blank"
            rel="noopener noreferrer"
            className="see-more-button"
          >
            See More
          </a>
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: var(--spacing-xl) 0;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px) scale(1.02);
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.4), 0 0 40px rgba(99, 102, 241, 0.25);
        }
        .project-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
          filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.7));
        }
        .project-content {
          padding: 1.5rem;
          transition: color 0.3s ease;
        }
        .project-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .project-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        .project-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .project-tags span {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          background: var(--bg-tertiary);
          border-radius: 4px;
          color: #d1d5db;
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .project-links a {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }
        .project-links a:hover {
          color: var(--primary);
        }
        .see-more-container {
          text-align: center;
          margin-top: 2.5rem;
        }
        .see-more-button {
          display: inline-block;
          padding: 0.6rem 1.5rem;
          background: var(--primary);
          color: #fff;
          font-weight: 500;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .see-more-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default Projects;
