import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <div className="contact-link">
          <h2>GitHub</h2>
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/example
          </a>
        </div>
        <div className="contact-link">
          <h2>LinkedIn</h2>
          <a
            href="https://linkedin.com/in/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/example
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
