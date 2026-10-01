/*
 * AI services page: "Explore the life cycle" tabs in the AI Across SDLC section.
 * Each tab fills the shared panel from STAGES (content from the AI Across SDLC Services PDF).
 */
(function () {
  "use strict";

  // Site root URL, taken from this script's own location.
  var ROOT = ((document.currentScript && document.currentScript.src) || "").replace(/assets\/js\/pages\/ai-services\.js(?:[?#].*)?$/, "");

  // Order matches the tab buttons in ai-across-sdlc-services.html.
  // A page can supply its own tab content (see js/pages/ai-solutions-data.js).
  var STAGES = window.AI_SERVICE_STAGES || [
    {
      step: "Discovery",
      title: "AI-Assisted Discovery and Requirements Engineering",
      text: "We use AI to help teams convert business ideas, stakeholder inputs, support requests, and existing documentation into clearer, more actionable software requirements.",
      listTitle: "Our requirements engineering support includes",
      points: [
        "Stakeholder input analysis",
        "Requirement extraction and classification",
        "User story and acceptance criteria drafting",
        "Requirement gap and conflict identification",
        "Backlog organization and prioritization",
        "Traceability support",
        "Change-impact analysis",
      ],
      image: "assets/img/services/ai-data/ai-across-sdlc-services/sdlc-services/01_Discovery_Requirements.png",
      alt: "Two people reviewing software requirement diagrams and wireframes",
    },
    {
      step: "Planning",
      title: "AI-Enabled Product and Project Planning",
      text: "PineSucceed helps product and engineering teams use AI for estimation support, release planning, risk visibility, dependency analysis, and delivery coordination.",
      listTitle: "Planning capabilities include",
      points: [
        "Feature decomposition",
        "Effort and complexity estimation support",
        "Sprint and release planning",
        "Dependency identification",
        "Resource planning assistance",
        "Project risk analysis",
        "Progress and status summarization",
      ],
      image: "assets/img/services/ai-data/ai-across-sdlc-services/sdlc-services/02_Product_Project_Planning.png",
      alt: "Product team planning a release on a board",
    },
    {
      step: "Architecture",
      title: "AI-Assisted Software Architecture and Design",
      text: "We apply AI to accelerate architecture exploration, design documentation, interface planning, and technical decision support while keeping experienced engineers responsible for final decisions.",
      listTitle: "Architecture and design support includes",
      points: [
        "Solution architecture options",
        "Application and service decomposition",
        "API and integration design assistance",
        "Data model and schema suggestions",
        "Cloud architecture planning",
        "Architecture documentation",
        "Security and scalability review support",
      ],
      image: "assets/img/services/ai-data/ai-across-sdlc-services/sdlc-services/03_Architecture_Design.png",
      alt: "Engineer sketching a software architecture diagram",
    },
    {
      step: "Development",
      title: "AI-Augmented Software Development",
      text: "Our developers use governed AI-assisted workflows to increase productivity, improve consistency, and reduce time spent on repetitive coding tasks.",
      listTitle: "AI-augmented development includes",
      points: [
        "Code generation and completion",
        "Boilerplate and scaffolding creation",
        "Code explanation and documentation",
        "Refactoring recommendations",
        "Legacy code understanding",
        "Unit test generation",
        "Developer knowledge assistance",
      ],
      image: "assets/img/services/ai-data/ai-across-sdlc-services/sdlc-services/04_Software_Development.png",
      alt: "Developer writing code on a laptop",
    },
    {
      step: "Code Review",
      title: "AI-Powered Code Review and Quality Engineering",
      text: "We combine AI-assisted analysis with human review to identify defects, maintainability issues, security concerns, and engineering inconsistencies earlier in the development cycle.",
      listTitle: "Quality engineering support includes",
      points: [
        "Automated code review assistance",
        "Code smell and defect detection",
        "Standards and convention checks",
        "Technical debt identification",
        "Duplicate code analysis",
        "Secure coding review support",
        "Review summaries and remediation guidance",
      ],
      image: "assets/img/services/ai-data/ai-across-sdlc-services/sdlc-services/05_Code_Review_Quality.png",
      alt: "Two developers reviewing code together",
    },
    {
      step: "Testing",
      title: "AI-Driven Testing and Test Automation",
      text: "PineSucceed uses AI to improve test design, coverage, maintenance, and defect analysis across functional and non-functional testing.",
      listTitle: "Testing services include",
      points: [
        "Test case and test data generation",
        "Requirements-to-test traceability",
        "Regression test selection",
        "UI and API test automation support",
        "Defect classification and root-cause assistance",
        "Flaky test identification",
        "Performance and security testing support",
      ],
      image: "assets/img/services/ai-data/ai-across-sdlc-services/sdlc-services/06_Testing_Automation.png",
      alt: "Tester checking an application on a mobile device",
    },
    {
      step: "DevOps",
      title: "AI-Assisted DevOps and Continuous Delivery",
      text: "We help teams use AI to improve CI/CD operations, deployment readiness, infrastructure management, and delivery visibility.",
      listTitle: "DevOps capabilities include",
      points: [
        "CI/CD pipeline analysis",
        "Build failure summarization",
        "Infrastructure-as-code assistance",
        "Release readiness checks",
        "Deployment risk identification",
        "Configuration review support",
        "Operational runbook generation",
      ],
      image: "assets/img/services/ai-data/ai-across-sdlc-services/sdlc-services/07_DevOps_Delivery.png",
      alt: "Deployment and infrastructure monitoring",
    },
    {
      step: "Operations",
      title: "AI-Enabled Monitoring, Operations, and Maintenance",
      text: "After launch, AI can help engineering and operations teams understand incidents faster, prioritize maintenance, and improve application reliability.",
      listTitle: "Operations and maintenance support includes",
      points: [
        "Log and telemetry analysis",
        "Anomaly detection planning",
        "Incident summarization and triage",
        "Root-cause analysis assistance",
        "Predictive maintenance insights",
        "Support-ticket classification",
        "Knowledge-base and runbook assistance",
      ],
      image: "assets/img/services/ai-data/ai-across-sdlc-services/sdlc-services/08_Operations_Maintenance.png",
      alt: "Operations team monitoring application dashboards",
    },
    {
      step: "Governance",
      title: "AI Governance, Security, and Responsible Use",
      text: "AI across the SDLC must be introduced with clear controls. We help organizations define safe usage practices, data boundaries, review requirements, and measurable quality standards.",
      listTitle: "Governance support includes",
      points: [
        "AI usage policy design",
        "Data privacy and confidentiality controls",
        "Approved tool and model selection",
        "Human-in-the-loop review workflows",
        "Prompt and output safeguards",
        "Auditability and traceability planning",
        "Quality, risk, and performance metrics",
      ],
      image: "assets/img/services/ai-data/ai-across-sdlc-services/sdlc-services/09_Governance_Security.png",
      alt: "Security and governance review for AI adoption",
    },
  ];

  function init() {
    var tablist = document.querySelector(".ai-lifecycle-tabs");
    var panel = document.getElementById("ai-lifecycle-panel");
    if (!tablist || !panel) return;

    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var stepNo = panel.querySelector(".ai-lifecycle-step-no");
    var stepName = panel.querySelector(".ai-lifecycle-step-name");
    var title = panel.querySelector(".ai-lifecycle-panel-title");
    var text = panel.querySelector(".ai-lifecycle-text");
    var listTitle = panel.querySelector(".ai-lifecycle-list-title");
    var list = panel.querySelector(".ai-lifecycle-list");
    var img = document.querySelector(".ai-lifecycle-media img");

    // Scrolling tab list: show exactly VISIBLE_TABS tabs (tabs can wrap to two
    // lines, so the height is measured instead of fixed in CSS). The card,
    // and so the panel and image beside it, follow this height. Laptop
    // screens (1200px-1440px wide) use a fixed LAPTOP_TABS_HEIGHT instead,
    // so every page's card is the same height as the panel content, whether
    // its tab names fit on one line or wrap to two. Below 1200px the list is
    // one horizontally scrolling row (CSS), so no height is set.
    var VISIBLE_TABS = 9;
    var HORIZONTAL_MAX_WIDTH = 1199;
    var LAPTOP_TABS_HEIGHT = 480;
    var LAPTOP_MIN_WIDTH = 1200;
    var LAPTOP_MAX_WIDTH = 1440;
    function fitTabs() {
      if (!tablist.classList.contains("ai-lifecycle-tabs--scroll")) return;
      tablist.style.maxHeight = "";
      var width = window.innerWidth;
      if (width <= HORIZONTAL_MAX_WIDTH) return;
      if (width >= LAPTOP_MIN_WIDTH && width <= LAPTOP_MAX_WIDTH) {
        tablist.style.maxHeight = LAPTOP_TABS_HEIGHT + "px";
        return;
      }
      if (tabs.length <= VISIBLE_TABS) return;
      var last = tabs[VISIBLE_TABS - 1];
      var style = getComputedStyle(tablist);
      tablist.style.maxHeight =
        last.offsetTop + last.offsetHeight - tabs[0].offsetTop +
        parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + "px";
    }
    fitTabs();
    window.addEventListener("resize", fitTabs);

    function show(index, focus) {
      var stage = STAGES[index];
      tabs.forEach(function (tab, i) {
        var on = i === index;
        tab.setAttribute("aria-selected", on ? "true" : "false");
        tab.tabIndex = on ? 0 : -1;
      });
      if (focus) tabs[index].focus({ preventScroll: true });

      // Horizontal tab row: scroll the selected tab fully into view.
      if (window.innerWidth <= HORIZONTAL_MAX_WIDTH) {
        var tab = tabs[index];
        var left = tab.getBoundingClientRect().left -
          tablist.getBoundingClientRect().left + tablist.scrollLeft;
        if (left < tablist.scrollLeft) {
          tablist.scrollTo({ left: left, behavior: "smooth" });
        } else if (left + tab.offsetWidth > tablist.scrollLeft + tablist.clientWidth) {
          tablist.scrollTo({
            left: left + tab.offsetWidth - tablist.clientWidth,
            behavior: "smooth",
          });
        }
      }

      stepNo.textContent = String(index + 1).padStart(2, "0");
      stepName.textContent = stage.step;
      title.textContent = stage.title;
      text.textContent = stage.text || "";
      text.hidden = !stage.text;
      listTitle.textContent = stage.listTitle || "";
      listTitle.hidden = !stage.listTitle;
      list.textContent = "";
      (stage.points || []).forEach(function (point) {
        var li = document.createElement("li");
        li.textContent = point;
        list.appendChild(li);
      });
      list.hidden = !(stage.points && stage.points.length);
      if (stage.image && img) {
        // Page data images are page-relative; the built-in ones are site-root relative.
        img.src = window.AI_SERVICE_STAGES ? stage.image : ROOT + stage.image;
        img.alt = stage.alt || "";
      }

      // Replay the panel's fade-in.
      panel.classList.remove("is-changing");
      void panel.offsetWidth;
      panel.classList.add("is-changing");
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        show(index, false);
      });
      // Arrow keys move between tabs, as in a standard tab list.
      tab.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        if (next === null) return;
        e.preventDefault();
        show(next, true);
      });
    });
  }

  // Implementation process cards: the detail panel opens on hover (CSS) or
  // with the arrow button; the close button also blocks hover until the
  // pointer leaves the card.
  function initProcess() {
    document.querySelectorAll("[data-process-card]").forEach(function (card) {
      var open = card.querySelector(".ai-process-open");
      var close = card.querySelector(".ai-process-close");
      if (!open || !close) return;

      function set(on) {
        card.classList.toggle("is-open", on);
        open.setAttribute("aria-expanded", on ? "true" : "false");
      }

      card.addEventListener("pointerleave", function () {
        card.classList.remove("suppress-hover");
      });
      open.addEventListener("click", function () {
        var on = !card.classList.contains("is-open");
        set(on);
        if (on) close.focus();
      });
      close.addEventListener("click", function () {
        set(false);
        card.classList.add("suppress-hover");
        open.focus();
      });
      card.addEventListener("keydown", function (e) {
        if (e.key !== "Escape" || !card.classList.contains("is-open")) return;
        set(false);
        open.focus();
      });
    });
  }

  // "Why choose" accordion: one item open at a time; clicking the open
  // item closes it.
  function initWhyAccordion() {
    var accordion = document.querySelector("[data-ai-why-accordion]");
    if (!accordion) return;
    var items = Array.prototype.slice.call(accordion.querySelectorAll(".ai-why-item"));

    function set(item, on) {
      var trigger = item.querySelector(".ai-why-trigger");
      var panel = item.querySelector(".ai-why-panel");
      item.classList.toggle("is-open", on);
      trigger.setAttribute("aria-expanded", on ? "true" : "false");
      panel.hidden = !on;
    }

    items.forEach(function (item) {
      item.querySelector(".ai-why-trigger").addEventListener("click", function () {
        var wasOpen = item.classList.contains("is-open");
        items.forEach(function (other) {
          set(other, false);
        });
        if (!wasOpen) set(item, true);
      });
    });
  }

  // FAQ: same behaviour as the industry pages (js/components/industry-page.js):
  // first answer open, Expand All / Collapse All, and 5 questions shown at a
  // time with Show More / Show Less. All questions and answers are in the HTML.
  function initFaq() {
    var root = document.querySelector("[data-ai-faq]");
    if (!root) return;
    var PAGE_SIZE = 5;
    var items = Array.prototype.slice.call(root.querySelectorAll("[data-faq-item]"));
    var toggleAll = root.querySelector("[data-faq-toggle-all]");
    var more = root.querySelector("[data-faq-more]");
    var less = root.querySelector("[data-faq-less]");
    var open = items.map(function (_, i) {
      return i === 0;
    });
    var visible = PAGE_SIZE;

    function render() {
      items.forEach(function (item, i) {
        var button = item.querySelector("button");
        var icon = button.querySelector(".icon");
        item.hidden = i >= visible;
        button.setAttribute("aria-expanded", open[i] ? "true" : "false");
        icon.classList.toggle("fa-minus", open[i]);
        icon.classList.toggle("fa-plus", !open[i]);
        item.querySelector(".retail-answer").hidden = !open[i];
      });
      var allOpen = open.every(Boolean);
      toggleAll.textContent = allOpen ? "Collapse All" : "Expand All";
      more.hidden = visible >= items.length;
      less.hidden = visible <= PAGE_SIZE;
    }

    items.forEach(function (item, i) {
      item.querySelector("button").addEventListener("click", function () {
        open[i] = !open[i];
        render();
      });
    });
    toggleAll.addEventListener("click", function () {
      var allOpen = open.every(Boolean);
      open = open.map(function () {
        return !allOpen;
      });
      // Expanding everything also reveals the questions behind "Show More".
      if (!allOpen) visible = items.length;
      render();
    });
    more.addEventListener("click", function () {
      visible = Math.min(visible + PAGE_SIZE, items.length);
      render();
    });
    less.addEventListener("click", function () {
      visible = Math.max(PAGE_SIZE, Math.ceil(visible / PAGE_SIZE) * PAGE_SIZE - PAGE_SIZE);
      render();
    });
    render();
  }

  function start() {
    init();
    initProcess();
    initWhyAccordion();
    initFaq();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
