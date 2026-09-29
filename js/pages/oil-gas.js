/*
 * Oil & Gas page content. Behaviour lives in js/components/industry-page.js.
 */
window.initIndustryPage({
  servicesHeading: "Oil & Gas Software Development Services We Provide",
  solutionsSection: 'section[aria-labelledby="oilgas-solutions-heading"]',

  services: [
    {
      title: "Oil & Gas Software Consulting",
      description:
        "Define a practical technology strategy based on your energy operations, assets, users, systems, and growth plans.",
      listIntro: "Our consulting services can include:",
      points: [
        "Business and technology assessment",
        "Oil and gas workflow analysis",
        "Product and platform strategy",
        "Build-versus-buy evaluation",
        "Software requirements definition",
        "Solution architecture",
        "Integration planning",
        "Data migration strategy",
        "Security assessment",
        "Modernization roadmap",
        "Implementation planning",
      ],
      image: "/oil-gas/consulting.jpg",
    },
    {
      title: "Custom Oil & Gas Software Development",
      description:
        "Develop purpose-built applications when standard energy products cannot support your operational requirements.",
      listIntro: "Custom development can cover:",
      points: [
        "Web applications",
        "Mobile and offline applications",
        "Cloud-based energy platforms",
        "Production and asset management systems",
        "Operator, contractor, and supplier portals",
        "Internal workflow systems",
        "Administrative applications",
        "Reporting and analytics solutions",
        "EnergyTech SaaS products",
      ],
      image: "/oil-gas/custom-development.jpg",
    },
    {
      title: "Oil & Gas Software Modernization",
      description:
        "Improve or replace aging applications that have become difficult to maintain, integrate, secure, or scale.",
      listIntro: "Modernization services may include:",
      points: [
        "Legacy application assessment",
        "Architecture redesign",
        "Interface modernization",
        "Cloud migration",
        "Performance optimization",
        "Database modernization",
        "Integration replacement",
        "Security improvement",
        "Incremental system replacement",
        "Technical-debt reduction",
      ],
      image: "/oil-gas/modernization.jpg",
    },
    {
      title: "Oil & Gas Software Integration",
      description:
        "Connect energy applications with operational, engineering, financial, safety, equipment, and enterprise systems.",
      listIntro: "Integration services can include:",
      points: [
        "API design and development",
        "Data synchronization",
        "Middleware implementation",
        "Single sign-on",
        "ERP and CRM integration",
        "SCADA and control-system integration",
        "GIS integration",
        "Asset and maintenance system integration",
        "Laboratory system integration",
        "Equipment and telematics integration",
        "Reporting and analytics integration",
      ],
      image: "/oil-gas/integration.jpg",
    },
    {
      title: "Oil & Gas Data Migration",
      description:
        "Move well, production, asset, maintenance, workforce, safety, environmental, and financial information into a new platform.",
      listIntro: "Our migration approach can include:",
      points: [
        "Source-system analysis",
        "Data inventory",
        "Cleansing and deduplication",
        "Field mapping",
        "Transformation rules",
        "Trial migrations",
        "Document migration",
        "Reconciliation",
        "Production migration",
        "Post-migration validation",
      ],
      image: "/oil-gas/data-migration.jpg",
    },
    {
      title: "Oil & Gas Software Quality Assurance",
      description:
        "Validate the functionality, security, usability, performance, and compatibility of energy applications.",
      listIntro: "Testing can include:",
      points: [
        "Functional testing",
        "Operational workflow testing",
        "Integration testing",
        "Data migration testing",
        "Role and permission testing",
        "Security-focused testing",
        "Performance and load testing",
        "Mobile, device, and offline testing",
        "Regression testing",
        "User acceptance support",
      ],
      image: "/oil-gas/quality-assurance.jpg",
    },
    {
      title: "Oil & Gas Software Support",
      description:
        "Keep energy applications reliable, secure, and aligned with changing operational requirements.",
      listIntro: "Support services can include:",
      points: [
        "Issue investigation",
        "Bug resolution",
        "Performance monitoring",
        "Security updates",
        "Integration maintenance",
        "User administration",
        "Workflow enhancements",
        "Reporting improvements",
        "Platform upgrades",
        "Feature development",
      ],
      image: "/oil-gas/support.jpg",
    },
  ],

  solutions: [
    {
      title: "Exploration and Reservoir Data Platforms",
      body: "Centralize seismic, geological, geophysical, well, reservoir, interpretation, and resource information.",
      image: "/oil-gas/exploration-reservoir.webp",
    },
    {
      title: "Drilling Management Systems",
      body: "Manage well plans, drilling programs, daily operations, costs, equipment, contractors, incidents, and performance reporting.",
      image: "/oil-gas/drilling-management.webp",
    },
    {
      title: "Production Management Platforms",
      body: "Monitor well and facility production, targets, downtime, allocation, losses, and operational performance.",
      image: "/oil-gas/production-management.jpg",
    },
    {
      title: "Asset and Equipment Management Systems",
      body: "Track asset records, operating hours, inspections, maintenance schedules, work orders, spare parts, and lifecycle costs.",
      image: "/oil-gas/asset-equipment.webp",
    },
    {
      title: "Pipeline Management Software",
      body: "Support pipeline monitoring, inspections, integrity activities, maintenance, incidents, documentation, and operational reporting.",
      image: "/oil-gas/pipeline-management.webp",
    },
    {
      title: "Refinery and Processing Software",
      body: "Monitor throughput, equipment, product quality, energy use, maintenance, inventory, and plant performance.",
      image: "/oil-gas/refinery-processing.webp",
    },
    {
      title: "Field Service Management Solutions",
      body: "Manage service requests, technicians, schedules, work orders, parts, equipment histories, and field documentation.",
      image: "/oil-gas/field-service.jpg",
    },
    {
      title: "Health, Safety, and Environment Platforms",
      body: "Digitize inspections, observations, incidents, permits, corrective actions, training, emissions, and environmental reporting.",
      image: "/oil-gas/hse-platforms.jpg",
    },
    {
      title: "Oilfield Inventory and Materials Management",
      body: "Manage equipment, tools, spare parts, chemicals, fuel, stock locations, replenishment, and material movements.",
      image: "/oil-gas/inventory-materials.jpg",
    },
    {
      title: "Contractor and Workforce Management Platforms",
      body: "Support onboarding, qualifications, rosters, site access, training, assignments, time records, and contractor performance.",
      image: "/oil-gas/contractor-workforce.jpg",
    },
    {
      title: "Oil & Gas Logistics Solutions",
      body: "Coordinate equipment, materials, personnel, vehicles, vessels, storage, field deliveries, and transportation activities.",
      image: "/oil-gas/oil-gas-logistics.jpg",
    },
    {
      title: "Laboratory Information Management Systems",
      body: "Manage samples, tests, results, approvals, traceability, instruments, and quality-control workflows.",
      image: "/oil-gas/laboratory.jpg",
    },
    {
      title: "Energy Trading and Commercial Platforms",
      body: "Support contracts, nominations, pricing, scheduling, transactions, settlements, reporting, and counterparty workflows.",
      image: "/oil-gas/energy-trading.jpg",
    },
    {
      title: "Remote Operations Platforms",
      body: "Provide centralized visibility into approved assets, production indicators, alarms, field activities, and operational performance across distributed sites.",
      image: "/oil-gas/remote-operations.jpg",
    },
    {
      title: "Oil & Gas Analytics Products",
      body: "Transform well, production, asset, maintenance, safety, environmental, logistics, and financial data into dashboards and decision-support tools.",
      image: "/oil-gas/analytics.jpg",
    },
    {
      title: "AI-Enabled Oil & Gas Applications",
      body: "Develop or integrate capabilities for predictive maintenance, production forecasting, drilling insights, anomaly detection, visual inspection, and resource optimization.",
      image: "/oil-gas/ai-oil-gas.jpg",
    },
    {
      title: "Data Retention and Deletion",
      body: "Implement configurable policies for retaining, archiving, exporting, and deleting well, production, asset, workforce, safety, environmental, commercial, and financial information.",
      image: "/oil-gas/data-retention.jpg",
    },
    {
      title: "Business Continuity",
      body: "Plan for backup, restoration, monitoring, incident response, offline operation, and recovery according to the platform's operational requirements.",
      image: "/oil-gas/business-continuity.jpg",
    },
  ],

  faqs: [
    {
      question: "What oil and gas software does PineSucceed Technologies develop?",
      answer:
        "We develop exploration, drilling, production, pipeline, asset, maintenance, HSE, logistics, laboratory, and energy analytics solutions.",
    },
    {
      question: "Can PineSucceed build custom oil and gas software?",
      answer:
        "Yes. We build software around your assets, wells, facilities, field operations, equipment, workforce, safety processes, and reporting needs.",
    },
    {
      question: "Can you develop drilling management software?",
      answer:
        "Yes. We develop solutions for well planning, daily operations, costs, equipment, contractors, incidents, and drilling performance.",
    },
    {
      question: "Can PineSucceed build production management systems?",
      answer:
        "Yes. We develop platforms for production monitoring, targets, allocation, downtime, losses, forecasting, and operational reporting.",
    },
    {
      question: "Can you develop pipeline management software?",
      answer:
        "Yes. We build solutions for pipeline monitoring, inspections, integrity activities, maintenance, incidents, and documentation.",
    },
    {
      question: "Can PineSucceed develop asset maintenance software?",
      answer:
        "Yes. We create systems for asset records, inspections, preventive maintenance, work orders, spare parts, and maintenance histories.",
    },
    {
      question: "Can you create offline applications for remote field operations?",
      answer:
        "Yes. We can design mobile and field applications that capture data offline and synchronize when connectivity becomes available.",
    },
    {
      question: "Can PineSucceed modernize our existing oil and gas software?",
      answer:
        "Yes. We can improve its architecture, interface, performance, security, integrations, or cloud infrastructure or plan its incremental replacement.",
    },
    {
      question: "Can you integrate oil and gas software with our current systems?",
      answer:
        "Yes. We integrate applications with ERP, GIS, SCADA, maintenance, laboratory, telematics, equipment, logistics, and analytics systems.",
    },
    {
      question: "Can you migrate our operational data?",
      answer:
        "Yes. We can cleanse, map, transfer, reconcile, and validate well, production, asset, safety, environmental, document, and financial data.",
    },
    {
      question: "Can PineSucceed integrate IoT devices and industrial equipment?",
      answer:
        "Yes. We can connect suitable sensors, gateways, telematics systems, equipment platforms, and industrial data sources for monitoring and analytics.",
    },
    {
      question: "Can AI be added to our oil and gas software?",
      answer:
        "Yes. AI can support predictive maintenance, production forecasting, drilling analysis, anomaly detection, visual inspection, and resource optimization.",
    },
    {
      question: "How does PineSucceed protect oil and gas data?",
      answer:
        "We use appropriate access controls, encryption, network safeguards, secure integrations, logging, testing, monitoring, backup, and recovery practices.",
    },
    {
      question: "Does PineSucceed guarantee energy, safety, or environmental compliance?",
      answer:
        "No technology provider replaces qualified legal, engineering, safety, or environmental advice. We implement confirmed requirements while your specialists determine the obligations that apply.",
    },
    {
      question: "How long does oil and gas software development take?",
      answer:
        "The timeline depends on the features, sites, user roles, integrations, devices, connectivity, migration, security, and testing requirements.",
    },
    {
      question: "How much does custom oil and gas software cost?",
      answer:
        "Cost depends on scope, complexity, platforms, equipment integrations, migration, infrastructure, and support needs. We estimate it after reviewing your requirements.",
    },
    {
      question: "Does PineSucceed provide support after launch?",
      answer:
        "Yes. We provide monitoring, maintenance, security updates, performance optimization, integration support, and continued development.",
    },
    {
      question: "How do we begin an oil and gas software project with PineSucceed?",
      answer:
        "Share your operating model, sites, workflows, assets, current systems, required features, and goals. We will recommend an appropriate delivery approach.",
    },
  ],
});
