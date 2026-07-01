import React from 'react';
import * as Icons from 'lucide-react';
import { whyUsData } from '../content/whyUs';

export default function WhyUs() {
  return (
    <section id="why-us" className="section-spacing why-us-section">
      <div className="container">
        <div className="why-us-shell">
          <div className="why-us-intro">
            <span className="section-tag">Why Apexeglobals</span>
            <h2 className="section-title">A premium site is only valuable when the delivery behind it is strong.</h2>
            <p className="section-subtitle">
              We pair elevated presentation with practical engineering discipline, so what looks good also
              performs, converts, and stays maintainable.
            </p>
          </div>

          <div className="grid-3 why-us-grid">
            {whyUsData.map((proposition, index) => {
              const IconComponent = Icons[proposition.iconName] || Icons.ShieldCheck;

              return (
                <article key={proposition.id} className={`agency-card why-us-card animate-fade-in-up delay-${(index % 3) + 1}`}>
                  <div className={`card-icon-container ${proposition.glowClass}`}>
                    <IconComponent size={26} />
                  </div>
                  <h3 className="why-us-card-title">{proposition.title}</h3>
                  <p className="why-us-card-desc">{proposition.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
