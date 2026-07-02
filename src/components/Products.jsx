import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { buildLanes, productsData, targetClientProfiles } from '../content/products';

const ProductCard = ({ product }) => {
  const [pointer, setPointer] = useState({ x: '50%', y: '50%' });
  const IconComponent = Icons[product.iconName] || Icons.Box;

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPointer({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <article
      className={`agency-card product-card animate-fade-in-up ${product.placeholder ? 'placeholder-card' : ''}`}
      onMouseMove={handlePointerMove}
      style={{
        '--spotlight-x': pointer.x,
        '--spotlight-y': pointer.y
      }}
    >
      <div className="product-card-glow" style={{ background: product.gradient }}></div>
      <div className="product-visual-shell" style={{ background: product.gradient }}>
        <div className="product-visual-orb"></div>
        <div className="product-visual-content">
          <span className="product-visual-eyebrow">{product.visual.eyebrow}</span>
          <strong className="product-visual-title">{product.visual.title}</strong>
          <div className="product-visual-points">
            {product.visual.points.map((point) => (
              <span key={point} className="product-visual-pill">
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="product-card-top">
        <div className="product-title-group">
          <div className="card-icon-container amber-glow">
            <IconComponent size={24} />
          </div>
          <div>
            <div className="product-status-row">
              <h3 className="product-card-title">{product.name}</h3>
              <span className="product-status-pill">{product.status}</span>
            </div>
            <p className="product-card-alias">{product.tagline}</p>
          </div>
        </div>
        <span className="product-type-chip">{product.type}</span>
      </div>

      <p className="product-summary">{product.summary}</p>

      <div className="product-meta-grid">
        <div>
          <span className="product-meta-label">Audience</span>
          <p className="product-meta-value">{product.audience}</p>
        </div>
        <div>
          <span className="product-meta-label">Deployment</span>
          <p className="product-meta-value">{product.deployment}</p>
        </div>
      </div>

      <div className="product-stack-list">
        {product.stack.map((item) => (
          <span key={item} className="product-stack-pill">
            {item}
          </span>
        ))}
      </div>

      <ul className="product-feature-list">
        {product.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
};

export default function Products() {
  return (
    <section id="products" className="section-spacing products-section">
      <div className="container">
        <div className="section-head section-head-split">
          <div>
            <span className="section-tag">Products</span>
            <h2 className="section-title">Three ready products, plus custom builds across every major lane.</h2>
          </div>
          <p className="section-subtitle section-subtitle-side">
            These are the products already ready to deploy today, while our delivery capability extends to
            Windows desktop apps, Android apps, web applications, e-commerce systems, AI assistants, and
            chatbot integrations.
          </p>
        </div>

        <div className="capability-lane-grid">
          {buildLanes.map((lane, index) => (
            <article key={lane.id} className={`agency-card capability-lane-card animate-fade-in-up delay-${(index % 3) + 1}`}>
              <span className="capability-lane-label">{lane.label}</span>
              <p className="capability-lane-copy">{lane.description}</p>
            </article>
          ))}
        </div>

        <div className="products-grid">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem', marginBottom: '3.5rem' }}>
          <Link to="/products" className="btn-agency btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Explore All 8+ Products & Try Live Demos
            <Icons.ArrowRight size={18} />
          </Link>
        </div>

        <div className="target-client-shell">
          <div className="target-client-copy">
            <span className="section-tag">Target Clients</span>
            <h3 className="target-client-title">We are built for businesses still trying to get their digital foundation right.</h3>
          </div>
          <div className="target-client-grid">
            {targetClientProfiles.map((profile, index) => (
              <article key={profile.id} className={`agency-card target-client-card animate-fade-in-up delay-${(index % 2) + 1}`}>
                <h4>{profile.title}</h4>
                <p>{profile.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
