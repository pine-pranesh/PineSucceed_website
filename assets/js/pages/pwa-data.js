/*
 * PWA Development Services page (pwa-development-services.html):
 * content for the "Explore our services" tabs. js/pages/ai-services.js uses
 * this list instead of its built-in SDLC stages when it is present.
 * Order matches the tab buttons in the page.
 */
window.AI_SERVICE_STAGES = [
  {
    "step": "Consulting",
    "title": "PWA Consulting and Strategy",
    "text": "We help businesses determine whether a Progressive Web App is suitable for their users, workflows, technical requirements, distribution goals, and budget.",
    "listTitle": "Our PWA consulting includes",
    "points": [
      "Business and product requirement analysis",
      "Audience, device, and browser assessment",
      "PWA feasibility evaluation",
      "Feature and capability planning",
      "Architecture and technology recommendations",
      "Performance and offline strategy",
      "Implementation roadmap and risk planning"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/consulting.jpg",
    "alt": "Team planning a Progressive Web App with a laptop and notes"
  },
  {
    "step": "Custom PWA",
    "title": "Custom Progressive Web App Development",
    "text": "PineSucceed develops custom PWAs around your business model, user journeys, content, workflows, integrations, security requirements, and growth plans.",
    "listTitle": "Custom PWA development includes",
    "points": [
      "Responsive web application development",
      "Installable application experiences",
      "App-like navigation and interactions",
      "Offline and low-connectivity support",
      "Push notifications",
      "Backend and API integration",
      "Production deployment and monitoring"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/custom-pwa.jpg",
    "alt": "Web application interface designs on a desktop monitor"
  },
  {
    "step": "Installable",
    "title": "Installable Web Application Development",
    "text": "We configure PWAs so users can install them on supported devices and launch them from a home screen or application menu without a traditional app-store download.",
    "listTitle": "Installability services include",
    "points": [
      "Web app manifest configuration",
      "Application icons and launch settings",
      "Display mode configuration",
      "Install prompt strategy",
      "Home screen and desktop installation",
      "Launch and navigation behavior",
      "Installability testing across supported platforms"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/installable.jpg",
    "alt": "Smartphone home screen with installed applications"
  },
  {
    "step": "Service Workers",
    "title": "Service Worker Development",
    "text": "Our developers implement service workers to manage caching, offline behavior, background tasks, updates, and network resilience.",
    "listTitle": "Service worker development includes",
    "points": [
      "Service worker architecture",
      "Application shell caching",
      "Runtime caching",
      "Network request handling",
      "Background update strategies",
      "Versioning and cache invalidation",
      "Failure handling and recovery"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/service-worker.jpg",
    "alt": "Browser developer tools showing application code"
  },
  {
    "step": "Offline-First",
    "title": "Offline-First PWA Development",
    "text": "PineSucceed builds applications that remain useful during weak or unavailable connectivity and synchronize approved data when the network returns.",
    "listTitle": "Offline capabilities include",
    "points": [
      "Offline content and application access",
      "Local browser storage",
      "Queued user actions",
      "Background synchronization",
      "Conflict detection and resolution",
      "Connectivity-aware interfaces",
      "Data integrity and recovery planning"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/offline-first.jpg",
    "alt": "Person using a web application on a laptop"
  },
  {
    "step": "UI and UX",
    "title": "Responsive PWA UI and UX Design",
    "text": "We create interfaces that adapt to mobile phones, tablets, laptops, and desktops while supporting touch, keyboard, mouse, and accessible navigation.",
    "listTitle": "PWA design services include",
    "points": [
      "User research and journey mapping",
      "Responsive information architecture",
      "Wireframes and interactive prototypes",
      "Mobile-first interface design",
      "Reusable design systems",
      "Accessible interaction patterns",
      "Usability testing and refinement"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/ui-ux.jpg",
    "alt": "Hand-drawn interface wireframes"
  },
  {
    "step": "Backend and API",
    "title": "PWA Backend and API Development",
    "text": "We develop secure backend services and APIs that support user accounts, application data, workflows, integrations, notifications, files, and administrative operations.",
    "listTitle": "Backend development includes",
    "points": [
      "REST and GraphQL APIs",
      "Authentication and authorization",
      "Database design and integration",
      "Business logic and workflow services",
      "File and media management",
      "Notification services",
      "Scalable cloud deployment"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/backend-api.jpg",
    "alt": "Backend source code on a screen"
  },
  {
    "step": "Push Notifications",
    "title": "Push Notification Integration",
    "text": "PineSucceed implements web push notifications to help businesses send timely alerts, updates, reminders, and engagement messages to opted-in users on supported platforms.",
    "listTitle": "Push notification services include",
    "points": [
      "User permission and subscription flows",
      "Notification service integration",
      "Audience and topic targeting",
      "Transactional alerts",
      "Engagement campaigns",
      "Deep links and action handling",
      "Delivery and engagement tracking"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/push-notifications.jpg",
    "alt": "Smartphone lock screen showing notifications"
  },
  {
    "step": "Background Sync",
    "title": "Background Synchronization",
    "text": "We design background synchronization workflows that safely submit queued actions and refresh selected information when network connectivity becomes available.",
    "listTitle": "Synchronization capabilities include",
    "points": [
      "Queued form and transaction submission",
      "Background data updates",
      "Retry and failure policies",
      "Duplicate prevention",
      "Conflict handling",
      "Synchronization status interfaces",
      "Monitoring and error reporting"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/background-sync.jpg",
    "alt": "Connected network lights across the globe"
  },
  {
    "step": "Performance",
    "title": "PWA Performance Optimization",
    "text": "Our team optimizes loading, rendering, caching, media, code delivery, and backend responses to create fast and responsive experiences.",
    "listTitle": "Performance optimization includes",
    "points": [
      "Core Web Vitals improvement",
      "Code splitting and lazy loading",
      "Image and media optimization",
      "Caching and CDN strategy",
      "JavaScript and CSS optimization",
      "API and database performance tuning",
      "Performance monitoring and testing"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/performance.jpg",
    "alt": "Performance dashboards open on a laptop"
  },
  {
    "step": "Security",
    "title": "PWA Security Development",
    "text": "We implement suitable security controls for browser-based applications, APIs, user accounts, local data, and integrations.",
    "listTitle": "Security services include",
    "points": [
      "HTTPS and secure transport",
      "Authentication and role-based access",
      "Secure API design",
      "Local storage and cache protection",
      "Input validation and output encoding",
      "Session and token security",
      "Security testing and monitoring"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/security.jpg",
    "alt": "Smartphone showing a security lock screen"
  },
  {
    "step": "eCommerce",
    "title": "PWA eCommerce Development",
    "text": "PineSucceed creates installable commerce experiences that support product discovery, accounts, checkout, payments, order tracking, and customer engagement.",
    "listTitle": "PWA commerce features include",
    "points": [
      "Responsive product catalogs",
      "Search and filtering",
      "Shopping cart and checkout",
      "Secure payment integration",
      "Customer accounts and wish lists",
      "Order tracking and notifications",
      "Commerce, inventory, CRM, and ERP integration"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/ecommerce.jpg",
    "alt": "Shopping bags for online commerce"
  },
  {
    "step": "Enterprise",
    "title": "Enterprise PWA Development",
    "text": "We build PWAs for employee, partner, field, and operational workflows that need broad device access without distributing separate native applications.",
    "listTitle": "Enterprise PWA capabilities include",
    "points": [
      "Employee self-service",
      "Approvals and task workflows",
      "Operational dashboards",
      "Role-based access",
      "Offline field data capture",
      "Document and knowledge access",
      "CRM, ERP, and enterprise system integration"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/enterprise.jpg",
    "alt": "Employees working in a large open office"
  },
  {
    "step": "Migration",
    "title": "PWA Migration and Modernization",
    "text": "We convert suitable websites and web applications into Progressive Web Apps or modernize existing PWAs with better architecture, performance, offline behavior, and maintainability.",
    "listTitle": "Migration and modernization services include",
    "points": [
      "Existing application assessment",
      "PWA readiness analysis",
      "Frontend architecture modernization",
      "Manifest and service worker implementation",
      "Responsive interface redesign",
      "Backend and API modernization",
      "Phased migration and launch planning"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/migration.jpg",
    "alt": "Frontend code being modernized"
  },
  {
    "step": "Integrations",
    "title": "PWA Integration Services",
    "text": "Our developers connect PWAs with business platforms, cloud services, payments, identity providers, analytics, maps, communications, and third-party tools.",
    "listTitle": "Integration services include",
    "points": [
      "CRM and ERP integration",
      "Payment gateway integration",
      "Single sign-on and identity services",
      "Maps and geolocation",
      "Analytics and tag management",
      "Email, messaging, and support platforms",
      "REST, GraphQL, and third-party APIs"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/integration.jpg",
    "alt": "Connected circuit pathways representing system integration"
  },
  {
    "step": "Testing",
    "title": "PWA Testing and Quality Assurance",
    "text": "We test PWAs across representative browsers, devices, operating systems, screen sizes, network conditions, user roles, and workflows.",
    "listTitle": "PWA testing includes",
    "points": [
      "Functional and regression testing",
      "Responsive and cross-browser testing",
      "Installability and manifest testing",
      "Service worker and cache testing",
      "Offline and synchronization testing",
      "Performance, security, and accessibility testing",
      "Automated test development"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/testing.jpg",
    "alt": "Tester reviewing an application on a tablet"
  },
  {
    "step": "Deployment",
    "title": "PWA Deployment and Support",
    "text": "PineSucceed deploys PWAs to secure web infrastructure, configures caching and monitoring, and provides ongoing support for updates and changing browser capabilities.",
    "listTitle": "Deployment and support include",
    "points": [
      "Production environment configuration",
      "HTTPS, domain, CDN, and caching setup",
      "CI/CD and release automation",
      "Monitoring and error tracking",
      "Service worker update management",
      "Browser compatibility maintenance",
      "Feature enhancements and technical support"
    ],
    "image": "../../assets/img/services/application-development/pwa-development-services/services/deployment.jpg",
    "alt": "Laptop on a desk used for web deployment"
  }
];
