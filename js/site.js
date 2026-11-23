/* Hagiazo Homes leasing site — vanilla JS for the behaviours the reference site rendered with React. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var CONTACT_EMAIL = 'partnerships@hagiazo-homes.com';
  var gbp = function (n) { return '£' + Math.round(n).toLocaleString('en-GB'); };

  /* ---------- Mobile menu ---------- */
  var menuBtn = $('#menu-toggle'), menu = $('#mobile-menu');
  if (menuBtn && menu) {
    var menuIcon = menuBtn.innerHTML;
    var closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-4 h-4" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
    var setMenu = function (open) {
      menu.hidden = !open;
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.innerHTML = open ? closeIcon : menuIcon;
    };
    menuBtn.addEventListener('click', function () { setMenu(menu.hidden); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth >= 768 && !menu.hidden) setMenu(false); });
  }

  /* ---------- Generic modal ---------- */
  var overlay = $('#modal-overlay'), modalBody = $('#modal-body'), modalInquire = $('#modal-inquire');
  var lastFocus = null;
  function openModal(html, inquiry) {
    if (!overlay) return;
    lastFocus = document.activeElement;
    modalBody.innerHTML = html;
    if (modalInquire) modalInquire.href = 'contact.html?inquiry=' + encodeURIComponent(inquiry || 'General Inquiry');
    overlay.hidden = false;
    document.body.classList.add('modal-open');
    var btn = $('[data-close-modal]', overlay); if (btn) btn.focus();
  }
  function closeModal() {
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (overlay) {
    overlay.addEventListener('click', function (e) { if (e.target === overlay || e.target.closest('[data-close-modal]')) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  }

  /* ---------- Hero arch cards ---------- */
  var heroCards = $$('.hero-card'), heroDots = $$('.hero-dot');
  var openIndex = -1;
  function setOpen(i) {
    openIndex = i;
    heroCards.forEach(function (c, k) { c.classList.toggle('is-open', k === i); });
    heroDots.forEach(function (d, k) { d.classList.toggle('is-active', k === i); });
    if (i >= 0 && window.innerWidth < 1024) heroCards[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
  heroCards.forEach(function (card, i) {
    var activate = function () {
      if (openIndex === i) {
        var t = $('#hero-detail-' + card.getAttribute('data-card'));
        if (t) openModal(t.innerHTML, 'Showcase: ' + card.getAttribute('aria-label'));
      } else setOpen(i);
    };
    card.addEventListener('click', activate);
    card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
  });
  heroDots.forEach(function (d, i) { d.addEventListener('click', function () { setOpen(i); }); });

  /* ---------- 3D gallery (port of the reference's pg-stage behaviour) ---------- */
  $$('.pg-stage').forEach(function (stage) {
    var images = [];
    try { images = JSON.parse(stage.getAttribute('data-images') || '[]'); } catch (e) { images = []; }
    var n = images.length; if (!n) return;
    var cards = [], cur = 0, target = 0, reveal = 0, hover = false, down = false, dragging = false;
    var W = 0, SP = 0, startX = 0, startT = 0, pid = 0, raf = 0, SPEED = 0.0045;
    var wrap = function (v) { return ((v + n / 2) % n + n) % n - n / 2; };
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    images.forEach(function (src, i) {
      var d = document.createElement('div'); d.className = 'pg-card';
      var img = new Image(); img.alt = ''; img.draggable = false; img.loading = 'lazy';
      img.onerror = function () { img.style.display = 'none'; };
      img.src = src; d.appendChild(img);
      d.addEventListener('click', function () { if (!dragging) target = Math.round(cur) + wrap(i - cur); });
      stage.appendChild(d); cards.push(d);
    });
    var layout = function () {
      var w = stage.clientWidth; W = Math.max(w * 0.1, 92); SP = Math.max(w * 0.097, W * 1.12);
      var h = W * 1.4; stage.style.height = Math.round(h * 1.75 + 30) + 'px';
      cards.forEach(function (c) { c.style.width = W + 'px'; c.style.height = h + 'px'; c.style.marginLeft = -W / 2 + 'px'; c.style.marginTop = -h / 2 + 'px'; });
    };
    var render = function () {
      cards.forEach(function (c, i) {
        var d = wrap(i - cur), a = Math.abs(d), sgn = d < 0 ? -1 : 1;
        var z = 60 * Math.pow(Math.min(a, 3.6), 1.5), ry = -sgn * Math.min(a, 3.2) * 13;
        var op = Math.max(0, Math.min(1, 1 - (a - 3) * 1.6)) * Math.min(1, reveal * 1.6);
        c.style.transform = 'translateX(' + d * SP * reveal + 'px) translateZ(' + z * reveal + 'px) rotateY(' + ry * reveal + 'deg)';
        c.style.opacity = String(op); c.style.zIndex = String(100 - Math.round(a * 10));
        c.style.pointerEvents = op < 0.2 ? 'none' : 'auto'; c.classList.toggle('on', a < 0.5);
      });
    };
    var tick = function () {
      if (!hover && !down && !reduce) target += SPEED;
      cur += (target - cur) * 0.09;
      if (reveal < 1) reveal = Math.min(1, reveal + 0.018);
      render(); raf = requestAnimationFrame(tick);
    };
    stage.addEventListener('pointerdown', function (e) { down = true; dragging = false; startX = e.clientX; startT = target; pid = e.pointerId; });
    stage.addEventListener('pointermove', function (e) {
      if (!down) return; var dx = e.clientX - startX;
      if (!dragging && Math.abs(dx) > 5) { dragging = true; stage.classList.add('drag'); try { stage.setPointerCapture(pid); } catch (err) {} }
      if (dragging) target = startT - dx / (SP * 1.2);
    });
    var up = function () { if (down) { down = false; stage.classList.remove('drag'); target = Math.round(target); setTimeout(function () { dragging = false; }, 0); } };
    stage.addEventListener('pointerup', up); stage.addEventListener('pointercancel', up);
    stage.addEventListener('mouseenter', function () { hover = true; }); stage.addEventListener('mouseleave', function () { hover = false; });
    window.addEventListener('resize', layout);
    layout(); tick();
    document.addEventListener('visibilitychange', function () { if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(tick); });
  });

  /* ---------- Pill filter groups (services, FAQ) ---------- */
  function pillGroup(groupId, onPick) {
    var group = $(groupId); if (!group) return;
    var btns = $$('button', group);
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.className = 'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all text-neutral-600 hover:text-neutral-950'; x.setAttribute('aria-pressed', 'false'); });
        b.className = 'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all bg-white text-neutral-950 shadow-xs'; b.setAttribute('aria-pressed', 'true');
        onPick(b.getAttribute('data-filter'));
      });
    });
  }
  pillGroup('#service-filters', function (key) {
    $$('.service-card').forEach(function (c) { c.hidden = !(key === 'all' || c.getAttribute('data-cat') === key); });
  });

  /* ---------- FAQ ---------- */
  var faqItems = $$('.faq-item'), faqSearch = $('#faq-search'), faqEmpty = $('#faq-empty');
  var faqCat = 'all';
  function faqApply() {
    var q = (faqSearch && faqSearch.value || '').trim().toLowerCase(), shown = 0;
    faqItems.forEach(function (it) {
      var ok = (faqCat === 'all' || it.getAttribute('data-cat') === faqCat) && (!q || it.textContent.toLowerCase().indexOf(q) >= 0);
      it.hidden = !ok; if (ok) shown++;
    });
    if (faqEmpty) faqEmpty.hidden = shown > 0;
  }
  function faqSet(it, open) {
    var btn = $('button', it), panel = $('.faq-panel', it), chev = $('.faq-chevron', it);
    it.setAttribute('data-open', open ? '1' : '0');
    it.className = 'rounded-2xl border transition-all duration-300 overflow-hidden ' + (open ? 'border-neutral-950 bg-white shadow-xs' : 'border-neutral-200 bg-[#FCFCFA] hover:border-neutral-400') + ' faq-item';
    chev.className = 'w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 transition-transform duration-300 ' + (open ? 'rotate-180 bg-neutral-950 text-white' : 'bg-white text-neutral-600') + ' faq-chevron';
    btn.setAttribute('aria-expanded', String(open)); panel.hidden = !open;
  }
  faqItems.forEach(function (it) {
    $('button', it).addEventListener('click', function () { faqSet(it, it.getAttribute('data-open') !== '1'); });
  });
  if (faqSearch) faqSearch.addEventListener('input', faqApply);
  pillGroup('#faq-filters', function (key) { faqCat = key; faqApply(); });

  /* ---------- Rental income estimator ---------- */
  var range = $('#calc-range');
  if (range) {
    var mode = 'landlord';
    var el = function (id) { return $('#' + id); };
    var modes = { landlord: { min: 800, max: 5000, step: 50, val: 1500, label: 'Current Market Rent (Monthly)', ticks: ['£800 (Min)', '£2,900', '£5,000'] },
                  partner: { min: 25000, max: 500000, step: 5000, val: 50000, label: 'Deployment Capital', ticks: ['£25,000 (Min Tranche)', '£250,000', '£500,000'] } };
    var setText = function (id, t) { var e = el(id); if (e) e.textContent = t; };
    var update = function () {
      var v = Number(range.value);
      setText('calc-value', gbp(v));
      if (mode === 'landlord') {
        var guaranteed = Math.round(v * 0.85 / 5) * 5;
        setText('calc-r1-label', 'Guaranteed Rent'); setText('calc-r1', gbp(guaranteed)); setText('calc-r1-sub', 'Per Month, Fixed');
        setText('calc-r2-label', 'Annual Income'); setText('calc-r2', gbp(guaranteed * 12)); setText('calc-r2-sub', 'Guaranteed, Zero Voids');
        setText('calc-r3-label', 'Lease Term'); setText('calc-r3', '3–7 Yrs'); setText('calc-r3-sub', 'Fixed, Reviews Agreed');
      } else {
        var annual = Math.round(v * 0.135);
        setText('calc-r1-label', 'Est. Annual Income'); setText('calc-r1', '+' + gbp(annual)); setText('calc-r1-sub', '60/40 Surplus Share');
        setText('calc-r2-label', '36-Month Total'); setText('calc-r2', gbp(v + annual * 3)); setText('calc-r2-sub', 'Capital + Income');
        setText('calc-r3-label', 'Distribution'); setText('calc-r3', 'Quarterly'); setText('calc-r3-sub', '24–36 Month Term');
      }
    };
    var setMode = function (m) {
      mode = m; var cfg = modes[m];
      range.min = cfg.min; range.max = cfg.max; range.step = cfg.step; range.value = cfg.val;
      setText('calc-label', cfg.label);
      var ticks = el('calc-ticks'); if (ticks) ticks.innerHTML = cfg.ticks.map(function (t) { return '<span>' + t + '</span>'; }).join('');
      $$('#calc-modes button').forEach(function (b) {
        var on = b.getAttribute('data-mode') === m;
        b.className = 'px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ' + (on ? 'bg-neutral-950 text-white' : 'text-neutral-600 hover:text-neutral-950');
        b.setAttribute('aria-pressed', String(on));
      });
      update();
    };
    $$('#calc-modes button').forEach(function (b) { b.addEventListener('click', function () { setMode(b.getAttribute('data-mode')); }); });
    range.addEventListener('input', update);
    update();
  }

  /* ---------- Landlord pack modal ---------- */
  var pack = $('#pack-overlay');
  if (pack) {
    var formView = $('#pack-form-view'), doneView = $('#pack-done-view'), packForm = $('#pack-form');
    var openPack = function () { formView.hidden = false; doneView.hidden = true; pack.hidden = false; document.body.classList.add('modal-open'); var e = $('#pack-email'); if (e) e.focus(); };
    var closePack = function () { pack.hidden = true; document.body.classList.remove('modal-open'); };
    $$('[data-open-pack]').forEach(function (b) { b.addEventListener('click', openPack); });
    pack.addEventListener('click', function (e) { if (e.target === pack || e.target.closest('[data-close-pack]')) closePack(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePack(); });
    packForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = $('#pack-email'); if (!email.checkValidity()) { email.reportValidity(); return; }
      var subject = 'Guaranteed Rent Landlord Pack request';
      var body = 'Please send the Guaranteed Rent Landlord Pack to ' + email.value + '.';
      window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      formView.hidden = true; doneView.hidden = false;
    });
  }

  /* ---------- Case-study income breakdown ---------- */
  $$('.case-card').forEach(function (card) {
    var open = function () {
      var t = $('#case-' + card.getAttribute('data-case'));
      if (t) openModal(t.innerHTML, 'Similar lease to ' + $('h3', card).textContent);
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', function (e) { if (e.key === 'Enter') open(); });
  });

  /* ---------- Engine page phase tabs ---------- */
  var phaseTabs = $$('#phase-tabs button');
  phaseTabs.forEach(function (b) {
    b.addEventListener('click', function () {
      var i = b.getAttribute('data-phase');
      phaseTabs.forEach(function (x) {
        var on = x === b;
        x.className = 'w-9 h-9 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ' + (on ? 'bg-neutral-950 text-white shadow-xs' : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100');
        x.setAttribute('aria-pressed', String(on));
      });
      $$('.phase-panel').forEach(function (p) { p.hidden = p.getAttribute('data-phase-panel') !== i; });
    });
  });

  /* ---------- Contact form ---------- */
  var form = $('#inquiry-form');
  if (form) {
    var typeInput = $('#inquiry-type'), typeBtns = $$('#inquiry-types button');
    typeBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        typeInput.value = b.getAttribute('data-type');
        typeBtns.forEach(function (x) {
          var on = x === b;
          x.className = 'px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ' + (on ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs' : 'border-neutral-200 text-neutral-700 hover:border-neutral-400 bg-white');
          x.setAttribute('aria-pressed', String(on));
        });
      });
    });
    var inquiry = new URLSearchParams(window.location.search).get('inquiry');
    if (inquiry) {
      var notes = $('#notes'); if (notes && !notes.value) notes.value = 'Inquiry regarding: ' + inquiry;
      var lc = inquiry.toLowerCase();
      var pick = lc.indexOf('partner') >= 0 || lc.indexOf('investor') >= 0 || lc.indexOf('income') >= 0 ? 'investor' : (lc.indexOf('supported') >= 0 || lc.indexOf('housing') >= 0 || lc.indexOf('corporate') >= 0 ? 'corporate' : null);
      if (pick) { var tb = typeBtns.filter(function (b) { return b.getAttribute('data-type') === pick; })[0]; if (tb) tb.click(); }
      var sec = $('#contact'); if (sec) setTimeout(function () { sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50);
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#name'), email = $('#email');
      if (!name.value.trim()) { name.reportValidity(); name.focus(); return; }
      if (!email.checkValidity() || !email.value.trim()) { email.reportValidity(); email.focus(); return; }
      var typeLabel = (typeBtns.filter(function (b) { return b.getAttribute('data-type') === typeInput.value; })[0] || {}).textContent || typeInput.value;
      var lines = ['Inquiring as: ' + typeLabel, 'Name: ' + name.value.trim(), 'Email: ' + email.value.trim(), 'Phone: ' + ($('#phone').value.trim() || '—'), 'Property / portfolio: ' + ($('#detail').value.trim() || '—'), '', ($('#notes').value.trim() || '')];
      window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Priority inquiry — ' + typeLabel) + '&body=' + encodeURIComponent(lines.join('\n'));
      var status = $('#form-status'); if (status) status.textContent = 'Your email client has opened with the inquiry pre-filled. Send it and we will reply within one working day.';
    });
  }

  /* ---------- Comparison table sorting ---------- */
  var table = $('#comparison-table');
  if (table) {
    var tbody = $('tbody', table), heads = $$('th[aria-sort]', table);
    var current = null, dir = 1;
    $$('button[data-sort]', table).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-sort');
        dir = current === key ? -dir : (key === 'id' || key === 'title' || key === 'from' ? 1 : -1);
        current = key;
        var rows = $$('tr', tbody);
        var numeric = ['ask', 'base', 'margin', 'pct', 'costs', 'net', 'conf', 'stage'].indexOf(key) >= 0;
        rows.sort(function (a, b) {
          var va = a.getAttribute('data-sort-' + key), vb = b.getAttribute('data-sort-' + key);
          var r = numeric ? Number(va) - Number(vb) : String(va).localeCompare(String(vb), 'en-GB');
          return r * dir;
        });
        rows.forEach(function (r, i) { r.className = i % 2 ? 'bg-[#F6F5F2]/60' : 'bg-white'; tbody.appendChild(r); });
        heads.forEach(function (th) { th.setAttribute('aria-sort', th.contains(btn) ? (dir === 1 ? 'ascending' : 'descending') : 'none'); });
      });
    });
  }
})();
