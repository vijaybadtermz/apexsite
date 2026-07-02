export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Applications' },
  { id: 'mobile', label: 'Android Apps' },
  { id: 'desktop', label: 'Windows Desktop' },
  { id: 'ai', label: 'AI & Chatbots' }
];

export const productsData = [
  // WEB
  {
    id: 'easyaudit',
    category: 'web',
    name: 'Easy Audit Workspace',
    tagline: 'Audit & Compliance Tracking',
    type: 'Ready-to-deploy web application',
    status: 'Production-ready',
    iconName: 'ReceiptText',
    gradient: 'linear-gradient(135deg, #3a2a16 0%, #120f0b 100%)',
    audience: 'Audit firms, chartered accountants, and compliance departments',
    deployment: 'Cloud-hosted multi-user SaaS',
    stack: ['React', 'Material UI', 'Node.js', 'Express', 'MySQL'],
    summary:
      'A comprehensive workflow management system that enables tax advisory and auditing teams to organize audits, track notices, store DSCs, and manage client communications in one secure dashboard.',
    features: [
      'Client profile vault with Aadhar, PAN, GSTIN, and DSC expiration alarms',
      'Interactive multi-step client onboarding wizard',
      'Assessment tracker with status progression (Draft, Pending Review, Filed)',
      'Income Tax Notice tracker supporting automated alerts and response uploads',
      'Role-based permissions (Firm Admins, Audit staff, Read-only partners)'
    ],
    visual: {
      eyebrow: 'COMPLIANCE PORTAL',
      title: 'Tax & Audit Control',
      points: ['Multi-role login', 'DSC tracking', 'Notice status manager']
    }
  },
  {
    id: 'employee-management-system',
    category: 'web',
    name: 'HR & Operations Hub',
    tagline: 'Employee & Task Management',
    type: 'Ready-to-deploy web application',
    status: 'Production-ready',
    iconName: 'UsersRound',
    gradient: 'linear-gradient(135deg, #16362d 0%, #0d120f 100%)',
    audience: 'SMEs, remote startups, and workforce managers',
    deployment: 'Cloud-based intranet portal',
    stack: ['React', 'Material UI', 'Redux Toolkit', 'Node.js', 'MongoDB'],
    summary:
      'An intuitive HR operations platform that handles digital staff profiles, team check-ins, leaves, performance metrics, and task assignments in real-time.',
    features: [
      'Visual analytics dashboard tracking employee activity and task completion',
      'Employee onboarding pipeline with active/inactive state selectors',
      'Kanban board for team task assignment with status queues (Pending, Doing, Done)',
      'Automated leave balance calculators and managers',
      'Protected API endpoints using JWT authentication and secure passwords'
    ],
    visual: {
      eyebrow: 'OPERATIONS PORTAL',
      title: 'Workforce Hub',
      points: ['Kanban tasking', 'Leave manager', 'Metrics dashboard']
    }
  },
  {
    id: 'mg-builders',
    category: 'web',
    name: 'MG Builders Workspace',
    tagline: 'Construction ERP & Supply Chain',
    type: 'Ready-to-deploy web application',
    status: 'Production-ready',
    iconName: 'Building2',
    gradient: 'linear-gradient(135deg, #1d243a 0%, #0d1018 100%)',
    audience: 'Construction firms, builders, and material suppliers',
    deployment: 'Web-based responsive ERP',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB', 'jsPDF'],
    summary:
      'A enterprise-grade logistics and material-tracking system built specifically for heavy infrastructure projects. Manages materials from requisition to site delivery across 14+ specific roles.',
    features: [
      'Multi-tier role structure covering Site Eng, Store Keeper, Purchaser, and Accounts',
      'Material inventory masters with automated barcode and stock coding',
      'Requisition pipelines with multi-stage cost limit verification',
      'Real-time site stock trackers displaying Opening, Current, and Closing stock',
      'Automated PDF generation for purchase orders and vendor specifications'
    ],
    visual: {
      eyebrow: 'CONSTRUCTION ERP',
      title: 'Supply Chain Track',
      points: ['14 user access roles', 'Live site stocks', 'Excel & PDF exports']
    }
  },

  // MOBILE
  {
    id: 'fieldtrack-pro',
    category: 'mobile',
    name: 'FieldTrack Pro',
    tagline: 'Field Operations & Dispatch',
    type: 'Ready-to-deploy Android app',
    status: 'Production-ready',
    iconName: 'Smartphone',
    gradient: 'linear-gradient(135deg, #2b1d3d 0%, #0f0a14 100%)',
    audience: 'Logistics agencies, delivery fleets, and field inspectors',
    deployment: 'Android (APK / Google Play)',
    stack: ['React Native', 'SQLite', 'Node.js', 'Google Maps API'],
    summary:
      'A robust, offline-capable mobile application designed for utility workers, delivery drivers, and field technicians to receive jobs, navigate, and log progress offline.',
    features: [
      'Offline-first architecture storing data locally and syncing automatically upon internet return',
      'GPS route tracking and location check-ins with low battery overhead',
      'Digital signature capture and camera support for photo verification',
      'Push alerts for urgent job dispatch and schedule changes',
      'Localized SQLite database for lighting-fast local data query'
    ],
    visual: {
      eyebrow: 'MOBILE OPERATIONS',
      title: 'Field Team Dispatch',
      points: ['Offline local sync', 'GPS checking', 'Photo signatures']
    }
  },
  {
    id: 'retailscan',
    category: 'mobile',
    name: 'RetailScan Warehouse',
    tagline: 'Barcode Inventory Manager',
    type: 'Ready-to-deploy Android app',
    status: 'Production-ready',
    iconName: 'ScanLine',
    gradient: 'linear-gradient(135deg, #3d1b1d 0%, #170b0c 100%)',
    audience: 'Warehouse staff, retailers, and stock checkers',
    deployment: 'Android handheld barcode systems & mobiles',
    stack: ['React Native', 'Expo', 'SQLite', 'Firebase Sync'],
    summary:
      'Turn standard Android smartphones or dedicated warehouse scanner guns into smart inventory points. Tracks stock counts, uploads barcodes, and checks stock levels on the go.',
    features: [
      'Camera-based instant barcode and QR-code scanner library integration',
      'Stock adjust logs (Inflow, Outflow, Damaged, Returned)',
      'Multi-warehouse support mapping products across separate storage rooms',
      'Threshold alarms triggering emails when products are running low',
      'CSV list export for easy import into spreadsheets or ERPs'
    ],
    visual: {
      eyebrow: 'WAREHOUSE UTILITY',
      title: 'Barcode Scanning',
      points: ['Instant scan library', 'Stock level alarms', 'Export to spreadsheet']
    }
  },

  // DESKTOP
  {
    id: 'operatorconsole',
    category: 'desktop',
    name: 'OperatorConsole IoT',
    tagline: 'Industrial Machine Dashboard',
    type: 'Windows Desktop app',
    status: 'Production-ready',
    iconName: 'Monitor',
    gradient: 'linear-gradient(135deg, #1b3d3d 0%, #0b1717 100%)',
    audience: 'Manufacturers, plant operators, and hardware integrations',
    deployment: 'Windows Desktop Application (.exe)',
    stack: ['Electron', 'React', 'Tailwind CSS', 'Node-serialport', 'SQLite'],
    summary:
      'An offline-first desktop application that communicates directly with machinery and serial sensors. Shows live performance logs, reports, and controls hardware rigs.',
    features: [
      'Serial connection controller (COM port selector) with error handling',
      'High-frequency line charts plotting machine telemetry in real-time',
      'Local database archiving millions of machine logs without slowdown',
      'Automated background diagnostics alerts and system test actions',
      'Exportable spreadsheet reports for compliance and auditing'
    ],
    visual: {
      eyebrow: 'DESKTOP CONSOLE',
      title: 'IoT Telemetry Panel',
      points: ['Serial hardware hook', 'Real-time charting', 'Offline local storage']
    }
  },
  {
    id: 'datamigrate',
    category: 'desktop',
    name: 'DataMigrate Backup Utility',
    tagline: 'Local-to-Cloud Folder Sync',
    type: 'Windows Desktop app',
    status: 'Production-ready',
    iconName: 'RefreshCw',
    gradient: 'linear-gradient(135deg, #383a1d 0%, #15160c 100%)',
    audience: 'IT administrators, backup managers, and server operators',
    deployment: 'Windows service or standalone task executable',
    stack: ['Electron', 'Node.js', 'AWS SDK', 'SQLite'],
    summary:
      'A local utility application to monitor files and folders on a local machine or NAS, securely backing them up to cloud bucket targets (S3, Azure Blob) based on custom schedules.',
    features: [
      'Folder watcher daemon that triggers sync within milliseconds of file changes',
      'Transfer engine with bandwidth throttle caps to protect network channels',
      'Historical transaction ledger tracking all uploaded files and timestamps',
      'Cron scheduling selector (Daily, hourly, custom intervals)',
      'Encrypted transfer setup keeping files private during uplink'
    ],
    visual: {
      eyebrow: 'IT UTILITY',
      title: 'Auto-Sync Engine',
      points: ['Local directory watcher', 'AWS S3 integration', 'Cron sync schedule']
    }
  },

  // AI & CHATBOTS
  {
    id: 'leadbot',
    category: 'ai',
    name: 'LeadBot AI',
    tagline: 'Conversational Qualifier & Booker',
    type: 'AI Chatbot Integration',
    status: 'Production-ready',
    iconName: 'Bot',
    gradient: 'linear-gradient(135deg, #1b263d 0%, #0a0d14 100%)',
    audience: 'E-commerce sites, real estate portals, and service companies',
    deployment: 'Web-embed script compatible with any website platform',
    stack: ['OpenAI API', 'Node.js', 'Express', 'React', 'MongoDB'],
    summary:
      'An intelligent web-embed agent that chats with incoming visitors, answers FAQs, qualifies budget thresholds, and books appointment slots using integrated calendars.',
    features: [
      'Natural Language Processing that holds human-like qualifying conversations',
      'Lead scoring heuristics analyzing user text for interest level and budget',
      'Seamless calendar integration booking directly into Google/Calendly slots',
      'Admin console displaying all qualified conversations and buyer details',
      'Custom theme loader matching widget styling to site branding'
    ],
    visual: {
      eyebrow: 'AI SALES ENGINE',
      title: 'Lead Booking Agent',
      points: ['NLP conversation', 'Calendar hookup', 'Qualified lead alerts']
    }
  },
  {
    id: 'supportbot',
    category: 'ai',
    name: 'SupportBot AI',
    tagline: 'Knowledge-Base Resolver',
    type: 'AI Chatbot Integration',
    status: 'Production-ready',
    iconName: 'MessageSquareCode',
    gradient: 'linear-gradient(135deg, #3d1b38 0%, #150a13 100%)',
    audience: 'Customer support teams, SaaS founders, and corporate helpdesks',
    deployment: 'Embed Widget + Slack / Discord integration',
    stack: ['LangChain', 'Pinecone Vector DB', 'OpenAI Embedding', 'Node.js'],
    summary:
      'A support bot trained on your product documentation, manuals, and FAQs. Resolves over 65% of support requests autonomously, and hands off complex cases to agents.',
    features: [
      'Vector DB search scanning PDFs, DOCX, URLs, and databases for correct answers',
      'Zero-hallucination guardrails limiting answers strictly to official text sources',
      'Automatic handoff routing chats to real support agents via Slack or Email',
      'Weekly reports tracking unresolved terms to pinpoint missing documentation',
      'Multi-channel connectivity (Web, Slack, WhatsApp Business API)'
    ],
    visual: {
      eyebrow: 'AI SUPPORT ENGINE',
      title: 'KB Doc Resolver',
      points: ['Vector search lookup', 'Zero-hallucination tech', 'Slack agent routing']
    }
  }
];
