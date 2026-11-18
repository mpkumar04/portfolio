import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge">
            <span className="badge-dot"></span>
            Available for freelance
          </div>
          <h1>
            Hi, I'm Pravin <br />
            <span className="text-gradient">Web & App Developer</span>
          </h1>
          <p className="hero-description text-secondary">
            I'm a UI/UX Designer and Full Stack Developer from Sri Lanka.
            Passionate about crafting seamless digital experiences by blending design, technology, and business insights.
          </p>

          <div className="hero-actions">
            <a href="/Pravin_Kumar_CV.pdf" download className="btn-primary">
              Download CV
            </a>

            <Link to="/ai-consult" className="btn-secondary">
              <Bot size={20} />
              AI Consult
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="visual-card">
            <div className="code-block">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <pre>
                <code>
                  <span className="keyword">const</span>{' '}
                  <span className="function">createMagic</span> = () =&gt; &#123;
                  {'\n'}  <span className="keyword">return</span> (
                  <span className="string">"Excellence"</span>);
                  {'\n'}&#125;
                </code>
              </pre>

            </div>
            <div className="card-glow"></div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 4rem 0;
        }

        .hero::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          top: -100px;
          right: -100px;
          z-index: -1;
          pointer-events: none;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 999px;
          font-size: 0.875rem;
          width: fit-content;
          color: var(--text-secondary);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
        }

        .hero h1 {
          font-size: 4rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: 1.125rem;
          max-width: 500px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-weight: 500;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--text-secondary);
        }

        .visual-card {
          position: relative;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2rem;
          transform: rotate(-3deg);
          transition: transform 0.5s ease;
        }
        
        .visual-card:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .code-header {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .red { background: #ef4444; }
        .yellow { background: #eab308; }
        .green { background: #22c55e; }

        pre {
          font-family: monospace;
          font-size: 1rem;
          color: #e5e7eb;
        }

        .keyword { color: #c084fc; } /* Violet */
        .function { color: #60a5fa; } /* Blue */
        .string { color: #34d399; } /* Green */

        .card-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent);
          pointer-events: none;
          border-radius: inherit;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-content {
            align-items: center;
          }
          
          .hero h1 {
            font-size: 3rem;
          }
          
          .badge {
            margin: 0 auto;
          }
          
          .hero-visual {
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
