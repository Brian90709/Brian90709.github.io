# Zheng-Hui Huang — Academic Personal Website

A plain static site (HTML/CSS/JS, no build step). Open `index.html` in a browser to preview.

## File structure

```
hzh-page/
├── index.html          # page structure (sections, nav, hero)
├── css/style.css       # all styling + light/dark theme
├── js/
│   ├── data.js         # ← EDIT THIS to update content (pubs, news, exp, edu)
│   └── main.js         # rendering + interactions (rarely needs edits)
├── assets/
│   ├── cv.pdf          # your CV (replace to update)
│   ├── profile.svg     # placeholder portrait — replace with profile.jpg
│   └── favicon.svg
├── .nojekyll           # tells GitHub Pages to serve files as-is
└── README.md
```

## How to update content

Almost everything lives in **`js/data.js`**:

- **Add a publication** → add an object to the `publications` array. Your name is
  auto-bolded; add `*` for equal contribution. Add links like
  `links: [{ label: "PDF", href: "..." }, { label: "Code", href: "..." }]`.
  Add a teaser image with `image: "assets/pub/your-image.jpg"`.
- **Post news** → add an item to the `news` array (newest first).
- **Experience / Education** → edit those arrays.
- **Your name highlight** → the `me` field controls which name gets bolded.

To change links in the header (Scholar, GitHub), edit `index.html` (`#social-links`).

## Replace the photo

Drop a square image at `assets/profile.jpg`, then in `index.html` change
`src="assets/profile.svg"` → `src="assets/profile.jpg"`.

## Preview locally

Just double-click `index.html`. (Or run a local server so paths behave exactly
like in production:)

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo. For a personal site at `https://<username>.github.io`,
   name the repo `<username>.github.io`. (Any repo name also works — the site
   will then live at `https://<username>.github.io/<repo>/`.)
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial academic website"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, pick `main` / `root`, save. The site goes live in ~1 minute.

All asset paths are relative, so the site works at both `username.github.io` and
`username.github.io/repo/` without changes.
