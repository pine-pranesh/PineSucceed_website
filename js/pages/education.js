/*
 * Education & E-Learning page content. Behaviour lives in js/components/industry-page.js.
 */
window.initIndustryPage({
  servicesHeading: "EdTech Software Development Services We Provide",
  solutionsSection: 'section[aria-labelledby="education-solutions-heading"]',

  services: [
    {
      title: "EdTech Software Consulting",
      description:
        "Define a practical technology strategy based on your learning model, operational challenges, users, systems, and growth plans.",
      listIntro: "Our consulting services can include:",
      points: [
        "Business and technology assessment",
        "Learning and academic workflow analysis",
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
      image: "/education/consulting.jpg",
    },
    {
      title: "Custom EdTech Software Development",
      description:
        "Develop purpose-built applications when standard education platforms cannot support your learning processes or product requirements.",
      listIntro: "Custom development can cover:",
      points: [
        "Web applications",
        "Mobile applications",
        "Cloud-based learning platforms",
        "Learning management systems",
        "Student and educator portals",
        "Internal administrative systems",
        "Assessment applications",
        "Reporting and analytics solutions",
        "EdTech SaaS products",
      ],
      image: "/education/custom-development.jpg",
    },
    {
      title: "EdTech Software Modernization",
      description:
        "Improve or replace aging education applications that have become difficult to maintain, integrate, secure, or scale.",
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
      image: "/education/modernization.png",
    },
    {
      title: "EdTech Software Integration",
      description:
        "Connect education applications with student, content, communication, payment, identity, and enterprise systems.",
      listIntro: "Integration services can include:",
      points: [
        "API design and development",
        "Data synchronization",
        "Middleware implementation",
        "Single sign-on",
        "Student information system integration",
        "CRM and ERP integration",
        "Video conferencing integration",
        "Payment integration",
        "Content and library integration",
        "Identity and access integration",
        "Reporting and analytics integration",
      ],
      image: "/education/integration.png",
    },
    {
      title: "Education Data Migration",
      description:
        "Move learner records, courses, content, assessments, grades, certificates, and other academic information into a new platform.",
      listIntro: "Our migration approach can include:",
      points: [
        "Source-system analysis",
        "Data inventory",
        "Cleansing and deduplication",
        "Field mapping",
        "Transformation rules",
        "Trial migrations",
        "Content migration",
        "Reconciliation",
        "Production migration",
        "Post-migration validation",
      ],
      image: "/education/data-migration.png",
    },
    {
      title: "EdTech Software Quality Assurance",
      description:
        "Validate the functionality, security, usability, accessibility, performance, and compatibility of education applications.",
      listIntro: "Testing can include:",
      points: [
        "Functional testing",
        "Learning workflow testing",
        "Integration testing",
        "Data migration testing",
        "Role and permission testing",
        "Security-focused testing",
        "Performance testing",
        "Accessibility testing",
        "Mobile and browser testing",
        "User acceptance support",
      ],
      image: "/education/quality-assurance.png",
    },
    {
      title: "EdTech Software Support",
      description:
        "Keep education applications reliable, secure, and aligned with changing learning and administrative requirements.",
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
      image: "/education/support.png",
    },
  ],

  solutions: [
    {
      title: "Learning Management Systems",
      body: "Manage courses, lessons, enrollments, assignments, assessments, learner progress, certificates, and communication.",
      image: "/education/lms.jpg",
    },
    {
      title: "Student Information Systems",
      body: "Centralize admissions, student records, attendance, schedules, grades, fees, documents, and academic histories.",
      image: "/education/student-information.jpg",
    },
    {
      title: "Virtual Classroom Platforms",
      body: "Support live classes, video sessions, screen sharing, chat, whiteboards, attendance, recordings, and learner participation.",
      image: "/education/virtual-classroom.jpg",
    },
    {
      title: "Online Course Platforms",
      body: "Deliver self-paced, instructor-led, subscription-based, or cohort-based learning through structured digital experiences.",
      image: "/education/online-courses.jpg",
    },
    {
      title: "Assessment and Examination Platforms",
      body: "Manage question banks, examination schedules, secure assessments, grading, feedback, results, and performance reports.",
      image: "/education/examination.jpg",
    },
    {
      title: "Learning Content Management Systems",
      body: "Create, organize, review, publish, reuse, and update educational content across courses and delivery channels.",
      image: "/education/content-management.jpg",
    },
    {
      title: "Tutoring and Learning Marketplaces",
      body: "Connect learners with tutors or instructors through profiles, search, matching, scheduling, communication, payments, and reviews.",
      image: "/education/tutoring.jpg",
    },
    {
      title: "School and Campus Management Software",
      body: "Manage admissions, classes, attendance, timetables, fees, transport, communication, staff, and institutional reporting.",
      image: "/education/campus-management.jpg",
    },
    {
      title: "Corporate Learning Platforms",
      body: "Support employee onboarding, skills development, compliance training, certifications, learning paths, and workforce analytics.",
      image: "/education/corporate-learning.jpg",
    },
    {
      title: "Parent, Student, and Educator Portals",
      body: "Provide role-based access to schedules, assignments, grades, attendance, payments, documents, announcements, and communication.",
      image: "/education/portals.jpg",
    },
    {
      title: "EdTech Mobile Applications",
      body: "Deliver lessons, assessments, communication, progress tracking, downloads, notifications, and offline learning on mobile devices.",
      image: "/education/mobile-learning.jpg",
    },
    {
      title: "Education Analytics Products",
      body: "Transform enrollment, engagement, attendance, assessment, completion, and performance data into dashboards and decision-support tools.",
      image: "/education/analytics.jpg",
    },
    {
      title: "AI-Enabled EdTech Applications",
      body: "Develop or integrate capabilities for personalized learning, tutoring assistance, assessment support, content processing, search, and learner analytics.",
      image: "/education/ai-edtech.jpg",
    },
    {
      title: "Data Retention and Deletion",
      body: "Implement configurable policies for retaining, archiving, exporting, and deleting learner, academic, assessment, payment, and operational information.",
      image: "/education/data-retention.jpg",
    },
  ],

  faqs: [
    {
      question: "What EdTech software does PineSucceed Technologies develop?",
      answer:
        "We develop learning management, student information, virtual classroom, assessment, tutoring, school management, corporate training, and education analytics solutions.",
    },
    {
      question: "Can PineSucceed build a custom learning management system?",
      answer:
        "Yes. We build LMS platforms around your courses, learners, content, assessments, certifications, reporting, and administrative processes.",
    },
    {
      question: "Can you develop mobile learning applications?",
      answer:
        "Yes. We build mobile apps for lessons, assessments, communication, progress tracking, downloads, notifications, and offline learning.",
    },
    {
      question: "Can PineSucceed develop virtual classroom software?",
      answer:
        "Yes. We develop solutions for live classes, video, chat, whiteboards, attendance, recordings, screen sharing, and learner participation.",
    },
    {
      question: "Can you build assessment and examination platforms?",
      answer:
        "Yes. We develop question banks, test workflows, grading, feedback, result reporting, and suitable examination controls.",
    },
    {
      question: "Can PineSucceed develop school or campus management software?",
      answer:
        "Yes. We build solutions for admissions, student records, attendance, timetables, fees, communication, staff, and reporting.",
    },
    {
      question: "Can you integrate EdTech software with our existing systems?",
      answer:
        "Yes. We integrate EdTech platforms with student information, CRM, ERP, payment, identity, video, content, communication, and analytics systems.",
    },
    {
      question: "Can you migrate our courses and learner data?",
      answer:
        "Yes. We can cleanse, map, transfer, reconcile, and validate learner records, courses, content, assessments, grades, and certificates.",
    },
    {
      question: "Can PineSucceed create student, educator, and parent portals?",
      answer:
        "Yes. We build secure portals for schedules, assignments, attendance, grades, payments, documents, announcements, and communication.",
    },
    {
      question: "Can you develop tutoring or course marketplaces?",
      answer:
        "Yes. We develop marketplaces with profiles, search, matching, scheduling, communication, payments, subscriptions, ratings, and administration.",
    },
    {
      question: "Can AI be added to our EdTech software?",
      answer:
        "Yes. AI can support personalized learning, tutoring assistance, content processing, assessment support, search, and learner analytics.",
    },
    {
      question: "How does PineSucceed protect learner data?",
      answer:
        "We use appropriate access controls, encryption, secure integrations, logging, testing, monitoring, backup, and recovery practices.",
    },
    {
      question: "Does PineSucceed guarantee education or privacy compliance?",
      answer:
        "No technology provider replaces qualified legal advice. We implement confirmed requirements while your legal, education, and compliance specialists determine the obligations that apply.",
    },
    {
      question: "How long does EdTech software development take?",
      answer:
        "The timeline depends on the features, platforms, user roles, integrations, migration, accessibility, security, and testing requirements.",
    },
    {
      question: "How much does custom EdTech software cost?",
      answer:
        "Cost depends on scope, complexity, platforms, integrations, migration, infrastructure, and support needs. We estimate it after reviewing your requirements.",
    },
    {
      question: "Does PineSucceed provide support after launch?",
      answer:
        "Yes. We provide monitoring, maintenance, security updates, performance optimization, integration support, and continued development.",
    },
    {
      question: "How do we begin an EdTech software project with PineSucceed?",
      answer:
        "Share your learning model, users, workflows, current systems, required features, and goals. We will recommend an appropriate delivery approach.",
    },
  ],
});
