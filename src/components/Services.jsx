import React from 'react';
import * as Icons from 'lucide-react';
import { servicesData } from '../content/services';

export default function Services() {
  return (
    <section id="services" className="section-spacing services-section">
      <div className="container">
        <div className="section-head section-head-split">
          <div>
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">From first website to full software ecosystem.</h2>
          </div>
          <p className="section-subtitle section-subtitle-side">
            We support two clear business situations: companies that still do not have proper digital
            systems, and smaller businesses that need a serious upgrade from outdated sites or weak software.
          </p>
        </div>

        <div className="grid-3 services-grid">
          {servicesData.map((service, index) => {
            const IconComponent = Icons[service.iconName] || Icons.HelpCircle;

            return (
              <article key={service.id} className={`agency-card service-card animate-fade-in-up delay-${(index % 3) + 1}`}>
                <div className="service-card-topline">
                  <div className={`card-icon-container ${service.glowClass}`}>
                    <IconComponent size={26} />
                  </div>
                  <span className="service-kicker">{service.kicker}</span>
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                <ul className="service-features-list">
                  {service.features.map((feature) => (
                    <li key={feature} className="service-feature-item">
                      <span className="feature-bullet">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
