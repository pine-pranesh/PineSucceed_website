/*
 * About page: competencies slider on Swiper 4.2.0 (loaded before this file).
 * Loop, speed 500, 1 / 1.25 / 1.5 / 2.5 slides per view at <640 / 640 / 768 / 1024px.
 * Swiper 4 breakpoints are MAX-width (a key applies while window.innerWidth <= key), so the
 * >= 1024px values are the base params and the smaller layouts are keyed 1023 / 767 / 639.
 */
(function () {
  "use strict";

  var THRESHOLD = 5; // px before a drag starts (Swiper 14's default; Swiper 4 defaults to 0)

  function initCompetencySlider() {
    var container = document.querySelector(".swiper-container");
    if (!container || typeof window.Swiper !== "function") return;
    var count = container.querySelectorAll(".swiper-wrapper > .swiper-slide").length;
    if (!count) return;

    // The slider is overflow-visible, so whatever sits left of the active slide shows in the
    // page gutter. Swiper 14's loop moves the real slides around and only keeps a slide in front
    // of the active one after moving forward (none after init, after a breakpoint change or
    // after "prev" wraps past the first slide); Swiper 4 always has duplicates there. "ahead"
    // tracks how many slides Swiper 14 would have in front, and the rest are hidden.
    var ahead = 0;
    var lastReal = 0;
    var dragX = null;

    function syncHidden(swiper) {
      var first = swiper.activeIndex - ahead;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.visibility = i < first ? "hidden" : "";
      }
    }

    new window.Swiper(container, {
      loop: true,
      loopedSlides: count, // enough duplicates on both sides for fractional slidesPerView
      speed: 500,
      slidesPerGroup: 1,
      slidesPerView: 2.5,
      spaceBetween: 30,
      breakpoints: {
        1023: { slidesPerView: 1.5, spaceBetween: 26 },
        767: { slidesPerView: 1.25, spaceBetween: 24 },
        639: { slidesPerView: 1, spaceBetween: 20 },
      },
      threshold: THRESHOLD,
      preloadImages: false, // keep the slide images lazy, as with Swiper 14 (no preloading)
      navigation: {
        prevEl: ".competency-swiper-prev",
        nextEl: ".competency-swiper-next",
      },
      on: {
        init: function () {
          lastReal = this.realIndex;
          syncHidden(this);
        },
        breakpoint: function () {
          ahead = 0; // Swiper 14 rebuilds the loop with the current slide first
          if (this.initialized) syncHidden(this);
        },
        activeIndexChange: function () {
          if (!this.initialized) return;
          // Loop jumps keep the real index (step 0); real moves are short, so take the nearest way round.
          var step = (this.realIndex - lastReal + count) % count;
          if (step > count / 2) step -= count;
          lastReal = this.realIndex;
          var most = count - Math.ceil(this.params.slidesPerView); // Swiper 14 appends past this
          ahead = Math.max(0, Math.min(ahead + step, most));
          syncHidden(this);
        },
        touchStart: function () {
          dragX = null;
        },
        sliderMove: function () {
          var x = this.touches.currentX;
          if (dragX === null) {
            if (Math.abs(x - this.touches.startX) > THRESHOLD) dragX = x;
            return;
          }
          // Dragging towards "prev": Swiper 14 moves the last slide in front of the first one.
          if (x > dragX && ahead === 0) {
            ahead = 1;
            syncHidden(this);
          }
          dragX = x;
        },
      },
    });
  }

  function init() {
    initCompetencySlider();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
