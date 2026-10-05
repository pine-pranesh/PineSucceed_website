/*
 * Site header: primary navigation, mega menus (About, Industries, Services),
 * mobile drawer, scroll shadow and the transparent header on the About page.
 * Enhances the header markup already in each page; menus are rendered from the
 * data below when opened.
 */
(function () {
  "use strict";

  // Site root URL, taken from this script's own location so links and images
  // resolve the same from root pages and from pages in services/<category>/.
  var ROOT = ((document.currentScript && document.currentScript.src) || "").replace(/assets\/js\/components\/header\.js(?:[?#].*)?$/, "");

  // ---------------------------------------------------------------------
  // Menu data (copied from lib/constants.ts)
  // ---------------------------------------------------------------------

  var SERVICES_MEGA_MENU_DATA = [
    {
      id: "ai-data",
      title: "AI & Data",
      items: [
        { title: "Artificial Intelligence Services", description: "AI services, AI tools: Recruiter, Self-Assessment, Chatbot, Self-Assistant...", href: "/artificial-intelligence-services" },
        { title: "AI Across SDLC Services", description: "Build better software with AI at every stage of the development life cycle.", href: "/ai-across-sdlc-services" },
        { title: "AI Strategy & Consulting", description: "Feasibility roadmap, tech stack selection, and AI transformation advisory.", href: "/ai-consulting-services" },
        { title: "AI-Powered Robotic Integration Services ", description: "lorem askj askdjhd sakjdh sadkjashduisd aksdjhaskjd askj", href: "/ai-powered-robotic-integration-services" },
        { title: "Data Science Development Services", description: "Turn business data into predictions, insights, and intelligent applications.", href: "/data-science-development-services" },
        { title: "Database Creation and Management Services", description: "Design, migrate, secure, and manage reliable databases that scale.", href: "/database-creation-and-management-services" },
        { title: "Hire AI Engineers", description: "Add dedicated AI engineers to your team, or build a complete AI team.", href: "/hire-ai-engineers" }
      ]
    },
    {
      id: "application-development",
      title: "Application Development",
      items: [
        { title: "CMS Based Web Development", description: "Flexible, secure websites your team can manage with ease.", href: "/cms-based-web-development-service" },
        { title: "Cross Platform App Development", description: "Consistent apps across mobile, web, and desktop from shared code.", href: "/cross-platform-app-development" },
        { title: "Mobile App Development", description: "Native iOS/Android and cross-platform Flutter/React Native solutions.", href: "/mobile-app-development-company" },
        { title: "PWA Development", description: "Deliver fast, installable, and app-like web experiences.", href: "/pwa-development-services" },
        { title: "Web Development", description: "Build secure, scalable, and high-performance web solutions.", href: "/web-design-and-development-solutions" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud Services",
      items: [
        { title: "Cloud Development Services", description: "kaj askjdh sakdjsh dkasjdh sakdjh asdhaskjd skadjk", href: "/cloud-development-services" },
        { title: "AWS Consulting Services", description: "kaj askjdh sakdjsh dkasjdh sakdjh asdhaskjd skadjk", href: "/aws-consulting-services" },
        { title: "Azure Managed Services", description: "kaj askjdh sakdjsh dkasjdh sakdjh asdhaskjd skadjk", href: "/azure-managed-services" },
        { title: "Azure Managed Cloud Development", description: "kaj askjdh sakdjsh dkasjdh sakdjh asdhaskjd skadjk", href: "/azure-managed-cloud-development" },
        { title: "Azure Managed Cloud Migration", description: "kaj askjdh sakdjsh dkasjdh sakdjh asdhaskjd skadjk", href: "/cloud-migration-services" }
      ]
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      items: [
        { title: "Digital Transformation Services", description: "Modernize legacy architecture, streamline business workflows, and drive technology innovation.", href: "/digital-transformation-services" },
        { title: "IT Consulting", description: "Strategic technology roadmap, infrastructure planning, and software architecture guidance.", href: "/it-consulting-services" }
      ]
    },
    {
      id: "software-engineering",
      title: "Software Engineering",
      items: [
        { title: "Software Engineering", description: "End-to-end software engineering solutions designed to build high-performance applications.", href: "/software-engineering" },
        { title: "Custom Software Development", description: "Tailored software platforms built specifically to solve complex enterprise business challenges.", href: "/custom-software-development" },
        { title: "Project Development Services", description: "Complete project management and lifecycle development from concept to final delivery.", href: "/project-development-services" },
        { title: "IoT Development", description: "Smart connected device integrations, IoT architecture, and real-time telemetry systems.", href: "/iot-development" },
        { title: "Legacy Modernization", description: "Refactoring monolithic codebases, cloud migration, and modernizing legacy applications.", href: "/legacy-modernization" },
        { title: "Quality Assurance Services", description: "Comprehensive automated and manual testing to ensure bug-free and secure deployments.", href: "/quality-assurance-services" },
        { title: "DevOps Services", description: "Continuous integration, CI/CD pipeline automation, and cloud infrastructure management.", href: "/devops-services" },
        { title: "Blockchain Development", description: "Smart contracts, decentralized applications, and secure enterprise blockchain solutions.", href: "/blockchain-development-services" }
      ]
    },
    {
      id: "staff-augmentation",
      title: "Staff Augmentation",
      items: [
        { title: "Business Analysis Services", description: "Requirement analysis, process mapping, and documentation that turn business needs into clear specifications.", href: "/business-analysis-services" },
        { title: "Dedicated Team Services", description: "Long-term dedicated engineering teams that work as an extension of your organization.", href: "/dedicated-team-services" },
        { title: "Discovery Phase Services", description: "Scope, feasibility, and roadmap definition before development begins.", href: "/discovery-phase-services" },
        { title: "IT Staff Augmentation Services", description: "Scale your engineering team on-demand with highly skilled tech professionals.", href: "/it-staff-augmentation-services" },
        { title: "Project Management Services", description: "Planning, governance, and delivery oversight that keep software projects on track.", href: "/project-management-services" },
        { title: "Solution Architecture Services", description: "Scalable, secure solution designs aligned with business and technical requirements.", href: "/solution-architecture-services" },
        { title: "Startups and MVP Development Services", description: "Rapid MVP design and development to validate ideas and launch products faster.", href: "/startups-and-mvp-development-services" },
        { title: "UI-UX Design Services", description: "User research, wireframes, and interface design for intuitive digital products.", href: "/ui-ux-design-services" }
      ]
    },
    {
      id: "crm-erp",
      title: "CRM & ERP Solutions",
      items: [
        { title: "CRM Consulting Services", description: "Tailored customer relationship management strategies to elevate client engagements and retention.", href: "/crm-consulting-services" },
        { title: "Microsoft Dynamics 365 ERP Services", description: "Dynamics 365 ERP implementation, customization, and integration for finance and operations.", href: "/microsoft-dynamics-365-erp-services" },
        { title: "Salesforce Implementation Services", description: "End-to-end Salesforce platform setup, custom module development, and system configuration.", href: "/salesforce-implementation" }
      ]
    },
    {
      id: "support-services",
      title: "Support Services",
      items: [
        { title: "Atlassian Support Services", description: "Administration, configuration, and ongoing support for Jira, Confluence, and Atlassian tools.", href: "/atlassian-support-services" },
        { title: "IT Help Desk Services", description: "Responsive user support, ticket handling, and issue resolution for your teams.", href: "/it-help-desk-services" },
        { title: "Jira Cloud Migration Services", description: "Planned, low-risk migration of Jira data, workflows, and users to the cloud.", href: "/jira-cloud-migration-services" },
        { title: "Maintenance and Support Services", description: "Ongoing monitoring, fixes, updates, and enhancements that keep applications running smoothly.", href: "/maintenance-and-support-services" },
        { title: "Salesforce Support Services", description: "Ongoing Salesforce administration, troubleshooting, and enhancement support.", href: "/salesforce-support-services" }
      ]
    }
  ];

  var INDUSTRIES_MENU_DATA = [
    { title: "Retail & E-commerce", description: "Ecommerce, Retail & B2B - Smart solutions for scalable digital commerce.", href: "/retail-ecommerce-B2B" },
    { title: "Healthcare", description: "Innovative systems improving healthcare and wellness experiences.", href: "/healthcare-fitness-solutions" },
    { title: "Education & E-Learning", description: "Interactive platforms transforming digital learning experiences globally.", href: "/education-training" },
    { title: "Logistics", description: "Intelligent software optimizing logistics and supply chain operations.", href: "/logistics" },
    { title: "Real Estate", description: "Smart platforms simplifying property and real estate management.", href: "/real-estate-property-solutions" },
    { title: "Oil & Gas", description: "Connected software improving energy operations, assets, and field work.", href: "/oil-and-gas" },
    { title: "Construction", description: "Connected software for project planning, field teams, and cost control.", href: "/construction-software" },
    { title: "Manufacturing", description: "Connected software improving production, maintenance, and plant operations.", href: "/manufacturing-and-industrial-operations" },
    { title: "Banking, Finance & Insurance", description: "Secure platforms for modern financial services.", href: "/banking-finance-insurance-solutions" },
    { title: "Mining", description: "Digital solutions for mine planning, equipment, safety, and site operations.", href: "/mining" },
    { title: "Legal", description: "Secure digital solutions for modern legal operations.", href: "/legal" }
  ];

  var ABOUT_MENU_DATA = {
    links: [
      { title: "About Company", description: "Discover how PineSucceed delivers innovative digital solutions with expert technology, design, and development services for modern businesses", href: "/about" },
      { title: "Our Offices", description: "Explore PineSucceed office locations where our creative and technology teams collaborate to build scalable digital experiences worldwide", href: "/office" },
      { title: "Contact Us", description: "Connect with PineSucceed for project inquiries, business collaborations, and expert support tailored to your digital transformation goals.", href: "/contact" }
    ],
    banner: {
      title: "Let's Build Something Exceptional Together",
      buttonText: "Let's Connect",
      buttonHref: "/contact",
      image: "assets/img/header-menu/aboutOne.svg"
    }
  };

  var NAV_LINKS = [
    { label: "Home", href: "/", hasDropdown: false },
    { label: "About", href: "/about", hasDropdown: true },
    { label: "Industries", href: "#industries", hasDropdown: true },
    { label: "Services", href: "#services", hasDropdown: true }
  ];

  var MEGA_MENUS = ["Services", "About", "Industries"];

  // ---------------------------------------------------------------------
  // Routing helpers
  // ---------------------------------------------------------------------

  // Routes that were converted to static pages, and the page each maps to.
  var ROUTE_TO_FILE = {
    "/": "index.html",
    "/about": "about-us.html",
    "/office": "office.html",
    "/contact": "contact-us.html",
    "/retail-ecommerce-B2B": "industries/retail-ecommerce-b2b.html",
    "/healthcare-fitness-solutions": "industries/healthcare-fitness-solutions.html",
    "/education-training": "industries/education-training.html",
    "/logistics": "industries/logistics.html",
    "/real-estate-property-solutions": "industries/real-estate-property-solutions.html",
    "/oil-and-gas": "industries/oil-and-gas.html",
    "/construction-software": "industries/construction.html",
    "/manufacturing-and-industrial-operations": "industries/manufacturing-and-industrial-operations.html",
    "/banking-finance-insurance-solutions": "industries/banking-finance-insurance-solutions.html",
    "/mining": "industries/mining.html",
    "/legal": "industries/legal.html",
    "/artificial-intelligence-services": "services/ai-data/artificial-intelligence-services.html",
    "/ai-across-sdlc-services": "services/ai-data/ai-across-sdlc-services.html",
    "/data-science-development-services": "services/ai-data/data-science-development-services.html",
    "/database-creation-and-management-services": "services/ai-data/database-creation-and-management-services.html",
    "/hire-ai-engineers": "services/ai-data/hire-ai-engineers.html",
    "/cms-based-web-development-service": "services/application-development/cms-based-web-development-services.html",
    "/cross-platform-app-development": "services/application-development/cross-platform-app-development-services.html",
    "/mobile-app-development-company": "services/application-development/mobile-app-development-services.html",
    "/pwa-development-services": "services/application-development/pwa-development-services.html",
    "/web-design-and-development-solutions": "services/application-development/web-development-services.html",
    "/aws-consulting-services": "services/cloud/aws-consulting-services.html",
    "/cloud-development-services": "services/cloud/cloud-development-services.html",
    "/cloud-migration-services": "services/cloud/cloud-migration-services.html",
    "/azure-managed-services": "services/cloud/azure-managed-services.html",
    "/digital-transformation-services": "services/digital-transformation/digital-transformation-services.html",
    "/it-consulting-services": "services/digital-transformation/it-consulting-services.html",
    "/software-engineering": "services/software-engineering/software-engineering-services.html",
    "/custom-software-development": "services/software-engineering/custom-software-development-services.html",
    "/project-development-services": "services/software-engineering/project-development-services.html",
    "/iot-development": "services/software-engineering/iot-development-services.html",
    "/legacy-modernization": "services/software-engineering/legacy-modernization-services.html",
    "/quality-assurance-services": "services/software-engineering/quality-assurance-services.html",
    "/devops-services": "services/software-engineering/devops-services.html",
    "/blockchain-development-services": "services/software-engineering/blockchain-development-services.html",
    "/business-analysis-services": "services/staff-augmentation/business-analysis-services.html",
    "/dedicated-team-services": "services/staff-augmentation/dedicated-team-services.html",
    "/discovery-phase-services": "services/staff-augmentation/discovery-phase-services.html",
    "/it-staff-augmentation-services": "services/staff-augmentation/it-staff-augmentation-services.html",
    "/project-management-services": "services/staff-augmentation/project-management-services.html",
    "/solution-architecture-services": "services/staff-augmentation/solution-architecture-services.html",
    "/startups-and-mvp-development-services": "services/staff-augmentation/startups-and-mvp-development-services.html",
    "/ui-ux-design-services": "services/staff-augmentation/ui-ux-design-services.html",
    "/crm-consulting-services": "services/crm-erp/crm-consulting-services.html",
    "/microsoft-dynamics-365-erp-services": "services/crm-erp/microsoft-dynamics-365-erp-services.html",
    "/salesforce-implementation": "services/crm-erp/salesforce-implementation-services.html",
    "/accelerate-software-delivery-with-AI-Assisted-engineering": "services/ai-data/ai-across-sdlc-services.html"
  };

  var PAGE_TO_ROUTE = {
    home: "/",
    about: "/about",
    office: "/office",
    contact: "/contact",
    retail: "/retail-ecommerce-B2B",
    healthcare: "/healthcare-fitness-solutions",
    education: "/education-training",
    logistics: "/logistics",
    realestate: "/real-estate-property-solutions",
    oilgas: "/oil-and-gas",
    construction: "/construction-software",
    manufacturing: "/manufacturing-and-industrial-operations",
    bfsi: "/banking-finance-insurance-solutions",
    mining: "/mining",
    legal: "/legal",
    ai: "/ai-across-sdlc-services",
    "ai-services": "/artificial-intelligence-services",
    "data-science": "/data-science-development-services",
    database: "/database-creation-and-management-services",
    "hire-ai": "/hire-ai-engineers",
    cms: "/cms-based-web-development-service",
    "cross-platform": "/cross-platform-app-development",
    "mobile-app": "/mobile-app-development-company",
    pwa: "/pwa-development-services",
    "web-development": "/web-design-and-development-solutions",
    aws: "/aws-consulting-services",
    "cloud-development": "/cloud-development-services",
    "cloud-migration": "/cloud-migration-services",
    "azure-managed": "/azure-managed-services",
    "digital-transformation": "/digital-transformation-services",
    "it-consulting": "/it-consulting-services",
    "software-engineering": "/software-engineering",
    "custom-software": "/custom-software-development",
    "project-development": "/project-development-services",
    "iot-development": "/iot-development",
    "legacy-modernization": "/legacy-modernization",
    "quality-assurance": "/quality-assurance-services",
    devops: "/devops-services",
    blockchain: "/blockchain-development-services",
    "business-analysis": "/business-analysis-services",
    "dedicated-team": "/dedicated-team-services",
    "discovery-phase": "/discovery-phase-services",
    "it-staff-augmentation": "/it-staff-augmentation-services",
    "project-management": "/project-management-services",
    "solution-architecture": "/solution-architecture-services",
    "startups-mvp": "/startups-and-mvp-development-services",
    "ui-ux-design": "/ui-ux-design-services",
    "crm-consulting": "/crm-consulting-services",
    "dynamics-365-erp": "/microsoft-dynamics-365-erp-services",
    "salesforce-implementation": "/salesforce-implementation"
  };

  var pathname = PAGE_TO_ROUTE[document.body.getAttribute("data-page")] || "";

  function toHref(route) {
    return Object.prototype.hasOwnProperty.call(ROUTE_TO_FILE, route) ? ROOT + ROUTE_TO_FILE[route] : route;
  }

  function esc(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Collapse template-literal whitespace the same way the class list would be read.
  function cls() {
    return Array.prototype.join.call(arguments, " ").replace(/\s+/g, " ").trim();
  }

  // ---------------------------------------------------------------------
  // Icons (Font Awesome Free 6.5.0)
  // ---------------------------------------------------------------------

  // lucide icon name -> Font Awesome glyph. "arrow-up-right" is drawn as a
  // rotated arrow-right (icon-diagonal).
  var FA_ICONS = {
    "chevron-down": "chevron-down",
    "chevron-right": "chevron-right",
    "arrow-up-right": "arrow-right",
    "arrow-right": "arrow-right"
  };

  var DIAGONAL_ICONS = { "arrow-up-right": true };

  function icon(name, className) {
    return (
      '<i class="' +
      cls("icon fa-solid fa-" + FA_ICONS[name], DIAGONAL_ICONS[name] ? "icon-diagonal" : "", className) +
      '" aria-hidden="true"></i>'
    );
  }

  function fromHTML(html) {
    var tpl = document.createElement("template");
    tpl.innerHTML = html.trim();
    return tpl.content.firstElementChild;
  }

  // ---------------------------------------------------------------------
  // Locate the server-rendered header
  // ---------------------------------------------------------------------

  var primaryNav = document.querySelector('nav[aria-label="Primary Navigation"]');
  if (!primaryNav) return;
  var header = primaryNav.closest("header");
  if (!header) return;

  var mainBar = header.firstElementChild; // div.relative.h-[70px]
  var logoLink = mainBar.querySelector("a");
  var navItems = Array.prototype.slice.call(primaryNav.querySelectorAll("ul > li"));
  var hamburger = header.querySelector('button[aria-controls="mobile-navigation"]');
  var contactLink = null;
  Array.prototype.forEach.call(mainBar.firstElementChild.children, function (el) {
    if (el.tagName === "A" && el !== logoLink) contactLink = el;
  });

  // Map each nav label to its <li>, and for dropdowns, the button and chevron.
  var navByLabel = {};
  navItems.forEach(function (li, i) {
    var link = NAV_LINKS[i];
    if (!link) return;
    navByLabel[link.label] = {
      li: li,
      button: li.querySelector("button"),
      chevron: li.querySelector("i.icon")
    };
  });

  // ---------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------

  var state = {
    activeCategory: "ai-data",
    activeMenu: null,
    isMobileMenuOpen: false,
    expandedMobileCategory: null,
    isScrolled: false
  };

  // Pre-select the services category containing the current route.
  SERVICES_MEGA_MENU_DATA.forEach(function (cat) {
    if (cat.items.some(function (item) { return item.href === pathname; })) {
      state.activeCategory = cat.id;
    }
  });

  function setState(patch) {
    var prev = {};
    for (var k in state) prev[k] = state[k];
    var changed = false;
    for (var key in patch) {
      if (state[key] !== patch[key]) {
        state[key] = patch[key];
        changed = true;
      }
    }
    if (changed) render(prev);
  }

  // ---------------------------------------------------------------------
  // Class builders
  // ---------------------------------------------------------------------

  function isTransparent() {
    return pathname === "/about" && !state.isScrolled && !state.isMobileMenuOpen;
  }

  function headerClass() {
    return cls(
      "top-0 w-100 header",
      isTransparent() ? "header-transparent" : "header-not-transparent",
      "header-2",
      state.isScrolled
        ? "header-scrolled"
        : "header-not-scrolled"
    );
  }

  function mainBarClass() {
    return cls("position-relative w-100 header-main-bar", isTransparent() ? "header-transparent" : "header-not-transparent");
  }

  function navButtonClass(label) {
    return cls(
      "d-inline-flex align-items-center lh-1 header-nav-button",
      state.activeMenu === label ? "header-nav-button-label" : "header-nav-button-not-label"
    );
  }

  function navChevronClass(label) {
    return cls(
      "icon fa-solid fa-chevron-down",
      "header-nav-chevron",
      state.activeMenu === label ? "header-nav-chevron-label" : "header-nav-chevron-not-label"
    );
  }

  function categoryButtonClass(isActive) {
    return cls(
      "px-3 d-flex w-100 justify-content-between align-items-center text-start header-category-button",
      isActive ? "header-category-button-active" : "header-category-button-not-active"
    );
  }

  function categoryChevronClass(isActive) {
    return cls(
      "icon fa-solid fa-chevron-right",
      "header-category-chevron",
      isActive ? "header-category-chevron-active" : "header-category-chevron-not-active"
    );
  }

  function mobileChevronClass(label) {
    return cls(
      "icon fa-solid fa-chevron-down",
      "header-category-chevron",
      state.expandedMobileCategory === label ? "header-nav-chevron-label" : ""
    );
  }

  // ---------------------------------------------------------------------
  // Templates
  // ---------------------------------------------------------------------

  var PANEL_WRAPPER = "position-absolute top-100 start-0 w-100 pt-2 pb-4 header-panel-wrapper";

  function serviceItemsHTML() {
    var current =
      SERVICES_MEGA_MENU_DATA.find(function (cat) { return cat.id === state.activeCategory; }) ||
      SERVICES_MEGA_MENU_DATA[0];

    return current.items
      .map(function (item) {
        var isActive = pathname === item.href;
        return (
          '<a class="hover-group d-block header-service-items-link" href="' + esc(toHref(item.href)) + '">' +
            '<div class="d-flex justify-content-between align-items-center header-service-items-row">' +
              '<h4 class="' + cls("fw-bold header-service-items", isActive ? "header-nav-button-label" : "header-service-items-not-active") + '">' + esc(item.title) + "</h4>" +
              icon("arrow-up-right", cls("flex-shrink-0 header-service-items-2", isActive ? "header-service-items-active" : "header-service-items-not-active-2")) +
            "</div>" +
            '<p class="overflow-hidden header-service-items-text">' + esc(item.description) + "</p>" +
          "</a>"
        );
      })
      .join("");
  }

  function servicesPanelHTML() {
    var categories = SERVICES_MEGA_MENU_DATA.map(function (cat) {
      var isActive = cat.id === state.activeCategory;
      return (
        '<button data-category="' + esc(cat.id) + '" class="' + categoryButtonClass(isActive) + '">' +
          "<span>" + esc(cat.title) + "</span>" +
          icon("chevron-right", "").replace(/class="[^"]*"/, 'class="' + categoryChevronClass(isActive) + '"') +
        "</button>"
      );
    }).join("");

    return (
      '<div class="' + PANEL_WRAPPER + '">' +
        '<div class="mx-auto d-grid bg-white header-services-panel-grid">' +
          '<div class="d-flex flex-column justify-content-between header-services-panel-stack">' +
            categories +
          "</div>" +
          '<div data-service-items class="d-grid align-items-start align-content-start header-services-panel-grid-2">' +
            serviceItemsHTML() +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function aboutPanelHTML() {
    var links = ABOUT_MENU_DATA.links.map(function (item) {
      return (
        '<a class="hover-group p-3 d-block header-about-panel-link" href="' + esc(toHref(item.href)) + '">' +
          '<div class="d-flex justify-content-between align-items-center">' +
            '<h3 class="fw-bold header-about-panel-title">' + esc(item.title) + "</h3>" +
            icon("arrow-up-right", "header-about-panel") +
          "</div>" +
          '<p class="header-about-panel-text">' + esc(item.description) + "</p>" +
        "</a>"
      );
    }).join("");

    var banner = ABOUT_MENU_DATA.banner;

    return (
      '<div class="' + PANEL_WRAPPER + '">' +
        '<div class="mx-auto d-grid align-items-start bg-white header-about-panel-grid">' +
          '<div class="header-about-panel-box">' + links + "</div>" +
          '<div class="p-4 overflow-hidden d-flex position-relative flex-column justify-content-between text-white header-about-panel-stack">' +
            '<img alt="Banner" decoding="async" class="shared-img img-fill" src="' + esc(ROOT + banner.image) + '"/>' +
            '<div class="position-absolute top-0 bottom-0 start-0 end-0 header-about-panel-overlay"></div>' +
            '<div class="position-relative header-about-panel-box-2">' +
              '<h3 class="header-about-panel-title-2">' + esc(banner.title) + "</h3>" +
            "</div>" +
            '<div class="position-relative header-about-panel-box-3">' +
              '<a class="px-3 py-2 d-inline-flex align-items-center header-about-panel-link-2" href="' + esc(toHref(banner.buttonHref)) + '">' +
                "<span>" + esc(banner.buttonText) + "</span>" +
                icon("arrow-right", "header-about-panel-2") +
              "</a>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function industriesPanelHTML() {
    var items = INDUSTRIES_MENU_DATA.map(function (industry) {
      var isActive = pathname === industry.href;
      return (
        '<a class="hover-group d-block header-industries-panel-link" href="' + esc(toHref(industry.href)) + '">' +
          '<div class="d-flex justify-content-between align-items-center header-service-items-row">' +
            '<h4 class="' + cls("fw-bold header-service-items", isActive ? "header-nav-button-label" : "header-industries-panel-not-active") + '">' + esc(industry.title) + "</h4>" +
            icon("arrow-up-right", cls("flex-shrink-0 header-service-items-2", isActive ? "header-service-items-active" : "header-service-items-not-active-2")) +
          "</div>" +
          '<p class="overflow-hidden header-industries-panel-text">' + esc(industry.description) + "</p>" +
        "</a>"
      );
    }).join("");

    return (
      '<div class="' + PANEL_WRAPPER + '">' +
        '<div class="mx-auto d-grid bg-white header-industries-panel-grid">' +
          items +
        "</div>" +
      "</div>"
    );
  }

  function mobileSubmenuHTML(label) {
    if (label === "Services") {
      return (
        '<div data-mobile-sub class="ps-2 header-mobile-submenu-box">' +
          SERVICES_MEGA_MENU_DATA.map(function (cat) {
            return (
              '<div class="header-mobile-submenu-box-2">' +
                '<div class="mb-2 fw-bold header-mobile-submenu-box-3">' + esc(cat.title) + "</div>" +
                '<div class="d-grid pt-1 header-mobile-submenu-grid">' +
                  cat.items.map(function (sub) {
                    var isActive = pathname === sub.href;
                    return (
                      '<a class="d-block header-mobile-submenu-link" href="' + esc(toHref(sub.href)) + '">' +
                        '<div class="' + cls("fw-bold header-mobile-submenu", isActive ? "header-mobile-submenu-active" : "header-nav-button-label") + '">' + esc(sub.title) + "</div>" +
                        '<div class="lh-sm header-mobile-submenu-box-4">' + esc(sub.description) + "</div>" +
                      "</a>"
                    );
                  }).join("") +
                "</div>" +
              "</div>"
            );
          }).join("") +
        "</div>"
      );
    }

    if (label === "About") {
      return (
        '<div data-mobile-sub class="ps-2 header-mobile-submenu-box-5">' +
          ABOUT_MENU_DATA.links.map(function (item) {
            return (
              '<a class="d-block header-mobile-submenu-link-2" href="' + esc(toHref(item.href)) + '">' +
                '<div class="fw-bold header-mobile-submenu-box-6">' + esc(item.title) + "</div>" +
                '<div class="lh-sm header-mobile-submenu-box-4">' + esc(item.description) + "</div>" +
              "</a>"
            );
          }).join("") +
        "</div>"
      );
    }

    if (label === "Industries") {
      return (
        '<div data-mobile-sub class="d-grid ps-2 header-mobile-submenu-grid-2">' +
          INDUSTRIES_MENU_DATA.map(function (ind) {
            return (
              '<a class="d-block header-mobile-submenu-link-3" href="' + esc(toHref(ind.href)) + '">' +
                '<div class="fw-bold header-mobile-submenu-box-7">' + esc(ind.title) + "</div>" +
                '<div class="lh-sm header-mobile-submenu-box-4">' + esc(ind.description) + "</div>" +
              "</a>"
            );
          }).join("") +
        "</div>"
      );
    }

    return "";
  }

  function mobileDrawerHTML() {
    var items = NAV_LINKS.map(function (link) {
      var row;
      if (link.hasDropdown) {
        row =
          '<button type="button" data-mobile-toggle="' + esc(link.label) + '" class="d-flex w-100 justify-content-between align-items-center lh-base header-mobile-drawer">' +
            "<span>" + esc(link.label) + "</span>" +
            icon("chevron-down", "").replace(/class="[^"]*"/, 'class="' + mobileChevronClass(link.label) + '"') +
          "</button>";
      } else {
        row =
          '<a class="d-flex w-100 justify-content-between align-items-center lh-base header-mobile-drawer-link" href="' + esc(toHref(link.href)) + '">' +
            "<span>" + esc(link.label) + "</span>" +
          "</a>";
      }

      return (
        '<li data-mobile-item="' + esc(link.label) + '" class="header-mobile-drawer-2">' +
          '<div class="d-flex justify-content-between align-items-center header-mobile-drawer-row">' + row + "</div>" +
          (state.expandedMobileCategory === link.label ? mobileSubmenuHTML(link.label) : "") +
        "</li>"
      );
    }).join("");

    return (
      '<div id="mobile-navigation" data-lenis-prevent class="position-absolute start-0 end-0 header-mobile-drawer-box">' +
        '<ul class="d-flex w-100 flex-column header-mobile-drawer-list">' + items + "</ul>" +
      "</div>"
    );
  }

  // ---------------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------------

  var megaPanel = null; // currently mounted desktop mega menu
  var mobileDrawer = null; // currently mounted mobile drawer

  function mountMegaPanel() {
    if (megaPanel) {
      megaPanel.remove();
      megaPanel = null;
    }
    var html = null;
    if (state.activeMenu === "Services") html = servicesPanelHTML();
    else if (state.activeMenu === "About") html = aboutPanelHTML();
    else if (state.activeMenu === "Industries") html = industriesPanelHTML();
    if (!html) return;

    megaPanel = fromHTML(html);
    // Keep the same DOM order as React: mega menus come before the mobile drawer.
    mainBar.insertBefore(megaPanel, mobileDrawer);

    if (state.activeMenu === "Services") bindServicesPanel(megaPanel);
    bindCloseOnLinkClick(megaPanel, function () { setState({ activeMenu: null }); });
  }

  function updateServicesCategory() {
    if (!megaPanel || state.activeMenu !== "Services") return;
    Array.prototype.forEach.call(megaPanel.querySelectorAll("button[data-category]"), function (btn) {
      var isActive = btn.getAttribute("data-category") === state.activeCategory;
      btn.setAttribute("class", categoryButtonClass(isActive));
      var chevron = btn.querySelector("i.icon");
      if (chevron) chevron.setAttribute("class", categoryChevronClass(isActive));
    });
    var grid = megaPanel.querySelector("[data-service-items]");
    if (grid) grid.innerHTML = serviceItemsHTML();
  }

  function bindServicesPanel(panel) {
    Array.prototype.forEach.call(panel.querySelectorAll("button[data-category]"), function (btn) {
      var id = btn.getAttribute("data-category");
      btn.addEventListener("click", function () { setState({ activeCategory: id }); });
      btn.addEventListener("mouseenter", function () { setState({ activeCategory: id }); });
    });
  }

  function bindCloseOnLinkClick(root, onClick) {
    root.addEventListener("click", function (event) {
      if (event.target.closest && event.target.closest("a")) onClick();
    });
  }

  function mountMobileDrawer() {
    if (mobileDrawer) {
      mobileDrawer.remove();
      mobileDrawer = null;
    }
    if (!state.isMobileMenuOpen) return;

    mobileDrawer = fromHTML(mobileDrawerHTML());
    mainBar.appendChild(mobileDrawer);

    mobileDrawer.addEventListener("click", function (event) {
      var toggle = event.target.closest("[data-mobile-toggle]");
      if (toggle) {
        var label = toggle.getAttribute("data-mobile-toggle");
        setState({
          expandedMobileCategory: state.expandedMobileCategory === label ? null : label
        });
        return;
      }
      if (event.target.closest("a")) setState({ isMobileMenuOpen: false });
    });
  }

  function updateMobileExpanded() {
    if (!mobileDrawer) return;
    Array.prototype.forEach.call(mobileDrawer.querySelectorAll("li[data-mobile-item]"), function (li) {
      var label = li.getAttribute("data-mobile-item");
      var chevron = li.querySelector("[data-mobile-toggle] i.icon");
      if (chevron) chevron.setAttribute("class", mobileChevronClass(label));

      var sub = li.querySelector("[data-mobile-sub]");
      var shouldShow = state.expandedMobileCategory === label;
      if (sub && !shouldShow) sub.remove();
      if (!sub && shouldShow) {
        var html = mobileSubmenuHTML(label);
        if (html) li.appendChild(fromHTML(html));
      }
    });
  }

  function render(prev) {
    header.setAttribute("class", headerClass());
    mainBar.setAttribute("class", mainBarClass());

    MEGA_MENUS.forEach(function (label) {
      var entry = navByLabel[label];
      if (!entry || !entry.button) return;
      entry.button.setAttribute("class", navButtonClass(label));
      if (entry.chevron) entry.chevron.setAttribute("class", navChevronClass(label));
    });

    if (hamburger) hamburger.setAttribute("aria-expanded", String(state.isMobileMenuOpen));

    if (!prev || prev.isMobileMenuOpen !== state.isMobileMenuOpen) {
      mountMobileDrawer();
    } else if (prev.expandedMobileCategory !== state.expandedMobileCategory) {
      updateMobileExpanded();
    }

    if (!prev || prev.activeMenu !== state.activeMenu) {
      mountMegaPanel();
    } else if (prev.activeCategory !== state.activeCategory) {
      updateServicesCategory();
    }
  }

  // ---------------------------------------------------------------------
  // Event wiring
  // ---------------------------------------------------------------------

  // Scroll shadow
  function handleScroll() {
    setState({ isScrolled: window.scrollY > 10 });
  }
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Close the mobile menu on desktop widths
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1280) {
      setState({ isMobileMenuOpen: false, expandedMobileCategory: null });
    }
  });

  // Desktop nav: hover opens, click toggles
  NAV_LINKS.forEach(function (link) {
    var entry = navByLabel[link.label];
    if (!entry) return;

    entry.li.addEventListener("mouseenter", function () {
      setState({ activeMenu: MEGA_MENUS.indexOf(link.label) !== -1 ? link.label : null });
    });

    if (entry.button) {
      entry.button.addEventListener("click", function (event) {
        event.preventDefault();
        setState({ activeMenu: state.activeMenu === link.label ? null : link.label });
      });
    } else {
      var anchor = entry.li.querySelector("a");
      if (anchor) anchor.addEventListener("click", function () { setState({ activeMenu: null }); });
    }
  });

  if (logoLink) logoLink.addEventListener("click", function () { setState({ activeMenu: null }); });
  if (contactLink) contactLink.addEventListener("click", function () { setState({ activeMenu: null }); });

  header.addEventListener("mouseleave", function () {
    setState({ activeMenu: null });
  });

  // Mobile hamburger
  if (hamburger) {
    hamburger.addEventListener("click", function (event) {
      event.stopPropagation();
      var wasOpen = state.isMobileMenuOpen;
      var patch = { activeMenu: null, isMobileMenuOpen: !wasOpen };
      if (wasOpen) patch.expandedMobileCategory = null;
      setState(patch);
    });
  }

  // Click outside + Escape
  document.addEventListener("mousedown", function (event) {
    if (!header.contains(event.target)) {
      setState({ activeMenu: null, isMobileMenuOpen: false });
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setState({ activeMenu: null, isMobileMenuOpen: false });
    }
  });
})();
