/* =============================================================================
 *  SITE CONTENT  —  edit this file to update the website.
 *  This is the only file you normally need to touch to keep things current.
 *
 *  - Add a publication?  Add an object to the `publications` array.
 *  - Post an update?     Add an item to the `news` array.
 *  - "me" highlights your own name in author lists (bold).
 * ========================================================================== */

const SITE = {
  // Your name as it appears in author lists — used to bold "you" automatically.
  // (This is the author-matching key, NOT the display name. The display name
  //  shown at the top is the <h1> in index.html.)
  me: "Zheng-Hui Huang",

  /* ----------------------------- News ----------------------------------- */
  // Newest first. `date` is free text (shown verbatim).
  news: [
    { date: "Feb 2026",  html: "<em>Reflection Separation from a Single Image via Joint Latent Diffusion</em> accepted to <strong>CVPR 2026</strong>." },
    { date: "Dec 2025",  html: "<em>SkyMatte: a High-Quality Dataset for Improving Sky Image Matting</em> accepted to <strong>ICASSP 2026</strong>." },
    { date: "Dec 2025",  html: "Joined <strong>Shanda AI Research Tokyo</strong> as a research intern." },
    { date: "Aug 2025",  html: "Joined <strong>Shanghai AI Laboratory</strong> as a research intern." },
    { date: "Jun 2024",  html: "<em>Semantic-Region Specific Lookup Tables for Image Enhancement via Unpaired Learning</em> accepted to <strong>ICIP 2024</strong>." },
  ],

  /* ------------------------- Publications -------------------------------- */
  // Newest first. Fields:
  //   title    — paper title
  //   authors  — full author string (your name is auto-bolded; use * for equal contrib)
  //   venue    — conference / journal
  //   year     — used for grouping/badges
  //   status   — optional, e.g. "under review", "preprint"
  //   tags      — optional venue badge text (defaults to venue)
  //   links    — optional array of { label, href }
  //   image    — optional teaser image path (e.g. "assets/pub/reflection.jpg")
  publications: [
    {
      title: "Generative World Renderer",
      authors: "Zheng-Hui Huang, Zhixiang Wang, Jiaming Tan, Ruihan Yu, Yidan Zhang, Bo Zheng, Yu-Lun Liu, Yung-Yu Chuang, Kaipeng Zhang",
      venue: "arXiv",
      year: 2026,
      links: [
        { label: "Project", href: "https://alaya-studio.github.io/renderer/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2604.02329" },
        { label: "Code", href: "https://github.com/ShandaAI/AlayaRenderer" },
        { label: "Demo", href: "https://huggingface.co/spaces/Brian9999/game-editing" },
        { label: "Video", href: "https://youtu.be/N5CQ5WWIA_8" },
      ],
    },
    {
      title: "Reflection Separation from a Single Image via Joint Latent Diffusion",
      authors: "Zheng-Hui Huang, Zhixiang Wang, Yu-Lun Liu, Yung-Yu Chuang",
      venue: "CVPR",
      year: 2026,
      links: [
        { label: "Project", href: "https://brian90709.github.io/diff-reflection-separation/" },
        { label: "Paper", href: "https://cvpr.thecvf.com/virtual/2026/poster/39860" },
        { label: "Code", href: "https://github.com/Brian90709/diff-reflection-separation-code" },
        { label: "Models", href: "https://huggingface.co/Brian9999/diff-reflection-separation" },
      ],
    },
    {
      title: "SkyMatte: a High-Quality Dataset for Improving Sky Image Matting",
      authors: "Cheng-Yen Tsai*, Zheng-Hui Huang*, Wei-Lien Tang, Hsiu-Ting Yang, Jo-Fan Wu, Yung-Yu Chuang",
      venue: "ICASSP",
      year: 2026,
      links: [
        { label: "Paper", href: "https://ieeexplore.ieee.org/document/11461801" },
      ],
    },
    {
      title: "Semantic-Region Specific Lookup Tables for Image Enhancement via Unpaired Learning",
      authors: "Zheng-Hui Huang, Tse-Yan Lee, Li-Jen Chang, Yong-Wei Chen, Ping-Jui Chiang, Jo-Fan Wu, Yung-Yu Chuang",
      venue: "ICIP",
      year: 2024,
      links: [
        { label: "Paper", href: "https://ieeexplore.ieee.org/document/10647940" },
      ],
    },
  ],

  /* -------------------------- Experience --------------------------------- */
  // NOTE: experience & education are now summarized by hand in the intro
  // paragraph (index.html → .hero__bio). These arrays are kept for reference;
  // to show them as their own sections again, re-add the sections in index.html
  // and the render calls in main.js.
  experience: [
    {
      role: "Research Intern",
      org: "Shanda AI Research Tokyo",
      detail: "Rendering Algorithms",
      place: "Tokyo, Japan",
      period: "Mar 2026 – present",
    },
    {
      role: "Research Intern",
      org: "Shanda AI Research Tokyo",
      detail: "Rendering Algorithms",
      place: "Shanghai, China",
      period: "Dec 2025 – Mar 2026",
    },
    {
      role: "Research Intern",
      org: "Shanghai AI Laboratory",
      detail: "TODO: research topic",
      place: "Shanghai, China",
      period: "TODO: start – end",
    },
  ],

  /* --------------------------- Education --------------------------------- */
  education: [
    {
      degree: "Ph.D.",
      org: "National Taiwan University",
      detail: "Graduate Institute of Networking and Multimedia (CMLAB)",
      extra: "Advisors: Yung-Yu Chuang, Yu-Lun Liu",
      place: "Taipei, Taiwan",
      period: "Sep 2024 – present",
    },
    {
      degree: "M.S.",
      org: "National Taiwan University",
      detail: "Computer Science and Information Engineering (CMLAB)",
      extra: "GPA: 4.03/4.3 · Advisor: Yung-Yu Chuang",
      place: "Taipei, Taiwan",
      period: "Sep 2021 – Jun 2024",
    },
    {
      degree: "B.S.",
      org: "Yuan Ze University",
      detail: "Department of Electrical Engineering",
      extra: "GPA: 3.83/4.0 (rank 1/64)",
      place: "Taoyuan, Taiwan",
      period: "Sep 2017 – Jun 2021",
    },
  ],
};
