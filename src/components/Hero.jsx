import React from 'react';
import { ArrowRight, ChartNoAxesCombined, Play, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import heroBg from '../assets/main.png';

const proofItems = [
  'Web apps, Windows software, Android apps, and chatbot-enabled products',
  'Best for businesses with no proper system or outdated software',
  'Focused on operations, retail, e-commerce, HR, audit, and AI-supported workflows'
];

const heroStats = [
  { value: '4', label: 'product lanes: web, desktop, Android, AI integrations' },
  { value: '3', label: 'ready-to-deploy web applications already in hand' },
  { value: '2', label: 'core client types we serve: first-time and outdated-system businesses' }
];

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-container-grid">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <Sparkles size={16} />
            <span>Software products for businesses ready to modernize</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-1">
            We build the software growing businesses wish they had sooner.
          </h1>

          <p className="hero-description animate-fade-in-up delay-2">
            Apexeglobals builds web apps, Windows applications, Android apps, and chatbot-supported
            systems for businesses that either have no proper software yet or are stuck with outdated
            websites and tools.
          </p>

          <div className="hero-actions animate-fade-in-up delay-3">
            <a href="#contact" className="btn-agency btn-primary hero-btn">
              Start your project
              <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="btn-agency btn-secondary hero-btn">
              See live case direction
              <Play size={16} />
            </a>
          </div>

          <div className="hero-proof-grid animate-fade-in-up delay-3">
            {proofItems.map((item) => (
              <div key={item} className="hero-proof-item">
                <ShieldCheck size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual animate-fade-in">
          <div className="hero-visual-panel">
            <div className="hero-dashboard-card hero-dashboard-main">
              <div className="visual-eyebrow">Experience direction</div>
              <img src={heroBg} alt="Apexeglobals product showcase" className="hero-showcase-img" />
              <div className="hero-visual-caption">
                <span>Operations dashboard</span>
                <span>Brand-led layout system</span>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-top">
              <div className="floating-icon">
                <ChartNoAxesCombined size={18} />
              </div>
              <div>
                <strong>Scale-ready structure</strong>
                <p>We align websites, dashboards, admin tools, and internal workflows under one product direction.</p>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-bottom">
              <div className="floating-icon alt">
                <Smartphone size={18} />
              </div>
              <div>
                <strong>Multi-platform delivery</strong>
                <p>Interfaces built for desktop operators, Android field teams, web users, and AI-assisted support flows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container hero-stats-container">
        <div className="hero-stats-bar">
          {heroStats.map((stat) => (
            <div key={stat.label} className="hero-stat-item">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
