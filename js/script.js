// ============================================================
// rampai.my — gallery filtering + language toggle (EN / BM)
// ============================================================

// ---- Translations -------------------------------------------------
const I18N = {
  en: {
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_submit: 'Submit a project',

    hero_pill: "✨ A showcase of what's possible with AI",
    hero_title_1: 'Projects built with',
    hero_title_2: 'Artificial Intelligence',
    hero_tagline: 'a medley of what Malaysians build',
    hero_sub: 'rampai.my is where creators showcase real projects made using AI tools. Explore the gallery, click any card, and see what was built — and how.',
    hero_cta1: 'Explore projects',
    hero_cta2: 'Showcase yours',
    stat_projects: 'Projects',
    stat_platforms: 'AI platforms',
    stat_made: 'Made in Malaysia',

    marquee_label: 'Built with the AI tools you know',
    gallery_title: 'The Gallery',
    gallery_sub: 'Browse projects by the AI platform used to create them.',
    filter_all: 'All',

    proj1_desc: 'A sales dashboard for neighbourhood shops, with forecasting and stock alerts.',
    proj2_desc: 'An interactive tool that writes Malay folk tales from a few simple prompts.',
    proj3_desc: 'A gallery of modern batik designs generated and refined with AI imagery.',
    proj4_desc: 'Suggests local recipes from whatever ingredients you have in the fridge.',
    proj5_desc: 'A collection of patriotic tunes reimagined in different musical styles.',
    proj6_desc: 'A prototype that predicts congestion hotspots around Kuala Lumpur.',
    card_link: 'View project →',
    empty_state: 'No projects for this platform yet — check back soon!',

    about_h_pre: 'What is ',
    about_h_post: '?',
    about_p1: 'The name works two ways. In Malay, rampai means a medley — a rich mix of many things brought together. It\'s also ramp + AI: ramping up what you can build. rampai.my is both — a curated collection of projects Malaysians have created using AI, from dashboards to art to music. Proof of what anyone can make when great ideas meet powerful tools.',
    about_p2: "Built something with AI? We'd love to feature it.",
    about_cta: 'Submit your project',
    submit_h: 'Get featured',
    submit_p: "Send us your project and we'll add it to the gallery.",
    submit_item1: 'A thumbnail image',
    submit_item2: 'Title & short description',
    submit_item3: 'Which AI platform you used',
    submit_item4: 'A link to view the project',

    contact_title: 'Get in touch',
    contact_sub: "Have a question, an idea, or want your project featured? Send a message and we'll get back to you.",
    form_name: 'Name',
    form_name_ph: 'Your name',
    form_email: 'Email',
    form_email_ph: 'you@example.com',
    form_message: 'Message',
    form_message_ph: 'Write your message...',
    form_send: 'Send message',
    form_note_missing: 'Please fill in every field with a valid email address.',
    form_note_opening: 'Opening your email app…',

    footer_tag: 'Projects built with AI. Made in Malaysia.',
    footer_submit: 'Submit',
    footer_contact: 'Contact',
    footer_made: 'Made with ✨ and AI',
  },

  ms: {
    nav_projects: 'Projek',
    nav_about: 'Tentang',
    nav_contact: 'Hubungi',
    nav_submit: 'Hantar Projek',

    hero_pill: '✨ Tengok apa yang boleh dibina dengan AI',
    hero_title_1: 'Projek yang dibina dengan',
    hero_title_2: 'kuasa AI',
    hero_tagline: 'himpunan karya AI anak Malaysia',
    hero_sub: 'Di sinilah para pencipta tempatan berkongsi projek sebenar yang mereka bina guna AI. Selak galeri, klik mana-mana projek, dan tengok sendiri hasilnya.',
    hero_cta1: 'Terokai projek',
    hero_cta2: 'Kongsi karya anda',
    stat_projects: 'Projek',
    stat_platforms: 'Platform AI',
    stat_made: 'Buatan Malaysia',

    marquee_label: 'Dibina dengan alat AI yang anda kenal',
    gallery_title: 'Galeri',
    gallery_sub: 'Tapis projek ikut platform AI yang digunakan.',
    filter_all: 'Semua',

    proj1_desc: 'Dashboard jualan untuk kedai runcit, lengkap dengan ramalan jualan dan amaran stok.',
    proj2_desc: 'Alat interaktif yang menghasilkan cerita rakyat Melayu daripada beberapa prompt ringkas.',
    proj3_desc: 'Koleksi corak batik moden yang dijana dan dikemas menggunakan imej AI.',
    proj4_desc: 'Cadangkan resipi tempatan ikut bahan yang ada dalam peti sejuk anda.',
    proj5_desc: 'Koleksi lagu patriotik yang diolah semula dalam pelbagai gaya muzik.',
    proj6_desc: 'Prototaip yang meramal kawasan sesak trafik sekitar Kuala Lumpur.',
    card_link: 'Lihat projek →',
    empty_state: 'Belum ada projek untuk platform ini — datang lagi nanti!',

    about_h_pre: 'Apa itu ',
    about_h_post: '?',
    about_p1: 'Nama ini ada dua makna. Dalam bahasa Melayu, rampai bermaksud himpunan pelbagai perkara yang digabung jadi satu. Ia juga ramp + AI — memacu apa yang mampu anda cipta. Itulah rampai.my: koleksi projek yang dibina anak Malaysia guna AI, daripada dashboard hinggalah seni dan muzik. Bukti apa yang boleh terhasil bila idea bertemu teknologi.',
    about_p2: 'Ada bina sesuatu guna AI? Kongsi dengan kami.',
    about_cta: 'Hantar projek anda',
    submit_h: 'Nak dipaparkan di sini?',
    submit_p: 'Hantar projek anda, kami tambah ke dalam galeri.',
    submit_item1: 'Gambar thumbnail',
    submit_item2: 'Tajuk & penerangan ringkas',
    submit_item3: 'Platform AI yang digunakan',
    submit_item4: 'Pautan ke projek anda',

    contact_title: 'Hubungi kami',
    contact_sub: 'Ada soalan, idea, atau nak paparkan projek anda? Hantar mesej, kami balas nanti.',
    form_name: 'Nama',
    form_name_ph: 'Nama anda',
    form_email: 'Emel',
    form_email_ph: 'anda@contoh.com',
    form_message: 'Mesej',
    form_message_ph: 'Tulis mesej anda...',
    form_send: 'Hantar mesej',
    form_note_missing: 'Sila isi semua ruangan dengan alamat emel yang sah.',
    form_note_opening: 'Membuka aplikasi emel anda…',

    footer_tag: 'Projek yang dibina dengan AI. Buatan Malaysia.',
    footer_submit: 'Hantar',
    footer_contact: 'Hubungi',
    footer_made: 'Dibina dengan ✨ dan AI',
  },
};

