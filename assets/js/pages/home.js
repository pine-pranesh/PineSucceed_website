/*
 * Home page:
 *   - Core capabilities: service tabs with a details panel
 *   - Industries We Serve: card slider (Swiper 4.2.0)
 *   - Contact section form
 * The hero buttons open the modals handled by js/components/modals.js.
 */
(function () {
  "use strict";

  // Public path "/x/y.png" -> "assets/img/x/y.png" (paths are relative to the site root).
  function asset(publicPath) {
    return "assets/img" + publicPath;
  }

  // Internal link mapping used by the static export.
  var ROUTES = {
    "/": "index.html",
    "/about": "about-us.html",
    "/office": "office.html",
    "/contact": "contact-us.html",
    "/retail-ecommerce-B2B": "industries/retail-ecommerce-b2b.html",
    "/education-training": "industries/education-training.html",
    "/logistics": "industries/logistics.html",
    "/real-estate-property-solutions": "industries/real-estate-property-solutions.html",
    "/oil-and-gas": "industries/oil-and-gas.html",
    "/construction-software": "industries/construction.html",
  };
  function route(href) {
    return Object.prototype.hasOwnProperty.call(ROUTES, href) ? ROUTES[href] : href;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function setTokens(node, add, remove) {
    remove.split(/\s+/).forEach(function (c) { if (c) node.classList.remove(c); });
    add.split(/\s+/).forEach(function (c) { if (c) node.classList.add(c); });
  }

  /* ------------------------------------------------------------------ */
  /* Core Capabilities: service tabs                                     */
  /* ------------------------------------------------------------------ */

  var SERVICES = [
    {
      title: "AI & Machine Learning",
      headline: "Turn business data into better decisions.",
      sub: "Build intelligent systems that automate decisions, uncover patterns, and improve business performance.",
      bullets: ["Predictive analytics", "Recommendation engines", "AI-assisted reporting and insights", "AI-powered workflow automation", "Intelligent document processing"],
      image: "/home/new/ai-machine-learning.png",
    },
    {
      title: "Salesforce Services",
      headline: "Make Salesforce your connected growth platform.",
      sub: "Turn Salesforce into a connected growth platform for sales, service, marketing, and customer operations.",
      bullets: ["Salesforce implementation", "Sales Cloud and Service Cloud customization", "CRM workflow automation", "Salesforce integrations", "Dashboards, reports, and pipeline visibility"],
      image: "/home/service/salesforce.png",
    },
    {
      title: "Cloud Engineering",
      headline: "Run secure cloud environments built to scale.",
      sub: "Design, migrate, and manage secure cloud environments that support performance, reliability, and scale.",
      bullets: ["Cloud migration", "Cloud-native application development", "DevOps and CI/CD", "Infrastructure modernization", "AWS, Azure, and Google Cloud support"],
      image: "/home/service/cloud.png",
    },
    {
      title: "Custom Software Development",
      headline: "Build software shaped around your business.",
      sub: "Build scalable web, mobile, and enterprise applications tailored to your business needs.",
      bullets: ["Enterprise web applications", "Mobile app development", "Custom business platforms", "API and backend development", "Legacy system modernization"],
      image: "/home/service/custom-software-development.png",
    },
    {
      title: "Product Engineering",
      headline: "Take products from concept to scale.",
      sub: "Support the full product lifecycle from concept and architecture to development, enhancement, and scale.",
      bullets: ["MVP development", "Product architecture", "UI/UX design", "Feature enhancement", "Ongoing product support"],
      image: "/home/service/product-engineering.png",
    },
    {
      title: "Data Engineering & BI",
      headline: "Give leaders decision-ready visibility.",
      sub: "Give leaders better visibility through integrated data, dashboards, and decision-ready reporting systems.",
      bullets: ["Data pipelines", "BI dashboards", "KPI reporting", "Operational analytics", "Data integration across platforms"],
      image: "/home/service/data-engineering-bi.png",
    },
    {
      title: "QA & Test Automation",
      headline: "Release with quality and confidence.",
      sub: "Improve product quality, release confidence, and delivery speed through structured testing and automation.",
      bullets: ["Functional testing", "Automation testing", "Performance testing", "Regression testing", "QA consulting"],
      image: "/home/service/qa-test-automation.png",
    },
    {
      title: "Dedicated Development Teams",
      headline: "Extend your team with reliable engineers.",
      sub: "Extend your in-house capacity with reliable engineering teams aligned to your delivery goals.",
      bullets: ["Full-stack developers", "QA engineers", "DevOps engineers", "Salesforce specialists", "AI/ML and data engineers"],
      image: "/home/service/dedicated-development-teams.png",
    },
  ];

  var CAP_ACTIVE = "home-cap-active";
  var CAP_INACTIVE = "home-cap-inactive";
  var CAP_BULLET = "p-3 home-cap-bullet";

  // Builds the service details panel.
  function buildServiceDetails(service) {
    var root = el("div", "bg-white home-core-capabilities-box");

    var top = el("div", "row g-0 home-core-capabilities-grid");
    var textCol = el("div", "col-12 col-md-6");
    var text = el("div", "h-100 home-core-capabilities-box-2");
    text.appendChild(el("p", "text-uppercase home-core-capabilities-text", service.title));
    text.appendChild(el("h3", "mt-3 home-core-capabilities-title", service.headline));
    text.appendChild(el("p", "mt-3 lh-base home-core-capabilities-text-2", service.sub));
    textCol.appendChild(text);
    top.appendChild(textCol);

    var imgCol = el("div", "col-12 col-md-6");
    var imgWrap = el("div", "position-relative home-core-capabilities-box-3");
    var img = el("img", "shared-img");
    img.alt = service.title;
    img.loading = "lazy";
    img.decoding = "async";
    img.classList.add("img-fill");
    img.src = asset(service.image);
    imgWrap.appendChild(img);
    imgCol.appendChild(imgWrap);
    top.appendChild(imgCol);
    root.appendChild(top);

    // First column takes the extra bullet when the count is odd (3 + 2).
    var splitAt = Math.ceil(service.bullets.length / 2);
    var columns = [service.bullets.slice(0, splitAt), service.bullets.slice(splitAt)];
    var list = el("div", "row home-core-capabilities-grid-2");
    columns.forEach(function (column, columnIndex) {
      var col = el("div", "col-12 col-md-6");
      var ul = el("ul", "home-service-details-list " + (columnIndex === 0 ? "home-service-details-list-column-index" : "home-service-details-list-not-column-index"));
      column.forEach(function (bullet) { ul.appendChild(el("li", CAP_BULLET, bullet)); });
      col.appendChild(ul);
      list.appendChild(col);
    });
    root.appendChild(list);
    return root;
  }

  function initCoreCapabilities() {
    var section = document.getElementById("core-capabilities");
    if (!section) return;
    var nav = section.querySelector('nav[aria-label="Service categories"]');
    if (!nav) return;
    var buttons = Array.prototype.slice.call(nav.querySelectorAll("button"));
    var activeIndex = 0;

    function render(index) {
      if (index === activeIndex) return;
      activeIndex = index;
      buttons.forEach(function (button, i) {
        var isActive = i === index;
        setTokens(button, isActive ? CAP_ACTIVE : CAP_INACTIVE, isActive ? CAP_INACTIVE : CAP_ACTIVE);
        var marker = button.querySelector("span[aria-hidden]");
        if (isActive) {
          button.setAttribute("aria-current", "true");
          if (!marker) {
            marker = el("span", "position-absolute top-0 bottom-0 start-0 home-core-capabilities-label");
            marker.setAttribute("aria-hidden", "true");
            button.insertBefore(marker, button.firstChild);
          }
        } else {
          button.removeAttribute("aria-current");
          if (marker) marker.remove();
        }
      });
      // The details panel is keyed by service in React, so it remounts and replays its animation.
      var current = nav.nextElementSibling;
      var next = buildServiceDetails(SERVICES[index]);
      if (current) current.replaceWith(next);
      else nav.parentNode.appendChild(next);
    }

    buttons.forEach(function (button, i) {
      button.addEventListener("click", function () { render(i); });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Industries We Serve: card slider (Swiper 4.2.0)                     */
  /* ------------------------------------------------------------------ */

  // Swiper 4 breakpoints use max-width: each key applies while the window is <= that width.
  function initIndustriesSlider() {
    var container = document.querySelector(".home-industries-slider");
    if (!container || typeof window.Swiper !== "function") return;
    var slider = new window.Swiper(container, {
      slidesPerView: 1.42,
      // Loop so autoplay glides on instead of rewinding from the last card.
      loop: true,
      loopedSlides: 10,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      spaceBetween: 18,
      speed: 1000,
      threshold: 5,
      preloadImages: false,
      navigation: { prevEl: ".home-industries-prev", nextEl: ".home-industries-next" },
      pagination: { el: ".home-industries-pagination", clickable: true, dynamicBullets: true, dynamicMainBullets: 1 },
      breakpoints: {
        1023: { slidesPerView: 1.25, spaceBetween: 16 },
        767: { slidesPerView: 1.08, spaceBetween: 12 },
      },
    });

    // Pause while the pointer is over the slider so a card can be read.
    container.addEventListener("mouseenter", function () { slider.autoplay.stop(); });
    container.addEventListener("mouseleave", function () { slider.autoplay.start(); });
  }

  /* ------------------------------------------------------------------ */
  /* Contact section form                                                */
  /* ------------------------------------------------------------------ */

  var PHONE_ERROR = "Please enter a valid mobile number.";

  // Rough E.164 check used only if js/phone-field.js is unavailable.
  function fallbackPhone(input) {
    return {
      getValue: function () {
        var digits = (input.value || "").replace(/\D/g, "");
        return digits ? "+" + digits : "";
      },
      isValid: function () {
        var digits = (input.value || "").replace(/\D/g, "");
        if (digits.charAt(0) === "1") return digits.length === 11;
        return digits.length >= 8 && digits.length <= 15;
      },
      reset: function () { input.value = "+1"; },
      input: input,
    };
  }

  function initContactForm() {
    var section = document.getElementById("contact");
    var form = section && section.querySelector("form");
    if (!form) return;

    var phoneRoot = form.querySelector(".PhoneInput");
    var phoneBox = phoneRoot && phoneRoot.parentElement; // bordered wrapper
    var phoneLabel = phoneBox && phoneBox.parentElement;
    var submit = form.querySelector('button[type="submit"]');
    var submitText = submit && submit.firstChild; // text node before the icon
    var fields = ["firstName", "lastName", "email", "companyName", "message"];
    var phoneErrorEl = null;
    var statusEl = null;
    var loading = false;

    function setPhoneError(message) {
      if (!phoneBox) return;
      if (message) {
        setTokens(phoneBox, "home-set-phone-error", "home-set-phone-error-2");
        if (!phoneErrorEl) {
          phoneErrorEl = el("span", "fw-normal home-set-phone-error-label");
          phoneLabel.appendChild(phoneErrorEl);
        }
        phoneErrorEl.textContent = message;
      } else {
        setTokens(phoneBox, "home-set-phone-error-2", "home-set-phone-error");
        if (phoneErrorEl) { phoneErrorEl.remove(); phoneErrorEl = null; }
      }
    }

    var phone = null;
    function onPhoneChange() { if (phoneErrorEl) setPhoneError(""); }
    if (phoneRoot) {
      if (window.PSPhone && typeof window.PSPhone.mount === "function") {
        phone = window.PSPhone.mount(phoneRoot, { defaultCountry: "US", onChange: onPhoneChange });
      } else {
        var input = phoneRoot.querySelector("input");
        phone = fallbackPhone(input);
        input.addEventListener("input", onPhoneChange);
      }
    }

    function setStatus(type, message) {
      if (statusEl) { statusEl.remove(); statusEl = null; }
      if (!message) return;
      statusEl = el(
        "div",
        "home-set-status-box " +
          (type === "success" ? "home-set-status-box-success" : "home-set-status-box-not-success"),
        message
      );
      form.insertBefore(statusEl, form.firstChild);
    }

    function setLoading(value) {
      loading = value;
      if (!submit) return;
      submit.disabled = value;
      if (submitText) submitText.textContent = value ? "Submitting..." : "Send Message";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (loading) return;
      setStatus(null, "");

      var phoneValue = phone ? phone.getValue() : "";
      if (!phoneValue || !phone.isValid()) {
        setPhoneError(PHONE_ERROR);
        return;
      }
      setPhoneError("");
      setLoading(true);

      // Same payload shape as the React state: every text field (even if absent) plus the phone.
      var payload = {};
      fields.forEach(function (name) {
        var field = form.elements.namedItem(name);
        var max = name === "message" ? 1000 : 60;
        payload[name] = field ? String(field.value).slice(0, max) : "";
      });
      payload.mobileNumber = phoneValue;

      fetch((window.PS_API_BASE || "") + "/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          return response.json().then(function (data) {
            if (!response.ok) throw new Error(data.error || "Failed to submit request.");
          });
        })
        .then(function () {
          setStatus("success", "Thank you! Your request has been sent successfully.");
          fields.forEach(function (name) {
            var field = form.elements.namedItem(name);
            if (field) field.value = "";
          });
          if (phone) phone.reset();
        })
        .catch(function (error) {
          setStatus("error", error instanceof Error ? error.message : "Something went wrong. Please try again.");
        })
        .then(function () { setLoading(false); });
    });
  }

  function init() {
    initCoreCapabilities();
    initIndustriesSlider();
    initContactForm();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
