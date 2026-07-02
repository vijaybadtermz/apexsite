import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { to: '/', hash: 'services', label: 'Services', isAnchor: true },
    { to: '/', hash: 'process', label: 'Process', isAnchor: true },
    { to: '/', hash: 'portfolio', label: 'Work', isAnchor: true },
    { to: '/products', label: 'Products', isAnchor: false },
    { to: '/estimator', label: 'Estimator', isAnchor: false },
    { to: '/', hash: 'contact', label: 'Contact', isAnchor: true }
  ];

  const handleLinkClick = (e, link) => {
    if (link.isAnchor) {
      e.preventDefault();
      setMobileMenuOpen(false);

      if (location.pathname === '/') {
        const element = document.getElementById(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        navigate('/', { state: { scrollTo: link.hash } });
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed-header">
      <div className="container">
        <div className="header-glass header-container">
          <Link
            to="/"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="brand-logo"
            aria-label="Apexeglobals home"
          >
            <div className="logo-badge">AG</div>
            <div className="brand-lockup">
              <span className="brand-text">Apexeglobals</span>
              <span className="brand-caption">Digital product engineering</span>
            </div>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map((link) => {
              const isActive = link.isAnchor 
                ? location.pathname === '/' 
                : location.pathname === link.to;

              return link.isAnchor ? (
                <a
                  key={link.hash}
                  href={`#${link.hash}`}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`nav-link ${isActive ? 'active-link' : ''}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`nav-link ${isActive ? 'active-link' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, { to: '/', hash: 'contact', isAnchor: true })}
              className="btn-agency btn-primary nav-cta desktop-cta"
            >
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
            link.isAnchor ? (
              <a
                key={link.hash}
                href={`#${link.hash}`}
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.label}
              </Link>
            )
          ))}
          <a
            href="#contact"
            className="btn-agency btn-primary mobile-nav-btn"
            onClick={(e) => handleLinkClick(e, { to: '/', hash: 'contact', isAnchor: true })}
          >
            Start your project
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
