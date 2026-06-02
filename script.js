/* =========================================================
   Rajendra Parmar — Portfolio · script.js
   Vanilla JS · no dependencies
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Data ---------- */
  // `ico`: key into SKILL_ICONS (crisp line icons). `desc`: one-line capability summary.
  const SKILLS = [
    { ico: 'frontend', title: 'Frontend', desc: 'Production-grade, responsive interfaces with React & Next.js.', tags: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
    { ico: 'backend', title: 'Backend', desc: 'Scalable, well-structured APIs and services in Node.js & Python.', tags: ['Node.js', 'Express.js', 'Laravel', 'Python', 'FastAPI', 'RESTful APIs'] },
    { ico: 'database', title: 'Databases', desc: 'Reliable, well-modeled data layers across SQL & NoSQL.', tags: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { ico: 'ai', title: 'Agentic AI & LLM', desc: 'AI agents and RAG systems that reason and use real tools.', tags: ['LangChain', 'LangGraph', 'n8n', 'OpenAI', 'RAG', 'MCP Server', 'Vector Embeddings', 'Pinecone'] },
    { ico: 'cloud', title: 'Cloud & DevOps', desc: 'Cloud-native deployment and CI/CD pipelines on AWS.', tags: ['AWS (EC2 · S3 · RDS)', 'Docker', 'GitHub Actions', 'CI/CD', 'Heroku', 'Netlify', 'Vercel'] },
    { ico: 'api', title: 'API & Integrations', desc: 'Payments, SSO, and dependable third-party integrations.', tags: ['Stripe', 'Razorpay', 'PayPal', 'SSO', 'OAuth', 'Webhooks'] },
    { ico: 'security', title: 'Security & Auth', desc: 'Secure authentication and role-based access control.', tags: ['JWT', 'Role-Based Access Control', 'Secure API Design'] },
    { ico: 'tools', title: 'Tools & Environment', desc: 'Modern tooling for fast, collaborative delivery.', tags: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'Jira', 'Asana', 'VS Code', 'Cursor', 'Claude', 'Linux'] },
  ];

  // Inline stroke icons (24×24, currentColor) — no external requests, render identically everywhere.
  const SKILL_ICONS = {
    frontend: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M7 6h.01M10 6h.01"/></svg>',
    backend: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
    database: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>',
    ai: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><circle cx="12" cy="12" r="2"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.5 4 4 0 0 0 7 17.5"/><path d="M8 19h9.5"/></svg>',
    api: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.4 4.5"/><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07l1.41-1.41"/></svg>',
    security: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>',
    tools: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z"/></svg>',
  };

  // `links`: set { demo, code } URLs for public projects, or { confidential: true }
  // for client/company work to render a "Details on request" chip.
  const PROJECTS = [
    {
      icon: '🤖', tag: 'AI · RAG', title: 'E-commerce Customer Support System',
      desc: 'AI-powered support system delivering real-time, context-aware answers about products, orders, and services for an e-commerce platform.',
      features: [
        'FastAPI backend orchestrating AI-driven response workflows',
        'LangGraph multi-step reasoning with controlled tool usage',
        'RAG using OpenAI text-embedding-3-large for semantic search',
      ],
      arch: 'Modular layers (API · AI orchestration · service); LangChain integrates external tools & APIs for dynamic context retrieval before generation.',
      stack: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'OpenAI', 'RAG'],
      links: { confidential: true },
    },
    {
      icon: '🎙️', tag: 'AI · Realtime Voice', title: 'HireSight — AI Interview Platform',
      desc: 'AI-powered platform that automates the entire interview process — companies create roles, onboard candidates, and run real-time, resume-driven AI interview sessions at scale.',
      features: [
        'WebRTC real-time audio/video interview sessions',
        'Deepgram speech-to-text & text-to-speech for natural conversation',
        'LLM asks resume- and skill-based questions, evaluates answers live',
        'Auto-generated reports with scoring and hiring recommendations',
      ],
      arch: 'Next.js + FastAPI orchestrate WebRTC streams and Deepgram STT/TTS into an LLM loop, enabling fully automated interviews that run in parallel at scale.',
      stack: ['Next.js', 'FastAPI', 'WebRTC', 'Deepgram', 'LLM', 'Python'],
      links: { confidential: true },
    },
    {
      icon: '📊', tag: 'Realtime Data', title: 'Blackbelt360 — Live Data Analysis Platform',
      desc: 'Real-time data analysis platform providing instant insights into user activity via live, dynamic dashboards and reporting.',
      features: [
        'Node.js backend with WebSocket connectivity & REST APIs',
        'Live charts (Analyst, DataWide) from third-party webhooks',
        'AWS S3 upload/download with RBAC and secure authentication',
      ],
      arch: 'WebSocket-driven live updates with EJS dashboards; MySQL tuned with proper indexing for high-performance queries.',
      stack: ['Node.js', 'WebSockets', 'EJS', 'AWS S3', 'MySQL'],
      links: { confidential: true },
    },
    {
      icon: '🏏', tag: 'Mobile Backend', title: 'MatchItSports — Batting Management Platform',
      desc: 'Match batting management platform handling match content, bookings, and payments for mobile applications.',
      features: [
        'APIs for match content, scores, and user interactions',
        'Third-party APIs & payment gateways for bookings/transactions',
        'MongoDB data modeling for fast, reliable access',
      ],
      arch: 'Node.js + MongoDB backend with a responsive React.js frontend for interactive match management.',
      stack: ['Node.js', 'MongoDB', 'React.js', 'Payments'],
      links: { confidential: true },
    },
    {
      icon: '💰', tag: 'Platform · Integrations', title: 'Pricing Engine — Centralized Device Pricing',
      desc: 'Centralized platform fetching device information and pricing across multiple websites, with integrated device-management services.',
      features: [
        'Centralized device data retrieval across platforms',
        'Integrated pricing, MDM, and FMIP check modules',
        'Efficient processing for accurate, up-to-date pricing',
      ],
      arch: 'Modular backend integrating device info, pricing, MDM, and FMIP services for reliable multi-source data.',
      stack: ['Node.js', 'REST APIs', 'Integrations', 'MySQL'],
      links: { confidential: true },
    },
  ];

  // Small inline SVG icons (no external requests)
  const ICONS = {
    demo: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/></svg>',
    code: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 18c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.5 1.3a12 12 0 0 0-6 0C6.5 2.8 5.5 3.1 5.5 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  };

  const TIMELINE = [
    {
      period: '2026 — Present', role: 'Senior Solution Engineer', company: 'Mentestack',
      points: [
        'Designed and built scalable, responsive full-stack applications using Node.js, React.js, and modern frontend frameworks.',
        'Developed and maintained RESTful APIs connecting web and mobile apps for seamless user experiences.',
        'Implemented secure authentication with JWT and role-based access control across user levels.',
        'Built background jobs and asynchronous workflows with Node.js schedulers and RDS events to boost performance.',
        'Integrated third-party services and payment gateways (Stripe, PayPal) and external APIs.',
        'Optimized PostgreSQL and MySQL for fast queries and efficient data handling.',
        'Guided architectural decisions, ran code reviews, and mentored team members.',
        'Managed AWS deployments with Docker and CI/CD; built multi-tenant SaaS platforms for enterprise customers.',
      ],
    },
    {
      period: '2018 — 2025', role: 'Software Engineer', company: 'Full Stack Developer · Laravel · Node.js · React.js',
      points: [
        'Led a small team and delivered live projects with Node.js, Next.js, React.js, and Laravel.',
        'Owned development, deployment, and client communication end-to-end.',
        'Implemented RESTful APIs and integrated third-party services.',
        'Optimized application performance and database queries (MySQL, PostgreSQL, MongoDB).',
        'Managed CI/CD pipelines and deployed apps with Docker and AWS.',
        'Built responsive, mobile-friendly applications and proactively resolved production issues.',
      ],
    },
  ];

  const SERVICES = [
    { icon: '🧩', title: 'Full Stack Development', desc: 'End-to-end web apps with Node.js, React, Next.js & Laravel — robust, scalable and maintainable.' },
    { icon: '🤖', title: 'AI Application Development', desc: 'Generative AI & LLM-powered products integrated cleanly into real workflows.' },
    { icon: '🕹️', title: 'AI Agent Development', desc: 'Agentic AI systems that plan, use tools, and automate complex tasks.' },
    { icon: '⚡', title: 'FastAPI Development', desc: 'High-performance, async Python APIs with clean, documented contracts.' },
    { icon: '▲', title: 'Next.js Development', desc: 'Fast, SEO-friendly Next.js apps and headless storefronts.' },
    { icon: '🚀', title: 'SaaS Development', desc: 'Multi-tenant SaaS products from MVP to scale-ready architecture.' },
    { icon: '☁️', title: 'AWS Architecture', desc: 'Cloud-native design, deployment, and cost-aware infrastructure on AWS.' },
    { icon: '🔌', title: 'API Development', desc: 'Robust RESTful APIs designed for reliability, security, and developer experience.' },
    { icon: '🔄', title: 'Workflow Automation', desc: 'Automated business workflows with n8n — integrations, webhooks, and AI-driven pipelines.' },
    { icon: '💬', title: 'Technical Consulting', desc: 'Architecture reviews, AI strategy, and pragmatic technical guidance.' },
  ];

  const TECH = [
    'React.js', 'Next.js', 'Redux', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap',
    'Node.js', 'Express.js', 'Laravel', 'Python', 'FastAPI', 'REST APIs',
    'MongoDB', 'MySQL', 'PostgreSQL',
    'LangChain', 'LangGraph', 'n8n', 'OpenAI', 'RAG', 'MCP', 'Pinecone',
    'AWS', 'Docker', 'GitHub Actions', 'Vercel', 'Netlify',
    'Stripe', 'PayPal', 'JWT', 'OAuth',
  ];

  const WHY = [
    { title: '7+ Years Experience', desc: 'A track record of shipping reliable software across domains and stacks.' },
    { title: 'AI Expertise', desc: 'Deep, hands-on work with RAG, Agentic AI, LLMs and vector search.' },
    { title: 'Cloud Experience', desc: 'Production deployments on AWS (EC2, S3, RDS) with Docker & CI/CD.' },
    { title: 'Enterprise Applications', desc: 'Built scalable, enterprise-grade systems with complex requirements.' },
    { title: 'Client Communication', desc: 'Clear, direct collaboration to translate business needs into solutions.' },
    { title: 'Scalable Architecture', desc: 'Systems designed to grow — maintainable, performant and resilient.' },
    { title: 'Business-Focused Solutions', desc: 'Engineering decisions always tied back to real business value.' },
  ];

  const PROCESS = [
    { icon: '🔍', title: 'Discovery & Requirements', desc: 'I start by understanding your goals, scope, and success metrics — no assumptions.' },
    { icon: '📐', title: 'Architecture & Planning', desc: 'A scalable, future-proof technical plan with clear milestones and trade-offs.' },
    { icon: '⚙️', title: 'Agile Development', desc: 'Iterative sprints with regular demos, so you see progress every week.' },
    { icon: '🧪', title: 'Testing & QA', desc: 'Reliability, performance, and security validated before anything ships.' },
    { icon: '🚀', title: 'Deployment & Handover', desc: 'Production deployment via CI/CD with clean documentation and a smooth handover.' },
    { icon: '🤝', title: 'Support & Scaling', desc: 'Ongoing maintenance, monitoring, and support as your product grows.' },
  ];

  const ENGAGE = [
    { icon: '🧑‍💻', title: 'Full-Time / Long-Term', desc: 'A dedicated senior engineer embedded in your team for sustained delivery.', tag: 'Best for scaling teams' },
    { icon: '⏱️', title: 'Contract / Hourly', desc: 'Flexible, time-based engagement for defined timelines and evolving scope.', tag: 'Flexible' },
    { icon: '📦', title: 'Project-Based', desc: 'Fixed-scope delivery from concept to launch with clear deliverables.', tag: 'Fixed scope' },
    { icon: '💡', title: 'Technical Consulting', desc: 'Architecture reviews, AI strategy, and pragmatic technical guidance.', tag: 'Advisory' },
  ];

  // SAMPLE testimonials — replace with real, permissioned client quotes before going live.
  const TESTIMONIALS = [
    { quote: 'Rajendra delivered our AI platform ahead of schedule and communicated clearly at every step. The architecture has scaled smoothly as we have grown.', name: 'Product Lead', role: 'SaaS Startup', initials: 'PL' },
    { quote: 'One of the most reliable engineers we have worked with. He understood our business needs and translated them into clean, maintainable solutions.', name: 'CTO', role: 'B2B Commerce Company', initials: 'CT' },
    { quote: 'From RAG integration to deployment, the work was thorough and professional. Highly recommended for serious AI and full stack projects.', name: 'Founder', role: 'Enterprise Tech', initials: 'FD' },
  ];

  const FAQ = [
    { q: 'What is your typical response time?', a: 'I usually reply within 24 hours on business days, and faster once a project is active.' },
    { q: 'How do you communicate during projects?', a: 'Regular updates through your preferred channel (Slack, email, or calls), with a working demo at the end of each sprint.' },
    { q: 'Can you work with my existing team?', a: 'Yes. I collaborate smoothly in Agile, cross-functional teams and adapt to your existing tools and workflows.' },
    { q: 'Do you sign NDAs?', a: 'Absolutely. Your ideas, code, and data are kept strictly confidential.' },
    { q: 'Which time zones do you work with?', a: 'I work flexibly across time zones to maintain meaningful overlap with your team.' },
    { q: 'Do you provide post-launch support?', a: 'Yes — ongoing maintenance, monitoring, and scaling support are available after launch.' },
  ];

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  /* ---------- Render: Skills ---------- */
  function renderSkills() {
    const grid = $('#skillsGrid');
    if (!grid) return;
    SKILLS.forEach((s, i) => {
      const card = el('article', 'skill-card reveal glass');
      card.dataset.delay = String(i * 60);
      const tags = s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');
      card.innerHTML = `
        <div class="skill-card__head">
          <div class="skill-card__ico" aria-hidden="true">${SKILL_ICONS[s.ico] || ''}</div>
          <span class="skill-card__no">${String(i + 1).padStart(2, '0')}</span>
        </div>
        <h3>${s.title}</h3>
        <p class="skill-card__desc">${s.desc}</p>
        <div class="skill-tags">${tags}</div>
        <div class="skill-card__meta">${s.tags.length} technologies</div>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Render: Projects ---------- */
  function renderProjects() {
    const grid = $('#projectsGrid');
    if (!grid) return;
    PROJECTS.forEach((p, i) => {
      const card = el('article', 'project-card reveal glass');
      card.dataset.delay = String(i * 80);
      const linkHtml = (url, type, label) => {
        if (url && url !== '#') return `<a href="${url}" class="proj-link proj-link--${type}" target="_blank" rel="noopener">${ICONS[type]} ${label}</a>`;
        return `<a href="${url || '#'}" class="proj-link proj-link--${type}">${ICONS[type]} ${label}</a>`;
      };
      const linksRow = p.links.confidential
        ? `<a href="#contact" class="proj-link proj-link--demo">${ICONS.demo} Details on request</a>
           <span class="proj-link proj-link--private" aria-disabled="true">Confidential project</span>`
        : `${linkHtml(p.links.demo, 'demo', 'Live Demo')}${linkHtml(p.links.code, 'code', 'Source Code')}`;
      card.innerHTML = `
        <div class="project-card__top">
          <div class="project-card__ico" aria-hidden="true">${p.icon}</div>
          <span class="project-card__tag">${p.tag}</span>
        </div>
        <h3>${p.title}</h3>
        <p class="project-card__desc">${p.desc}</p>
        <div class="project-card__block">
          <h4>Key Features</h4>
          <ul class="project-card__feats">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>
        <div class="project-card__block">
          <h4>Architecture Highlight</h4>
          <p class="project-card__arch">${p.arch}</p>
        </div>
        <div class="project-card__stack">${p.stack.map(t => `<span class="stack-pill">${t}</span>`).join('')}</div>
        <div class="project-card__links">${linksRow}</div>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Render: Timeline ---------- */
  function renderTimeline() {
    const wrap = $('#timeline');
    if (!wrap) return;
    TIMELINE.forEach((t, i) => {
      const item = el('div', 'tl-item reveal');
      item.dataset.delay = String(i * 70);
      const body = t.points
        ? `<ul class="tl-points">${t.points.map(p => `<li>${p}</li>`).join('')}</ul>`
        : `<p>${t.text}</p>`;
      item.innerHTML = `
        <div class="tl-period">${t.period}</div>
        <div class="tl-card glass">
          <div class="tl-role">${t.role}</div>
          <div class="tl-company">${t.company}</div>
          ${body}
        </div>`;
      wrap.appendChild(item);
    });
  }

  /* ---------- Render: Services ---------- */
  function renderServices() {
    const grid = $('#servicesGrid');
    if (!grid) return;
    SERVICES.forEach((s, i) => {
      const card = el('article', 'service-card reveal glass');
      card.dataset.delay = String(i * 50);
      card.innerHTML = `
        <div class="service-card__ico" aria-hidden="true">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Render: Tech wall ---------- */
  function renderTech() {
    const wall = $('#techwall');
    if (!wall) return;
    TECH.forEach((t, i) => {
      const chip = el('span', 'tech-chip reveal', `<span class="dot"></span>${t}`);
      chip.dataset.delay = String(i * 25);
      wall.appendChild(chip);
    });
  }

  /* ---------- Render: Why ---------- */
  function renderWhy() {
    const grid = $('#whyGrid');
    if (!grid) return;
    WHY.forEach((w, i) => {
      const card = el('article', 'why-card reveal glass');
      card.dataset.delay = String(i * 55);
      card.innerHTML = `
        <span class="why-card__num">${String(i + 1).padStart(2, '0')}</span>
        <h3>${w.title}</h3>
        <p>${w.desc}</p>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Render: Process ---------- */
  function renderProcess() {
    const grid = $('#processGrid');
    if (!grid) return;
    PROCESS.forEach((p, i) => {
      const card = el('article', 'process-card reveal glass');
      card.dataset.delay = String(i * 55);
      card.innerHTML = `
        <span class="process-card__step">${String(i + 1).padStart(2, '0')}</span>
        <div class="process-card__ico" aria-hidden="true">${p.icon}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Render: Engagement ---------- */
  function renderEngage() {
    const grid = $('#engageGrid');
    if (!grid) return;
    ENGAGE.forEach((e, i) => {
      const card = el('article', 'engage-card reveal glass');
      card.dataset.delay = String(i * 60);
      card.innerHTML = `
        <div class="engage-card__ico" aria-hidden="true">${e.icon}</div>
        <span class="engage-card__tag">${e.tag}</span>
        <h3>${e.title}</h3>
        <p>${e.desc}</p>
        <a href="#contact" class="engage-card__link">Discuss this →</a>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Render: Testimonials ---------- */
  function renderTestimonials() {
    const grid = $('#tstGrid');
    if (!grid) return;
    TESTIMONIALS.forEach((t, i) => {
      const card = el('article', 'tst-card reveal glass');
      card.dataset.delay = String(i * 80);
      card.innerHTML = `
        <div class="tst-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
        <blockquote class="tst-card__quote">${t.quote}</blockquote>
        <div class="tst-card__who">
          <span class="tst-card__avatar">${t.initials}</span>
          <span>
            <strong>${t.name}</strong>
            <small>${t.role}</small>
          </span>
        </div>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Render: FAQ (accordion) ---------- */
  function renderFaq() {
    const list = $('#faqList');
    if (!list) return;
    FAQ.forEach((f, i) => {
      const item = el('div', 'faq-item reveal glass');
      item.dataset.delay = String(i * 45);
      const btnId = 'faq-q-' + i, panelId = 'faq-a-' + i;
      item.innerHTML = `
        <button class="faq-item__q" id="${btnId}" aria-expanded="false" aria-controls="${panelId}">
          <span>${f.q}</span>
          <span class="faq-item__icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-item__a" id="${panelId}" role="region" aria-labelledby="${btnId}">
          <p>${f.a}</p>
        </div>`;
      list.appendChild(item);
    });

    list.addEventListener('click', (e) => {
      const btn = e.target.closest('.faq-item__q');
      if (!btn) return;
      const item = btn.parentElement;
      const open = item.classList.contains('is-open');
      // Close others (single-open accordion)
      $$('.faq-item.is-open', list).forEach(it => {
        it.classList.remove('is-open');
        it.querySelector('.faq-item__q').setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  /* ---------- Theme toggle ---------- */
  function initTheme() {
    const root = document.documentElement;
    const toggle = $('#themeToggle');
    const saved = localStorage.getItem('rp-theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    root.setAttribute('data-theme', saved || (prefersLight ? 'light' : 'dark'));
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('rp-theme', next);
      });
    }
  }

  /* ---------- Navbar: scroll state, burger, active link ---------- */
  function initNav() {
    const nav = $('#nav');
    const burger = $('#navBurger');
    const links = $('#navLinks');
    const navLinks = $$('.nav__link');
    const progress = $('#scrollProgress');
    const toTop = $('#toTop');

    const update = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('is-scrolled', y > 24);
      if (toTop) toTop.classList.toggle('is-visible', y > 600);
      if (progress) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      }
    };
    // rAF throttle: coalesce many scroll events into one layout update per frame.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    if (burger && links) {
      const setMenu = (open) => {
        links.classList.toggle('is-open', open);
        burger.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', String(open));
        document.body.classList.toggle('no-scroll', open);
      };
      burger.addEventListener('click', () => setMenu(!links.classList.contains('is-open')));
      links.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav__link')) setMenu(false);
      });
      // Close on Escape for keyboard users.
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && links.classList.contains('is-open')) { setMenu(false); burger.focus(); }
      });
    }

    // Active link via IntersectionObserver
    const sections = navLinks.map(l => $(l.getAttribute('href'))).filter(Boolean);
    if ('IntersectionObserver' in window && sections.length) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            const id = '#' + en.target.id;
            navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === id));
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(s => spy.observe(s));
    }
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(i => i.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const d = parseInt(en.target.dataset.delay || '0', 10);
          setTimeout(() => en.target.classList.add('is-in'), d);
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(i => io.observe(i));
  }

  /* ---------- Animated counters ---------- */
  function initCounters() {
    const nums = $$('.stat__num');
    if (!nums.length) return;
    const run = (node) => {
      const target = parseInt(node.dataset.count || '0', 10);
      const suffix = node.dataset.suffix || '';
      const dur = 1400; const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(eased * target) + (p === 1 ? suffix : '');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!('IntersectionObserver' in window)) { nums.forEach(run); return; }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => { if (en.isIntersecting) { run(en.target); obs.unobserve(en.target); } });
    }, { threshold: 0.5 });
    nums.forEach(n => io.observe(n));
  }

  /* ---------- Card tilt (hero) ---------- */
  function initTilt() {
    const card = $('.tilt');
    if (!card || window.matchMedia('(pointer: coarse)').matches) return;
    const damp = 14;
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * damp}deg) rotateX(${-y * damp}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  }

  /* ---------- Cursor spotlight on cards ---------- */
  function initSpotlight() {
    if (window.matchMedia('(pointer: coarse)').matches) return; // skip touch devices
    const cards = $$('.skill-card, .project-card, .service-card, .process-card, .engage-card, .why-card, .tst-card');
    cards.forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--mx', '-300px');
        card.style.setProperty('--my', '-300px');
      });
    });
  }

  /* ---------- Contact form (client-side validation) ---------- */
  function initForm() {
    const form = $('#contactForm');
    if (!form) return;
    const note = $('#formNote');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validate = () => {
      let ok = true;
      const setErr = (id, bad) => { const f = $('#' + id).closest('.field'); f.classList.toggle('is-invalid', bad); if (bad) ok = false; };
      setErr('cf-name', !$('#cf-name').value.trim());
      setErr('cf-email', !emailRe.test($('#cf-email').value.trim()));
      setErr('cf-message', $('#cf-message').value.trim().length < 5);
      return ok;
    };

    $$('#contactForm input, #contactForm textarea').forEach(inp => {
      inp.addEventListener('input', () => inp.closest('.field').classList.remove('is-invalid'));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      note.className = 'form-note';
      note.textContent = '';
      if (!validate()) { note.classList.add('err'); note.textContent = 'Please fix the highlighted fields.'; return; }

      // No backend: open a pre-filled email via mailto as a graceful fallback.
      const name = encodeURIComponent($('#cf-name').value.trim());
      const subject = encodeURIComponent($('#cf-subject').value.trim() || 'Portfolio enquiry');
      const body = encodeURIComponent(`Name: ${$('#cf-name').value.trim()}\nEmail: ${$('#cf-email').value.trim()}\n\n${$('#cf-message').value.trim()}`);
      window.location.href = `mailto:rajendraparmar0119@gmail.com?subject=${subject}&body=${body}`;

      note.classList.add('ok');
      note.textContent = `Thanks, ${decodeURIComponent(name)}! Opening your email client…`;
      form.reset();
    });
  }

  /* ---------- Loader ---------- */
  function initLoader() {
    const loader = $('#loader');
    if (!loader) return;
    const hide = () => loader.classList.add('is-done');
    // Hide as soon as the page is ready; short safety fallback.
    if (document.readyState === 'complete') hide();
    else window.addEventListener('load', () => setTimeout(hide, 250));
    setTimeout(hide, 1800);
  }

  /* ---------- Misc ---------- */
  function initMisc() {
    const yr = $('#year');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  /* ---------- Boot ---------- */
  function boot() {
    initTheme();
    renderSkills();
    renderProjects();
    renderTimeline();
    renderServices();
    renderTech();
    renderWhy();
    renderProcess();
    renderEngage();
    renderTestimonials();
    renderFaq();
    initNav();
    initReveal();
    initCounters();
    initTilt();
    initSpotlight();
    initForm();
    initMisc();
    initLoader();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
