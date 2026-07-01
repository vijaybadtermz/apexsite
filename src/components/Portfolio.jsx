import React from 'react';
import * as Icons from 'lucide-react';
import { portfolioData } from '../content/portfolio';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-spacing portfolio-section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Selected Work</span>
          <h2 className="section-title">Product directions built around actual operations.</h2>
          <p className="section-subtitle">
            These concepts show how we bring together interface polish, team workflows, reporting, and
            platform-specific engineering.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioData.map((project, index) => {
            const IconComponent = Icons[project.iconName] || Icons.Code;

            return (
              <article key={project.id} className={`agency-card portfolio-card animate-fade-in-up delay-${(index % 2) + 1}`}>
                <div className="portfolio-banner-container" style={{ background: project.gradient }}>
                  <img
                    src={project.image}
                    alt={`${project.title} interface`}
                    className="portfolio-banner-img"
                  />
                  <div className="portfolio-banner-overlay"></div>
                  <span className="portfolio-banner-tag">{project.tag}</span>
                  <div className="portfolio-banner-icon">
                    <IconComponent size={22} />
                  </div>
                </div>

                <div className="portfolio-details">
                  <div className="portfolio-meta-row">
                    <span className="portfolio-industry">{project.industry}</span>
                    <span className="portfolio-outcome">{project.outcome}</span>
                  </div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-desc">{project.description}</p>

                  <div className="portfolio-tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="portfolio-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
