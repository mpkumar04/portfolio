import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="contact-wrapper"
        >
          <div className="contact-content">
            <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
            <p>
              Open to new opportunities in Web & App Development.
              Feel free to reach out via email or phone.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail className="text-accent" />
                <a href="mailto:pravinmpk2@gmail.com">pravinmpk2@gmail.com</a>
              </div>
              <div className="contact-item">
                <Phone className="text-accent" />
                <span>+94 703310110</span>
              </div>
              <div className="contact-item">
                <MapPin className="text-accent" />
                <span>Sri Lanka</span>
              </div>
            </div>

            <a href="mailto:pravinmpk2@gmail.com" className="btn-primary">
              Send Message
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-section {
          padding: var(--spacing-xl) 0;
          background: var(--bg-tertiary);
          margin-top: var(--spacing-xl);
        }

        .contact-wrapper {
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .contact-content {
          max-width: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .contact-details {
          display: flex;
          gap: 2rem;
          margin: 1rem 0;
          flex-wrap: wrap;
          justify-content: center;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
        }
        
        .contact-item a {
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        
        .contact-item a:hover {
          color: var(--primary);
        }

        .text-accent { color: var(--primary); }
      `}</style>
    </section>
  );
};

export default Contact;
