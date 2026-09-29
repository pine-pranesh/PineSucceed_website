/*
 * Retail & eCommerce page content. Behaviour lives in js/components/industry-page.js.
 */
window.initIndustryPage({
  servicesHeading: "Commerce Software Development Services We Provide",
  solutionsSection: 'section[aria-labelledby="commerce-solutions-heading"]',

  services: [
    {
      title: "E-Commerce consulting services",
      description:
        "Define a practical technology strategy based on your commercial model, operational challenges, users, systems, and growth plans.",
      listIntro: "Our E-Commerce consulting services can include:",
      points: [
        "Business and technology assessment",
        "Commerce workflow analysis",
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
      image: "/ecommerce/service-tabs/consulting.jpg",
    },
    {
      title: "Custom Commerce Software Development",
      description:
        "Develop purpose-built applications when standard commerce products cannot support your workflows or competitive requirements.",
      listIntro: "Custom development can cover:",
      points: [
        "Web applications",
        "Mobile applications",
        "Cloud-based commerce platforms",
        "Retail and wholesale management systems",
        "Customer, supplier, and distributor portals",
        "Internal workflow systems",
        "Administrative applications",
        "Reporting and analytics solutions",
        "Commerce SaaS products",
      ],
      image: "/ecommerce/service-tabs/custom-development.jpg",
    },
    {
      title: "Commerce Software Modernization",
      description:
        "Improve or replace aging commerce applications that have become difficult to maintain, integrate, secure, or scale.",
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
      image: "/ecommerce/service-tabs/modernization.jpg",
    },
    {
      title: "Commerce Software Integration",
      description:
        "Connect commerce applications with customer, financial, inventory, warehouse, payment, logistics, and enterprise systems.",
      listIntro: "Integration services can include:",
      points: [
        "API design and development",
        "Data synchronization",
        "Middleware implementation",
        "Single sign-on",
        "ERP and CRM integration",
        "Point-of-sale integration",
        "Payment gateway integration",
        "Warehouse and inventory integration",
        "Marketplace integration",
        "Shipping and logistics integration",
        "Reporting and analytics integration",
      ],
      image: "/ecommerce/service-tabs/integration.jpg",
    },
    {
      title: "Commerce Data Migration",
      description:
        "Move product, customer, supplier, inventory, order, pricing, and financial information into a new platform.",
      listIntro: "Our migration approach can include:",
      points: [
        "Source-system analysis",
        "Data inventory",
        "Cleansing and deduplication",
        "Field mapping",
        "Transformation rules",
        "Trial migrations",
        "Product and document migration",
        "Reconciliation",
        "Production migration",
        "Post-migration validation",
      ],
      image: "/ecommerce/service-tabs/data-migration.jpg",
    },
    {
      title: "Commerce Software Quality Assurance",
      description:
        "Validate the functionality, security, usability, performance, and compatibility of commerce applications.",
      listIntro: "Testing can include:",
      points: [
        "Functional testing",
        "Commerce workflow testing",
        "Integration testing",
        "Data migration testing",
        "Role and permission testing",
        "Security-focused testing",
        "Performance and load testing",
        "Mobile and browser testing",
        "Regression testing",
        "User acceptance support",
      ],
      image: "/ecommerce/service-tabs/quality-assurance.jpg",
    },
    {
      title: "Commerce Software Support",
      description:
        "Keep commerce applications reliable, secure, and aligned with changing business requirements.",
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
      image: "/ecommerce/service-tabs/support.jpg",
    },
  ],

  solutions: [
    {
      title: "B2C eCommerce Platforms",
      body: "Create digital stores with catalogs, search, customer accounts, shopping carts, checkout, payments, promotions, fulfillment, and returns.",
      image: "/ecommerce/service/custom-ecommerce.png",
    },
    {
      title: "B2B eCommerce Platforms",
      body: "Support business accounts, customer-specific catalogs, contract pricing, quotations, bulk orders, purchase approvals, credit terms, and repeat ordering.",
      image: "/ecommerce/service/b2b-commerce.png",
    },
    {
      title: "Wholesale Management Systems",
      body: "Manage products, buyers, pricing, order quantities, inventory, warehouses, invoices, payments, and distribution workflows.",
      image: "/ecommerce/ai-driven/inventory-optimization.png",
    },
    {
      title: "Omnichannel Retail Platforms",
      body: "Connect online stores, marketplaces, physical locations, customer profiles, promotions, inventory, orders, and fulfillment.",
      image: "/ecommerce/service/omnichannel.png",
    },
    {
      title: "Order Management Systems",
      body: "Coordinate orders from capture and validation through inventory allocation, fulfillment, delivery, returns, and refunds.",
      image: "/ecommerce/service/order-management.png",
    },
    {
      title: "Product Information Management Systems",
      body: "Centralize product descriptions, specifications, attributes, categories, images, documents, and channel-specific content.",
      image: "/ecommerce/ai-driven/product-recommendations.png",
    },
    {
      title: "Inventory and Warehouse Management Software",
      body: "Manage stock levels, locations, transfers, reservations, replenishment, receiving, picking, packing, shipping, and returns.",
      image: "/ecommerce/service/inventory-warehouse.png",
    },
    {
      title: "Point-of-Sale Solutions",
      body: "Support in-store transactions, customer profiles, payments, discounts, returns, receipts, and inventory updates.",
      image: "/ecommerce/service/payment-gateway.png",
    },
    {
      title: "Supplier and Procurement Platforms",
      body: "Manage supplier onboarding, product sourcing, quotations, approvals, purchase orders, deliveries, invoices, and performance.",
      image: "/ecommerce/ai-driven/supplier-insights.png",
    },
    {
      title: "Customer and Distributor Portals",
      body: "Provide secure access to catalogs, quotations, orders, pricing, invoices, payments, documents, claims, and support.",
      image: "/ecommerce/service/crm-customer-experience.png",
    },
    {
      title: "Sales Force Automation Solutions",
      body: "Help sales representatives manage accounts, opportunities, quotations, visits, orders, targets, and customer communication.",
      image: "/ecommerce/ai-driven/customer-segmentation.png",
    },
    {
      title: "Marketplace Platforms",
      body: "Connect buyers, sellers, manufacturers, distributors, and service providers through listings, search, ordering, payments, commissions, and ratings.",
      image: "/ecommerce/service/marketplace.png",
    },
    {
      title: "Loyalty and Customer Engagement Platforms",
      body: "Manage rewards, memberships, offers, referrals, customer communication, and engagement histories.",
      image: "/ecommerce/img/retail1.png",
    },
    {
      title: "Commerce Analytics Products",
      body: "Transform sales, pricing, customer, supplier, inventory, order, and margin data into dashboards and decision-support tools.",
      image: "/ecommerce/service/ai-analytics.png",
    },
    {
      title: "AI-Enabled Commerce Applications",
      body: "Develop or integrate capabilities for recommendations, forecasting, search, pricing insights, order processing, and inventory optimization.",
      image: "/ecommerce/ai-driven/ai-powered-search.png",
    },
    {
      title: "Data Retention and Deletion",
      body: "Implement configurable policies for retaining, archiving, exporting, and deleting product, customer, supplier, transaction, payment, and operational information.",
      image: "/ecommerce/service/cloud-scalability.png",
    },
    {
      title: "Business Continuity",
      body: "Plan for backups, restoration, monitoring, incident response, and recovery according to the platform's operational requirements.",
      image: "/ecommerce/ai-driven/fraud-detection.png",
    },
  ],

  faqs: [
    {
      question: "What commerce software does PineSucceed Technologies develop?",
      answer:
        "We develop B2C and B2B commerce, wholesale, order management, inventory, warehouse, POS, procurement, marketplace, loyalty, and analytics solutions.",
    },
    {
      question: "Can PineSucceed build custom B2B eCommerce software?",
      answer:
        "Yes. We build platforms with business accounts, contract pricing, quotations, bulk ordering, approvals, payment terms, and account-based permissions.",
    },
    {
      question: "Can you develop wholesale management software?",
      answer:
        "Yes. We develop systems for products, buyers, pricing, inventory, warehouses, orders, invoices, payments, and distribution.",
    },
    {
      question: "Can PineSucceed build retail eCommerce platforms?",
      answer:
        "Yes. We develop online stores with catalogs, search, customer accounts, checkout, payments, promotions, fulfillment, and returns.",
    },
    {
      question: "Can you develop an omnichannel retail platform?",
      answer:
        "Yes. We connect physical stores, online channels, marketplaces, customers, promotions, inventory, orders, and fulfillment.",
    },
    {
      question: "Can PineSucceed create customer and distributor portals?",
      answer:
        "Yes. We build secure portals for catalogs, quotations, pricing, orders, invoices, payments, documents, claims, and support.",
    },
    {
      question: "Can you develop inventory and warehouse software?",
      answer:
        "Yes. We build systems for stock visibility, receiving, storage, replenishment, picking, packing, shipping, transfers, and returns.",
    },
    {
      question: "Can PineSucceed modernize our existing commerce platform?",
      answer:
        "Yes. We can improve its architecture, interface, performance, security, integrations, or cloud infrastructure or plan its incremental replacement.",
    },
    {
      question: "Can you integrate commerce software with our current systems?",
      answer:
        "Yes. We integrate commerce platforms with ERP, CRM, POS, accounting, warehouse, payment, marketplace, logistics, and analytics systems.",
    },
    {
      question: "Can you migrate our commerce data?",
      answer:
        "Yes. We can cleanse, map, transfer, reconcile, and validate product, customer, supplier, inventory, pricing, order, and transaction data.",
    },
    {
      question: "Can PineSucceed develop mobile commerce applications?",
      answer:
        "Yes. We build mobile apps for product discovery, ordering, payments, account management, tracking, sales activities, and customer engagement.",
    },
    {
      question: "Can AI be added to our commerce software?",
      answer:
        "Yes. AI can support recommendations, demand forecasting, search, pricing insights, order processing, customer segmentation, and inventory optimization.",
    },
    {
      question: "How does PineSucceed protect commerce data?",
      answer:
        "We use appropriate access controls, encryption, secure integrations, logging, testing, monitoring, backup, and recovery practices.",
    },
    {
      question: "Does PineSucceed guarantee commerce or payment compliance?",
      answer:
        "No technology provider replaces qualified legal or financial advice. We implement confirmed requirements while your specialists determine the obligations that apply.",
    },
    {
      question: "How long does commerce software development take?",
      answer:
        "The timeline depends on the features, channels, user roles, integrations, migration, performance, security, and testing requirements.",
    },
    {
      question: "How much does custom commerce software cost?",
      answer:
        "Cost depends on scope, complexity, platforms, integrations, migration, infrastructure, and support needs. We estimate it after reviewing your requirements.",
    },
    {
      question: "Does PineSucceed provide support after launch?",
      answer:
        "Yes. We provide monitoring, maintenance, security updates, performance optimization, integration support, and continued development.",
    },
    {
      question: "How do we begin a commerce software project with PineSucceed?",
      answer:
        "Share your business model, sales channels, users, workflows, current systems, required features, and goals. We will recommend an appropriate delivery approach.",
    },
  ],
});
