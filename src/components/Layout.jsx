import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="layout">
      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo text-gradient">DevPortfolio</Link>

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>

          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <HashLink smooth to="/#about" onClick={() => setIsMenuOpen(false)}>About</HashLink>
            <HashLink smooth to="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</HashLink>
            <Link to="/ai-consult" className="btn-nav" onClick={() => setIsMenuOpen(false)}>AI Consult</Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-info">
            <h3 className="text-gradient">DevPortfolio</h3>
            <p className="text-secondary">Building the future with AI and React.</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/mpkumar04" className="social-icon"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/pravin-kumar-3781b4280" className="social-icon"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/im.prxvin?igsh=YzM2dm80azk1OTF5&utm_source=qr" className="social-icon"><Instagram size={20} /></a>
          </div>
          <div className="footer-copy text-secondary">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          display: flex;
          align-items: center;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .logo {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.5rem;
        }

        .nav-links {
          display: flex;
          gap: var(--spacing-lg);
          align-items: center;
        }
        
        .nav-links a {
          font-weight: 500;
          font-size: 0.95rem;
        }
        
        .nav-links a:hover {
          color: var(--primary);
        }
        
        .btn-nav {
          background: rgba(139, 92, 246, 0.1);
          color: var(--primary) !important;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .btn-nav:hover {
          background: rgba(139, 92, 246, 0.2);
        }

        .mobile-toggle {
          display: none;
        }

        .main-content {
          padding-top: 80px;
          min-height: calc(100vh - 160px); /* Smaller footer */
        }

        .footer {
          border-top: 1px solid var(--border-color);
          padding: 1.5rem 0; /* Reduced padding */
          background: var(--bg-secondary);
          margin-top: 1.5rem;
        }
        
        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 0.8rem; /* Reduced spacing */
          align-items: center;
          text-align: center;
        }
        
        .footer-socials {
          display: flex;
          gap: 1rem;
        }
        
        .social-icon {
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        
        .social-icon:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
          }
          
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: var(--bg-secondary);
            flex-direction: column;
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
            transform: translateY(-150%);
            transition: transform 0.3s ease-in-out;
          }
          
          .nav-links.open {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
