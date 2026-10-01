/*
 * Data Science Development Services page (data-science-development-services.html):
 * content for the "Explore our services" tabs. js/pages/ai-services.js uses
 * this list instead of its built-in SDLC stages when it is present.
 * Order matches the tab buttons in the page.
 */
window.AI_SERVICE_STAGES = [
  {
    "step": "Consulting",
    "title": "Data Science Consulting and Strategy",
    "text": "We help businesses identify valuable data science opportunities, evaluate feasibility, and define a clear implementation strategy based on available data, business priorities, and expected returns.",
    "listTitle": "Our data science consulting includes",
    "points": [
      "Business problem discovery",
      "Data opportunity assessment",
      "Use case identification",
      "Data science readiness assessment",
      "Solution feasibility analysis",
      "Technology and platform recommendations",
      "Roadmap and KPI definition"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/consulting.png",
    "alt": "Data Science Consulting and Strategy"
  },
  {
    "step": "Data Collection",
    "title": "Data Collection and Integration",
    "text": "Reliable data science starts with complete and accessible data. We bring together information from business applications, databases, APIs, files, devices, and third-party platforms.",
    "listTitle": "Data collection and integration services include",
    "points": [
      "Data source identification",
      "Database and API integration",
      "Batch and real-time ingestion",
      "Third-party data integration",
      "Structured and unstructured data collection",
      "Cloud and on-premises connectivity",
      "Data validation and reconciliation"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/data-collection.png",
    "alt": "Data Collection and Integration"
  },
  {
    "step": "Data Engineering",
    "title": "Data Engineering and Pipeline Development",
    "text": "PineSucceed designs data pipelines that prepare, move, transform, and deliver trustworthy data for analytics, machine learning, reporting, and operational applications.",
    "listTitle": "Our data engineering capabilities include",
    "points": [
      "ETL and ELT pipeline development",
      "Data transformation workflows",
      "Data lake and warehouse integration",
      "Streaming data pipelines",
      "Workflow orchestration",
      "Pipeline monitoring and error handling",
      "Scalable cloud data processing"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/data-engineering.png",
    "alt": "Data Engineering and Pipeline Development"
  },
  {
    "step": "Data Preparation",
    "title": "Data Cleaning and Preparation",
    "text": "We improve data quality and convert raw datasets into analysis-ready assets suitable for statistical analysis and machine learning.",
    "listTitle": "Data preparation includes",
    "points": [
      "Missing-value treatment",
      "Duplicate and anomaly handling",
      "Data normalization and standardization",
      "Categorical and numerical transformation",
      "Feature extraction and engineering",
      "Dataset labeling and enrichment",
      "Training, validation, and test dataset preparation"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/data-preparation.jpg",
    "alt": "Data Cleaning and Preparation"
  },
  {
    "step": "Exploratory Analysis",
    "title": "Exploratory Data Analysis",
    "text": "Our data scientists examine patterns, relationships, distributions, and anomalies to understand what the data reveals before model development begins.",
    "listTitle": "Exploratory analysis includes",
    "points": [
      "Descriptive statistics",
      "Trend and pattern analysis",
      "Correlation analysis",
      "Segmentation and cohort analysis",
      "Anomaly and outlier investigation",
      "Hypothesis exploration",
      "Visual analysis and insight reporting"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/exploratory-analysis.png",
    "alt": "Exploratory Data Analysis"
  },
  {
    "step": "Predictive",
    "title": "Predictive Analytics Development",
    "text": "We build predictive models that help businesses estimate future outcomes, identify risks, forecast demand, and support better decisions.",
    "listTitle": "Predictive analytics solutions include",
    "points": [
      "Demand and sales forecasting",
      "Customer churn prediction",
      "Lead and opportunity scoring",
      "Risk and fraud prediction",
      "Predictive maintenance",
      "Customer lifetime value modeling",
      "Operational performance forecasting"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/predictive-analytics.jpg",
    "alt": "Predictive Analytics Development"
  },
  {
    "step": "Machine Learning",
    "title": "Machine Learning Model Development",
    "text": "PineSucceed develops custom machine learning models for classification, regression, clustering, recommendation, anomaly detection, and other business-specific requirements.",
    "listTitle": "Model development services include",
    "points": [
      "Algorithm selection and benchmarking",
      "Supervised and unsupervised learning",
      "Feature engineering",
      "Model training and tuning",
      "Cross-validation and evaluation",
      "Explainability and bias assessment",
      "Model performance optimization"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/machine-learning.jpg",
    "alt": "Machine Learning Model Development"
  },
  {
    "step": "NLP",
    "title": "Natural Language Processing Solutions",
    "text": "We develop data science solutions that extract information, meaning, and sentiment from documents, messages, reviews, tickets, and other text sources.",
    "listTitle": "NLP capabilities include",
    "points": [
      "Text classification",
      "Sentiment analysis",
      "Entity and keyword extraction",
      "Topic modeling",
      "Document categorization",
      "Text summarization",
      "Semantic search and similarity analysis"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/nlp.jpg",
    "alt": "Natural Language Processing Solutions"
  },
  {
    "step": "Recommendations",
    "title": "Recommendation and Personalization Systems",
    "text": "We build recommendation systems that help users discover relevant products, content, services, and next-best actions based on behavior, preferences, and contextual data.",
    "listTitle": "Recommendation capabilities include",
    "points": [
      "Product and content recommendations",
      "Collaborative and content-based filtering",
      "Hybrid recommendation models",
      "Customer segmentation",
      "Next-best-action models",
      "Personalized ranking",
      "Recommendation performance measurement"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/recommendations.jpg",
    "alt": "Recommendation and Personalization Systems"
  },
  {
    "step": "Computer Vision",
    "title": "Computer Vision Development",
    "text": "PineSucceed develops computer vision solutions that analyze images and video to support inspection, detection, classification, recognition, and automation workflows.",
    "listTitle": "Computer vision services include",
    "points": [
      "Image classification",
      "Object detection",
      "Image segmentation",
      "Optical character recognition",
      "Visual quality inspection",
      "Document and image analysis",
      "Model integration with business applications"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/computer-vision.jpg",
    "alt": "Computer Vision Development"
  },
  {
    "step": "Visualization",
    "title": "Business Intelligence and Data Visualization",
    "text": "We convert complex datasets and analytical outputs into understandable dashboards, reports, and decision-support experiences for business users.",
    "listTitle": "Visualization services include",
    "points": [
      "Executive and operational dashboards",
      "Interactive reports",
      "KPI and metric design",
      "Self-service analytics",
      "Predictive insight visualization",
      "Embedded analytics",
      "Role-based data views"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/business-intelligence.jpg",
    "alt": "Business Intelligence and Data Visualization"
  },
  {
    "step": "MLOps",
    "title": "MLOps and Model Deployment",
    "text": "We deploy machine learning models into secure, scalable environments and establish repeatable processes for versioning, testing, monitoring, and updating them.",
    "listTitle": "MLOps and deployment services include",
    "points": [
      "Model packaging and API development",
      "Cloud and on-premises deployment",
      "Model and dataset versioning",
      "Automated testing and release pipelines",
      "Performance and drift monitoring",
      "Retraining workflows",
      "Rollback and lifecycle management"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/mlops.png",
    "alt": "MLOps and Model Deployment"
  },
  {
    "step": "Applications",
    "title": "Data Science Application Development",
    "text": "PineSucceed integrates analytics and machine learning into web, mobile, cloud, and enterprise applications so insights can support real operational workflows.",
    "listTitle": "Application development includes",
    "points": [
      "Predictive web applications",
      "Analytics portals",
      "Decision-support systems",
      "Model-powered APIs",
      "Internal data science tools",
      "Workflow and system integrations",
      "User feedback and model improvement loops"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/application-development.png",
    "alt": "Data Science Application Development"
  },
  {
    "step": "Governance",
    "title": "Data Governance, Privacy, and Security",
    "text": "We help organizations manage data responsibly through appropriate access, privacy, quality, lineage, retention, and model governance controls.",
    "listTitle": "Governance support includes",
    "points": [
      "Data classification and access control",
      "Privacy-aware data processing",
      "Data quality standards",
      "Lineage and traceability planning",
      "Model documentation and auditability",
      "Bias and fairness review",
      "Retention and compliance planning"
    ],
    "image": "../../assets/img/services/ai-data/data-science-development-services/services/governance.png",
    "alt": "Data Governance, Privacy, and Security"
  }
];
