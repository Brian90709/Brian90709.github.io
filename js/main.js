/* =============================================================================
 *  main.js — light progressive enhancement only.
 *
 *  The page content (publications, news) is STATIC HTML, pre-rendered from
 *  js/data.js by build.js — so search engines see it without running JS.
 *  This file only adds behavior on top: dark-mode toggle, scroll-spy nav,
 *  hover-to-play demo videos, and the footer year.
 *
 *  To change content: edit js/data.js, then run `node build.js`.
 * ========================================================================== */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  /* --------------------------- Theme ----------------------------------- */
  function initTheme() {
    const toggle = $("#theme-toggle");
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);

    if (toggle) {
      toggle.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme");
        const next = cur === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
      });
    }
  }

  /* ---------------- Hover-to-play demo videos -------------------------- */
  function initVideoHover() {
    document.querySelectorAll(".pub__thumb--video video").forEach((v) => {
      v.muted = true;
      const thumb = v.closest(".pub__thumb--video") || v.parentElement;
      thumb.addEventListener("mouseenter", () => { v.play().catch(() => {}); });
      thumb.addEventListener("mouseleave", () => { v.pause(); v.currentTime = 0; });
    });
  }

  /* ------------------ Active nav link on scroll ------------------------ */
  function initScrollSpy() {
    const links = Array.from(document.querySelectorAll(".nav__links a"));
    const map = new Map();
    links.forEach((a) => {
      const id = a.getAttribute("href").slice(1);
      const sec = document.getElementById(id);
      if (sec) map.set(sec, a);
    });
    if (!map.size) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            const link = map.get(entry.target);
            if (link) link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    map.forEach((_link, sec) => observer.observe(sec));
  }

  /* --------------------------- init ------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initVideoHover();
    initScrollSpy();
    const yr = $("#year");
    if (yr && !yr.textContent.trim()) yr.textContent = new Date().getFullYear();
  });
})();
