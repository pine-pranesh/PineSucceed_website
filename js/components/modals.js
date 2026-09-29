/*
 * "Get Free Consultation" and "Request a Proposal" buttons and their modals
 * (consultation form and the 4-step proposal form).
 * Buttons are matched by their text with one delegated click listener. Each
 * button group gets its own modal instances, so typed values survive close/reopen.
 * Requires js/components/phone-field.js (window.PSPhone) to be loaded first.
 *
 * Submissions go to (window.PS_API_BASE || "") + "/api/consultation" and "/api/proposal".
 * A successful proposal redirects to (window.PS_THANK_YOU_URL || "thank-you.html") + "?token=...".
 */
(function () {
  "use strict";

  var ASSETS = "assets/consultProposal/";

  function apiUrl(path) {
    return (window.PS_API_BASE || "") + path;
  }

  // ---------------------------------------------------------------------------
  // Option lists (lib/constants.ts)
  // ---------------------------------------------------------------------------
  var BUDGET_OPTIONS = [
    { value: "under_10k", label: "Under $10,000" },
    { value: "10k_25k", label: "$10,000 - $25,000" },
    { value: "25k_50k", label: "$25,000 - $50,000" },
    { value: "50k_100k", label: "$50,000 - $100,000" },
    { value: "above_100k", label: "$100,000+" },
    { value: "discuss", label: "Let's Discuss / TBD" },
  ];
  var SERVICE_OPTIONS = [
    { value: "custom_software_development", label: "Custom Software Development" },
    { value: "web_application_development", label: "Web Application Development" },
    { value: "mobile_app_development", label: "Mobile App Development" },
    { value: "ai_ml_development", label: "AI/ML Development" },
    { value: "generative_ai_solutions", label: "Generative AI Solutions" },
    { value: "saas_product_development", label: "SaaS Product Development" },
    { value: "erp_development", label: "ERP Development" },
    { value: "crm_development", label: "CRM Development" },
    { value: "ui_ux_design", label: "UI/UX Design" },
    { value: "cloud_migration", label: "Cloud Migration" },
    { value: "devops_services", label: "DevOps Services" },
    { value: "qa_testing", label: "QA & Testing" },
    { value: "dedicated_development_team", label: "Dedicated Development Team" },
    { value: "data_analytics_bi", label: "Data Analytics & BI" },
    { value: "blockchain_development", label: "Blockchain Development" },
    { value: "api_integration", label: "API Integration" },
    { value: "other", label: "Other" },
  ];
  var TIMELINE_OPTIONS = [
    { value: "asap", label: "Immediate (ASAP)" },
    { value: "1_3_months", label: "1–3 Months" },
    { value: "3_6_months", label: "3–6 Months" },
    { value: "flexible", label: "Flexible / Ongoing" },
  ];
  var RESOURCE_REQUIREMENT_OPTIONS = [
    { value: "1_developer", label: "1 Developer" },
    { value: "2_5_developers", label: "2–5 Developers" },
    { value: "6_10_developers", label: "6–10 Developers" },
    { value: "dedicated_team", label: "Dedicated Team" },
    { value: "not_sure_yet", label: "Not Sure Yet" },
  ];
  var PROJECT_TYPE_OPTIONS = [
    { value: "new_development", label: "New development" },
    { value: "enhancement", label: "Enhancement of existing system" },
    { value: "migration", label: "Migration project" },
    { value: "api_integration", label: "Integration project" },
    { value: "maintenance", label: "Maintenance & support" },
    { value: "mvp", label: "MVP development" },
    { value: "dedicated_team", label: "Dedicated team" },
  ];
  var SKILL_OPTIONS = [
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
    { value: "vue_js", label: "Vue.js" },
    { value: "python", label: "Python" },
    { value: "laravel", label: "Laravel" },
    { value: "php", label: "PHP" },
    { value: "dotnet", label: ".NET" },
    { value: "java", label: "Java" },
    { value: "node_js", label: "Node.js" },
    { value: "flutter", label: "Flutter" },
    { value: "react_native", label: "React Native" },
    { value: "aws", label: "AWS" },
    { value: "azure", label: "Azure" },
    { value: "openai", label: "OpenAI" },
    { value: "claude_ai", label: "Claude AI" },
    { value: "gemini_ai", label: "Gemini AI" },
    { value: "other", label: "Other" },
  ];
  var INDUSTRY_OPTIONS = [
    { value: "ecommerce_retail_b2b", label: "Ecommerce, Retail & B2B" },
    { value: "banking_finance_insurance", label: "Banking, Finance & Insurance" },
    { value: "healthcare_fitness", label: "Healthcare & Fitness" },
    { value: "charity_services", label: "Charity Services" },
    { value: "food_restaurant", label: "Food & Restaurant" },
    { value: "on_demand_solution", label: "On-Demand Solution" },
    { value: "social_networking", label: "Social Networking" },
    { value: "travel_hospitality", label: "Travel & Hospitality" },
    { value: "real_estate_property", label: "Real Estate & Property" },
    { value: "education_elearning", label: "Education & E-Learning" },
    { value: "logistics", label: "Logistics" },
    { value: "event_tickets", label: "Event & Tickets" },
    { value: "other", label: "Other" },
  ];

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  // Font Awesome icons, rendered like the static pages'
  // icons: <i class="icon fa-solid fa-NAME ..."> sized by the cls utility classes.
  function faIcon(name, cls) {
    return '<i class="icon fa-solid ' + name + " " + cls + '" aria-hidden="true"></i>';
  }
  function iconX(cls) {
    return faIcon("fa-xmark", cls);
  }
  function iconLoader(cls) {
    return faIcon("fa-circle-notch", cls);
  }
  function iconCheck(cls) {
    return faIcon("fa-check", cls);
  }
  function iconChevronDown(cls) {
    return faIcon("fa-chevron-down", cls);
  }

  function mountPhone(wrapper, onChange) {
    if (window.PSPhone && typeof window.PSPhone.mount === "function") {
      return window.PSPhone.mount(wrapper, { defaultCountry: "US", onChange: onChange });
    }
    // Minimal fallback so the form still works if phone-field.js failed to load.
    wrapper.innerHTML = '<input type="tel" autocomplete="tel" maxlength="16" class="PhoneInputInput" value="+1"/>';
    var input = wrapper.querySelector("input");
    input.addEventListener("input", function () {
      onChange(api.getValue());
    });
    var api = {
      input: input,
      getValue: function () {
        var v = "+" + input.value.replace(/\D/g, "");
        return v.length > 2 ? v : "";
      },
      isValid: function () {
        var n = api.getValue().length - 1;
        return n >= 7 && n <= 15;
      },
      reset: function () {
        input.value = "+1";
      },
    };
    return api;
  }

  function isValidPhone(value) {
    if (!value) return false;
    if (window.PSPhone && typeof window.PSPhone.isValidPhoneNumber === "function") {
      return window.PSPhone.isValidPhoneNumber(value);
    }
    var n = value.replace(/\D/g, "").length;
    return value[0] === "+" && n >= 7 && n <= 15;
  }

  // Body scroll lock used by ProposalModal (ConsultationModal does not lock scrolling).
  function lockScroll(locked) {
    document.body.style.overflow = locked ? "hidden" : "unset";
    // Pause smooth scrolling (js/components/smooth-scroll.js) while the page is locked.
    if (window.PSSmoothScroll) {
      if (locked) window.PSSmoothScroll.stop();
      else window.PSSmoothScroll.start();
    }
  }

  // ===========================================================================
  // CONSULTATION MODAL
  // ===========================================================================
  var CONSULT_EMAIL_REGEX =
    /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

  var INPUT_UNDERLINE =
    "py-2 w-100 consult-input-underline";

  function createConsultationModal() {
    var root = el(
      '<div data-modal-root="" class="p-3 d-flex position-fixed top-0 bottom-0 start-0 end-0 justify-content-center align-items-center consult-consultation-modal-row">' +
        '<div class="position-relative w-100 consult-consultation-modal-box">' +
          '<button class="p-2 position-absolute consult-consultation-modal-btn" aria-label="Close modal">' +
            iconX("consult-consultation-modal") +
          "</button>" +
          '<div class="d-flex consult-consultation-modal-stack">' +
            '<div class="d-flex flex-column consult-consultation-modal-stack-2">' +
              '<h2 class="consult-consultation-modal-title">Book a Free Consultation</h2>' +
              '<p class="mt-2 consult-consultation-modal-text">Fill out the form below and we’ll get back to you soon.</p>' +
              '<div class="overflow-hidden position-relative consult-consultation-modal-box-2">' +
                '<img alt="Consultation Team" loading="lazy" width="520" height="418" decoding="async" class="consult-consultation-modal-img" src="' + ASSETS + 'freeConsult.svg"/>' +
              "</div>" +
            "</div>" +
            '<div class="w-100 bg-white consult-consultation-modal-box-3">' +
              '<form novalidate="" class="consult-consultation-modal-form">' +
                '<div class="d-grid consult-consultation-modal-grid">' +
                  '<div class="position-relative">' +
                    '<label class="consult-consultation-modal-label">First name <span class="contact-re-end-label">*</span></label>' +
                    '<input type="text" name="firstName" maxlength="60" required="" placeholder="First name" class="' + INPUT_UNDERLINE + '" value=""/>' +
                  "</div>" +
                  '<div class="position-relative">' +
                    '<label class="consult-consultation-modal-label">Last name <span class="contact-re-end-label">*</span></label>' +
                    '<input type="text" name="lastName" maxlength="60" required="" placeholder="Last name" class="' + INPUT_UNDERLINE + '" value=""/>' +
                  "</div>" +
                "</div>" +
                '<div class="d-grid consult-consultation-modal-grid">' +
                  '<div class="position-relative" data-field="phone">' +
                    '<label class="consult-consultation-modal-label">Mobile number <span class="contact-re-end-label">*</span></label>' +
                    '<div data-phone-box="" class="py-1 consult-consultation-modal-box-4">' +
                      '<div class="custom-phone-input PhoneInput py-1"></div>' +
                    "</div>" +
                  "</div>" +
                  '<div class="position-relative" data-field="email">' +
                    '<label class="consult-consultation-modal-label">Email <span class="contact-re-end-label">*</span></label>' +
                    '<input type="email" name="email" maxlength="60" required="" placeholder="you@company.com" class="" value=""/>' +
                  "</div>" +
                "</div>" +
                '<div class="position-relative">' +
                  '<label class="consult-consultation-modal-label">Company Name</label>' +
                  '<input type="text" name="companyName" maxlength="60" placeholder="Enter your company name" class="' + INPUT_UNDERLINE + '" value=""/>' +
                "</div>" +
                '<div class="position-relative">' +
                  '<label class="consult-consultation-modal-label">Message</label>' +
                  '<textarea rows="3" name="message" maxlength="1000" placeholder="Tell us about your project..." class="w-100 mt-1 consult-consultation-modal-textarea"></textarea>' +
                "</div>" +
                '<button type="submit" class="d-flex w-100 justify-content-center align-items-center text-center text-white consult-consultation-modal-btn-2">Submit Inquiry</button>' +
              "</form>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );

    var form = root.querySelector("form");
    var fields = {
      firstName: form.querySelector('[name="firstName"]'),
      lastName: form.querySelector('[name="lastName"]'),
      email: form.querySelector('[name="email"]'),
      companyName: form.querySelector('[name="companyName"]'),
      message: form.querySelector('[name="message"]'),
    };
    var phoneField = form.querySelector('[data-field="phone"]');
    var phoneBox = form.querySelector("[data-phone-box]");
    phoneBox.removeAttribute("data-phone-box");
    var emailField = form.querySelector('[data-field="email"]');
    phoneField.removeAttribute("data-field");
    emailField.removeAttribute("data-field");
    var submitBtn = form.querySelector('button[type="submit"]');

    var state = {
      phoneValue: "",
      phoneError: "",
      emailError: "",
      loading: false,
      status: { type: null, msg: "" },
    };
    var isOpen = false;

    var phone = mountPhone(phoneBox.firstElementChild, function (val) {
      state.phoneValue = val;
      if (state.phoneError) {
        state.phoneError = "";
        render();
      }
    });

    function setErrorSpan(container, message) {
      var span = container.querySelector("span[data-error]");
      if (!message) {
        if (span) span.remove();
        return;
      }
      if (!span) {
        span = el('<span data-error="" class="d-block mt-1 consult-set-error-span-label"></span>');
        container.appendChild(span);
      }
      span.textContent = message;
    }

    function render() {
      phoneBox.className =
        "consult " + (state.phoneError ? "consult-phone-error" : "consult-not-phone-error") + " py-1 consult-2";
      setErrorSpan(phoneField, state.phoneError);

      fields.email.className =
        "py-2 w-100 consult-3 " +
        (state.emailError ? "consult-email-error" : "consult-not-email-error");
      setErrorSpan(emailField, state.emailError);

      var box = form.querySelector("div[data-status]");
      if (state.status.msg) {
        if (!box) {
          box = el('<div data-status=""></div>');
          form.insertBefore(box, form.firstChild);
        }
        box.className =
          "consult-4 " +
          (state.status.type === "success"
            ? "consult-success"
            : "consult-not-success");
        box.textContent = state.status.msg;
      } else if (box) {
        box.remove();
      }

      submitBtn.disabled = state.loading;
      submitBtn.innerHTML = state.loading ? iconLoader("consult-5") + " Submitting..." : "Submit Inquiry";
    }

    // Same character limits as handleChange(): 2000 for the message, 60 for the rest.
    Object.keys(fields).forEach(function (name) {
      fields[name].addEventListener("input", function () {
        var max = name === "message" ? 2000 : 60;
        if (fields[name].value.length > max) fields[name].value = fields[name].value.slice(0, max);
        if (name === "email" && state.emailError) {
          state.emailError = "";
          render();
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      submit();
    });

    function submit() {
      state.status = { type: null, msg: "" };

      if (!fields.firstName.value.trim() || !fields.lastName.value.trim()) {
        state.status = { type: "error", msg: "Please enter your first and last name." };
        render();
        return;
      }
      if (!CONSULT_EMAIL_REGEX.test(fields.email.value.trim())) {
        state.emailError = "Please enter a valid email address.";
        render();
        return;
      }
      state.emailError = "";

      var phoneValue = phone.getValue();
      if (!phoneValue || !isValidPhone(phoneValue)) {
        state.phoneError = "Please enter a valid mobile number.";
        render();
        return;
      }
      state.phoneError = "";
      state.loading = true;
      render();

      fetch(apiUrl("/api/consultation"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fields.firstName.value,
          lastName: fields.lastName.value,
          email: fields.email.value,
          mobileNumber: phoneValue,
          companyName: fields.companyName.value,
          message: fields.message.value,
        }),
      })
        .then(function (response) {
          return response.json().then(function (data) {
            if (!response.ok) throw new Error(data.error || "Failed to submit request.");
            return data;
          });
        })
        .then(function () {
          state.status = { type: "success", msg: "Thank you! Your request has been sent successfully." };
          Object.keys(fields).forEach(function (name) {
            fields[name].value = "";
          });
          phone.reset();
          state.phoneValue = "";
          setTimeout(function () {
            close();
            state.status = { type: null, msg: "" };
            render();
          }, 2000);
        })
        .catch(function (err) {
          state.status = { type: "error", msg: (err && err.message) || "Something went wrong. Please try again." };
        })
        .then(function () {
          state.loading = false;
          render();
        });
    }

    // Close on backdrop click (only when the click lands on the backdrop itself) or the X button.
    root.addEventListener("click", function (e) {
      if (e.target === root) close();
    });
    root.querySelector('[aria-label="Close modal"]').addEventListener("click", close);

    function open() {
      if (isOpen) return;
      isOpen = true;
      // Let the wheel scroll the modal itself instead of the page.
      root.setAttribute("data-lenis-prevent", "");
      document.body.appendChild(root);
    }
    function close() {
      if (!isOpen) return;
      isOpen = false;
      root.remove();
    }

    render();
    return { open: open, close: close, element: root };
  }

  // ===========================================================================
  // PROPOSAL MODAL
  // ===========================================================================
  var openSelects = [];
  document.addEventListener("mousedown", function (e) {
    openSelects.slice().forEach(function (s) {
      if (!s.container.contains(e.target)) s.setOpen(false);
    });
  });

  /**
   * CustomSelect / CustomMultiSelect from ProposalModal.tsx.
   * opts: { label, required, placeholder, options, multi, get(), onPick(value), hasError() }
   */
  function createSelect(opts) {
    var container = el(
      '<div class="position-relative proposal-select-box">' +
        '<label class="d-block proposal-select-label">' + esc(opts.label) + " " +
          (opts.required ? '<span class="proposal-select-label-required">*</span>' : "") +
        "</label>" +
        "<div></div>" +
      "</div>"
    );
    var trigger = container.lastElementChild;
    var popup = null;
    var isOpenList = false;
    var self = { container: container, setOpen: setOpen, update: update };

    function selectedValues() {
      var v = opts.get();
      return opts.multi ? v : v ? [v] : [];
    }

    function setOpen(next) {
      if (next === isOpenList) return;
      isOpenList = next;
      var i = openSelects.indexOf(self);
      if (next && i < 0) openSelects.push(self);
      if (!next && i >= 0) openSelects.splice(i, 1);
      renderPopup();
    }

    function renderTrigger() {
      trigger.className =
        "py-2 d-flex justify-content-between align-items-center proposal-trigger " +
        (opts.hasError && opts.hasError() ? "consult-phone-error" : "proposal-trigger-not-has-error");
      var values = selectedValues();
      var inner;
      if (opts.multi) {
        inner = values.length
          ? values
              .map(function (val) {
                var opt = findOption(val);
                return (
                  '<span class="rounded px-2 d-inline-flex align-items-center proposal-trigger-label">' +
                  esc(opt ? opt.label : val) +
                  '<button type="button" data-remove="' + esc(val) + '" class="fw-bold proposal-trigger-2">×</button>' +
                  "</span>"
                );
              })
              .join("")
          : '<span class="proposal-trigger-label-not-length">' + esc(opts.placeholder) + "</span>";
        inner = '<div class="d-flex flex-wrap align-items-center proposal-trigger-row">' + inner + "</div>";
      } else {
        var sel = values.length ? findOption(values[0]) : null;
        inner = sel
          ? '<span class=" px-2 proposal-trigger-label-sel ">' + esc(sel.label) + "</span>"
          : '<span class="proposal-trigger-label-not-length">' + esc(opts.placeholder) + "</span>";
        inner = '<div class="d-flex flex-wrap align-items-center proposal-trigger-row-2">' + inner + "</div>";
      }
      // Only touch the DOM when the content really changed; replacing nodes between
      // mousedown and mouseup would swallow the click (React keeps the nodes too).
      var html = inner + iconChevronDown("flex-shrink-0 proposal-trigger-3");
      if (html !== lastTriggerHtml) {
        lastTriggerHtml = html;
        trigger.innerHTML = html;
      }
    }
    var lastTriggerHtml = "";

    function renderPopup() {
      if (!isOpenList) {
        if (popup) popup.remove();
        popup = null;
        return;
      }
      var values = selectedValues();
      var html = opts.options
        .map(function (opt) {
          var selected = values.indexOf(opt.value) >= 0;
          return (
            '<div data-value="' + esc(opt.value) + '" class="py-2 d-flex justify-content-between align-items-center proposal-popup ' +
            (selected ? "proposal-popup-selected" : "proposal-popup-not-selected") +
            '"><span>' + esc(opt.label) + "</span>" +
            (selected ? iconCheck("proposal-popup-2") : "") +
            "</div>"
          );
        })
        .join("");
      if (!popup) {
        popup = el(
          '<div class="position-absolute top-100 start-0 mt-1 proposal-popup-box ' +
            (opts.multi ? "proposal-popup-multi" : "proposal-popup-not-multi") +
            ' w-100 bg-white proposal-popup-3"></div>'
        );
        popup.addEventListener("click", function (e) {
          var row = e.target.closest("[data-value]");
          if (!row) return;
          e.stopPropagation();
          opts.onPick(row.getAttribute("data-value"));
          if (!opts.multi) setOpen(false);
        });
        container.appendChild(popup);
      }
      // Keep the list's scroll position while re-rendering the rows.
      var scroll = popup.scrollTop;
      popup.innerHTML = html;
      popup.scrollTop = scroll;
    }

    function findOption(val) {
      for (var i = 0; i < opts.options.length; i++) if (opts.options[i].value === val) return opts.options[i];
      return null;
    }

    trigger.addEventListener("click", function (e) {
      var remove = e.target.closest("[data-remove]");
      if (remove) {
        e.stopPropagation();
        opts.onPick(remove.getAttribute("data-remove"));
        return;
      }
      setOpen(!isOpenList);
    });

    function update() {
      renderTrigger();
      if (isOpenList) renderPopup();
    }

    renderTrigger();
    return self;
  }

  function initialProposalData() {
    return {
      fullName: "",
      businessEmail: "",
      phoneNumber: "",
      companyName: "",
      jobTitle: "",
      projectTitle: "",
      projectDescription: "",
      serviceRequired: [],
      projectType: [],
      industrySector: "",
      referenceLink: "",
      file: null,
      budgetRange: "",
      projectTimeline: "",
      businessProblem: "",
      resourceRequirement: "",
      requiredSkills: [],
      hearAboutUs: "",
      communicationMethod: "",
      contactConsent: false,
      privacyConsent: false,
    };
  }

  function validateName(name) {
    return /^[a-zA-Z\s'-]{2,}$/.test(name.trim());
  }
  function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
  }
  function validateUrl(url) {
    if (!url.trim()) return true;
    try {
      var parsed = new URL(url.indexOf("http") === 0 ? url : "https://" + url);
      return parsed.hostname.indexOf(".") >= 0;
    } catch (e) {
      return false;
    }
  }

  var STEPS = [
    { id: 1, title: "Contact us" },
    { id: 2, title: "Overview" },
    { id: 3, title: "Requirements" },
    { id: 4, title: "Budget" },
  ];

  var LABEL = "d-block proposal-select-label";
  var REQ = ' <span class="proposal-select-label-required">*</span>';

  function createProposalModal() {
    var root = el(
      '<div data-modal-root="" class="d-flex position-fixed top-0 bottom-0 start-0 end-0 justify-content-center align-items-center proposal-modal-row">' +
        '<div class="position-fixed top-0 bottom-0 start-0 end-0 proposal-modal-box" aria-hidden="true"></div>' +
        '<div class="py-4 position-relative w-100 bg-white proposal-modal-box-2">' +
          '<div class="d-flex justify-content-between align-items-center mb-2"></div>' +
          '<div class="text-center proposal-modal-box-3">' +
            '<h2 class="text-uppercase proposal-modal-title">Request A Proposal</h2>' +
            '<p class="fw-normal proposal-modal-text">Transform your idea into a powerful digital solution</p>' +
          "</div>" +
          '<div class="proposal-modal-box-4"><div class="d-flex justify-content-between align-items-center"></div></div>' +
          "<form>" +
            "<div></div>" +
            '<div class="d-flex justify-content-between align-items-center pt-2 proposal-modal-row-2">' +
              '<span class="proposal-modal-label"></span>' +
              "<button></button>" +
            "</div>" +
          "</form>" +
        "</div>" +
      "</div>"
    );

    var backdrop = root.firstElementChild;
    var card = root.children[1];
    var headerNav = card.children[0];
    var stepper = card.children[2].firstElementChild;
    var form = card.querySelector("form");
    var stepHolder = form.firstElementChild;
    var footer = form.lastElementChild;
    var stepLabel = footer.firstElementChild;
    var actionBtn = footer.lastElementChild;

    var formData = initialProposalData();
    var touched = {};
    var step = 1;
    var isSubmitting = false;
    var fileError = null;
    var isOpen = false;

    var stepBodies = {}; // step -> { node, update() }

    function isStepValid() {
      switch (step) {
        case 1:
          return (
            validateName(formData.fullName) &&
            validateEmail(formData.businessEmail) &&
            formData.phoneNumber.trim().length > 0 &&
            isValidPhone(formData.phoneNumber)
          );
        case 2:
          return (
            formData.projectTitle.trim().length > 0 &&
            formData.projectDescription.trim().length > 0 &&
            formData.serviceRequired.length > 0
          );
        case 3:
          return (
            formData.projectType.length > 0 &&
            formData.industrySector.trim().length > 0 &&
            validateUrl(formData.referenceLink) &&
            !fileError
          );
        case 4:
          return (
            formData.budgetRange.trim().length > 0 &&
            formData.projectTimeline.trim().length > 0 &&
            formData.contactConsent &&
            formData.privacyConsent
          );
        default:
          return false;
      }
    }

    function toggleArrayOption(field, val) {
      var list = formData[field];
      formData[field] = list.indexOf(val) >= 0
        ? list.filter(function (item) {
            return item !== val;
          })
        : list.concat([val]);
      refresh();
    }

    // handleInputChange(): 1000 chars for the two long texts, 60 for everything else.
    function bindText(input, name, onBlurField) {
      input.value = formData[name];
      input.addEventListener("input", function () {
        var max = name === "projectDescription" || name === "businessProblem" ? 1000 : 60;
        if (input.value.length > max) input.value = input.value.slice(0, max);
        formData[name] = input.value;
        refresh();
      });
      if (onBlurField) {
        input.addEventListener("blur", function () {
          touched[onBlurField] = true;
          refresh();
        });
      }
    }

    function setErrorP(container, message) {
      var p = container.querySelector("p[data-error]");
      if (!message) {
        if (p) p.remove();
        return;
      }
      if (!p) {
        p = el('<p data-error="" class="pt-1 proposal-set-error-p-text"></p>');
        container.appendChild(p);
      }
      p.textContent = message;
    }

    // ---- Step 1: contact ---------------------------------------------------
    function buildStep1() {
      var node = el(
        '<div class="proposal-step1-box">' +
          '<div class="d-grid proposal-step1-grid">' +
            '<div class="proposal-step1-box-2">' +
              '<label class="' + LABEL + '">Full name' + REQ + "</label>" +
              '<input type="text" name="fullName" maxlength="60" placeholder="John Doe"/>' +
            "</div>" +
            '<div class="proposal-step1-box-2">' +
              '<label class="' + LABEL + '">Business Email' + REQ + "</label>" +
              '<input type="email" name="businessEmail" maxlength="60" placeholder="john@company.com"/>' +
            "</div>" +
          "</div>" +
          '<div class="d-grid proposal-step1-grid">' +
            '<div class="proposal-step1-box-2">' +
              '<label class="' + LABEL + '">Phone Number' + REQ + "</label>" +
              '<div><div class="custom-phone-input PhoneInput py-1"></div></div>' +
            "</div>" +
            '<div class="proposal-step1-box-2">' +
              '<label class="' + LABEL + '">Company Name' + REQ + "</label>" +
              '<input type="text" name="companyName" maxlength="60" placeholder="Company Name" class="w-100 proposal-step1-input"/>' +
            "</div>" +
          "</div>" +
          '<div class="proposal-step1-box-2">' +
            '<label class="' + LABEL + '">Job Title / Designation' + REQ + "</label>" +
            '<input type="text" name="jobTitle" maxlength="60" placeholder="Product Manager" class="py-2 w-100 proposal-step1-input-2"/>' +
          "</div>" +
        "</div>"
      );
      var fullName = node.querySelector('[name="fullName"]');
      var email = node.querySelector('[name="businessEmail"]');
      var phoneBox = node.querySelector(".PhoneInput").parentElement;
      bindText(fullName, "fullName", "fullName");
      bindText(email, "businessEmail", "businessEmail");
      bindText(node.querySelector('[name="companyName"]'), "companyName");
      bindText(node.querySelector('[name="jobTitle"]'), "jobTitle");

      var phone = mountPhone(phoneBox.firstElementChild, function (val) {
        formData.phoneNumber = val || "";
        refresh();
      });
      phone.input.addEventListener("blur", function () {
        touched.phoneNumber = true;
        refresh();
      });

      function update() {
        var nameBad = touched.fullName && !validateName(formData.fullName);
        fullName.className =
          "w-100 proposal-update " +
          (nameBad ? "consult-phone-error" : "proposal-update-not-name-bad");
        setErrorP(
          fullName.parentElement,
          nameBad
            ? !formData.fullName.trim()
              ? "Full name is required."
              : "Please enter a valid name (only letters, spaces, hyphens, and apostrophes allowed, min 2 characters)."
            : ""
        );

        var emailBad = touched.businessEmail && !validateEmail(formData.businessEmail);
        email.className =
          "w-100 proposal-update " +
          (emailBad ? "consult-phone-error" : "proposal-update-not-name-bad");
        setErrorP(email.parentElement, emailBad ? "Valid email is required." : "");

        var phoneBad = touched.phoneNumber && (!formData.phoneNumber || !isValidPhone(formData.phoneNumber));
        phoneBox.className =
          "py-2 proposal-update-2 " +
          (phoneBad ? "consult-phone-error" : "proposal-update-not-phone-bad");
        setErrorP(phoneBox.parentElement, phoneBad ? "Please enter a valid mobile number." : "");
      }
      return { node: node, update: update };
    }

    // ---- Step 2: overview --------------------------------------------------
    function buildStep2() {
      var node = el(
        '<div class="proposal-step1-box">' +
          '<div class="proposal-step1-box-2">' +
            '<label class="' + LABEL + '">Project Title' + REQ + "</label>" +
            '<input type="text" name="projectTitle" maxlength="60" placeholder="Enter project title"/>' +
          "</div>" +
          '<div class="proposal-step1-box-2">' +
            '<label class="' + LABEL + '">Project Description' + REQ + "</label>" +
            '<textarea name="projectDescription" rows="2" maxlength="1000" placeholder="Briefly describe your project requirements..."></textarea>' +
          "</div>" +
        "</div>"
      );
      var title = node.querySelector('[name="projectTitle"]');
      var desc = node.querySelector('[name="projectDescription"]');
      bindText(title, "projectTitle", "projectTitle");
      bindText(desc, "projectDescription", "projectDescription");
      var services = createSelect({
        label: "Service Required",
        required: true,
        placeholder: "Select services...",
        options: SERVICE_OPTIONS,
        multi: true,
        get: function () {
          return formData.serviceRequired;
        },
        onPick: function (val) {
          toggleArrayOption("serviceRequired", val);
        },
        hasError: function () {
          return !!touched.serviceRequired && formData.serviceRequired.length === 0;
        },
      });
      node.appendChild(services.container);

      function update() {
        title.className =
          "py-2 w-100 proposal-update-3 " +
          (touched.projectTitle && !formData.projectTitle.trim() ? "consult-phone-error" : "proposal-update-not-name-bad");
        desc.className =
          "py-2 w-100 proposal-update-4 " +
          (touched.projectDescription && !formData.projectDescription.trim() ? "consult-phone-error" : "proposal-update-not-name-bad");
        services.update();
      }
      return { node: node, update: update, selects: [services] };
    }

    // ---- Step 3: requirements ----------------------------------------------
    function buildStep3() {
      var node = el(
        '<div class="proposal-step1-box">' +
          '<div class="d-grid proposal-step1-grid">' +
            '<div class="proposal-step1-box-2">' +
              '<label class="' + LABEL + '">Reference Link <span class="fw-normal proposal-step3-label">(Optional)</span></label>' +
              '<input type="url" name="referenceLink" maxlength="100" placeholder="https://example.com"/>' +
            "</div>" +
          "</div>" +
          '<div class="proposal-step1-box-2">' +
            '<label class="' + LABEL + '">Upload Project Brief / RFP <span class="fw-normal proposal-step3-label">(PDF, DOC, Images, Videos - Max 5MB)</span></label>' +
            "<div data-file-slot></div>" +
          "</div>" +
        "</div>"
      );
      var projectType = createSelect({
        label: "Project type",
        required: true,
        placeholder: "Select project types...",
        options: PROJECT_TYPE_OPTIONS,
        multi: true,
        get: function () {
          return formData.projectType;
        },
        onPick: function (val) {
          toggleArrayOption("projectType", val);
        },
      });
      var industry = createSelect({
        label: "Industry Sector",
        required: true,
        placeholder: "Select industry...",
        options: INDUSTRY_OPTIONS,
        get: function () {
          return formData.industrySector;
        },
        onPick: function (val) {
          formData.industrySector = val;
          refresh();
        },
      });
      node.insertBefore(projectType.container, node.firstChild);
      var grid = node.children[1];
      grid.insertBefore(industry.container, grid.firstChild);

      var link = node.querySelector('[name="referenceLink"]');
      bindText(link, "referenceLink", "referenceLink");

      var uploadBlock = node.children[2];
      var slot = uploadBlock.querySelector("[data-file-slot]");
      var fileInput = null;

      function renderFileSlot() {
        var content;
        if (formData.file) {
          content = el(
            '<div class="py-2 d-flex justify-content-between align-items-center proposal-file-slot-row">' +
              '<span class="overflow-hidden text-nowrap proposal-file-slot-label">📄 ' + esc(formData.file.name) + "</span>" +
              '<button type="button" class="p-1 proposal-file-slot-btn" title="Remove file">' +
                iconX("proposal-file-slot") +
              "</button>" +
            "</div>"
          );
          content.querySelector("button").addEventListener("click", function () {
            formData.file = null;
            fileError = null;
            renderFileSlot();
            refresh();
          });
          fileInput = null;
        } else {
          content = el(
            '<input type="file" accept=".pdf,.doc,.docx,image/*,video/*" class="py-2 w-100 proposal-file-slot-input"/>'
          );
          fileInput = content;
          content.addEventListener("change", onFileChange);
        }
        slot.replaceWith(content);
        slot = content;
      }

      // Enforces the <5MB limit and PDF/DOC/DOCX/image/video types, like handleFileChange().
      function onFileChange(e) {
        var input = e.target;
        var selected = input.files && input.files[0] ? input.files[0] : null;
        fileError = null;
        if (!selected) {
          formData.file = null;
          refresh();
          return;
        }
        var allowedDocs = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        var isImage = selected.type.indexOf("image/") === 0;
        var isVideo = selected.type.indexOf("video/") === 0;
        var isDoc = allowedDocs.indexOf(selected.type) >= 0;
        if (!isImage && !isVideo && !isDoc) {
          fileError = "Only PDF, DOC, DOCX, Image, and Video files are allowed.";
          input.value = "";
          formData.file = null;
          refresh();
          return;
        }
        if (selected.size > 5 * 1024 * 1024) {
          fileError = "File size must not exceed 5MB.";
          input.value = "";
          formData.file = null;
          refresh();
          return;
        }
        formData.file = selected;
        renderFileSlot();
        refresh();
      }

      renderFileSlot();

      function update() {
        var linkBad = touched.referenceLink && !validateUrl(formData.referenceLink);
        link.className =
          "py-2 w-100 proposal-update-3 " +
          (linkBad ? "consult-phone-error" : "proposal-update-not-name-bad");
        setErrorP(link.parentElement, linkBad ? "Please enter a valid URL (e.g. https://example.com)." : "");
        setErrorP(uploadBlock, fileError || "");
        projectType.update();
        industry.update();
      }
      return {
        node: node,
        update: update,
        selects: [projectType, industry],
        reset: function () {
          if (fileInput) fileInput.value = "";
        },
      };
    }

    // ---- Step 4: budget & final --------------------------------------------
    function buildStep4() {
      var node = el(
        '<div class="proposal-step4-box">' +
          '<div class="d-grid consult-consultation-modal-grid"></div>' +
          '<div class="proposal-step1-box-2">' +
            '<label class="' + LABEL + '">Business Problem You Want to Solve (If any)</label>' +
            '<textarea name="businessProblem" rows="2" maxlength="1000" placeholder="What pain point should this solution resolve?" class="w-100 proposal-step4-textarea"></textarea>' +
          "</div>" +
          '<div class="d-grid consult-consultation-modal-grid"></div>' +
          '<div class="pt-2 proposal-step4-box-2">' +
            '<label class="d-flex align-items-center proposal-step4-label">' +
              '<input type="checkbox" name="contactConsent" class="rounded proposal-step4-input"/>' +
              'I agree to be contacted regarding my inquiry <span class="proposal-select-label-required">*</span>' +
            "</label>" +
            '<label class="d-flex align-items-center proposal-step4-label">' +
              '<input type="checkbox" name="privacyConsent" class="rounded proposal-step4-input"/>' +
              'I agree to the Privacy Policy <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" class="proposal-step4-link">Click here</a> <span class="proposal-select-label-required">*</span>' +
            "</label>" +
          "</div>" +
        "</div>"
      );
      function single(label, required, placeholder, options, key) {
        return createSelect({
          label: label,
          required: required,
          placeholder: placeholder,
          options: options,
          get: function () {
            return formData[key];
          },
          onPick: function (val) {
            formData[key] = val;
            refresh();
          },
        });
      }
      var budget = single("Budget Range (USD)", true, "Select budget range...", BUDGET_OPTIONS, "budgetRange");
      var timeline = single("Project Timeline", true, "Select timeline...", TIMELINE_OPTIONS, "projectTimeline");
      var resource = single("Resource Requirement", false, "Select resource requirement...", RESOURCE_REQUIREMENT_OPTIONS, "resourceRequirement");
      var skills = createSelect({
        label: "Required skills",
        placeholder: "Select required skills...",
        options: SKILL_OPTIONS,
        multi: true,
        get: function () {
          return formData.requiredSkills;
        },
        onPick: function (val) {
          toggleArrayOption("requiredSkills", val);
        },
      });
      node.children[0].appendChild(budget.container);
      node.children[0].appendChild(timeline.container);
      node.children[2].appendChild(resource.container);
      node.children[2].appendChild(skills.container);

      bindText(node.querySelector('[name="businessProblem"]'), "businessProblem");
      ["contactConsent", "privacyConsent"].forEach(function (name) {
        var box = node.querySelector('[name="' + name + '"]');
        box.checked = formData[name];
        box.addEventListener("change", function () {
          formData[name] = box.checked;
          refresh();
        });
      });

      function update() {
        budget.update();
        timeline.update();
        resource.update();
        skills.update();
      }
      return { node: node, update: update, selects: [budget, timeline, resource, skills] };
    }

    var BUILDERS = { 1: buildStep1, 2: buildStep2, 3: buildStep3, 4: buildStep4 };

    function closeAllSelects() {
      Object.keys(stepBodies).forEach(function (k) {
        (stepBodies[k].selects || []).forEach(function (s) {
          s.setOpen(false);
        });
      });
    }

    function renderHeader() {
      headerNav.innerHTML =
        (step > 1
          ? '<button type="button" class="d-flex justify-content-center align-items-center proposal-header-btn-step" aria-label="Back">' +
            '<img alt="Back" width="36" height="36" decoding="async" class="proposal-header-img-step" src="' + ASSETS + 'BackAction.svg"/>Back</button>'
          : "") +
        '<button type="button" class="d-flex justify-content-center align-items-center proposal-header-btn" aria-label="Close modal">' +
        '<img alt="close" width="36" height="36" decoding="async" class="proposal-header-img-step" src="' + ASSETS + 'CloseAction.svg"/></button>';
    }

    function renderStepper() {
      stepper.innerHTML = STEPS.map(function (s, idx) {
        var isActive = step === s.id;
        var isCompleted = step > s.id;
        var subText = "Pending";
        if (isActive) subText = "Active Step";
        else if (step + 1 === s.id) subText = "Next up";
        else if (isCompleted) subText = "Completed";
        return (
          '<div data-step="' + s.id + '" class="proposal-stepper ' + (s.id < step ? "proposal-stepper-step" : "") + '">' +
            '<div class="flex-shrink-0 justify-content-center proposal-stepper-row ' +
              (isActive
                ? "proposal-stepper-active"
                : isCompleted
                  ? "proposal-stepper-completed"
                  : "proposal-stepper-not-completed") +
            '">' + s.id + "</div>" +
            '<div class="home-core-capabilities-br">' +
              '<p class="proposal-stepper-text ' +
                (isActive ? "proposal-stepper-active-2" : isCompleted ? "proposal-stepper-completed-2" : "proposal-stepper-not-completed-2") +
              '">' + s.title + "</p>" +
              '<span class="proposal-stepper-label ' +
                (isActive ? "proposal-select-label-required" : isCompleted ? "proposal-stepper-completed-3" : "proposal-stepper-not-completed-3") +
              '">' + subText + "</span>" +
            "</div>" +
          "</div>" +
          (idx < STEPS.length - 1
            ? '<div class="proposal-stepper-box-length"><div class="proposal-stepper-box-length-2 ' + (step > s.id ? "proposal-stepper-id" : "proposal-stepper-not-id") + '"></div></div>'
            : "")
        );
      }).join("");
    }

    var lastActionKey = "";
    function renderFooter() {
      stepLabel.textContent = "Step " + step + " of 4";
      var valid = isStepValid();
      var key = step < 4 ? "next" : isSubmitting ? "submitting" : "submit";
      if (key !== lastActionKey) {
        lastActionKey = key;
        if (step < 4) {
          actionBtn.type = "button";
          actionBtn.className =
            "text-white proposal-footer";
          actionBtn.innerHTML = "Next";
        } else {
          actionBtn.type = "submit";
          actionBtn.className =
            "d-flex justify-content-center align-items-center text-white proposal-footer-2";
          actionBtn.innerHTML = isSubmitting
            ? iconLoader("text-white proposal-footer-3") + "<span>Submitting...</span>"
            : "Submit Request";
        }
      }
      actionBtn.disabled = step < 4 ? !valid : !valid || isSubmitting;
    }

    function refresh() {
      var body = stepBodies[step];
      if (body) body.update();
      renderFooter();
    }

    function showStep(next) {
      closeAllSelects();
      step = next;
      if (!stepBodies[step]) stepBodies[step] = BUILDERS[step]();
      stepHolder.replaceWith(stepBodies[step].node);
      stepHolder = stepBodies[step].node;
      renderHeader();
      renderStepper();
      refresh();
    }

    function resetForm() {
      closeAllSelects();
      Object.keys(stepBodies).forEach(function (k) {
        if (stepBodies[k].reset) stepBodies[k].reset();
      });
      formData = initialProposalData();
      touched = {};
      fileError = null;
      stepBodies = {};
      var placeholder = document.createElement("div");
      stepHolder.replaceWith(placeholder);
      stepHolder = placeholder;
      showStep(1);
    }

    function handleSubmit(e) {
      if (e) e.preventDefault();
      if (step !== 4 || !isStepValid() || isSubmitting) return;
      isSubmitting = true;
      renderFooter();

      // JSON.stringify(File) is "{}", which is what the React version sent for an attached file.
      var payload = {};
      Object.keys(formData).forEach(function (k) {
        payload[k] = k === "file" ? (formData.file ? {} : null) : formData[k];
      });

      fetch(apiUrl("/api/proposal"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          return response.json().then(function (data) {
            if (response.ok && data.token) {
              resetForm();
              isSubmitting = false;
              window.location.href = (window.PS_THANK_YOU_URL || "thank-you.html") + "?token=" + encodeURIComponent(data.token);
              close();
            } else {
              alert(data.message || "Failed to submit proposal. Please try again.");
              isSubmitting = false;
              renderFooter();
            }
          });
        })
        .catch(function (err) {
          console.error("Submission error:", err);
          alert("An error occurred. Please try again.");
          isSubmitting = false;
          renderFooter();
        });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
    actionBtn.addEventListener("click", function (e) {
      if (step < 4) {
        if (isStepValid()) showStep(step + 1);
        return;
      }
      handleSubmit(e);
    });
    headerNav.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      if (btn.getAttribute("aria-label") === "Back") {
        if (step > 1) showStep(step - 1);
        else close();
      } else {
        close();
      }
    });
    stepper.addEventListener("click", function (e) {
      var item = e.target.closest("[data-step]");
      if (!item) return;
      var id = Number(item.getAttribute("data-step"));
      if (id < step) showStep(id);
    });
    backdrop.addEventListener("click", close);

    function onKeyDown(e) {
      if (e.key === "Escape") close();
    }

    function open() {
      if (isOpen) return;
      isOpen = true;
      // Let the wheel scroll the modal itself instead of the page.
      root.setAttribute("data-lenis-prevent", "");
      document.body.appendChild(root);
      lockScroll(true);
      window.addEventListener("keydown", onKeyDown);
    }
    function close() {
      if (!isOpen) return;
      isOpen = false;
      closeAllSelects();
      root.remove();
      lockScroll(false);
      window.removeEventListener("keydown", onKeyDown);
    }

    showStep(1);
    return { open: open, close: close, element: root };
  }

  // ===========================================================================
  // TRIGGERS
  // ===========================================================================
  var groups = typeof WeakMap === "function" ? new WeakMap() : null;
  var fallbackGroup = null;

  /** One pair of modal instances per button group, like one CTAButtons/HomeHero state. */
  function modalsFor(button) {
    var key = button.parentElement || document.body;
    var entry = groups ? groups.get(key) : fallbackGroup;
    if (!entry) {
      entry = { consultation: null, proposal: null };
      if (groups) groups.set(key, entry);
      else fallbackGroup = entry;
    }
    return entry;
  }

  function norm(text) {
    return (text || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function openConsultation(button) {
    var entry = button ? modalsFor(button) : shared;
    if (!entry.consultation) entry.consultation = createConsultationModal();
    entry.consultation.open();
  }
  function openProposal(button) {
    var entry = button ? modalsFor(button) : shared;
    if (!entry.proposal) entry.proposal = createProposalModal();
    entry.proposal.open();
  }
  var shared = { consultation: null, proposal: null };

  document.addEventListener("click", function (e) {
    var button = e.target && e.target.closest ? e.target.closest("button") : null;
    if (!button || button.closest("[data-modal-root]")) return;
    var text = norm(button.textContent);
    if (text === "get free consultation") openConsultation(button);
    else if (text === "request a proposal") openProposal(button);
  });

  window.PSModals = {
    openConsultation: function () {
      openConsultation(null);
    },
    openProposal: function () {
      openProposal(null);
    },
  };
})();
