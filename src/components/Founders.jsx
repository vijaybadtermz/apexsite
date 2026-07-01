import React from "react";
import { FaLinkedin } from "react-icons/fa";

import { CiMail } from "react-icons/ci";
import './css/founders.css';

import founder1 from "../assets/founders/founder1.png";
import founder2 from "../assets/founders/founder2.png";

const founders = [
  {
    name: "Vijay",
    role: "Co-Founder & Full Stack Developer",
    image: founder1,
    bio: "Builds scalable web applications, mobile apps and business systems with a strong focus on performance and user experience.",
    linkedin: "#",
    email: "mailto:you@apexeglobals.com",
  },
  {
    name: "Jaish shankar",
    role: "Co-Founder & Software Engineer",
    image: founder2,
    bio: "Focuses on product architecture, backend systems, automation and AI-powered business solutions.",
    linkedin: "#",
    email: "mailto:brother@apexeglobals.com",
  },
];

export default function Founders() {
  return (
    <section className="section-spacing">
      <div className="container">

        <div className="section-head">
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">
            Meet the founders building Apexeglobals.
          </h2>

          <p className="section-subtitle">
            We work directly with every client—from planning to launch—to ensure
            every product delivers measurable business value.
          </p>
        </div>

        <div className="founders-grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <img
                src={founder.image}
                alt={founder.name}
                className="founder-image"
              />

              <div className="founder-content">

                <h3>{founder.name}</h3>

                <span className="founder-role">
                  {founder.role}
                </span>

                <p>
                  {founder.bio}
                </p>

                <div className="founder-actions">
                  <a href={founder.linkedin}>
                    <FaLinkedin size={18} />
                  </a>

                  <a href={founder.email}>
                    <CiMail size={18} />
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}