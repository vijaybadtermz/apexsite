import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CostEstimator from '../components/CostEstimator';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Process from '../components/Process';
import Products from '../components/Products';
import { sendInquiryEmail } from '../services/email';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmissionError('');
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleApplyProposal = (proposalText) => {
    setFormData((prev) => ({
      ...prev,
      message: proposalText
    }));

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmittingInquiry(true);
      setSubmissionError('');

      try {
        await sendInquiryEmail(formData);
      } catch (error) {
        setSubmissionError(
          error instanceof Error
            ? error.message
            : 'We could not send the inquiry right now. Please try again shortly.'
        );
        setIsSubmittingInquiry(false);
        return;
      }

      setInquirySubmitted(true);
      setIsSubmittingInquiry(false);
      setTimeout(() => {
        setInquirySubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="home-layout-wrapper">
      <div className="grid-overlay"></div>
      <div className="noise-overlay"></div>
      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>
      <div className="side-rail side-rail-left">
        <span>Web Apps</span>
        <span>Windows Apps</span>
        <span>Android Apps</span>
      </div>
      <div className="side-rail side-rail-right">
        <span>AI Assistants</span>
        <span>Chatbots</span>
        <span>Business Systems</span>
      </div>

      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="main-content">
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Products />
        <CostEstimator onApplyProposal={handleApplyProposal} />
        <WhyUs />
        <Contact
          formData={formData}
          inquirySubmitted={inquirySubmitted}
          isSubmittingInquiry={isSubmittingInquiry}
          submissionError={submissionError}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      </main>

      <Footer />
    </div>
  );
}
