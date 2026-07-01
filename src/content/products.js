export const buildLanes = [
  {
    id: 'windows',
    label: 'Windows Desktop Apps',
    description: 'Business software, operator tools, offline-first utilities, and internal systems for Windows teams.'
  },
  {
    id: 'web',
    label: 'Web Apps',
    description: 'Admin dashboards, ERP flows, portals, CRMs, and client-facing business platforms.'
  },
  {
    id: 'android',
    label: 'Android Apps',
    description: 'Field-team apps, tracking tools, retail support apps, and workflow systems designed for mobile use.'
  },
  {
    id: 'chatbots',
    label: 'AI And Chatbot Integrations',
    description: 'Lead capture bots, support assistants, process helpers, and AI-enhanced business workflows.'
  }
];

export const targetClientProfiles = [
  {
    id: 'offline-business',
    title: 'Businesses still running without proper software',
    description:
      'We help companies that still depend on manual records, WhatsApp coordination, paper approvals, or scattered spreadsheets move into a structured digital workflow.'
  },
  {
    id: 'outdated-business',
    title: 'Small companies stuck with outdated or incomplete systems',
    description:
      'We redesign and rebuild weak websites, slow admin tools, or half-working internal software into cleaner, faster, modern products that teams can actually use every day.'
  }
];

export const productsData = [
  {
    id: 'easyaudit',
    name: 'EasyAudit',
    tagline: 'Tracking Audit Workflow',
    type: 'Ready-to-deploy web application',
    status: 'Production-ready',
    iconName: 'ReceiptText',
    gradient: 'linear-gradient(135deg, #3a2a16 0%, #120f0b 100%)',
    audience: 'Audit firms, chartered accountant teams, tax consultants, compliance departments',
    deployment: 'Web app for multi-user firm operations',
    stack: ['React', 'Material UI', 'Node.js', 'Express', 'MySQL', 'Axios'],
    summary:
      'A full-stack workflow platform for audit and tax teams to manage client entities, assessments, IT notices, and document-heavy compliance work from one place.',
    features: [
      'Client onboarding for individual assessees and business entities with guided multi-step registration',
      'Tax assessment creation, assignment, workflow movement, and status visibility across teams',
      'Income Tax notice management with dynamic notice types and cleaner compliance tracking',
      'Document upload support for PAN, Aadhar, GSTIN, DSC, and related client records',
      'Role-based access for Admin, Audit User, and Super User with detailed client views'
    ],
    visual: {
      eyebrow: 'Audit workflow',
      title: 'Assessments, notices, documents',
      points: ['Multi-step client setup', 'Inline record editing', 'Searchable compliance views']
    }
  },
  {
    id: 'employee-management-system',
    name: 'Employee Management System',
    tagline: 'HR And Workforce Platform',
    type: 'Ready-to-deploy web application',
    status: 'Production-ready',
    iconName: 'UsersRound',
    gradient: 'linear-gradient(135deg, #16362d 0%, #0d120f 100%)',
    audience: 'SMEs, HR departments, growing teams, remote-first companies',
    deployment: 'Web-based internal workforce platform',
    stack: ['React', 'Vite', 'Material UI', 'Redux Toolkit', 'Recharts', 'Node.js', 'MongoDB', 'JWT'],
    summary:
      'A complete employee operations system covering team records, task assignment, leave workflows, notifications, dashboards, and secure role-aware access.',
    features: [
      'Admin dashboard with metrics, charts, task completion trends, and employee performance visibility',
      'Employee CRUD workflows with activation and deactivation control',
      'Task assignment pipeline with Pending, In Progress, and Completed status flow',
      'Leave request and approval management for sick, vacation, and emergency requests',
      'JWT authentication, profile management, password updates, and notification tracking'
    ],
    visual: {
      eyebrow: 'HR operations',
      title: 'Tasks, leave, dashboards',
      points: ['Role-specific panels', 'Performance visibility', 'Secure team management']
    }
  },
  {
    id: 'mg-builders',
    name: 'MG Builders / MG Work Space',
    tagline: 'Construction Management Portal',
    type: 'Ready-to-deploy web application',
    status: 'Production-ready',
    iconName: 'Building2',
    gradient: 'linear-gradient(135deg, #1d243a 0%, #0d1018 100%)',
    audience: 'Construction firms, infrastructure teams, material-heavy project organizations',
    deployment: 'ERP-style web platform with mobile-responsive workflows',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Material UI', 'Node.js', 'MongoDB', 'JWT', 'jsPDF'],
    summary:
      'A full material-management ERP that tracks requisitions, purchase orders, stock movement, receipts, returns, and reports across construction operations.',
    features: [
      '14 plus role-based access layers covering admin, site, purchase, store, and approval users',
      'Material, vendor, site, and work-stage masters with auto-code generation',
      'Complete material lifecycle from request to purchase, receipt, issue, transfer, and return',
      'Real-time stock tracking by location with daily, opening, and closing stock control',
      'Reports, PDF generation, Excel import-export, responsive UI, and dashboard analytics'
    ],
    visual: {
      eyebrow: 'Construction ERP',
      title: 'Material flow, stock, reporting',
      points: ['Multi-role controls', 'Location-wise stock', 'PDF and Excel outputs']
    }
  }
];
