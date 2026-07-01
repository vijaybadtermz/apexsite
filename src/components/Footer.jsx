import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="brand-logo footer-brand-logo">
            <div className="logo-badge">AG</div>
            <div className="brand-lockup">
              <span className="brand-text">Apexeglobals</span>
              <span className="brand-caption">Digital product engineering</span>
            </div>
          </div>
          <p className="footer-brand-tag">
            Branded software systems for teams that want more than a template website.
          </p>
        </div>

        <div className="footer-links">
          <a href="#services" className="footer-link">
            Services
          </a>
          <a href="#process" className="footer-link">
            Process
          </a>
          <a href="#portfolio" className="footer-link">
            Work
          </a>
          <a href="#products" className="footer-link">
            Products
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>

        <span className="footer-copyright">
          © {new Date().getFullYear()} Apexeglobals. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
