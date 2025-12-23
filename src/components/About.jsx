import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About <span className="text-gradient">Me</span></h2>

                    <div className="about-grid">
                        <div className="about-text">
                            <p>
                                Hello! I’m Pravin Kumar, a Management of Information Systems student at NSBM Green University, Sri Lanka.
                                I aim to build products that are not only functional but also meaningful for users.
                            </p>
                            <p>
                                With hands-on experience in web and mobile app development (React, Flutter) and a growing focus on UI/UX design,
                                I create impactful solutions. I'm currently expanding my skills in modern frameworks and design thinking.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .about-section {
          padding: var(--spacing-xl) 0;
          background: var(--bg-secondary);
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-lg);
          text-align: center;
        }
        
        .about-grid {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .skill-tag {
          padding: 0.5rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 999px;
          font-size: 0.9rem;
          color: var(--text-primary);
          transition: border-color 0.2s;
        }
        
        .skill-tag:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
      `}</style>
        </section>
    );
};

export default About;
