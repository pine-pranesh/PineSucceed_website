/*
 * Database Creation and Management Services page (database-creation-and-management-services.html):
 * content for the "Explore our services" tabs. js/pages/ai-services.js uses
 * this list instead of its built-in SDLC stages when it is present.
 * Order matches the tab buttons in the page.
 */
window.AI_SERVICE_STAGES = [
  {
    "step": "Consulting",
    "title": "Database Consulting and Strategy",
    "text": "We help businesses evaluate their data requirements, existing systems, workloads, growth plans, security needs, and technology options before selecting or modernizing a database environment.",
    "listTitle": "Our database consulting includes",
    "points": [
      "Business and application requirement analysis",
      "Existing database assessment",
      "Relational and NoSQL technology selection",
      "Cloud and on-premises strategy",
      "Capacity and scalability planning",
      "Security and compliance planning",
      "Database modernization roadmap"
    ],
    "image": "assets/database/services/consulting.jpg",
    "alt": "Database Consulting and Strategy"
  },
  {
    "step": "Design",
    "title": "Custom Database Design and Development",
    "text": "PineSucceed designs custom databases that organize information efficiently, support application workflows, maintain data integrity, and provide a strong foundation for future growth.",
    "listTitle": "Database design and development includes",
    "points": [
      "Conceptual, logical, and physical data modeling",
      "Database schema design",
      "Table, collection, and relationship design",
      "Primary and foreign key planning",
      "Constraints and validation rules",
      "Indexing strategy",
      "Stored procedures, functions, and triggers"
    ],
    "image": "assets/database/services/database-design.jpg",
    "alt": "Custom Database Design and Development"
  },
  {
    "step": "SQL",
    "title": "SQL Database Development",
    "text": "We build and manage relational databases for transactional applications, enterprise systems, reporting platforms, and structured business data.",
    "listTitle": "SQL database services include",
    "points": [
      "MySQL development and administration",
      "PostgreSQL development and administration",
      "Microsoft SQL Server solutions",
      "Oracle database support",
      "MariaDB solutions",
      "Query and stored procedure development",
      "Relational data integrity and transaction management"
    ],
    "image": "assets/database/services/sql-databases.png",
    "alt": "SQL Database Development"
  },
  {
    "step": "NoSQL",
    "title": "NoSQL Database Development",
    "text": "For flexible schemas, high-volume workloads, distributed applications, content platforms, and real-time use cases, we design NoSQL database solutions matched to the access patterns of the application.",
    "listTitle": "NoSQL services include",
    "points": [
      "MongoDB database development",
      "Document database design",
      "Key-value and cache database solutions",
      "Wide-column database planning",
      "Flexible schema development",
      "Partitioning and sharding strategy",
      "NoSQL query and aggregation optimization"
    ],
    "image": "assets/database/services/nosql-databases.jpg",
    "alt": "NoSQL Database Development"
  },
  {
    "step": "Cloud",
    "title": "Cloud Database Solutions",
    "text": "We design and manage cloud database environments that provide flexible capacity, managed operations, high availability, monitoring, and integration with modern cloud applications.",
    "listTitle": "Cloud database services include",
    "points": [
      "Managed relational database deployment",
      "Cloud-native NoSQL implementation",
      "Database configuration and hardening",
      "Multi-zone availability planning",
      "Autoscaling and capacity management",
      "Cloud backup and recovery setup",
      "Cost and performance optimization"
    ],
    "image": "assets/database/services/cloud-databases.jpg",
    "alt": "Cloud Database Solutions"
  },
  {
    "step": "Migration",
    "title": "Database Migration and Modernization",
    "text": "PineSucceed helps businesses move databases between platforms, versions, hosting environments, and architectures while protecting data integrity and minimizing operational disruption.",
    "listTitle": "Migration and modernization services include",
    "points": [
      "On-premises to cloud migration",
      "Cloud-to-cloud database migration",
      "Database engine migration",
      "Version upgrades",
      "Schema and data conversion",
      "Migration validation and reconciliation",
      "Cutover and rollback planning"
    ],
    "image": "assets/database/services/migration.png",
    "alt": "Database Migration and Modernization"
  },
  {
    "step": "Data Modeling",
    "title": "Data Modeling and Architecture",
    "text": "We create clear data models and database architectures that reflect business entities, relationships, rules, access requirements, and reporting needs.",
    "listTitle": "Data modeling services include",
    "points": [
      "Entity relationship modeling",
      "Normalization and denormalization",
      "Transactional and analytical model design",
      "Multi-tenant database architecture",
      "Master and reference data planning",
      "Data dictionary creation",
      "Architecture documentation"
    ],
    "image": "assets/database/services/data-modeling.png",
    "alt": "Data Modeling and Architecture"
  },
  {
    "step": "Integration",
    "title": "Database Integration and API Support",
    "text": "We connect databases with web applications, mobile applications, enterprise systems, third-party platforms, reporting tools, and data pipelines.",
    "listTitle": "Integration services include",
    "points": [
      "Application-to-database integration",
      "REST and GraphQL API support",
      "CRM and ERP data integration",
      "Third-party platform integration",
      "ETL and ELT connectivity",
      "Event-driven data integration",
      "Data synchronization workflows"
    ],
    "image": "assets/database/services/integration.png",
    "alt": "Database Integration and API Support"
  },
  {
    "step": "Performance",
    "title": "Database Performance Tuning and Optimization",
    "text": "Our team identifies and resolves performance bottlenecks affecting queries, transactions, applications, reports, and infrastructure utilization.",
    "listTitle": "Performance optimization includes",
    "points": [
      "Slow query analysis",
      "Query and execution plan optimization",
      "Index review and tuning",
      "Schema and data type optimization",
      "Connection and configuration tuning",
      "Caching strategy",
      "Capacity and workload analysis"
    ],
    "image": "assets/database/services/performance.jpg",
    "alt": "Database Performance Tuning and Optimization"
  },
  {
    "step": "Security",
    "title": "Database Security and Access Management",
    "text": "We implement layered database security controls to protect sensitive information and reduce the risk of unauthorized access, misuse, leakage, or accidental changes.",
    "listTitle": "Security services include",
    "points": [
      "Role-based access control",
      "User and privilege management",
      "Authentication and authorization planning",
      "Encryption in transit and at rest",
      "Network and firewall configuration",
      "Audit logging and activity monitoring",
      "Security review and hardening"
    ],
    "image": "assets/database/services/security.png",
    "alt": "Database Security and Access Management"
  },
  {
    "step": "Backup",
    "title": "Backup, Recovery, and Business Continuity",
    "text": "PineSucceed designs backup and recovery processes that protect business data and support restoration after failures, corruption, accidental deletion, or service disruption.",
    "listTitle": "Backup and recovery services include",
    "points": [
      "Backup strategy and scheduling",
      "Full, incremental, and point-in-time recovery",
      "Retention and archival planning",
      "Restore testing",
      "Recovery time and recovery point planning",
      "Replication and standby configuration",
      "Disaster recovery documentation"
    ],
    "image": "assets/database/services/backup-recovery.jpg",
    "alt": "Backup, Recovery, and Business Continuity"
  },
  {
    "step": "High Availability",
    "title": "High Availability and Replication",
    "text": "We configure resilient database architectures that reduce downtime and maintain service continuity across infrastructure or application failures.",
    "listTitle": "High-availability services include",
    "points": [
      "Primary and replica architecture",
      "Read replica implementation",
      "Automatic failover planning",
      "Clustering and redundancy",
      "Multi-zone deployment",
      "Replication monitoring",
      "Availability and failover testing"
    ],
    "image": "assets/database/services/high-availability.png",
    "alt": "High Availability and Replication"
  },
  {
    "step": "Administration",
    "title": "Database Monitoring and Administration",
    "text": "Our database administration services keep database environments healthy, secure, available, and aligned with changing application needs.",
    "listTitle": "Database administration includes",
    "points": [
      "Health and availability monitoring",
      "User and access administration",
      "Storage and capacity monitoring",
      "Backup and replication checks",
      "Routine maintenance",
      "Patch and upgrade planning",
      "Incident investigation and resolution"
    ],
    "image": "assets/database/services/administration.jpg",
    "alt": "Database Monitoring and Administration"
  },
  {
    "step": "Data Warehouse",
    "title": "Data Warehouse and Reporting Database Development",
    "text": "We create data storage environments designed for reporting, analytics, dashboards, historical analysis, and business intelligence workloads.",
    "listTitle": "Analytical database services include",
    "points": [
      "Data warehouse architecture",
      "Dimensional data modeling",
      "Fact and dimension table design",
      "Data mart development",
      "ETL and ELT pipeline integration",
      "Historical data management",
      "Reporting query optimization"
    ],
    "image": "assets/database/services/data-warehouse.jpg",
    "alt": "Data Warehouse and Reporting Database Development"
  },
  {
    "step": "Audit",
    "title": "Database Audit and Health Assessment",
    "text": "We review existing database environments to identify risks, performance issues, security gaps, maintenance concerns, and opportunities for modernization.",
    "listTitle": "Assessment areas include",
    "points": [
      "Architecture and schema review",
      "Performance and query analysis",
      "Security and access review",
      "Backup and recovery assessment",
      "Availability and replication review",
      "Capacity and growth analysis",
      "Prioritized remediation recommendations"
    ],
    "image": "assets/database/services/audit.jpg",
    "alt": "Database Audit and Health Assessment"
  }
];
