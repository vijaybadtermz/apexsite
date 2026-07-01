import logisticsMockup from '../assets/logistics_mockup.png';
import billingMockup from '../assets/billing_mockup.png';

export const portfolioData = [
  {
    id: 'logistics-companion',
    title: 'Dispatch Companion Platform',
    tag: 'Operations mobile suite',
    industry: 'Logistics',
    outcome: 'Faster field coordination',
    image: logisticsMockup,
    gradient: 'linear-gradient(135deg, #17433c 0%, #0c1917 100%)',
    iconName: 'MapPinned',
    description:
      'A mobile-first operational product direction for dispatch teams managing routes, status updates, driver activity, and offline task handling.',
    technologies: ['Kotlin UX', 'Offline sync', 'Field workflows', 'Telemetry-ready']
  },
  {
    id: 'corporate-billing',
    title: 'Commercial Billing Control Center',
    tag: 'Revenue and reporting dashboard',
    industry: 'Energy and retail',
    outcome: 'Clearer financial oversight',
    image: billingMockup,
    gradient: 'linear-gradient(135deg, #3d2711 0%, #15110d 100%)',
    iconName: 'ChartColumnIncreasing',
    description:
      'A branded control layer for invoice operations, metering visibility, approvals, and financial reporting across business units.',
    technologies: ['Dashboard UX', 'Analytics surfaces', 'Admin architecture', 'Workflow reporting']
  }
];
