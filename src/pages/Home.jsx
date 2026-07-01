import React, { useState } from 'react';
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

import iphoneIcon from '../assets/siderail-icons/iphone.png';
import webIcon from '../assets/siderail-icons/web-browser.png';
import laptopIcon from '../assets/siderail-icons/laptop.png';
import aiIcon from '../assets/siderail-icons/ai.png';
import chatbotIcon from '../assets/siderail-icons/chatbot.png';
import businessIcon from '../assets/siderail-icons/business.png';

const height = "20px"
const width = "20px"
const gap = "5px"

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
        <span>
          <img style={{marginRight:gap, width:width, height:height}} src={webIcon} alt="Web Apps"/>
          Web Apps
        </span>
        <span>
           <img style={{marginRight:gap,width:width, height:height}} src={laptopIcon} alt="desktop apps"/>
          Windows Apps
        </span>
        <span> <img style={{marginRight:gap,width:width, height:height}} src={iphoneIcon} alt="mobile apps"/>Android Apps</span>
      </div>
      <div className="side-rail side-rail-right">
        <span> <img style={{marginRight:gap,width:width, height:height}} src={aiIcon} alt="ai Apps"/>AI Assistants</span>
        <span> <img style={{marginRight:gap,width:width, height:height}} src={chatbotIcon} alt="chatbot Apps"/>Chatbots</span>
        <span> <img style={{marginRight:gap,width:width, height:height}} src={businessIcon} alt="business Apps"/>Business Systems</span>
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
