import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

let emailInitialized = false;

const getMissingConfig = () => {
  return [
    ['VITE_EMAILJS_PUBLIC_KEY', EMAILJS_PUBLIC_KEY],
    ['VITE_EMAILJS_SERVICE_ID', EMAILJS_SERVICE_ID],
    ['VITE_EMAILJS_TEMPLATE_ID', EMAILJS_TEMPLATE_ID]
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key);
};

export const isEmailConfigured = () => getMissingConfig().length === 0;

export const initEmailService = () => {
  if (emailInitialized || !isEmailConfigured()) {
    return;
  }

  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
    limitRate: {
      id: 'apexeglobals-contact-form',
      throttle: 10000
    }
  });

  emailInitialized = true;
};

export const sendInquiryEmail = async ({ name, email, message }) => {
  const missingConfig = getMissingConfig();

  if (missingConfig.length > 0) {
    throw new Error(`Missing EmailJS configuration: ${missingConfig.join(', ')}`);
  }

  initEmailService();

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name: name,
    from_email: email,
    reply_to: email,
    project_brief: message,
    submitted_at: new Date().toLocaleString(),
    site_name: 'Apexeglobals'
  });
};
