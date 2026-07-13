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

  // Co-author names that should link to their homepage wherever they appear
  // in a publication's author list (matched automatically).
  authorLinks: {
    "Yung-Yu Chuang": "https://www.csie.ntu.edu.tw/~cyy/",
    "Yu-Lun Liu": "https://yulunalexliu.github.io",
    "Zhixiang Wang": "https://lightchaserx.github.io",
    "Kaipeng Zhang": "https://kpzhang93.github.io",
    "Chih-Hao Lin": "https://chih-hao-lin.github.io",
    "Yi-Ruei Liu": "https://shigon255.github.io",
    "Jie-Ying Lee": "https://jayinnn.dev",
    "Ruihan Yu": "https://auroraryan0301.github.io",
  },

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
  //   links    — optional array of { label, href, stars? }
  //                stars:true on a github.com/owner/repo link shows its live ★ count
  //   media    — optional demo thumbnail shown before the paper:
  //                { type: "video",   src: "paper/.../clip.mp4" }            (plays on hover)
  //                { type: "compare", input: "...", output: "..." }          (input → output on hover)
  //                { type: "compare", pairs: [{input,output}, ...] }         (several side by side)
  publications: [
    {
      title: "Generative World Renderer",
      authors: "Zheng-Hui Huang, Zhixiang Wang, Jiaming Tan, Ruihan Yu, Yidan Zhang, Bo Zheng, Yu-Lun Liu, Yung-Yu Chuang, Kaipeng Zhang",
      venue: "arXiv",
      year: 2026,
      media: { type: "video", src: "paper/arxiv26_world_renderer/Huang2026GWR.mp4" },
      links: [
        { label: "Project", href: "https://alaya-studio.github.io/renderer/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2604.02329" },
        { label: "Code", href: "https://github.com/AlayaLab/AlayaRenderer", stars: true },
        { label: "Demo", href: "https://huggingface.co/spaces/Brian9999/game-editing" },
        { label: "Video", href: "https://youtu.be/N5CQ5WWIA_8" },
      ],
    },
    {
      title: "Reflection Separation from a Single Image via Joint Latent Diffusion",
      authors: "Zheng-Hui Huang, Zhixiang Wang, Yu-Lun Liu, Yung-Yu Chuang",
      venue: "CVPR",
      year: 2026,
      media: { type: "compare", input: "paper/cvpr2026_reflection/input.png", output: "paper/cvpr2026_reflection/output.png" },
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
      media: { type: "compare", input: "paper/ICASSP2026/input.jpg", output: "paper/ICASSP2026/output.png" },
      links: [
        { label: "Project", href: "https://www.csie.ntu.edu.tw/~cyy/skymatte/" },
        { label: "Paper", href: "https://ieeexplore.ieee.org/document/11461801" },
      ],
    },
    {
      title: "BRDFusion: Physics Meets Generation for Urban Scene Inverse Rendering",
      authors: "Yi-Ruei Liu, Jie-Ying Lee, Zheng-Hui Huang, Yu-Lun Liu, Chih-Hao Lin",
      venue: "arXiv",
      year: 2026,
      media: { type: "video", src: "paper/arxiv26_brdfusion/brdfusion.mp4" },
      links: [
        { label: "Project", href: "https://shigon255.github.io/brdfusion-page/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2606.17049" },
        { label: "Code", href: "https://github.com/shigon255/BRDFusion" },
      ],
    },
    {
      title: "Semantic-Region Specific Lookup Tables for Image Enhancement via Unpaired Learning",
      authors: "Zheng-Hui Huang, Tse-Yan Lee, Li-Jen Chang, Yong-Wei Chen, Ping-Jui Chiang, Jo-Fan Wu, Yung-Yu Chuang",
      venue: "ICIP",
      year: 2024,
      media: { type: "compare", pairs: [
        { input: "paper/ICIP2024/input1.jpg", output: "paper/ICIP2024/output1.jpg" },
        { input: "paper/ICIP2024/input.jpg", output: "paper/ICIP2024/output2.jpg" },
      ] },
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
