import React from 'react';
import { Compass, DraftingCompass, Rocket } from 'lucide-react';

const processSteps = [
  {
    id: 'discover',
    title: 'Discover The Real Bottleneck',
    description:
      'We start by mapping your operations, user pain points, and delivery goals so the product scope solves an actual business constraint.',
    icon: Compass
  },
  {
    id: 'design',
    title: 'Design Around Speed And Scale',
    description:
      'We shape clear user journeys, solid technical architecture, and delivery priorities that keep the product lean while leaving room to grow.',
    icon: DraftingCompass
  },
  {
    id: 'launch',
    title: 'Launch With Operational Confidence',
    description:
      'From QA to rollout planning, we ship systems your team can actually run, support, and extend without friction.',
    icon: Rocket
  }
];

export default function Process() {
  return (
    <section id="process" className="section-spacing process-section">
      <div className="container">
        <div className="process-shell">
          <div className="process-intro">
            <span className="section-tag">Delivery Model</span>
            <h2 className="section-title process-title">A delivery rhythm built for ambitious teams.</h2>
            <p className="section-subtitle process-subtitle">
              Strong software design is not just visual polish. It is the right flow, the right architecture,
              and the right decision-making cadence from day one.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.id} className="agency-card process-card">
                  <div className="process-step">{`0${index + 1}`}</div>
                  <div className="card-icon-container amber-glow">
                    <Icon size={28} />
                  </div>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-desc">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
