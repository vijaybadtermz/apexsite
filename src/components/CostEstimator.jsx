import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { calculatorConfig } from '../content/calculator';

export default function CostEstimator({ onApplyProposal }) {
  const [selectedPlatform, setSelectedPlatform] = useState('android');
  const [projectScale, setProjectScale] = useState('medium');
  const [addons, setAddons] = useState({
    auth: true,
    dbSync: true,
    realtime: false,
    analytics: true
  });

  const handleToggleAddon = (addonId) => {
    setAddons((prev) => ({
      ...prev,
      [addonId]: !prev[addonId]
    }));
  };

  const activePlatform =
    calculatorConfig.platforms.find((platform) => platform.id === selectedPlatform) ||
    calculatorConfig.platforms[0];

  const activeScale =
    calculatorConfig.scales.find((scale) => scale.id === projectScale) || calculatorConfig.scales[1];

  const calculatePrice = () => {
    let base = activePlatform.basePrice * activeScale.multiplier;

    calculatorConfig.addons.forEach((addon) => {
      if (addons[addon.id]) {
        base += addon.price;
      }
    });

    return Math.round(base);
  };

  const getTimeline = () => {
    let weeks = activeScale.baseWeeks;

    calculatorConfig.addons.forEach((addon) => {
      if (addons[addon.id]) {
        weeks += addon.additionalWeeks;
      }
    });

    return weeks;
  };

  const handleApply = () => {
    const selectedAddonsList = calculatorConfig.addons
      .filter((addon) => addons[addon.id])
      .map((addon) => addon.title)
      .join(', ');

    const message = `Hi Apexeglobals, we used the project estimator and would like to discuss a build with these selections:

Platform: ${activePlatform.title}
Scale: ${activeScale.label}
Add-ons: ${selectedAddonsList || 'None'}
Estimated budget: $${calculatePrice().toLocaleString()} USD
Estimated timeline: ${getTimeline()} weeks

Please help us turn this into a detailed proposal.`;

    if (onApplyProposal) {
      onApplyProposal(message);
    }
  };

  return (
    <section id="estimator" className="section-spacing estimator-section">
      <div className="container estimator-layout">
        <div className="estimator-intro">
          <span className="section-tag">Estimator</span>
          <h2 className="section-title">Get a quick budget range before we scope the full roadmap.</h2>
          <p className="section-subtitle estimator-copy">
            Use this as a directional planning tool for internal approvals, stakeholder conversations, or
            launch prep. We will turn it into a detailed recommendation after the discovery call.
          </p>
        </div>

        <div className="calculator-panel">
          <div className="calc-group">
            <h4 className="calc-group-title">
              <Icons.Layers size={18} />
              Choose your primary platform
            </h4>
            <div className="calc-options-grid">
              {calculatorConfig.platforms.map((platform) => {
                const IconComponent = Icons[platform.iconName] || Icons.MonitorSmartphone;
                const isSelected = selectedPlatform === platform.id;

                return (
                  <button
                    key={platform.id}
                    type="button"
                    className={`option-select-card ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedPlatform(platform.id)}
                  >
                    <IconComponent size={20} />
                    <div className="option-select-text">
                      <h5 className="option-title">{platform.title}</h5>
                      <span className="option-subtitle">{platform.subtitle}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="calc-group">
            <h4 className="calc-group-title">
              <Icons.Gauge size={18} />
              Project size and delivery depth
            </h4>
            <div className="scale-buttons-row">
              {calculatorConfig.scales.map((scale) => {
                const isSelected = projectScale === scale.id;

                return (
                  <button
                    key={scale.id}
                    type="button"
                    onClick={() => setProjectScale(scale.id)}
                    className={`scale-btn ${isSelected ? 'active' : ''}`}
                  >
                    <span>{scale.label}</span>
                    <small>{scale.caption}</small>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="calc-group">
            <h4 className="calc-group-title">
              <Icons.Component size={18} />
              Functional modules and integrations
            </h4>
            <div className="addons-grid">
              {calculatorConfig.addons.map((addon) => {
                const isActive = !!addons[addon.id];

                return (
                  <button
                    key={addon.id}
                    type="button"
                    className={`option-select-card ${isActive ? 'active' : ''}`}
                    onClick={() => handleToggleAddon(addon.id)}
                  >
                    <div className={`checkbox-mock ${isActive ? 'checked' : ''}`}>
                      {isActive && <span className="checkmark">✓</span>}
                    </div>
                    <div className="option-select-text">
                      <h5 className="option-title">{addon.title}</h5>
                      <span className="option-subtitle">{addon.subtitle}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="calc-result-card">
            <div className="calc-result-metrics">
              <span className="result-label">Estimated investment</span>
              <div className="result-price-row">
                <h3 className="result-price">${calculatePrice().toLocaleString()}</h3>
                <span className="result-currency">USD</span>
              </div>
              <p className="result-timeline">Typical delivery window: {getTimeline()} weeks</p>
            </div>

            <button type="button" onClick={handleApply} className="btn-agency btn-primary apply-proposal-btn">
              Add this to my inquiry
              <Icons.ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
