/*
 * Contact page: topic shortcuts, form validation and submission.
 */
(function () {
  "use strict";

  var FIELDS = ["firstName", "lastName", "email", "phone", "companyName", "areaOfInterest", "message"];
  var GENERIC_ERROR = "Something went wrong. Please try again.";

  function init() {
    var form = document.querySelector(".contact-form");
    if (!form) return;

    var interest = form.elements.namedItem("areaOfInterest");
    var status = form.querySelector(".contact-status");
    var submit = form.querySelector(".contact-submit");
    var submitLabel = submit.querySelector("span");
    var topics = Array.prototype.slice.call(document.querySelectorAll(".contact-topic"));

    // "How can we help?" shortcuts preselect the area of interest.
    function markTopic(value) {
      topics.forEach(function (topic) {
        topic.setAttribute("aria-pressed", topic.getAttribute("data-interest") === value ? "true" : "false");
      });
    }
    topics.forEach(function (topic) {
      topic.setAttribute("aria-pressed", "false");
      topic.addEventListener("click", function () {
        interest.value = topic.getAttribute("data-interest");
        markTopic(interest.value);
        form.elements.namedItem("firstName").focus();
      });
    });
    interest.addEventListener("change", function () {
      markTopic(interest.value);
    });

    function setStatus(type, message) {
      status.hidden = !message;
      status.textContent = message || "";
      if (type) status.setAttribute("data-type", type);
      else status.removeAttribute("data-type");
    }

    function setLoading(loading) {
      submit.disabled = loading;
      submitLabel.textContent = loading ? "Sending..." : "Send message";
    }

    // Mark invalid fields and clear the mark as soon as the user edits them.
    form.addEventListener("input", function (e) {
      if (e.target.getAttribute("aria-invalid") === "true" && e.target.checkValidity()) {
        e.target.removeAttribute("aria-invalid");
      }
    });

    function validate() {
      var firstInvalid = null;
      Array.prototype.forEach.call(form.elements, function (field) {
        if (!field.willValidate) return;
        var value = typeof field.value === "string" ? field.value.trim() : field.value;
        var valid = field.checkValidity() && !(field.required && field.type !== "checkbox" && !value);
        if (valid) field.removeAttribute("aria-invalid");
        else {
          field.setAttribute("aria-invalid", "true");
          if (!firstInvalid) firstInvalid = field;
        }
      });
      var phone = form.elements.namedItem("phone");
      var digits = phone.value.replace(/\D/g, "");
      if (phone.value.trim() && (digits.length < 7 || digits.length > 15)) {
        phone.setAttribute("aria-invalid", "true");
        if (!firstInvalid) firstInvalid = phone;
      }
      if (firstInvalid) firstInvalid.focus();
      return !firstInvalid;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (submit.disabled) return;
      setStatus(null, "");
      if (!validate()) {
        setStatus("error", "Please complete the required fields.");
        return;
      }
      setLoading(true);

      var payload = {};
      FIELDS.forEach(function (name) {
        payload[name] = String(form.elements.namedItem(name).value).trim();
      });

      fetch((window.PS_API_BASE || "") + "/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          // A static host can answer with an HTML error page, so JSON is optional.
          return response.json().catch(function () { return {}; }).then(function (data) {
            if (!response.ok) {
              var err = new Error(data.error || GENERIC_ERROR);
              err.fromServer = true;
              throw err;
            }
          });
        })
        .then(function () {
          form.reset();
          markTopic("");
          setStatus("success", "Thank you! Your message has been sent. We will be in touch soon.");
        })
        .catch(function (error) {
          // Network failures surface as TypeError; show the generic text for those.
          setStatus("error", error && error.fromServer ? error.message : GENERIC_ERROR);
        })
        .then(function () {
          setLoading(false);
        });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
