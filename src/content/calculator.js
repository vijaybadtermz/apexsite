export const calculatorConfig = {
  platforms: [
    {
      id: 'android',
      title: 'Mobile application',
      subtitle: 'Customer or field-team mobile product',
      iconName: 'Smartphone',
      basePrice: 4000
    },
    {
      id: 'web',
      title: 'Business website or web app',
      subtitle: 'Marketing site, portal, or SaaS experience',
      iconName: 'MonitorSmartphone',
      basePrice: 3200
    },
    {
      id: 'desktop',
      title: 'Internal operations platform',
      subtitle: 'Dashboard, desktop workflow, or admin suite',
      iconName: 'Blocks',
      basePrice: 3600
    }
  ],
  scales: [
    {
      id: 'small',
      label: 'Focused',
      caption: 'Lean launch scope',
      multiplier: 0.85,
      baseWeeks: 3
    },
    {
      id: 'medium',
      label: 'Growth-ready',
      caption: 'Balanced launch + scale',
      multiplier: 1.2,
      baseWeeks: 6
    },
    {
      id: 'large',
      label: 'Multi-flow',
      caption: 'Advanced workflows and integrations',
      multiplier: 1.8,
      baseWeeks: 10
    }
  ],
  addons: [
    {
      id: 'auth',
      title: 'Roles and authentication',
      subtitle: 'Secure accounts, permissions, and access flows',
      price: 700,
      additionalWeeks: 1
    },
    {
      id: 'dbSync',
      title: 'Data sync layer',
      subtitle: 'Cloud persistence, records, and admin visibility',
      price: 900,
      additionalWeeks: 2
    },
    {
      id: 'realtime',
      title: 'Real-time updates',
      subtitle: 'Live alerts, status changes, or team activity',
      price: 850,
      additionalWeeks: 1
    },
    {
      id: 'analytics',
      title: 'Reporting and analytics',
      subtitle: 'Performance dashboards and decision-making views',
      price: 950,
      additionalWeeks: 2
    }
  ]
};
