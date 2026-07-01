import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#portfolio', label: 'Work' },
    { href: '#products', label: 'Products' },
    { href: '#estimator', label: 'Estimator' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="fixed-header">
      <div className="container">
        <div className="header-glass header-container">
          <a href="#top" className="brand-logo" aria-label="Apexeglobals home">
            <div className="logo-badge">AG</div>
            <div className="brand-lockup">
              <span className="brand-text">Apexeglobals</span>
              <span className="brand-caption">Digital product engineering</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn-agency btn-primary nav-cta desktop-cta">
              Book a strategy call
              <ArrowRight size={16} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-agency btn-primary mobile-nav-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start your project
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
