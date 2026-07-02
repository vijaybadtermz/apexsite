import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { categories, productsData } from '../content/productsDetailed';
import * as Icons from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProductsPage.css';

// ----------------------------------------------------
// INTERACTIVE SIMULATORS
// ----------------------------------------------------

// 1. Chatbot Simulator
function ChatbotSimulator({ product }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! I'm the ${product.name} assistant. I help clients explore our capabilities in real-time. What would you like to know?`
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState('init');

  const options = {
    init: [
      { text: 'What features does this product have?', next: 'features' },
      { text: 'What is the tech stack?', next: 'stack' },
      { text: 'Who is this product built for?', next: 'audience' }
    ],
    features: [
      { text: 'Tell me about the admin dashboard', next: 'dashboard' },
      { text: 'Is there mobile support?', next: 'mobile_support' },
      { text: 'Go back to main menu', next: 'init' }
    ],
    stack: [
      { text: 'Why was Node.js / Express chosen?', next: 'node_reason' },
      { text: 'What database does it support?', next: 'db_reason' },
      { text: 'Go back to main menu', next: 'init' }
    ],
    audience: [
      { text: 'Can it scale to large companies?', next: 'scaling' },
      { text: 'Go back to main menu', next: 'init' }
    ]
  };

  const getBotReply = (nextStep) => {
    switch (nextStep) {
      case 'features':
        return `This product comes equipped with professional capabilities: ${product.features.slice(0, 3).join(', ')}. Which area interests you?`;
      case 'stack':
        return `It is engineered on a modern stack: ${product.stack.join(', ')}. This ensures high performance, clean interfaces, and rapid custom adjustments.`;
      case 'audience':
        return `This is purpose-built for: ${product.audience}. It automates repetitive administrative labor so you can focus on core tasks.`;
      case 'dashboard':
        return "The admin control center provides live business analytics, charts, filterable tables, and role-based permissions to monitor operations at a glance.";
      case 'mobile_support':
        return "Yes, the web layouts are designed with mobile-responsive grids, and we also build dedicated React Native companion applications if needed.";
      case 'node_reason':
        return "Node.js provides an asynchronous runtime that easily handles multi-user database transactions, secure JWT sessions, and document generation.";
      case 'db_reason':
        return "It is configured for structured relational queries (MySQL/Postgres) or flexible NoSQL storage (MongoDB) depending on your audit/material record requirements.";
      case 'scaling':
        return "Absolutely. With containerized deployments and optimized query indexing, the system scales smoothly from single-office setups to regional operations.";
      case 'init':
      default:
        return "How else can I assist you with exploring our digital engineering capabilities?";
    }
  };

  const handleOptionClick = (option) => {
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: option.text
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setStep(option.next);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: getBotReply(option.next)
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="simulator-container">
      <div className="simulator-header">
        <span className="simulator-title">AI Chat Simulator</span>
        <div className="simulator-live-indicator">
          <span className="live-dot"></span> Live Demo
        </div>
      </div>

      <div className="chat-sim-window">
        <div className="chat-sim-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-sim-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="chat-sim-bubble bot" style={{ fontStyle: 'italic', opacity: 0.7 }}>
              Typing response...
            </div>
          )}
        </div>

        <div className="chat-sim-options">
          {(options[step] || options['init']).map((opt, i) => (
            <button
              key={i}
              className="chat-opt-btn"
              onClick={() => handleOptionClick(opt)}
              disabled={isTyping}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// 2. Audit Simulator (for Easy Audit Workspace)
function AuditSimulator() {
  const [records, setRecords] = useState([
    { id: 1, name: 'Sanjay Rawat (Tax Filing)', doc: 'Form-16_Rawat.pdf', status: 'Pending Review' },
    { id: 2, name: 'Apex Industries (GST Audit)', doc: 'GST_Ledger_2025.xlsx', status: 'Pending Review' },
    { id: 3, name: 'Horizon Ventures (IT Notice)', doc: 'Notice_Sect143.pdf', status: 'Pending Review' }
  ]);
  const [activeScanId, setActiveScanId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState('');

  const handleScan = (id) => {
    if (activeScanId) return;
    setActiveScanId(id);
    setProgress(0);
    setLog('Reading file stream...');

    setTimeout(() => {
      setLog('Verifying digital signature...');
      setProgress(40);
    }, 400);

    setTimeout(() => {
      setLog('Checking IRS format rules...');
      setProgress(75);
    }, 800);

    setTimeout(() => {
      setProgress(100);
      setLog('Audit Verified. Compliance safe!');
      setRecords((prev) =>
        prev.map((rec) => (rec.id === id ? { ...rec, status: 'Verified Compliance' } : rec))
      );
      setTimeout(() => {
        setActiveScanId(null);
        setProgress(0);
        setLog('');
      }, 1500);
    }, 1200);
  };

  return (
    <div className="simulator-container">
      <div className="simulator-header">
        <span className="simulator-title">Audit Desk Simulator</span>
        <div className="simulator-live-indicator">
          <span className="live-dot"></span> Ready to Scan
        </div>
      </div>

      <div className="audit-sim-window">
        <table className="audit-table">
          <thead>
            <tr>
              <th>Client / Scope</th>
              <th>Uploaded File</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec) => (
              <tr key={rec.id}>
                <td>{rec.name}</td>
                <td>{rec.doc}</td>
                <td>
                  <span
                    className={`status-badge ${
                      rec.status === 'Verified Compliance' ? 'success' : 'pending'
                    }`}
                  >
                    {rec.status}
                  </span>
                </td>
                <td>
                  <button
                    className="audit-action-btn"
                    style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}
                    onClick={() => handleScan(rec.id)}
                    disabled={activeScanId !== null}
                  >
                    Scan File
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {activeScanId && (
          <div className="audit-actions-bar">
            <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)' }}>{log}</span>
            <div className="scan-progress-bar">
              <div className="scan-progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span style={{ fontSize: '0.75rem' }}>{progress}%</span>
          </div>
        )}
      </div>
    </div>
  );
}

// 3. HR Operations Simulator (for HR & Operations Hub)
function HrSimulator() {
  const [headcount, setHeadcount] = useState(12);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Verify tax reports', stage: 'active' },
    { id: 2, title: 'Upload site balance sheet', stage: 'active' },
    { id: 3, title: 'Approve vendor receipts', stage: 'done' }
  ]);

  const handleHeadcountChange = (e) => {
    setHeadcount(parseInt(e.target.value, 10));
  };

  const handleAssignTask = () => {
    const taskTitles = [
      'Refactor API query latency',
      'Design onboarding screen layouts',
      'Audit contractor material records',
      'Optimize database write locks',
      'Publish secure system build v1.2'
    ];
    const randomTitle = taskTitles[Math.floor(Math.random() * taskTitles.length)];
    const newTask = {
      id: Date.now(),
      title: randomTitle,
      stage: 'active'
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const moveTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, stage: t.stage === 'active' ? 'done' : 'active' } : t))
    );
  };

  const activeCount = tasks.filter((t) => t.stage === 'active').length;
  const doneCount = tasks.filter((t) => t.stage === 'done').length;

  return (
    <div className="simulator-container">
      <div className="simulator-header">
        <span className="simulator-title">HR Operations Dashboard</span>
        <div className="simulator-live-indicator">
          <span className="live-dot"></span> Interactive HUD
        </div>
      </div>

      <div className="hr-sim-window">
        <div className="hr-metrics-grid">
          <div className="hr-metric-card">
            <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)' }}>Staff Count</span>
            <div className="hr-metric-num">{headcount}</div>
          </div>
          <div className="hr-metric-card">
            <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)' }}>Active Tasks</span>
            <div className="hr-metric-num">{activeCount}</div>
          </div>
        </div>

        <div className="hr-slider-group">
          <div className="hr-slider-label">
            <span>Simulate Headcount:</span>
            <span>{headcount} employees</span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            value={headcount}
            onChange={handleHeadcountChange}
            className="hr-slider"
          />
        </div>

        <div className="hr-kanban">
          <div className="hr-kanban-col">
            <div className="hr-kanban-title">In Progress ({activeCount})</div>
            {tasks
              .filter((t) => t.stage === 'active')
              .map((t) => (
                <div key={t.id} className="hr-kanban-item">
                  <span>{t.title}</span>
                  <button
                    onClick={() => moveTask(t.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--color-secondary)', cursor: 'pointer', fontWeight: 'bold' }}
                    title="Complete task"
                  >
                    ✓
                  </button>
                </div>
              ))}
          </div>
          <div className="hr-kanban-col">
            <div className="hr-kanban-title">Completed ({doneCount})</div>
            {tasks
              .filter((t) => t.stage === 'done')
              .map((t) => (
                <div key={t.id} className="hr-kanban-item" style={{ opacity: 0.6, textDecoration: 'line-through' }}>
                  <span>{t.title}</span>
                  <button
                    onClick={() => moveTask(t.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 'bold' }}
                    title="Re-open task"
                  >
                    ⟲
                  </button>
                </div>
              ))}
          </div>
        </div>

        <button className="hr-add-btn" onClick={handleAssignTask}>
          + Dispatch Random Task
        </button>
      </div>
    </div>
  );
}

