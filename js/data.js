/* =============================================================================
 *  SITE CONTENT  —  edit this file to update the website.
 *  This is the only file you normally need to touch to keep things current.
 *
 *  - Add a publication?  Add an object to the `publications` array.
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
    "Ming-Hsuan Yang": "https://faculty.ucmerced.edu/mhyang/",
    "Guixu Lin": "https://joseph-lin-tech.github.io/",
    "Siqi Yang": "https://siki.moe/",
    "Yi-Chuan Huang": "https://yichuanh.github.io/",
    "Jiaming Tan": "https://scholar.google.com/citations?user=7UrSQFQAAAAJ&hl=en",
    "Bo Zheng": "http://www.bozheng-lab.com/",
    "Jian-Kai Zhu": "https://jack111331.github.io/BlogPage/",
    "Lian Fu": "https://scholar.google.com/citations?user=CbWYuIEAAAAJ",
    "Muyao Niu": "https://myniuuu.github.io/",
    "Yu-Ju Tsai": "https://liagm.github.io/",
    "Sho Kuno": "https://shokuno5.github.io/",
    "Fengbo Lan": "https://openreview.net/profile?id=%7EFengbo_Lan1",
    "Yonghao Yu": "https://scholar.google.com/citations?user=lwuwuAYAAAAJ",
    "Erwin Wu": "https://erwinwu.com/",
    "Runyi Li": "https://lirunyi2001.github.io/",
    "Hanqing Liu": "https://openreview.net/profile?id=%7ELiu_Hanqing3",
    "Jixuan He": "https://kakituken.github.io/home",
    "Yifan Zhan": "https://yifever20002.github.io/",
    "Yongtao Ge": "https://yongtao.me/",
    "Yinqiang Zheng": "https://scholar.google.com/citations?user=JD-5DKcAAAAJ",
    "Chuanhao Li": "https://nevermorelch.github.io/",
    "Hao-Jen Chien": "https://chien90190.github.io/",
  },

  /* ------------------------- Publications -------------------------------- */
  // All Publications is sorted by publicationDate; source order controls Selected Publications.
  // Dates use the first arXiv submission where available, otherwise the proceedings date.
  // Projects without a published paper use their project page's first publication date.
  // Fields:
  //   title    — paper title
  //   selected — include in Selected Publications, in the same order as this array
  //   authors  — full author string (your name is auto-bolded; use * for equal contrib)
  //   venue    — conference / journal
  //   year     — used for grouping/badges
  //   publicationDate — YYYY-MM-DD, or YYYY-MM when only the month is known
  //   status   — optional, e.g. "under review", "preprint"
  //   tags      — optional venue badge text (defaults to venue)
  //   links    — optional array of { label, href, stars? }
  //                stars:true on a github.com/owner/repo link shows its live ★ count
  //   media    — optional demo thumbnail shown before the paper:
  //                { type: "video",   src: "paper/.../clip.mp4" }            (plays on hover)
  //                Add startTime (seconds) to skip an opening title in the preview.
  //                { type: "compare", input: "...", output: "..." }          (input → output on hover)
  //                { type: "compare", pairs: [{input,output}, ...] }         (several side by side)
  //   Both publication lists use the same media. The five selected papers' preview.mp4
  //   clips are from https://lightchaserx.github.io/.
  publications: [
    {
      title: "AlayaCrafter: An Agent-First 3D Stack for Programmable Worlds",
      publicationDate: "2026-10-12", // First project-page publication; formal paper date not announced.
      authors: "Yonghao Yu, Ruihan Yu, Sho Kuno, Muyao Niu, Yu-Ju Tsai, Zheng-Hui Huang, Fengbo Lan, Guixu Lin, Runyi Li, Chuanhao Li, Ming-Hsuan Yang, Kaipeng Zhang, Zhixiang Wang",
      venue: "Project",
      year: 2026,
      media: { type: "video", src: "paper/project26_alayacrafter/preview.mp4" },
      links: [
        { label: "Project", href: "https://alaya-lab.github.io/AlayaCrafter/" },
        { label: "Assets", href: "https://alaya-lab.github.io/AlayaCrafter/space-kit.html" },
        // The announced code repository is not public yet.
      ],
    },
    {
      title: "InfiniDream: Open-Ended Photorealistic 3D Worlds through Procedural Generation",
      publicationDate: "2026-10-09", // First project-page publication; formal paper date not announced.
      authors: "Yi-Chuan Huang, Hao-Jen Chien, Zheng-Hui Huang, Yu-Lun Liu, Kaipeng Zhang, Zhixiang Wang",
      venue: "Project",
      year: 2026,
      media: { type: "video", src: "paper/project26_infinidream/preview.mp4", startTime: 2 },
      links: [
        { label: "Project", href: "https://yichuanh.github.io/infinidream-page/" },
        { label: "Code", href: "https://github.com/yichuanH/InfiniDream", stars: true },
        { label: "Video", href: "https://yichuanh.github.io/infinidream-page/videos/demo_full.mp4" },
      ],
    },
    {
      title: "Programmable World Model",
      selected: true,
      publicationDate: "2026-09-09",
      authors: "Zheng-Hui Huang*, Guixu Lin*, Jiacheng Lin, Yi-Chuan Huang, Ruihan Yu, Muyao Niu, Siqi Yang, Yu-Lun Liu, Yung-Yu Chuang, Kaipeng Zhang, Zhixiang Wang",
      venue: "arXiv",
      year: 2026,
      media: { type: "video", src: "paper/arxiv26_pwm/preview.mp4" },
      links: [
        { label: "Project", href: "https://alaya-lab.github.io/pwm/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2609.10540" },
        { label: "Code", href: "https://github.com/AlayaLab/pwm", stars: true },
        { label: "Video", href: "https://alaya-lab.github.io/pwm/videos/demo.mp4" },
      ],
    },
    {
      title: "PROWBench: Do Video Models Render What the Program Specifies?",
      selected: true,
      publicationDate: "2026-10-01",
      authors: "Zheng-Hui Huang*, Guixu Lin*, Yu-Ju Tsai, Jian-Kai Zhu, Fengbo Lan, Yu-Lun Liu, Yung-Yu Chuang, Kaipeng Zhang, Zhixiang Wang",
      venue: "arXiv",
      year: 2026,
      media: { type: "video", src: "paper/arxiv26_prowbench/preview.mp4" },
      links: [
        { label: "Project", href: "https://alaya-lab.github.io/PROWBench/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2610.02205" },
        { label: "Code", href: "https://github.com/AlayaLab/PROWBench", stars: true },
        { label: "Dataset", href: "https://huggingface.co/datasets/AlayaLab/PROWBench" },
        { label: "Video", href: "https://alaya-lab.github.io/PROWBench/assets/demo/PROWBench_intro_720p.mp4" },
      ],
    },
    {
      title: "KaiNinja: Extending Native 3D Generators to the Part Level",
      publicationDate: "2026-09-14",
      authors: "Ruihan Yu, Lian Fu, Muyao Niu, Zheng-Hui Huang, Yu-Ju Tsai, Sho Kuno, Fengbo Lan, Yonghao Yu, Erwin Wu, Ming-Hsuan Yang, Kaipeng Zhang, Zhixiang Wang",
      venue: "arXiv",
      year: 2026,
      media: { type: "video", src: "paper/arxiv26_kaininja/kaininja.mp4" },
      links: [
        { label: "Project", href: "https://alaya-lab.github.io/KaiNinja/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2609.15659" },
        { label: "Code", href: "https://github.com/AlayaLab/KaiNinja", stars: true },
        { label: "Video", href: "https://alaya-lab.github.io/KaiNinja/assets/videos/parttrellis-showcase.mp4" },
      ],
    },
    {
      title: "EditHero: A Benchmark for Long-Horizon Part-Level 3D Editing and Vibe Modeling",
      publicationDate: "2026-10-01",
      authors: "Ruihan Yu*, Yu-Ju Tsai*, Muyao Niu, Runyi Li, Lian Fu, Hanqing Liu, Zheng-Hui Huang, Yonghao Yu, Sho Kuno, Ming-Hsuan Yang, Kaipeng Zhang, Zhixiang Wang",
      venue: "arXiv",
      year: 2026,
      media: { type: "video", src: "paper/arxiv26_edithero/edithero.mp4" },
      links: [
        { label: "Project", href: "https://alaya-lab.github.io/EditHero/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2610.02298" },
        { label: "Code", href: "https://github.com/AlayaLab/EditHero", stars: true },
        { label: "Dataset", href: "https://huggingface.co/datasets/AlayaLab/EditHero" },
        { label: "Video", href: "https://alaya-lab.github.io/EditHero/assets/videos/edithero_mv.mp4" },
      ],
    },
    {
      title: "WorldSculpt: Generating Compositional Worlds from Grounded Videos",
      publicationDate: "2026-09-04",
      authors: "Muyao Niu, Jixuan He, Ruihan Yu, Lian Fu, Yonghao Yu, Zheng-Hui Huang, Yifan Zhan, Fengbo Lan, Yongtao Ge, Yinqiang Zheng, Kaipeng Zhang, Zhixiang Wang",
      venue: "arXiv",
      year: 2026,
      media: { type: "video", src: "paper/arxiv26_worldsculpt/worldsculpt.mp4" },
      links: [
        { label: "Project", href: "https://alaya-lab.github.io/WorldSculpt/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2609.05416" },
        { label: "Code", href: "https://github.com/AlayaLab/WorldSculpt", stars: true },
        { label: "Models", href: "https://huggingface.co/AlayaLab/WorldSculpt" },
        { label: "Dataset", href: "https://huggingface.co/datasets/AlayaLab/Worldsculpt_data" },
        { label: "Video", href: "https://alaya-lab.github.io/WorldSculpt/assets/videos/demo_video.mp4" },
      ],
    },
    {
      title: "Generative World Renderer",
      selected: true,
      publicationDate: "2026-04-02",
      authors: "Zheng-Hui Huang, Zhixiang Wang, Jiaming Tan, Ruihan Yu, Yidan Zhang, Bo Zheng, Yu-Lun Liu, Yung-Yu Chuang, Kaipeng Zhang",
      venue: "arXiv",
      year: 2026,
      media: { type: "video", src: "paper/arxiv26_world_renderer/preview.mp4" },
      links: [
        { label: "Project", href: "https://alaya-studio.github.io/renderer/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2604.02329" },
        { label: "Code", href: "https://github.com/AlayaLab/AlayaRenderer", stars: true },
        { label: "Demo", href: "https://huggingface.co/spaces/Brian9999/game-editing" },
        { label: "Video", href: "https://youtu.be/N5CQ5WWIA_8" },
      ],
    },
    {
      title: "Generative World Renderer at the Speed of Play",
      selected: true,
      publicationDate: "2026-07-21",
      authors: "Guixu Lin, Zheng-Hui Huang, Siqi Yang, Ming-Hsuan Yang, Kaipeng Zhang, Zhixiang Wang",
      venue: "arXiv",
      year: 2026,
      media: { type: "video", src: "paper/arxiv26_renderer_flash/preview.mp4", startTime: 1 },
      links: [
        { label: "Project", href: "https://alaya-renderer-flash.alayalab.ai/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2607.18703" },
        { label: "Code", href: "https://github.com/AlayaLab/AlayaRenderer-Flash", stars: true },
        { label: "Demo", href: "https://alaya-renderer-flash.alayalab.ai/play" },
      ],
    },
    {
      title: "Reflection Separation from a Single Image via Joint Latent Diffusion",
      selected: true,
      publicationDate: "2026-06-02", // https://arxiv.org/abs/2606.04107
      authors: "Zheng-Hui Huang, Zhixiang Wang, Yu-Lun Liu, Yung-Yu Chuang",
      venue: "CVPR",
      year: 2026,
      media: { type: "video", src: "paper/cvpr2026_reflection/preview.mp4" },
      links: [
        { label: "Project", href: "https://brian90709.github.io/diff-reflection-separation/" },
        { label: "Paper", href: "https://cvpr.thecvf.com/virtual/2026/poster/39860" },
        { label: "Code", href: "https://github.com/Brian90709/diff-reflection-separation-code", stars: true },
        { label: "Models", href: "https://huggingface.co/Brian9999/diff-reflection-separation" },
      ],
    },
    {
      title: "SkyMatte: a High-Quality Dataset for Improving Sky Image Matting",
      publicationDate: "2026-05", // Proceedings month listed on the project page.
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
      publicationDate: "2026-06-15",
      authors: "Yi-Ruei Liu, Jie-Ying Lee, Zheng-Hui Huang, Yu-Lun Liu, Chih-Hao Lin",
      venue: "arXiv",
      year: 2026,
      media: { type: "video", src: "paper/arxiv26_brdfusion/brdfusion.mp4" },
      links: [
        { label: "Project", href: "https://shigon255.github.io/brdfusion-page/" },
        { label: "arXiv", href: "https://arxiv.org/abs/2606.17049" },
        { label: "Code", href: "https://github.com/shigon255/BRDFusion", stars: true },
      ],
    },
    {
      title: "Semantic-Region Specific Lookup Tables for Image Enhancement via Unpaired Learning",
      publicationDate: "2024-10-27", // NTU Scholars publication record.
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
