import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as Icons from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EstimatorPage.css';

// Wizard Configuration Data
const STEPS = [
  { id: 'platforms', label: 'Platforms' },
  { id: 'services', label: 'Services' },
  { id: 'features', label: 'Modules' },
  { id: 'scale', label: 'Scale' }
];

const PLATFORMS_CONFIG = [
{
  id: "web",
  title: "Web Application",
  price: 10000,
  weeks: 3
},
{
  id: "mobile",
  title: "Android Mobile App",
  price: 15000,
  weeks: 4
},
{
  id: "desktop",
  title: "Windows Desktop App",
  price: 13000,
  weeks: 4
},
{
  id: "ai",
  title: "AI Assistant / Chatbot",
  price: 18000,
  weeks: 2
}
];

const SERVICES_CONFIG = [

{
id:"design",
title:"UI/UX Design",
price:3000,
weeks:1
},

{
id:"development",
title:"Frontend Development",
price:5000,
weeks:2
},

{
id:"backend",
title:"Backend & Database",
price:7000,
weeks:2
},

{
id:"testing",
title:"Testing & QA",
price:2500,
weeks:1
},

{
id:"devops",
title:"Deployment & Hosting",
price:3000,
weeks:1
}

];

const FEATURES_CONFIG = [

{
id:"auth",
title:"User Login & Roles",
price:2500
},

{
id:"dbSync",
title:"Cloud Database Sync",
price:5000
},

{
id:"realtime",
title:"Real-time Updates",
price:4000
},

{
id:"analytics",
title:"Dashboard & Reports",
price:4500
},

{
id:"payments",
title:"Payment Gateway",
price:3500
},

{
id:"multilingual",
title:"Multi-language Support",
price:2500
},

{
id:"vectorSearch",
title:"AI Knowledge Base",
price:10000
}

];

const SCALES_CONFIG = [
  {
    id: 'lean',
    title: 'Lean Scope',
    desc: 'Basic release containing must-have flows, ideal for quick feedback.',
    multiplier: 0.85,
    weekMod: -1
  },
  {
    id: 'growth',
    title: 'Growth Scope',
    desc: 'Balanced engineering depth built to scale, featuring detailed features.',
    multiplier: 1.2,
    weekMod: 2
  },
  {
    id: 'enterprise',
    title: 'Enterprise Flow',
    desc: 'Large capacity codebase designed for heavy operations, audits, and compliance.',
    multiplier: 1.6,
    weekMod: 5
  }
];

