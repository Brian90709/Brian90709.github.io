# Zheng-Hui Huang — Academic Personal Website

A static site. Content lives in `js/data.js` and is **pre-rendered into static HTML**
by `build.js` (so search engines index it without running JS). Open `index.html` to preview.

## File structure

```
hzh-page/
├── index.html          # the page — publications/news are baked in as static HTML
├── build.js            # data.js → static HTML in index.html  (run after editing data.js)
├── css/style.css       # all styling + light/dark theme
├── js/
│   ├── data.js         # ← EDIT THIS: publications, news, author links
│   └── main.js         # light enhancement only (theme, scroll-spy, hover video)
├── paper/              # demo media (videos / input-output images) per paper
├── photo.png           # hero portrait
├── sitemap.xml, robots.txt   # SEO
├── .nojekyll           # tells GitHub Pages to serve files as-is
└── README.md
```

## How to update content

1. Edit **`js/data.js`** (publications, news, `authorLinks`, `me`).
2. Run the build to regenerate the static HTML:
   ```bash
   node build.js
   ```
3. Commit `index.html` (and any new files under `paper/`), then push.

In `data.js`: your name is auto-bolded; add `*` for equal contribution; add links like
`links: [{ label: "PDF", href: "..." }]`; add a demo with
`media: { type: "video", src: "paper/.../clip.mp4" }` or
`media: { type: "compare", input: "...", output: "..." }`.

To change the header links (Email, GitHub, LinkedIn) or the intro, edit `index.html` directly.

> **Why the build step?** Search engines index the *served* HTML most reliably. Rendering
> content with client-side JS hides paper titles from the initial crawl, so `build.js`
> pre-renders everything into `index.html`.

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