// 4. General Custom Device Simulator (for mobile, desktop, etc.)
function GeneralDeviceSimulator({ product }) {
  const [stateLog, setStateLog] = useState('Device initial state: IDLE');
  const [isRunning, setIsRunning] = useState(false);
  const [dialValue, setDialValue] = useState(50);

  const triggerAction = () => {
    if (isRunning) return;
    setIsRunning(true);

    if (product.category === 'mobile') {
      setStateLog('Pinging satellite GPS...');
      setTimeout(() => setStateLog('Fetching current inventory barcode catalog...'), 500);
      setTimeout(() => {
        setStateLog('Local Database synchronized successfully.');
        setIsRunning(false);
      }, 1200);
    } else if (product.category === 'desktop') {
      setStateLog('Polling serial hardware COM ports...');
      setTimeout(() => setStateLog('Syncing changes to Cloud bucket endpoint...'), 600);
      setTimeout(() => {
        setStateLog('Backup task logged. System reporting OK.');
        setIsRunning(false);
      }, 1300);
    }
  };

  return (
    <div className="simulator-container">
      <div className="simulator-header">
        <span className="simulator-title">
          {product.category === 'mobile' ? 'Mobile App Simulator' : 'Desktop Shell Simulator'}
        </span>
        <div className="simulator-live-indicator">
          <span className="live-dot"></span> Simulated Environment
        </div>
      </div>

      <div className="audit-sim-window" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div
          style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-light)',
            borderRadius: '6px',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: isRunning ? 'var(--color-primary)' : 'var(--color-text-soft)'
          }}
        >
          {stateLog}
        </div>

        {product.id === 'operatorconsole' && (
          <div className="hr-slider-group" style={{ marginTop: '0' }}>
            <div className="hr-slider-label">
              <span>Adjust Engine RPM Telemetry:</span>
              <span>{(dialValue * 80).toLocaleString()} RPM</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={dialValue}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                setDialValue(val);
                setStateLog(`Reading COM Port telemetry... Current load ${val}%, RPM: ${(val * 80).toLocaleString()}`);
              }}
              className="hr-slider"
            />
          </div>
        )}

        <button
          className="hr-add-btn"
          style={{ margin: 0 }}
          onClick={triggerAction}
          disabled={isRunning}
        >
          {isRunning
            ? 'Processing...'
            : product.category === 'mobile'
            ? 'Simulate Local Sync / Check-in'
            : 'Simulate Automated Backup Execution'}
        </button>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------
