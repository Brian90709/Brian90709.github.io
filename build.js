/* =============================================================================
 *  build.js — bakes the content from js/data.js into static HTML in index.html.
 *
 *  WHY: search engines (and social/LLM crawlers) index the *served* HTML most
 *  reliably. Rendering publications/news with client-side JS hides that content
 *  from the initial crawl. This script pre-renders it into index.html so the
 *  paper titles, names, and links are right there in the source.
 *
 *  USAGE: after editing js/data.js, run:   node build.js
 *  Then commit index.html.  (main.js only adds light enhancement: theme,
 *  scroll-spy, hover-to-play video.)
 * ========================================================================== */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const dataSrc = fs.readFileSync(path.join(ROOT, "js/data.js"), "utf8").replace("const SITE =", "global.SITE =");
eval(dataSrc);

/* ----- icons for publication links (matched by label / url) ------------- */
const ICONS = {
  globe:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",
  paper:
    "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  youtube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  play:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
};

function iconFor(lk) {
  const t = (lk.label || "").toLowerCase();
  const h = (lk.href || "").toLowerCase();
  let key = "globe";
  if (t.includes("github") || t.includes("code") || h.includes("github.com")) key = "github";
  else if (t.includes("video") || h.includes("youtu")) key = "youtube";
  else if (t.includes("demo") || t.includes("playground") || h.includes("huggingface.co/spaces")) key = "play";
  else if (t.includes("arxiv") || t.includes("paper") || t.includes("pdf") || h.includes("arxiv")) key = "paper";
  return '<svg class="pub__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + ICONS[key] + '"/></svg>';
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatAuthors(authors, me, links) {
  let s = authors;
  if (me) {
    const reMe = new RegExp(escapeRegExp(me) + "(\\*?)", "g");
    s = s.replace(reMe, (_m, star) => `<strong class="me">${me}${star}</strong>`);
  }
  if (links) {
    Object.keys(links)
      .sort((a, b) => b.length - a.length)
      .forEach((name) => {
        if (name === me) return;
        const re = new RegExp(escapeRegExp(name) + "(\\*?)", "g");
        s = s.replace(re, (_m, star) => `<a href="${links[name]}" target="_blank" rel="noopener">${name}</a>${star}`);
      });
  }
  return s;
}

function thumbHTML(media, title) {
  if (!media) return "";
  if (media.type === "video") {
    return (
      '<div class="pub__thumb pub__thumb--video">' +
      `<video src="${media.src}#t=0.001" muted loop playsinline preload="metadata"></video>` +
      "</div>"
    );
  }
  if (media.type === "compare") {
    const pairs = media.pairs || [{ input: media.input, output: media.output }];
    const grid = pairs.length > 1;
    const cls = "pub__thumb pub__thumb--compare" + (grid ? " pub__thumb--grid" : "");
    const cell = (pr) =>
      `<img class="pub__img-in" src="${pr.input}" alt="${title} — input" loading="lazy">` +
      `<img class="pub__img-out" src="${pr.output}" alt="${title} — output" loading="lazy">`;
    const inner = grid ? pairs.map((pr) => `<div class="pub__cell">${cell(pr)}</div>`).join("") : cell(pairs[0]);
    return `<div class="${cls}">${inner}</div>`;
  }
  return "";
}

function pubHTML(p, me, links) {
  const thumb = thumbHTML(p.media, p.title);
  let meta = `<span class="badge">${p.tags || p.venue} ${p.year}</span>`;
  if (p.status) meta += `<span class="badge badge--status">${p.status}</span>`;
  let linksHTML = "";
  if (p.links && p.links.length) {
    linksHTML =
      '<p class="pub__links">' +
      p.links
        .map((lk) => {
          const ext = lk.href && lk.href.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
          let stars = "";
          if (lk.stars) {
            const m = (lk.href || "").match(/github\.com\/([^/]+\/[^/?#]+)/);
            if (m) stars = ` data-gh-stars="${m[1]}"`;
          }
          return `<a class="pub__link" href="${lk.href}"${ext}${stars}>${iconFor(lk)}<span>${lk.label}</span></a>`;
        })
        .join("") +
      "</p>";
  }
  return (
    '        <li class="pub">' +
    thumb +
    '<div class="pub__body">' +
    `<h3 class="pub__title">${p.title}</h3>` +
    `<p class="pub__authors">${formatAuthors(p.authors, me, links)}</p>` +
    `<p class="pub__meta">${meta}</p>` +
    linksHTML +
    "</div></li>"
  );
}

function newsHTML(n) {
  return `        <li class="news__item"><span class="news__date">${n.date || ""}</span><span class="news__body">${n.html || ""}</span></li>`;
}

/* ----- generate + inject ------------------------------------------------ */
const news = (SITE.news || []).map(newsHTML).join("\n");
const pubs = (SITE.publications || []).map((p) => pubHTML(p, SITE.me, SITE.authorLinks)).join("\n");
const year = new Date().getFullYear();

let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
html = html.replace(/(<ul class="news" id="news-list">)[\s\S]*?(<\/ul>)/, `$1\n${news}\n      $2`);
html = html.replace(/(<ol class="pub-list" id="pub-list">)[\s\S]*?(<\/ol>)/, `$1\n${pubs}\n      $2`);
html = html.replace(/(<span id="year">)[\s\S]*?(<\/span>)/, `$1${year}$2`);
fs.writeFileSync(path.join(ROOT, "index.html"), html);

console.log(`Built index.html: ${SITE.news.length} news, ${SITE.publications.length} publications, year ${year}.`);
