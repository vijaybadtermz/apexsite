import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CostEstimator from '../components/CostEstimator';
import WhyUs from '../components/WhyUs';
import Founders from '../components/Founders';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Process from '../components/Process';
import Products from '../components/Products';
import { sendInquiryEmail } from '../services/email';



export default function Home() {
  const location = useLocation();
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        window.history.replaceState({}, document.title);
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }

    if (location.state?.proposalText) {
      setFormData((prev) => ({
        ...prev,
        message: location.state.proposalText
      }));
    }
  }, [location]);

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


      <Header />

      <main className="main-content">
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Products />
        <CostEstimator onApplyProposal={handleApplyProposal} />
        <WhyUs />
        <Founders/>
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
