/*
 * Smooth page scrolling (mouse wheel, trackpad and in-page anchor links) using Lenis.
 * Requires the Lenis script (window.Lenis) to be loaded first.
 * Touch devices keep native scrolling, and it is skipped for users who prefer reduced motion.
 * Elements marked with data-lenis-prevent (modals, mobile menu) scroll natively.
 * Other scripts can pause it with window.PSSmoothScroll.stop() / .start().
 */
(function () {
  "use strict";

  if (typeof window.Lenis !== "function") return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var lenis = new window.Lenis({
    duration: 1.1,
    // easeOutExpo: quick start, soft landing.
    easing: function (t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    smoothWheel: true,
    anchors: { offset: -80 },
  });

  function raf(time) {
    lenis.raf(time);
    window.requestAnimationFrame(raf);
  }
  window.requestAnimationFrame(raf);

  window.PSSmoothScroll = lenis;
})();