// ---- Language handling --------------------------------------------
(function () {
  const STORAGE_KEY = 'rampai-lang';
  const langSwitch = document.getElementById('lang-switch');

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.documentElement.lang = lang === 'ms' ? 'ms' : 'en';

    if (langSwitch) {
      langSwitch.querySelectorAll('.lang-btn').forEach((b) => {
        b.classList.toggle('is-active', b.dataset.lang === lang);
      });
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  if (langSwitch) {
    langSwitch.addEventListener('click', function (e) {
      const btn = e.target.closest('.lang-btn');
      if (btn) applyLang(btn.dataset.lang);
    });
  }

  // Restore saved preference on load
  let saved = 'en';
  try { saved = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}
  applyLang(saved);
})();

// ---- Theme toggle (dark / light) ----------------------------------
(function () {
  const STORAGE_KEY = 'rampai-theme';
  const toggle = document.getElementById('theme-toggle');

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  // The inline head script already set the initial theme; sync the label.
  applyTheme(currentTheme());

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  }
})();

// ---- Contact form (opens the visitor's email app) -----------------
(function () {
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  if (!form) return;

  function getLang() {
    try { return localStorage.getItem('rampai-lang') || 'en'; } catch (e) { return 'en'; }
  }
  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const dict = I18N[getLang()] || I18N.en;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !message || !isEmail(email)) {
      note.textContent = dict.form_note_missing;
      note.className = 'form-note is-error';
      return;
    }

    const subject = 'rampai.my — message from ' + name;
    const body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
    const href =
      'mailto:salam@rampai.my?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    note.textContent = dict.form_note_opening;
    note.className = 'form-note is-ok';
    window.location.href = href;
  });
})();

// ---- Gallery filtering --------------------------------------------
(function () {
  const filterBar = document.getElementById('filters');
  const cards = Array.from(document.querySelectorAll('#project-grid .card'));
  const emptyState = document.getElementById('empty-state');

  if (!filterBar) return;

  filterBar.addEventListener('click', function (e) {
    const btn = e.target.closest('.filter');
    if (!btn) return;

    filterBar.querySelectorAll('.filter').forEach((f) => f.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.dataset.filter;
    let visibleCount = 0;

    cards.forEach((card) => {
      const match = filter === 'all' || card.dataset.platform === filter;
      card.classList.toggle('is-hidden', !match);
      if (match) {
        visibleCount++;
        card.classList.remove('is-enter');
        void card.offsetWidth; // force reflow
        card.classList.add('is-enter');
      }
    });

    if (emptyState) emptyState.hidden = visibleCount !== 0;
  });
})();

// ---- Scroll reveal + count-up -------------------------------------
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
  const stats = Array.from(document.querySelectorAll('.stat strong[data-count]'));

  // If motion is reduced or IntersectionObserver is unsupported, just show everything.
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('revealed'));
    return;
  }

  // Fade-up reveal, staggered among siblings
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = Array.from(el.parentElement.querySelectorAll(':scope > [data-reveal]'));
      const idx = Math.max(0, siblings.indexOf(el));
      el.style.transitionDelay = (idx * 80) + 'ms';
      el.classList.add('revealed');
      obs.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => revealObserver.observe(el));

  // Count-up numbers when the stats row enters view
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (stats.length) {
    const statObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    stats.forEach((s) => statObserver.observe(s));
  }
})();
