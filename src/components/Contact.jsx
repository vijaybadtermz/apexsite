import React from 'react';
import { AlertCircle, CheckCircle, LoaderCircle, Mail, MessageSquare, Send, TimerReset } from 'lucide-react';

export default function Contact({
  formData,
  inquirySubmitted,
  isSubmittingInquiry,
  submissionError,
  handleInputChange,
  handleFormSubmit
}) {
  return (
    <section id="contact" className="section-spacing contact-section">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-panel contact-copy-panel">
            <span className="section-tag">Let&apos;s Build</span>
            <h2 className="section-title">Tell us what you want the product to do, and we will shape the path.</h2>
            <p className="section-subtitle contact-subtitle">
              Whether you need a conversion-focused business site, an internal operations system, or a
              customer-facing app, we can help translate the idea into a clear build plan.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Email</span>
                  <a href="mailto:inquire@apexeglobals.com" className="contact-info-value">
                    inquire@apexeglobals.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <TimerReset size={18} />
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Response window</span>
                  <span className="contact-info-value">Usually within 1 business day</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <MessageSquare size={18} />
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Best fit</span>
                  <span className="contact-info-value">Web apps, mobile products, internal platforms</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel contact-form-card">
            {inquirySubmitted ? (
              <div className="form-success-state">
                <CheckCircle size={52} />
                <div className="success-text-wrapper">
                  <h3 className="success-title">Inquiry received</h3>
                  <p className="success-desc">
                    Your brief is in. We will review it and follow up with next-step recommendations.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-form">
                {submissionError ? (
                  <div className="form-error-banner" role="alert">
                    <AlertCircle size={16} />
                    <span>{submissionError}</span>
                  </div>
                ) : null}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Project brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="What are you building, who is it for, and what should it help your business achieve?"
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-agency btn-primary submit-form-btn"
                  disabled={isSubmittingInquiry}
                >
                  {isSubmittingInquiry ? (
                    <>
                      Sending inquiry
                      <LoaderCircle size={16} className="spin-icon" />
                    </>
                  ) : (
                    <>
                      Send inquiry
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