export default function EstimatorPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  // Selections State
  const [selectedPlatforms, setSelectedPlatforms] = useState(['web']);
  const [selectedServices, setSelectedServices] = useState(['design', 'development', 'backend', 'devops']);
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'dbSync']);
  const [selectedScale, setSelectedScale] = useState('growth');
  const [isAccelerated, setIsAccelerated] = useState(false);

  // Restore scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Selection handlers
  const handleTogglePlatform = (id) => {
    setSelectedPlatforms((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // Keep at least one platform selected
        return prev.filter((p) => p !== id);
      }
      return [...prev, id];
    });
  };

  const handleToggleService = (id) => {
    setSelectedServices((prev) => {
      if (prev.includes(id)) {
        return prev.filter((s) => s !== id);
      }
      return [...prev, id];
    });
  };

  const handleToggleFeature = (id) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(id)) {
        return prev.filter((f) => f !== id);
      }
      return [...prev, id];
    });
  };

  // Calculations
  const calculateCosts = () => {
    let designTotal = 0;
    let devTotal = 0;
    let devopsTotal = 0;

    // Platform Base
    selectedPlatforms.forEach((pId) => {
      const p = PLATFORMS_CONFIG.find((item) => item.id === pId);
      if (p) {
        devTotal += p.price;
      }
    });

    // Services Cost
    selectedServices.forEach((sId) => {
      const s = SERVICES_CONFIG.find((item) => item.id === sId);
      if (s) {
        if (s.category === 'design') designTotal += s.price;
        else if (s.category === 'devops') devopsTotal += s.price;
        else devTotal += s.price;
      }
    });

    // Features Cost
    selectedFeatures.forEach((fId) => {
      const f = FEATURES_CONFIG.find((item) => item.id === fId);
      if (f) {
        if (f.category === 'design') designTotal += f.price;
        else if (f.category === 'devops') devopsTotal += f.price;
        else devTotal += f.price;
      }
    });

    // Scale multiplier
    const scale = SCALES_CONFIG.find((s) => s.id === selectedScale) || SCALES_CONFIG[1];
    
    designTotal = designTotal * scale.multiplier;
    devTotal = devTotal * scale.multiplier;
    devopsTotal = devopsTotal * scale.multiplier;

    let subTotal = designTotal + devTotal + devopsTotal;

    // Accelerated Priority Loading
    let acceleratedCharge = 0;
    if (isAccelerated) {
      acceleratedCharge = subTotal * 0.25; // +25% priority charge
    }

    return {
      design: Math.round(designTotal),
      dev: Math.round(devTotal),
      devops: Math.round(devopsTotal),
      priority: Math.round(acceleratedCharge),
      total: Math.round(subTotal + acceleratedCharge)
    };
  };

  const calculateTimeline = () => {
    let totalWeeks = 0;

    // Highest platform baseline
    selectedPlatforms.forEach((pId) => {
      const p = PLATFORMS_CONFIG.find((item) => item.id === pId);
      if (p && p.weeks > totalWeeks) {
        totalWeeks = p.weeks;
      }
    });

    // Add service weeks
    selectedServices.forEach((sId) => {
      const s = SERVICES_CONFIG.find((item) => item.id === sId);
      if (s) totalWeeks += s.weeks;
    });

    // Add features weeks
    selectedFeatures.forEach((fId) => {
      const f = FEATURES_CONFIG.find((item) => item.id === fId);
      if (f) totalWeeks += f.weeks;
    });

    // Scale modifier
    const scale = SCALES_CONFIG.find((s) => s.id === selectedScale) || SCALES_CONFIG[1];
    totalWeeks += scale.weekMod;

    // Urgency modifier
    if (isAccelerated) {
      totalWeeks = Math.max(3, Math.round(totalWeeks * 0.75)); // -25% timeline
    }

    return Math.max(3, totalWeeks);
  };

  const costs = calculateCosts();
  const timeline = calculateTimeline();

  // Navigation handlers
  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Compile Proposal inquiry text
  const generateProposalText = () => {
    const pNames = selectedPlatforms
      .map((pId) => PLATFORMS_CONFIG.find((p) => p.id === pId)?.title)
      .join(', ');
    const sNames = selectedServices
      .map((sId) => SERVICES_CONFIG.find((s) => s.id === sId)?.title)
      .join(', ');
    const fNames = selectedFeatures
      .map((fId) => FEATURES_CONFIG.find((f) => f.id === fId)?.title)
      .join(', ') || 'None';
    const scaleLabel = SCALES_CONFIG.find((s) => s.id === selectedScale)?.title;

    return `Hi Apexeglobals, we compiled a project specification using the Advanced Estimator:

- Target Platform(s): ${pNames}
- Requested Scope: ${sNames}
- Selected Features/Modules: ${fNames}
- Project Scale: ${scaleLabel}
- Delivery Priority: ${isAccelerated ? 'Accelerated Priority (Faster)' : 'Standard Priority'}

Estimated Budget: Rs. ${costs.total.toLocaleString()}/-
Typical Delivery Timeline: ${timeline} weeks

Please assist us with turning this into a detailed proposal discovery.`;
  };

  const handleApplyToContact = () => {
    const text = generateProposalText();
    // Navigate home, set scroll section state
    navigate('/', {
      state: {
        scrollTo: 'contact',
        proposalText: text
      }
    });
  };

  // Icon mapping helper
  const renderIcon = (iconName, size = 20) => {
    const IconComp = Icons[iconName];
    return IconComp ? <IconComp size={size} /> : <Icons.Layers size={size} />;
  };

  // Render Step Content
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Platforms
        return (
          <div className="wizard-step-container animate-fade-in-up">
            <div className="wizard-card-header">
              <h2 className="wizard-card-title">Choose your target platforms</h2>
              <p className="wizard-card-subtitle">
                Select one or multiple platforms. We build apps that sync across platforms out of the box.
              </p>
            </div>
            <div className="wizard-options-grid">
              {PLATFORMS_CONFIG.map((p) => {
                const isSelected = selectedPlatforms.includes(p.id);
                return (
                  <button
                    key={p.id}
                    className={`wizard-select-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleTogglePlatform(p.id)}
                  >
                    <div className="wizard-select-icon">{renderIcon(p.icon, 24)}</div>
                    <div>
                      <h4 className="wizard-select-title">{p.title}</h4>
                      <p className="wizard-select-desc">{p.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 1: // Services
        return (
          <div className="wizard-step-container animate-fade-in-up">
            <div className="wizard-card-header">
              <h2 className="wizard-card-title">Select engineering services</h2>
              <p className="wizard-card-subtitle">
                Choose the scope of services you need from us. A standard build includes UI Design, Coding, and Server setup.
              </p>
            </div>
            <div className="wizard-options-grid">
              {SERVICES_CONFIG.map((s) => {
                const isSelected = selectedServices.includes(s.id);
                return (
                  <button
                    key={s.id}
                    className={`wizard-select-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleToggleService(s.id)}
                  >
                    <div className="wizard-select-icon">{renderIcon(s.icon, 24)}</div>
                    <div>
                      <h4 className="wizard-select-title">{s.title}</h4>
                      <p className="wizard-select-desc">{s.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 2: // Features
        return (
          <div className="wizard-step-container animate-fade-in-up">
            <div className="wizard-card-header">
              <h2 className="wizard-card-title">Select advanced modules</h2>
              <p className="wizard-card-subtitle">
                Check specific modules you need integrated. Hover over the information tooltips for business definitions.
              </p>
            </div>
            <div className="wizard-options-grid">
              {FEATURES_CONFIG.map((f) => {
                const isSelected = selectedFeatures.includes(f.id);
                return (
                  <button
                    key={f.id}
                    className={`wizard-select-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleToggleFeature(f.id)}
                  >
                    <div className="wizard-select-icon">{renderIcon(f.category === 'devops' ? 'Cloud' : f.category === 'design' ? 'Palette' : 'Layers', 24)}</div>
                    <div>
                      <h4 className="wizard-select-title">
                        {f.title}
                        <div className="tooltip-container">
                          <span className="tooltip-trigger-icon">ⓘ</span>
                          <div className="tooltip-box">{f.tooltip}</div>
                        </div>
                      </h4>
                      <p className="wizard-select-desc">{f.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 3: // Scale & Speed
        return (
          <div className="wizard-step-container animate-fade-in-up">
            <div className="wizard-card-header">
              <h2 className="wizard-card-title">Select size and scaling depth</h2>
              <p className="wizard-card-subtitle">
                Specify the structural complexity. A larger capacity adds security layers and audit logs.
              </p>
            </div>
            <div className="wizard-options-grid" style={{ gridTemplateColumns: '1fr' }}>
              {SCALES_CONFIG.map((s) => {
                const isSelected = selectedScale === s.id;
                return (
                  <button
                    key={s.id}
                    className={`wizard-select-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedScale(s.id)}
                  >
                    <div className="wizard-select-icon" style={{ paddingTop: '0.4rem' }}>
                      <Icons.Scale size={24} />
                    </div>
                    <div>
                      <h4 className="wizard-select-title">{s.title}</h4>
                      <p className="wizard-select-desc">{s.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Stacked Bar breakdown percentage logic
  const sumVal = costs.design + costs.dev + costs.devops;
  const designPercent = sumVal > 0 ? (costs.design / sumVal) * 100 : 0;
  const devPercent = sumVal > 0 ? (costs.dev / sumVal) * 100 : 0;
  const devopsPercent = sumVal > 0 ? (costs.devops / sumVal) * 100 : 0;

  return (
    <div className="home-layout-wrapper estimator-page-wrapper">
      <div className="grid-overlay"></div>
      <div className="noise-overlay"></div>
      <div className="orb orb-one" style={{ filter: 'blur(160px)', opacity: 0.12 }}></div>
      <div className="orb orb-two" style={{ filter: 'blur(160px)', opacity: 0.12 }}></div>

      <Header />

      <main className="container">
        <section className="estimator-hero">
          <span className="section-tag">Interactive Planner</span>
          <h1>Scope Your Digital Project</h1>
          <p className="section-subtitle">
            Define platforms, design services, and advanced modules. Get immediate budget feedback and timeline expectations before our consulting call.
          </p>
        </section>

        {/* STEPPER STEPS */}
        <div className="wizard-progress-bar">
          <div
            className="wizard-progress-line"
            style={{ width: `${(currentStep / (STEPS.length - 1)) * 80}%` }}
          ></div>
          {STEPS.map((step, idx) => {
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx;
            return (
              <div
                key={step.id}
                className={`wizard-step-node ${isActive ? 'active' : ''} ${
                  isCompleted ? 'completed' : ''
                }`}
                onClick={() => setCurrentStep(idx)}
              >
                <div className="node-circle">{isCompleted ? '✓' : idx + 1}</div>
                <span className="node-label">{step.label}</span>
              </div>
            );
          })}
        </div>

        <div className="wizard-layout">
          {/* WIZARD QUESTION CARD */}
          <div className="wizard-card">
            {renderStepContent()}

            <div className="wizard-navigation-buttons">
              <button
                type="button"
                className="btn-agency"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-light)',
                  color: 'var(--color-text)',
                  opacity: currentStep === 0 ? 0.3 : 1,
                  cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
                }}
                onClick={handlePrev}
                disabled={currentStep === 0}
              >
                Previous Step
              </button>

              {currentStep < STEPS.length - 1 ? (
                <button type="button" className="btn-agency btn-primary" onClick={handleNext}>
                  Next Step <Icons.ChevronRight size={16} style={{ marginLeft: '0.25rem' }} />
                </button>
              ) : (
                <button type="button" className="btn-agency btn-primary" onClick={handleApplyToContact}>
                  Apply & Send Specs
                </button>
              )}
            </div>
          </div>

          {/* ESTIMATION LIVE DASHBOARD CARD */}
          <aside className="estimate-dashboard">
            <h3 className="dashboard-title">
              <Icons.Calculator size={18} />
              Live Estimate Summary
            </h3>

            <div className="dashboard-price-tag">
              <span className="dashboard-price-label">Estimated Investment</span>
              <div className="dashboard-price-value">Rs. {costs.total.toLocaleString()}</div>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', display: 'block', marginTop: '0.2rem' }}>
                *excluding local taxes and domain hosting
              </span>
            </div>

            <div className="dashboard-timeline">
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-soft)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Icons.CalendarDays size={16} style={{ color: 'var(--color-accent)' }} /> Delivery Time:
              </span>
              <strong style={{ fontSize: '1rem', color: 'var(--color-text)' }}>{timeline} weeks</strong>
            </div>

            {/* COST BREAKDOWN BAR */}
            <div className="breakdown-section">
              <div className="breakdown-header">
                <span>Budget Allocation</span>
                <span>Breakdown</span>
              </div>
              <div className="breakdown-stacked-bar">
                <div
                  className="bar-segment design"
                  style={{ width: `${designPercent}%` }}
                  title={`Design: Rs. ${costs.design.toLocaleString()}`}
                ></div>
                <div
                  className="bar-segment dev"
                  style={{ width: `${devPercent}%` }}
                  title={`Development: Rs. ${costs.dev.toLocaleString()}`}
                ></div>
                <div
                  className="bar-segment devops"
                  style={{ width: `${devopsPercent}%` }}
                  title={`DevOps & Server: Rs. ${costs.devops.toLocaleString()}`}
                ></div>
              </div>

              <div className="breakdown-legend">
                <div className="legend-item">
                  <span className="legend-dot design"></span>
                  <span>UI/UX ({Math.round(designPercent)}%)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot dev"></span>
                  <span>Dev ({Math.round(devPercent)}%)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot devops"></span>
                  <span>Server ({Math.round(devopsPercent)}%)</span>
                </div>
              </div>
            </div>

            {/* PRIORITY TOGGLE */}
            <div className="breakdown-section" style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
              <span className="breakdown-header" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Delivery Urgency Speed
              </span>
              <div className="priority-toggle">
                <button
                  type="button"
                  className={`priority-btn ${!isAccelerated ? 'active' : ''}`}
                  onClick={() => setIsAccelerated(false)}
                >
                  Standard Speed
                </button>
                <button
                  type="button"
                  className={`priority-btn ${isAccelerated ? 'active' : ''}`}
                  onClick={() => setIsAccelerated(true)}
                >
                  Accelerated (+25% fee)
                </button>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', lineHeight: '1.4' }}>
                Accelerated priority allocates additional engineers to reduce timeline by 25%.
              </p>
            </div>

            {/* ACTION TRIGGERS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
              <button
                type="button"
                className="btn-agency btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={handleApplyToContact}
              >
                Send this spec to team
              </button>

              <button
                type="button"
                className="btn-agency"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: 'transparent',
                  border: '1px solid var(--border-light)',
                  color: 'var(--color-text)'
                }}
                onClick={() => window.print()}
              >
                <Icons.Printer size={16} style={{ marginRight: '0.4rem' }} /> Print Spec Sheet
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* PRINT-ONLY CONDITIONAL SPECS ELEMENT FOR HTML PROPOSALS */}
      <div className="estimator-print-proposal" style={{ display: 'none' }}>
        <h1 style={{ fontFamily: 'sans-serif', borderBottom: '2px solid #000', paddingBottom: '10px' }}>
          Apexeglobals Project Spec Proposal
        </h1>
        <p style={{ fontStyle: 'italic' }}>Generated on: {new Date().toLocaleDateString()}</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', fontFamily: 'sans-serif' }}>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Target Platforms</th>
              <td style={{ padding: '10px' }}>
                {selectedPlatforms.map((p) => PLATFORMS_CONFIG.find((item) => item.id === p)?.title).join(', ')}
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Engineering Scope</th>
              <td style={{ padding: '10px' }}>
                {selectedServices.map((s) => SERVICES_CONFIG.find((item) => item.id === s)?.title).join(', ')}
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Selected Modules</th>
              <td style={{ padding: '10px' }}>
                {selectedFeatures.map((f) => FEATURES_CONFIG.find((item) => item.id === f)?.title).join(', ') || 'None'}
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Scale Strategy</th>
              <td style={{ padding: '10px' }}>
                {SCALES_CONFIG.find((s) => s.id === selectedScale)?.title}
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Delivery speed</th>
              <td style={{ padding: '10px' }}>{isAccelerated ? 'Accelerated Priority' : 'Standard Speed'}</td>
            </tr>
            <tr style={{ borderBottom: '2px solid #000', background: '#f5f5f5', fontWeight: 'bold' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Estimated Delivery Time</th>
              <td style={{ padding: '10px' }}>{timeline} weeks</td>
            </tr>
            <tr style={{ borderBottom: '2px solid #000', background: '#e5f5e5', fontWeight: 'bold', fontSize: '1.2rem' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Estimated Investment</th>
              <td style={{ padding: '10px' }}>Rs. {costs.total.toLocaleString()} /-</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '30px', fontSize: '0.8rem', color: '#666', fontFamily: 'sans-serif' }}>
          This is a directional planning estimate generated using our digital planner. Final proposal details will be adjusted during our strategic discover meeting.
        </p>
      </div>

      <Footer />
    </div>
  );
}
