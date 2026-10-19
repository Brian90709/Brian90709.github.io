/* =============================================================================
 *  main.js — light progressive enhancement only.
 *
 *  The page content (publications) is STATIC HTML, pre-rendered from
 *  js/data.js by build.js — so search engines see it without running JS.
 *  This file only adds behavior on top: GitHub star counts,
 *  hover-to-play demo videos, and the footer year.
 *
 *  To change content: edit js/data.js, then run `node build.js`.
 * ========================================================================== */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  /* ---------------- Hover-to-play demo videos -------------------------- */
  function initVideoHover() {
    document.querySelectorAll(".pub__thumb--video video").forEach((v) => {
      v.muted = true;
      const thumb = v.closest(".pub__thumb--video") || v.parentElement;
      thumb.addEventListener("mouseenter", () => { v.play().catch(() => {}); });
      thumb.addEventListener("mouseleave", () => { v.pause(); v.currentTime = Number(v.dataset.previewStart || 0); });
    });
  }

  /* -------------- Live GitHub star counts (data-gh-stars) -------------- */
  function fmtCount(n) {
    return n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "") + "k" : String(n);
  }
  function showStarCount(a, count) {
    const s = a.querySelector(".pub__stars") || document.createElement("span");
    s.className = "pub__stars";
    s.innerHTML = '<span class="pub__star">★</span> ' + fmtCount(count);
    if (!s.parentNode) a.appendChild(s);
  }
  function initGhStars() {
    const cacheTtl = 60 * 60 * 1000;
    const requests = new Map();
    document.querySelectorAll("a[data-gh-stars]").forEach((a) => {
      const repo = a.getAttribute("data-gh-stars");
      const key = "github-stars:" + repo;
      const snapshot = {
        count: Number(a.dataset.ghStarsCount),
        updatedAt: Date.parse(a.dataset.ghStarsUpdated),
      };
      let cached;
      try { cached = JSON.parse(localStorage.getItem(key)); } catch (_) {}
      const valid = (d) => d && Number.isInteger(d.count) && d.count >= 0 && Number.isFinite(d.updatedAt);
      let known = valid(snapshot) ? snapshot : null;
      if (valid(cached) && (!known || cached.updatedAt > known.updatedAt)) known = cached;
      if (known) showStarCount(a, known.count);

      if (!requests.has(repo)) {
        if (known && Date.now() - known.updatedAt < cacheTtl) {
          requests.set(repo, Promise.resolve(known.count));
        } else {
          requests.set(repo, fetch("https://api.github.com/repos/" + repo)
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => {
              if (!d || !Number.isInteger(d.stargazers_count) || d.stargazers_count < 0) return null;
              const record = { count: d.stargazers_count, updatedAt: Date.now() };
              try { localStorage.setItem(key, JSON.stringify(record)); } catch (_) {}
              return record.count;
            })
            .catch(() => null));
        }
      }
      requests.get(repo)
        .then((count) => {
          if (count !== null) showStarCount(a, count);
        });
    });
  }

  /* --------------------------- init ------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    initVideoHover();
    initGhStars();
    const yr = $("#year");
    if (yr && !yr.textContent.trim()) yr.textContent = new Date().getFullYear();
  });
})();
