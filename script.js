/* =========================================================
   Rajendra Parmar — Portfolio · script.js
   Vanilla JS · no dependencies
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Data ---------- */
  const SKILLS = [
    { icon: '🎨', title: 'Frontend', tags: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
    { icon: '⚙️', title: 'Backend', tags: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL'] },
    { icon: '🗄️', title: 'Databases', tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
    { icon: '☁️', title: 'Cloud & DevOps', tags: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'] },
    { icon: '🧠', title: 'AI & LLM', tags: ['OpenAI', 'LangChain', 'RAG', 'Agentic AI', 'Vector Databases', 'Deepgram', 'LLM Integration'] },
    { icon: '🛒', title: 'Commerce', tags: ['Commercetools', 'Headless Commerce'] },
  ];

  const PROJECTS = [
    {
      icon: '🎙️', tag: 'AI Platform', title: 'AI Interview Platform',
      desc: 'Real-time AI-driven interview platform conducting live, voice-based candidate interviews.',
      features: ['Real-time AI interviews over WebRTC', 'Speech-to-Text & Text-to-Speech pipeline', 'Adaptive, context-aware questioning'],
      arch: 'Low-latency streaming audio with Deepgram + OpenAI orchestration and WebRTC media.',
      stack: ['WebRTC', 'Deepgram', 'OpenAI', 'STT', 'TTS'],
    },
    {
      icon: '🛍️', tag: 'B2B Commerce', title: 'B2B Commerce Platform',
      desc: 'Headless B2B commerce experience with complex pricing and operational tooling.',
      features: ['Customer-specific pricing engine', 'Inventory management', 'Order management workflows'],
      arch: 'Next.js storefront on Commercetools APIs with composable, headless architecture.',
      stack: ['Next.js', 'Commercetools', 'Headless', 'PostgreSQL'],
    },
    {
      icon: '📚', tag: 'RAG / AI', title: 'RAG Knowledge Assistant',
      desc: 'Enterprise knowledge assistant answering questions over private document corpora.',
      features: ['Retrieval-Augmented Generation', 'Enterprise semantic search', 'Source-grounded answers'],
      arch: 'LangChain pipelines + vector database retrieval feeding OpenAI for grounded responses.',
      stack: ['OpenAI', 'LangChain', 'Vector DB', 'Python'],
    },
    {
      icon: '📈', tag: 'Data Platform', title: 'Lead Generation Platform',
      desc: 'Automated lead data collection platform with a real-time analytics dashboard.',
      features: ['Automated data collection', 'Analytics dashboard', 'High-throughput APIs'],
      arch: 'FastAPI services over PostgreSQL with async data pipelines and dashboard reporting.',
      stack: ['FastAPI', 'PostgreSQL', 'Analytics', 'Python'],
    },
  ];

  const TIMELINE = [
    { period: '2024 — Present', role: 'Senior Full Stack Developer & AI Engineer', company: 'AI & Enterprise Solutions', text: 'Leading design of AI-driven products — RAG, Agentic AI, LLM integrations and workflow automation — while architecting scalable full stack platforms and mentoring teams.' },
    { period: '2021 — 2024', role: 'Full Stack Developer / Solution Architect', company: 'Enterprise & SaaS Products', text: 'Architected scalable MERN & Python applications, designed performant SQL/NoSQL data models, and shipped cloud-native systems on AWS with Docker & CI/CD.' },
    { period: '2019 — 2021', role: 'Software Developer (MERN & Python)', company: 'Web & API Development', text: 'Built backend APIs and responsive web apps, integrated third-party services, and collaborated directly with clients in Agile teams to deliver business value.' },
    { period: '2018 — 2019', role: 'Software Developer', company: 'Early Career', text: 'Started building production web applications, established strong fundamentals in JavaScript, databases, and clean, maintainable software practices.' },
  ];

  const SERVICES = [
    { icon: '🧩', title: 'Full Stack Development', desc: 'End-to-end web apps built with MERN & Python — robust, scalable and maintainable.' },
    { icon: '🤖', title: 'AI Application Development', desc: 'Generative AI & LLM-powered products integrated cleanly into real workflows.' },
    { icon: '🕹️', title: 'AI Agent Development', desc: 'Agentic AI systems that plan, use tools, and automate complex tasks.' },
    { icon: '⚡', title: 'FastAPI Development', desc: 'High-performance, async Python APIs with clean, documented contracts.' },
    { icon: '▲', title: 'Next.js Development', desc: 'Fast, SEO-friendly Next.js apps and headless storefronts.' },
    { icon: '🚀', title: 'SaaS Development', desc: 'Multi-tenant SaaS products from MVP to scale-ready architecture.' },
    { icon: '☁️', title: 'AWS Architecture', desc: 'Cloud-native design, deployment, and cost-aware infrastructure on AWS.' },
    { icon: '🔌', title: 'API Development', desc: 'REST & GraphQL APIs designed for reliability and developer experience.' },
    { icon: '🛒', title: 'Commercetools Development', desc: 'Composable, headless commerce solutions with complex business logic.' },
    { icon: '💬', title: 'Technical Consulting', desc: 'Architecture reviews, AI strategy, and pragmatic technical guidance.' },
  ];

  const TECH = [
    'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Python', 'FastAPI',
    'Node.js', 'Express.js', 'GraphQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis',
    'AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'OpenAI', 'LangChain', 'RAG',
    'Agentic AI', 'Vector DB', 'Deepgram', 'Commercetools',
  ];

  const WHY = [
    { title: '7+ Years Experience', desc: 'A track record of shipping reliable software across domains and stacks.' },
    { title: 'AI Expertise', desc: 'Deep, hands-on work with RAG, Agentic AI, LLMs and vector search.' },
    { title: 'Cloud Experience', desc: 'Production deployments on AWS with Docker, Kubernetes & CI/CD.' },
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
      const card = el('article', 'skill-card reveal');
      card.dataset.delay = String(i * 60);
      card.innerHTML = `
        <div class="skill-card__ico">${s.icon}</div>
        <h3>${s.title}</h3>
        <div class="skill-tags">${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>`;
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
      card.innerHTML = `
        <div class="project-card__top">
          <div class="project-card__ico">${p.icon}</div>
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
        <div class="project-card__stack">${p.stack.map(t => `<span class="stack-pill">${t}</span>`).join('')}</div>`;
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
      item.innerHTML = `
        <div class="tl-period">${t.period}</div>
        <div class="tl-card glass">
          <div class="tl-role">${t.role}</div>
          <div class="tl-company">${t.company}</div>
          <p>${t.text}</p>
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
        <div class="service-card__ico">${s.icon}</div>
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
        <div class="process-card__ico">${p.icon}</div>
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
        <div class="engage-card__ico">${e.icon}</div>
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
    initForm();
    initMisc();
    initLoader();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
