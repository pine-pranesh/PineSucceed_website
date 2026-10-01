/*
 * Manufacturing & Industrial Operations page content. Behaviour lives in js/components/industry-page.js.
 */
window.initIndustryPage({
  servicesHeading: "Manufacturing Software Development Services We Provide",
  solutionsSection: 'section[aria-labelledby="manufacturing-solutions-heading"]',

  services: [
    {
      title: "Manufacturing Software Consulting",
      description:
        "Define a practical technology strategy based on your production model, operational challenges, users, systems, and growth plans.",
      listIntro: "Our consulting services can include:",
      points: [
        "Business and technology assessment",
        "Manufacturing workflow analysis",
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
      image: "/industries/manufacturing-and-industrial-operations/consulting.jpg",
    },
    {
      title: "Custom Manufacturing Software Development",
      description:
        "Develop purpose-built applications when standard manufacturing products cannot support your workflows or competitive requirements.",
      listIntro: "Custom development can cover:",
      points: [
        "Web applications",
        "Mobile applications",
        "Cloud-based industrial platforms",
        "Production and plant management systems",
        "Operator, supplier, and customer portals",
        "Internal workflow systems",
        "Administrative applications",
        "Reporting and analytics solutions",
        "Industry 4.0 SaaS products",
      ],
      image: "/industries/manufacturing-and-industrial-operations/custom-development.jpg",
    },
    {
      title: "Manufacturing Software Modernization",
      description:
        "Improve or replace aging industrial applications that have become difficult to maintain, integrate, secure, or scale.",
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
      image: "/industries/manufacturing-and-industrial-operations/modernization.jpg",
    },
    {
      title: "Manufacturing Software Integration",
      description:
        "Connect industrial applications with production, financial, warehouse, quality, equipment, and enterprise systems.",
      listIntro: "Integration services can include:",
      points: [
        "API design and development",
        "Data synchronization",
        "Middleware implementation",
        "Single sign-on",
        "ERP and CRM integration",
        "MES and SCADA integration",
        "Warehouse system integration",
        "Product lifecycle management integration",
        "Industrial equipment integration",
        "Supplier platform integration",
        "Reporting and analytics integration",
      ],
      image: "/industries/manufacturing-and-industrial-operations/integration.jpg",
    },
    {
      title: "Manufacturing Data Migration",
      description:
        "Move production, product, inventory, equipment, supplier, quality, maintenance, and financial information into a new platform.",
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
      image: "/industries/manufacturing-and-industrial-operations/data-migration.jpg",
    },
    {
      title: "Manufacturing Software Quality Assurance",
      description:
        "Validate the functionality, security, usability, performance, and compatibility of manufacturing applications.",
      listIntro: "Testing can include:",
      points: [
        "Functional testing",
        "Production workflow testing",
        "Integration testing",
        "Data migration testing",
        "Role and permission testing",
        "Security-focused testing",
        "Performance and load testing",
        "Mobile and device testing",
        "Regression testing",
        "User acceptance support",
      ],
      image: "/industries/manufacturing-and-industrial-operations/quality-assurance.jpg",
    },
    {
      title: "Manufacturing Software Support",
      description:
        "Keep industrial applications reliable, secure, and aligned with changing production requirements.",
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
      image: "/industries/manufacturing-and-industrial-operations/support.jpg",
    },
  ],

  solutions: [
    {
      title: "Manufacturing Execution Systems",
      body: "Manage production orders, workflows, materials, operators, equipment, output, downtime, and shop-floor performance.",
      image: "/industries/manufacturing-and-industrial-operations/mes.jpg",
    },
    {
      title: "Production Planning and Scheduling Software",
      body: "Coordinate demand, capacity, labor, machines, materials, work orders, and delivery commitments.",
      image: "/industries/manufacturing-and-industrial-operations/production-planning.jpg",
    },
    {
      title: "Industrial IoT Platforms",
      body: "Connect equipment, sensors, gateways, and applications for real-time monitoring, alerts, analytics, and remote operations.",
      image: "/industries/manufacturing-and-industrial-operations/industrial-iot.jpg",
    },
    {
      title: "Equipment and Asset Management Systems",
      body: "Manage asset records, usage, inspections, maintenance schedules, work orders, spare parts, and lifecycle costs.",
      image: "/industries/manufacturing-and-industrial-operations/asset-management.jpg",
    },
    {
      title: "Quality Management Systems",
      body: "Digitize quality planning, inspections, nonconformance reporting, corrective actions, audits, and traceability.",
      image: "/industries/manufacturing-and-industrial-operations/quality-management.jpg",
    },
    {
      title: "Inventory and Warehouse Management Software",
      body: "Manage materials, locations, stock movements, replenishment, picking, packing, and finished goods.",
      image: "/industries/manufacturing-and-industrial-operations/inventory-warehouse.jpg",
    },
    {
      title: "Product Lifecycle Management Solutions",
      body: "Coordinate product data, specifications, bills of materials, revisions, approvals, documentation, and engineering changes.",
      image: "/industries/manufacturing-and-industrial-operations/plm.jpg",
    },
    {
      title: "Supply Chain Management Platforms",
      body: "Connect demand planning, procurement, suppliers, inventory, production, logistics, and fulfillment.",
      image: "/industries/manufacturing-and-industrial-operations/supply-chain.jpg",
    },
    {
      title: "Supplier and Customer Portals",
      body: "Provide secure access to orders, forecasts, specifications, documents, approvals, deliveries, invoices, and communication.",
      image: "/industries/manufacturing-and-industrial-operations/portals.jpg",
    },
    {
      title: "Field Service Management Software",
      body: "Manage service requests, technician assignments, schedules, equipment histories, parts, and service documentation.",
      image: "/industries/manufacturing-and-industrial-operations/field-service.jpg",
    },
    {
      title: "Traceability and Serialization Systems",
      body: "Track materials, batches, components, products, and movements throughout production and distribution.",
      image: "/industries/manufacturing-and-industrial-operations/traceability.jpg",
    },
    {
      title: "Manufacturing Analytics Products",
      body: "Transform production, quality, equipment, energy, inventory, and supply chain data into dashboards and decision-support tools.",
      image: "/industries/manufacturing-and-industrial-operations/analytics.jpg",
    },
    {
      title: "AI-Enabled Manufacturing Applications",
      body: "Develop or integrate capabilities for predictive maintenance, quality inspection, production planning, demand forecasting, anomaly detection, and energy optimization. AI-generated outputs should be managed through suitable privacy, security, accuracy, transparency, validation, and human-oversight controls.",
      image: "/industries/manufacturing-and-industrial-operations/ai-applications.jpg",
    },
    {
      title: "Data Retention and Deletion",
      body: "Implement configurable policies for retaining, archiving, exporting, and deleting production, product, equipment, supplier, quality, and operational information.",
      image: "/industries/manufacturing-and-industrial-operations/data-retention.jpg",
    },
    {
      title: "Business Continuity",
      body: "Plan for backups, restoration, monitoring, incident response, and recovery according to the platform's operational requirements.",
      image: "/industries/manufacturing-and-industrial-operations/business-continuity.jpg",
    },
  ],

  faqs: [
    {
      question: "What manufacturing software does PineSucceed Technologies develop?",
      answer:
        "We develop production, MES, equipment, quality, inventory, warehouse, supply chain, field service, IoT, and manufacturing analytics solutions.",
    },
    {
      question: "Can PineSucceed build custom manufacturing software?",
      answer:
        "Yes. We build software around your production processes, equipment, materials, workforce, quality, suppliers, and reporting requirements.",
    },
    {
      question: "Can you develop a manufacturing execution system?",
      answer:
        "Yes. We develop MES solutions for production orders, shop-floor workflows, materials, equipment, downtime, output, and performance tracking.",
    },
    {
      question: "Can PineSucceed build production planning software?",
      answer:
        "Yes. We develop solutions for demand, capacity, labor, equipment, material, work-order, and delivery planning.",
    },
    {
      question: "Can you develop quality management software?",
      answer:
        "Yes. We build systems for inspections, nonconformance reporting, corrective actions, audits, documents, and product traceability.",
    },
    {
      question: "Can PineSucceed develop equipment maintenance software?",
      answer:
        "Yes. We create solutions for asset records, preventive maintenance, work orders, inspections, spare parts, and maintenance histories.",
    },
    {
      question: "Can you integrate IoT devices and industrial equipment?",
      answer:
        "Yes. We can connect suitable sensors, gateways, machines, telematics systems, and industrial platforms for monitoring, alerts, and analytics.",
    },
    {
      question: "Can PineSucceed modernize our existing manufacturing software?",
      answer:
        "Yes. We can improve its architecture, interface, performance, security, integrations, or cloud infrastructure or plan its incremental replacement.",
    },
    {
      question: "Can you integrate manufacturing software with our current systems?",
      answer:
        "Yes. We integrate manufacturing platforms with ERP, CRM, MES, SCADA, PLM, warehouse, supplier, logistics, and analytics systems.",
    },
    {
      question: "Can you migrate our manufacturing data?",
      answer:
        "Yes. We can cleanse, map, transfer, reconcile, and validate production, product, inventory, equipment, supplier, quality, and document data.",
    },
    {
      question: "Can PineSucceed create supplier and customer portals?",
      answer:
        "Yes. We build secure portals for orders, forecasts, specifications, approvals, deliveries, documents, invoices, and communication.",
    },
    {
      question: "Can AI be added to our manufacturing software?",
      answer:
        "Yes. AI can support predictive maintenance, quality inspection, production planning, demand forecasting, anomaly detection, and energy optimization.",
    },
    {
      question: "How does PineSucceed protect industrial data?",
      answer:
        "We use appropriate access controls, encryption, network safeguards, secure integrations, logging, testing, monitoring, backup, and recovery practices.",
    },
    {
      question: "Does PineSucceed guarantee manufacturing or safety compliance?",
      answer:
        "No technology provider replaces qualified legal, engineering, or safety advice. We implement confirmed requirements while your specialists determine the obligations that apply.",
    },
    {
      question: "How long does manufacturing software development take?",
      answer:
        "The timeline depends on the features, facilities, user roles, integrations, devices, migration, security, performance, and testing requirements.",
    },
    {
      question: "How much does custom manufacturing software cost?",
      answer:
        "Cost depends on scope, complexity, platforms, equipment integrations, migration, infrastructure, and support needs. We estimate it after reviewing your requirements.",
    },
    {
      question: "Does PineSucceed provide support after launch?",
      answer:
        "Yes. We provide monitoring, maintenance, security updates, performance optimization, integration support, and continued development.",
    },
    {
      question: "How do we begin a manufacturing software project with PineSucceed?",
      answer:
        "Share your production model, workflows, facilities, equipment, current systems, required features, and goals. We will recommend an appropriate delivery approach.",
    },
  ],
});
