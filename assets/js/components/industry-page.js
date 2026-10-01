/*
 * Industry page interactions (Retail & eCommerce, Healthcare).
 * Both pages share the same layout; each page script passes its own content:
 *   1. Services tabs   - service tabs with a content panel
 *   2. Solutions       - looping Swiper carousel (Swiper 4.2.0) with peeking side cards
 *   3. FAQ             - accordion with Expand All and Show More / Show Less
 * Usage: window.initIndustryPage({ services, servicesHeading, solutions, solutionsSection, faqs })
 */
// Site root URL, taken from this script's own location so pages in
// industries/ resolve assets the same as root pages.
var INDUSTRY_PAGE_ROOT = ((document.currentScript && document.currentScript.src) || "").replace(/assets\/js\/components\/industry-page\.js(?:[?#].*)?$/, "");

window.initIndustryPage = function (config) {
  "use strict";

  // Public "/x/y.png" paths are served from "assets/img/x/y.png" in the static site.
  var asset = function (path) {
    return INDUSTRY_PAGE_ROOT + "assets/img" + path;
  };

  // Replace an element by a fresh deep copy of itself. The browser treats the
  // copy as a newly inserted element, so CSS animations and @starting-style
  // transitions run again, matching React remounting a keyed element.
  function remount(el) {
    var copy = el.cloneNode(true);
    el.replaceWith(copy);
    return copy;
  }

  /* ------------------------------------------------------------------ */
  /* 1. Services tabs                                                    */
  /* ------------------------------------------------------------------ */

  var SERVICES = config.services;

  var TAB_BASE =
    "hover-group overflow-hidden px-2 d-flex position-relative flex-column flex-shrink-0 justify-content-center align-items-center text-center bg-white retail-tab-base ";
  var TAB_ACTIVE = "retail-tab-active";
  var TAB_IDLE = "retail-tab-idle";
  var LABEL_BASE =
    "lh-sm retail-label-base ";
  var LABEL_ACTIVE = "retail-label-active";
  var LABEL_IDLE = "fw-normal retail-label-idle";
  var UNDERLINE_CLASS = "position-absolute bottom-0 start-0 w-100 retail-underline";
  // The list is a .row (1 column, 2 from sm up).
  var POINT_CLASS =
    "col-12 col-sm-6 retail-point";

  function initServices() {
    var heading = Array.prototype.find.call(document.querySelectorAll("section h2"), function (h) {
      return h.textContent.trim() === config.servicesHeading;
    });
    if (!heading) return;
    var section = heading.closest("section");
    var tabRow = section.querySelector("div.d-md-grid");
    if (!tabRow) return;
    var tabs = Array.prototype.slice.call(tabRow.children);
    // The content grid is the element that follows the tab strip.
    var grid = tabRow.parentElement.nextElementSibling;
    var active = 0;

    function paintTab(tab, isActive) {
      tab.className = TAB_BASE + (isActive ? TAB_ACTIVE : TAB_IDLE);
      // Icon stroke colour follows the active state (ServiceIcon).
      tab.querySelectorAll("svg [stroke]").forEach(function (node) {
        node.setAttribute("stroke", isActive ? "#111111" : "#4B5A78");
      });
      var label = tab.querySelector("span.lh-sm");
      if (label) label.className = LABEL_BASE + (isActive ? LABEL_ACTIVE : LABEL_IDLE);
      var bar = tab.querySelector("span.position-absolute");
      if (isActive && !bar) {
        bar = document.createElement("span");
        bar.className = UNDERLINE_CLASS;
        tab.appendChild(bar);
      } else if (!isActive && bar) {
        bar.remove();
      }
    }

    function select(index) {
      if (index === active) return;
      paintTab(tabs[active], false);
      paintTab(tabs[index], true);
      active = index;

      var s = SERVICES[index];
      // The grid is keyed on the active tab in React, so it remounts and the
      // starting:* enter transitions play again.
      grid = remount(grid);
      grid.querySelector("h3").textContent = s.title;
      var texts = grid.querySelectorAll(":scope > div:first-child p");
      texts[0].textContent = s.description;
      texts[1].textContent = s.listIntro;
      var list = grid.querySelector("ul");
      list.textContent = "";
      s.points.forEach(function (point) {
        var li = document.createElement("li");
        li.className = POINT_CLASS;
        li.textContent = point;
        list.appendChild(li);
      });
      var img = grid.querySelector("img");
      img.src = asset(s.image);
      img.alt = s.title;
      // Next only marks the first tab image as priority; the others are lazy.
      if (index === 0) img.removeAttribute("loading");
      else img.setAttribute("loading", "lazy");
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        select(index);
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 2. Solutions carousel                                               */
  /* ------------------------------------------------------------------ */

  var SOLUTIONS = config.solutions;

  var SEGMENT_ACTIVE = "d-block w-100 retail-segment-active";
  var SEGMENT_IDLE = "d-block w-100 retail-segment-idle";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  // One Swiper slide: the full card for the centre position, plus a short
  // label that shows while the card peeks in at either side.
  function buildSlide(solution, index) {
    var slide = el("div", "swiper-slide solutions-slide");
    var card = el("article", "overflow-hidden position-relative h-100 industry-card-11");
    card.setAttribute("aria-roledescription", "slide");
    card.setAttribute("aria-label", index + 1 + " of " + SOLUTIONS.length + ": " + solution.title);

    var img = el("img", "shared-img img-fill solutions-img");
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.src = asset(solution.image);
    card.appendChild(img);

    var mainShade = el("div", "position-absolute top-0 bottom-0 start-0 end-0 industry-overlay-3 solutions-shade-main");
    var sideShade = el("div", "position-absolute top-0 bottom-0 start-0 end-0 industry-overlay-2 solutions-shade-side");
    mainShade.setAttribute("aria-hidden", "true");
    sideShade.setAttribute("aria-hidden", "true");
    card.appendChild(mainShade);
    card.appendChild(sideShade);

    var main = el("div", "d-flex position-relative h-100 flex-column text-white industry-stack-3 solutions-main");
    var text = el("div", "my-auto industry-box-21");
    text.appendChild(el("h3", "industry-title-7", solution.title));
    text.appendChild(el("p", "mt-3 lh-base industry-text-23", solution.body));
    main.appendChild(text);
    card.appendChild(main);

    var label = el("span", "d-block position-absolute bottom-0 text-white industry-label solutions-side-label", solution.title);
    label.setAttribute("aria-hidden", "true");
    card.appendChild(label);

    slide.appendChild(card);
    return slide;
  }

  function initCarousel() {
    var section = document.querySelector(config.solutionsSection);
    if (!section || typeof window.Swiper !== "function") return;
    var host = section.querySelector(".industry-grid-3");
    var article = host && host.querySelector("article");
    if (!article) return;

    // The counter ("02 / 17") and the segment bar are reused from the static
    // markup and float over the centre slide.
    var counter = article.querySelector('p[aria-live="polite"]');
    var segmentRow = article.querySelector(".industry-row-7");
    var segments = Array.prototype.slice.call(segmentRow.querySelectorAll('button[aria-label^="Go to "]'));
    var TOTAL = SOLUTIONS.length;

    var start = parseInt(counter.firstChild.nodeValue, 10) - 1;
    if (!(start >= 0 && start < TOTAL)) start = 0;

    var container = el("div", "swiper-container solutions-swiper");
    var wrapper = el("div", "swiper-wrapper");
    SOLUTIONS.forEach(function (solution, index) {
      wrapper.appendChild(buildSlide(solution, index));
    });
    container.appendChild(wrapper);

    var hud = el("div", "d-flex flex-column justify-content-between text-white industry-stack-3 solutions-hud");
    hud.appendChild(counter);
    hud.appendChild(segmentRow);

    host.textContent = "";
    host.classList.remove("d-grid");
    host.classList.add("solutions-host");
    host.appendChild(container);
    host.appendChild(hud);

    var pad = function (n) {
      return String(n).padStart(2, "0");
    };

    function update(swiper) {
      var active = swiper.realIndex;
      counter.firstChild.nodeValue = pad(active + 1) + " ";
      segments.forEach(function (button, index) {
        var on = index === active;
        button.setAttribute("aria-current", on ? "true" : "false");
        button.firstElementChild.className = on ? SEGMENT_ACTIVE : SEGMENT_IDLE;
      });
    }

    // Keep the counter and segment bar over the centre slide at every width.
    function placeHud(swiper) {
      var slideWidth = swiper.slidesSizesGrid[0] || container.offsetWidth;
      hud.style.left = container.offsetLeft + (container.offsetWidth - slideWidth) / 2 + "px";
      hud.style.width = slideWidth + "px";
    }

    // Swiper 4 breakpoints use max-width: each key applies while the window is <= that width.
    var swiper = new window.Swiper(container, {
      loop: true,
      loopedSlides: TOTAL,
      initialSlide: start,
      centeredSlides: true,
      // The centre card takes about 55% of the row, as in the original 1fr / 2.45fr / 1fr layout.
      slidesPerView: 1.8,
      spaceBetween: 12,
      speed: 900,
      threshold: 5,
      grabCursor: true,
      slideToClickedSlide: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      breakpoints: {
        767: { slidesPerView: 1, spaceBetween: 12 },
      },
      on: {
        init: function () {
          update(this);
          placeHud(this);
        },
        slideChange: function () {
          update(this);
        },
        resize: function () {
          placeHud(this);
        },
      },
    });

    section.querySelectorAll('button[aria-label="Previous solution"]').forEach(function (b) {
      b.addEventListener("click", function () {
        swiper.slidePrev();
      });
    });
    section.querySelectorAll('button[aria-label="Next solution"]').forEach(function (b) {
      b.addEventListener("click", function () {
        swiper.slideNext();
      });
    });
    segments.forEach(function (button, index) {
      button.addEventListener("click", function () {
        swiper.slideToLoop(index);
      });
    });

    // Pause autoplay while the pointer is over the slides so a card can be read.
    host.addEventListener("mouseenter", function () {
      swiper.autoplay.stop();
    });
    host.addEventListener("mouseleave", function () {
      swiper.autoplay.start();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 3. FAQ accordion                                                    */
  /* ------------------------------------------------------------------ */

  var FAQS = config.faqs;

  // FAQs shown at first, and how many more each "Show More" click reveals.
  var PAGE_SIZE = 5;

  var ITEM_CLASS = "retail-item";
  var QUESTION_BUTTON_CLASS =
    "px-2 d-flex w-100 align-items-center text-start retail-question-button";
  var QUESTION_ICON_CLASS = "retail-question-icon";
  var QUESTION_TEXT_CLASS =
    "retail-question-text";
  var ANSWER_CLASS =
    "pe-3 retail-answer";
  var PAGER_BUTTON_CLASS =
    "d-flex align-items-center retail-pager-button";
  var PAGER_ICON_CLASS = "retail-pager-icon";

  // Same icon as the ToggleIcon component: a minus when open, a plus when closed.
  function toggleIcon(open, className) {
    var icon = document.createElement("i");
    icon.className = "icon fa-solid " + (open ? "fa-minus " : "fa-plus ") + "flex-shrink-0 " + className;
    icon.setAttribute("aria-hidden", "true");
    return icon;
  }

  function setIconOpen(icon, open) {
    icon.classList.toggle("fa-minus", open);
    icon.classList.toggle("fa-plus", !open);
  }

  function initFaq() {
    var headings = document.querySelectorAll("section > div > h2");
    var heading = Array.prototype.find.call(headings, function (h) {
      return h.textContent.trim() === "Frequently Asked Questions";
    });
    if (!heading) return;
    var section = heading.closest("section");
    var baseId = heading.id.replace(/-heading$/, "");
    var toggleAllButton = heading.nextElementSibling;
    var list = section.querySelector("div.industry-r-uatperlb-box-2");
    var pager = list.nextElementSibling;

    var openItems = new Set([0]);
    var visibleCount = PAGE_SIZE;
    // DOM nodes per FAQ index; exported ones are reused, the rest are built on demand.
    var items = [];

    function buildItem(index) {
      var faq = FAQS[index];
      var wrap = document.createElement("div");
      wrap.className = ITEM_CLASS;
      var button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", baseId + "-answer-" + index);
      button.className = QUESTION_BUTTON_CLASS;
      button.appendChild(toggleIcon(false, QUESTION_ICON_CLASS));
      var text = document.createElement("span");
      text.className = QUESTION_TEXT_CLASS;
      text.textContent = faq.question;
      button.appendChild(text);
      wrap.appendChild(button);
      return wrap;
    }

    function syncItem(index) {
      var wrap = items[index];
      var open = openItems.has(index);
      var button = wrap.firstElementChild;
      button.setAttribute("aria-expanded", open ? "true" : "false");
      setIconOpen(button.querySelector("i.icon"), open);
      var answer = wrap.querySelector("p");
      if (open && !answer) {
        answer = document.createElement("p");
        answer.id = baseId + "-answer-" + index;
        answer.className = ANSWER_CLASS;
        answer.textContent = FAQS[index].answer;
        wrap.appendChild(answer);
      } else if (!open && answer) {
        answer.remove();
      }
    }

    function bindItem(index) {
      items[index].firstElementChild.addEventListener("click", function () {
        if (openItems.has(index)) openItems.delete(index);
        else openItems.add(index);
        render();
      });
    }

    Array.prototype.forEach.call(list.children, function (wrap, index) {
      items[index] = wrap;
      bindItem(index);
    });

    // Pager buttons; "Show Less" always comes before "Show More".
    var showLessButton = document.createElement("button");
    showLessButton.type = "button";
    showLessButton.className = PAGER_BUTTON_CLASS;
    showLessButton.append("Show Less", toggleIcon(true, PAGER_ICON_CLASS));
    var showMoreButton = null;
    if (pager) {
      showMoreButton = Array.prototype.find.call(pager.querySelectorAll("button"), function (b) {
        return b.textContent.trim() === "Show More";
      });
    }
    if (!showMoreButton) {
      showMoreButton = document.createElement("button");
      showMoreButton.type = "button";
      showMoreButton.className = PAGER_BUTTON_CLASS;
      showMoreButton.append("Show More", toggleIcon(false, PAGER_ICON_CLASS));
    }

    function render() {
      var allOpen = FAQS.length > 0 && openItems.size === FAQS.length;
      if (toggleAllButton) toggleAllButton.textContent = allOpen ? "Collapse All" : "Expand All";

      // Visible items, in order; hidden ones are detached like React unmounting them.
      for (var i = 0; i < FAQS.length; i++) {
        if (i < visibleCount) {
          if (!items[i]) {
            items[i] = buildItem(i);
            bindItem(i);
          }
          if (items[i].parentNode !== list) list.appendChild(items[i]);
          syncItem(i);
        } else if (items[i] && items[i].parentNode) {
          items[i].remove();
        }
      }

      if (pager) {
        var wantLess = visibleCount > PAGE_SIZE;
        var wantMore = visibleCount < FAQS.length;
        if (wantLess) pager.insertBefore(showLessButton, pager.firstChild);
        else showLessButton.remove();
        if (wantMore) pager.appendChild(showMoreButton);
        else showMoreButton.remove();
      }
    }

    if (toggleAllButton && toggleAllButton.tagName === "BUTTON") {
      toggleAllButton.addEventListener("click", function () {
        var allOpen = openItems.size === FAQS.length;
        if (allOpen) {
          openItems = new Set();
        } else {
          // Expanding everything also reveals the FAQs hidden behind "Show More".
          openItems = new Set(FAQS.map(function (_, index) {
            return index;
          }));
          visibleCount = FAQS.length;
        }
        render();
      });
    }

    // Both buttons move one batch at a time: 5 -> 10 -> 15 -> all, and back all -> 15 -> 10 -> 5.
    showMoreButton.addEventListener("click", function () {
      visibleCount = Math.min(visibleCount + PAGE_SIZE, FAQS.length);
      render();
    });
    showLessButton.addEventListener("click", function () {
      visibleCount = Math.max(PAGE_SIZE, Math.ceil(visibleCount / PAGE_SIZE) * PAGE_SIZE - PAGE_SIZE);
      render();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 4. Development approach slider (Swiper 4.2.0, only if on the page)   */
  /* ------------------------------------------------------------------ */

  // Swiper 4 breakpoints use max-width: each key applies while the window is <= that width.
  function initApproach() {
    var container = document.querySelector(".approach-slider");
    if (!container || typeof window.Swiper !== "function") return;
    var count = container.querySelectorAll(".swiper-wrapper > .swiper-slide").length;
    var slider = new window.Swiper(container, {
      slidesPerView: 3.5,
      spaceBetween: 14,
      // Loop so autoplay carries on from the last step back to Discovery.
      loop: true,
      loopedSlides: count,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 900,
      threshold: 5,
      preloadImages: false,
      navigation: { prevEl: ".approach-prev", nextEl: ".approach-next" },
      pagination: { el: ".approach-pagination", clickable: true },
      breakpoints: {
        1279: { slidesPerView: 2.4 },
        991: { slidesPerView: 1.6 },
        575: { slidesPerView: 1.12, spaceBetween: 12 },
      },
    });

    // Pause while the pointer is over the cards so a step can be read.
    container.addEventListener("mouseenter", function () { slider.autoplay.stop(); });
    container.addEventListener("mouseleave", function () { slider.autoplay.start(); });
  }

  function init() {
    initServices();
    initCarousel();
    initFaq();
    initApproach();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
};
