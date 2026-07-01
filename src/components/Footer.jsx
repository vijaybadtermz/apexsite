import React from 'react';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://facebook.com/apexeglobals",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/apexeglobals",
  },

  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/apexeglobals",
  },
  {
    name: "Website",
    icon: FaGlobe,
    url: "https://apexeglobals.com",
  },
];


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
          {/* <p className="footer-brand-tag">
            Branded software systems for teams that want more than a template website.
          </p> */}
        </div>

        <div className="footer-socials">
  {socialLinks.map(({ name, icon: Icon, url }) => (
    <a
      key={name}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-social-link"
      aria-label={name}
    >
      <Icon size={16} />
      <span>{name}</span>
    </a>
  ))}
</div>

        <span className="footer-copyright">
          © {new Date().getFullYear()} Apexeglobals. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