export default function ProductsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Restore scroll on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = productsData.filter((product) => {
    if (activeTab === 'all') return true;
    return product.category === activeTab;
  });

  const getProductIcon = (iconName) => {
    const IconComp = Icons[iconName];
    return IconComp ? <IconComp size={24} /> : <Icons.Box size={24} />;
  };

  return (
    <div className="home-layout-wrapper products-page-wrapper">
      <div className="grid-overlay"></div>
      <div className="noise-overlay"></div>
      <div className="orb orb-one" style={{ filter: 'blur(160px)', opacity: 0.15 }}></div>
      <div className="orb orb-two" style={{ filter: 'blur(160px)', opacity: 0.15 }}></div>

      <Header />

      <main className="container">
        <section className="products-hero">
          <span className="section-tag">Showcase</span>
          <h1>Our Software Products</h1>
          <p className="section-subtitle">
            Explore our pre-configured business templates, custom SaaS portals, desktop consoles, mobile field tools, and AI assistants. Try the live interactive test drives.
          </p>
        </section>

        {/* Tab Controls */}
        <div className="category-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid" style={{ marginBottom: '5rem' }}>
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="agency-card product-card animate-fade-in-up"
              style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}
            >
              <div>
                <div className="product-card-glow" style={{ background: product.gradient }}></div>
                <div className="product-visual-shell" style={{ background: product.gradient, minHeight: '140px' }}>
                  <div className="product-visual-orb"></div>
                  <div className="product-visual-content">
                    <span className="product-visual-eyebrow">{product.visual.eyebrow}</span>
                    <strong className="product-visual-title">{product.visual.title}</strong>
                    <div className="product-visual-points">
                      {product.visual.points.map((p, idx) => (
                        <span key={idx} className="product-visual-pill">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="product-card-top" style={{ marginTop: '1.25rem' }}>
                  <div className="product-title-group">
                    <div className="card-icon-container" style={{ background: 'var(--bg-soft)', color: 'var(--color-primary)' }}>
                      {getProductIcon(product.iconName)}
                    </div>
                    <div>
                      <div className="product-status-row">
                        <h3 className="product-card-title">{product.name}</h3>
                        <span className="product-status-pill">{product.status}</span>
                      </div>
                      <p className="product-card-alias">{product.tagline}</p>
                    </div>
                  </div>
                  <span className="product-type-chip" style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--color-accent)' }}>
                    {product.type}
                  </span>
                </div>

                <p className="product-summary" style={{ margin: '1rem 0' }}>
                  {product.summary}
                </p>

                <div className="product-stack-list" style={{ margin: '0.75rem 0' }}>
                  {product.stack.map((item) => (
                    <span key={item} className="product-stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn-agency btn-primary"
                style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', background: 'var(--bg-soft)', border: '1px solid var(--border-light)', color: 'var(--color-text)' }}
                onClick={() => setSelectedProduct(product)}
              >
                Explore & Try Demo
              </button>
            </article>
          ))}
        </div>
      </main>

      {/* DETAIL MODAL */}
      {selectedProduct && (
        <div className="product-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
              ✕
            </button>

            <div className="modal-left">
              <div>
                <div className="modal-header-section">
                  <span className="modal-eyebrow">{selectedProduct.visual.eyebrow}</span>
                  <h2 className="modal-title">{selectedProduct.name}</h2>
                  <p className="product-card-alias">{selectedProduct.tagline}</p>
                </div>

                <p className="modal-desc">{selectedProduct.summary}</p>

                <div className="modal-spec-grid">
                  <div>
                    <span className="modal-spec-label">Target Audience</span>
                    <div className="modal-spec-val">{selectedProduct.audience}</div>
                  </div>
                  <div>
                    <span className="modal-spec-label">Deployment Format</span>
                    <div className="modal-spec-val">{selectedProduct.deployment}</div>
                  </div>
                </div>

                <div className="modal-section-title">Technical Stack</div>
                <div className="modal-tech-stack">
                  {selectedProduct.stack.map((s) => (
                    <span key={s} className="modal-tech-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  className="btn-agency btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: '100%', justifyContent: 'center', border: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProduct(null);
                    navigate('/', { state: { scrollTo: 'contact' } });
                  }}
                >
                  Discuss Custom Deployment
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="modal-right">
              <div>
                <div className="modal-section-title">Core Capability Spec</div>
                <ul className="modal-feature-list">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* SIMULATOR COMPONENT DISPATCH */}
              <div>
                <div className="modal-section-title" style={{ borderBottom: 'none', marginBottom: '0.25rem' }}>
                  Interactive Simulator
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', marginBottom: '0.5rem' }}>
                  Play with this mock simulation panel to see how it operates.
                </p>

                {selectedProduct.id === 'easyaudit' && <AuditSimulator />}
                {selectedProduct.id === 'employee-management-system' && <HrSimulator />}
                {(selectedProduct.category === 'ai') && <ChatbotSimulator product={selectedProduct} />}
                {selectedProduct.id !== 'easyaudit' && selectedProduct.id !== 'employee-management-system' && selectedProduct.category !== 'ai' && (
                  <GeneralDeviceSimulator product={selectedProduct} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
