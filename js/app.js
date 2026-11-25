/* Protocoles cliniques – application statique (sans dépendance).
   Les contenus sont dans /data/*.js ; voir README.md pour ajouter un protocole. */
(function () {
  'use strict';

  // ---------- données ----------
  var DISCIPLINES = (window.DISCIPLINES || []).slice().sort(function (a, b) { return (a.ordre || 99) - (b.ordre || 99); });
  var $ = function (id) { return document.getElementById(id); };
  var $main = $('main'), $q = $('q'), $suggest = $('suggest'), $sidebar = $('sidebar'), $scrim = $('scrim'), $tabbar = $('tabbar');

  // ---------- utilitaires ----------
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k === 'style') n.setAttribute('style', attrs[k]);
      else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== false && attrs[k] != null) n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  // **gras**, [[à préciser]], [texte](https://lien) -> DOM (sans innerHTML)
  function rich(text) {
    var frag = document.createDocumentFragment();
    String(text).split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\]|\[[^\[\]]+\]\(https?:\/\/[^)\s]+\))/g).forEach(function (part) {
      if (!part) return;
      var link = /^\[([^\[\]]+)\]\((https?:\/\/[^)\s]+)\)$/.exec(part);
      if (part.slice(0, 2) === '**') frag.appendChild(el('strong', { text: part.slice(2, -2) }));
      else if (part.slice(0, 2) === '[[') frag.appendChild(el('span', { class: 'todo', text: part.slice(2, -2) }));
      else if (link) frag.appendChild(el('a', { href: link[2], target: '_blank', rel: 'noopener noreferrer', text: link[1] }));
      else frag.appendChild(document.createTextNode(part));
    });
    return frag;
  }
  function plain(text) { return String(text).replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/\[([^\[\]]+)\]\(https?:\/\/[^)\s]+\)/g, '$1'); }
  function ul(items) { return el('ul', null, items.map(function (t) { return el('li', null, [rich(t)]); })); }

  function annexeBody(x) {
    var box = el('div', { class: 'annexe' });
    if (x.intro) box.appendChild(el('p', { class: 'hint' }, [rich(x.intro)]));
    if (x.table) {
      var cols = x.table.cols, tb = el('table', { class: 'rtable' });
      tb.appendChild(el('thead', null, [el('tr', null, cols.map(function (c) { return el('th', { scope: 'col', text: c }); }))]));
      tb.appendChild(el('tbody', null, x.table.rows.map(function (r) {
        return el('tr', null, r.map(function (c, j) { return el(j === 0 ? 'th' : 'td', j === 0 ? { scope: 'row', 'data-label': cols[j] } : { 'data-label': cols[j] }, [rich(c)]); }));
      })));
      box.appendChild(el('div', { class: 'rtable-wrap' }, [tb]));
    }
    (x.sections || []).forEach(function (z) {
      var sec = el('div', { class: 'asec' }, [el('h3', { text: z.titre })]);
      if (z.texte) sec.appendChild(el('p', null, [rich(z.texte)]));
      if (z.items && z.items.length) sec.appendChild(ul(z.items));
      if (z.alerte) sec.appendChild(el('div', { class: 'tip' }, [icon('warn', 18, '2'), el('span', null, [rich(z.alerte)])]));
      box.appendChild(sec);
    });
    return box;
  }
  function stepLabel(titre, i) {
    var m = titre.match(/^(Séance|Temps|Étape|Phase)\s*(\d+[A-Z]?)\s*(\([^)]*\))?\s*[–-]\s*(.+)$/);
    return m ? { kind: m[1], n: m[2], note: m[3] ? m[3].slice(1, -1) : '', title: m[4] } : { kind: null, n: String(i + 1), note: '', title: titre };
  }
  function rawSvg(str) { var w = document.createElement('span'); w.innerHTML = str; return w.firstChild; }
  function discIco(id, cls) { var A = window.MOLARIUM_ART; return A ? rawSvg(A.discIcon(id, cls || 'dico')) : null; }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function plural(n, s, p) { return n + ' ' + (n > 1 ? (p || s + 's') : s); }

  var ICONS = {
    search: 'M21 21l-4.3-4.3M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
    menu: 'M4 6h16M4 12h16M4 18h16',
    close: 'M6 6l12 12M18 6L6 18',
    star: 'M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9L12 3.5z',
    sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
    moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
    print: 'M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z',
    link: 'M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1',
    share: 'M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13',
    chev: 'M6 9l6 6 6-6',
    check: 'M5 13l4 4L19 7',
    warn: 'M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
    home: 'M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10',
    grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
    tasks: 'M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01',
    textsize: 'M3 19L8 6l5 13M5 14h6M15 19l3-7 3 7M16 17h4',
    bulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5V16h8v-2.5A6 6 0 0 0 12 3z',
    arrow: 'M5 12h14M13 6l6 6-6 6',
    hospital: 'M3 21h18M5 21V8l7-5 7 5v13M10 12h4M12 10v4M10 21v-4h4v4',
    box: 'M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8',
    list: 'M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2',
    steps: 'M5 4v16M5 7h9M5 12h14M5 17h7',
    clip: 'M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1zM8 6H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2M9 12l2 2 4-4',
    chat: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z',
    cal: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
    book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5zM19 19v2H6',
    clock: 'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z',
    user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
    tooth: 'M12 6.5C11 5.3 9.8 4.5 8.3 4.5 6 4.5 4.5 6.3 4.5 8.8c0 2 .8 3.2 1.3 5 .5 1.9.6 4.2 1.2 5.7.3.8 1.3.8 1.6 0 .5-1.3.9-3.5 3.4-3.5s2.9 2.2 3.4 3.5c.3.8 1.3.8 1.6 0 .6-1.5.7-3.8 1.2-5.7.5-1.8 1.3-3 1.3-5 0-2.5-1.5-4.3-3.8-4.3-1.5 0-2.7.8-3.7 2z'
  };
  function icon(name, size, sw) {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('width', size || 20); s.setAttribute('height', size || 20);
    s.setAttribute('fill', 'none'); s.setAttribute('stroke', 'currentColor'); s.setAttribute('stroke-width', sw || '1.9');
    s.setAttribute('stroke-linecap', 'round'); s.setAttribute('stroke-linejoin', 'round'); s.setAttribute('aria-hidden', 'true');
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'path'); p.setAttribute('d', ICONS[name]); s.appendChild(p);
    return s;
  }
  function put(node, ic, size) { node.textContent = ''; node.appendChild(icon(ic, size)); }

  // stockage local
  function load(k, def) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? def : v; } catch (e) { return def; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var favs = load('favs', []), recents = load('recents', []);

  function toast(msg) {
    var t = el('div', { class: 'toast', role: 'status', text: msg }); document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 1800);
  }

  // ---------- préparation des données ----------
  var ALL = [];
  DISCIPLINES.forEach(function (d) {
    d.protocoles.forEach(function (p) {
      p._d = d; p._key = d.id + '/' + p.id;
      var parts = [d.nom, p.titre, p.resume, (p.indications || []).join(' '), (p.materiel || []).join(' '), (p.alertes || []).join(' '), (p.consignes || []).join(' ')];
      (p.annexes || []).forEach(function (x) { parts.push(x.titre, x.intro || ''); (x.table ? x.table.rows : []).forEach(function (r) { parts.push(r.join(' ')); }); (x.sections || []).forEach(function (z) { parts.push(z.titre, z.texte || '', (z.items || []).join(' ')); }); });
      (p.etapes || []).forEach(function (s) { parts.push(s.titre, (s.details || []).join(' '), (s.materiel || []).join(' '), s.astuce || ''); });
      p._hay = norm(plain(parts.join(' ')));
      ALL.push(p);
    });
  });
  var TOTAL = ALL.length;
  function byKey(k) { return ALL.filter(function (p) { return p._key === k; })[0]; }
  function findDisc(id) { return DISCIPLINES.filter(function (d) { return d.id === id; })[0]; }
  function findProto(d, pid) { return d && d.protocoles.filter(function (p) { return p.id === pid; })[0]; }
  function setTitle(t) { document.title = (t ? t + ' – ' : '') + 'Molarium · Protocoles d\'odontologie'; }
  function setDisc(d) { document.documentElement.style.setProperty('--d', d ? (d.couleur || '#0b6e7f') : '#0b6e7f'); }
  function colorStyle(d) { return '--d:var(--brand)'; }
  function isNarrow() { return window.matchMedia('(max-width:1000px)').matches; }

  // ---------- pastilles ----------
  function statusChip(p) {
    return p.statut === 'valide' ? el('span', { class: 'chip valid', text: 'Validé' + (p.validePar ? ' · ' + p.validePar : '') }) : el('span', { class: 'chip draft', text: 'À valider' });
  }
  function cardChips(p) {
    var c = [statusChip(p)];
    if (p.duree) c.push(el('span', { class: 'chip plain', text: p.duree }));
    return el('div', { class: 'chips' }, c);
  }

  // ---------- favoris, récents ----------
  function isFav(k) { return favs.indexOf(k) !== -1; }
  function toggleFav(k) {
    var i = favs.indexOf(k); if (i === -1) favs.unshift(k); else favs.splice(i, 1);
    save('favs', favs); refreshChrome(); return isFav(k);
  }
  function pushRecent(k) {
    recents = recents.filter(function (x) { return x !== k; }); recents.unshift(k); recents = recents.slice(0, 8); save('recents', recents);
  }
  function favButton(p, cls) {
    var b = el('button', { class: 'fav-btn' + (isFav(p._key) ? ' on' : ''), type: 'button', 'aria-label': 'Ajouter aux favoris', 'aria-pressed': isFav(p._key) ? 'true' : 'false', title: 'Favori', onclick: function (e) {
      e.preventDefault(); e.stopPropagation();
      var on = toggleFav(p._key); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
    } });
    b.appendChild(icon('star', 20)); return b;
  }
  function protoCard(p, showDisc) {
    var a = el('a', { class: 'pcard', href: '#/' + p._d.id + '/' + p.id, style: colorStyle(p._d) }, [
      showDisc ? el('span', { class: 'disc', text: p._d.nom }) : null,
      el('h3', { text: p.titre }),
      el('p', { text: p.resume }),
      cardChips(p),
      el('span', { class: 'go' }, [document.createTextNode('Ouvrir la fiche'), icon('arrow', 16, '2.4')])
    ]);
    var f = favButton(p); f.classList.add('fav'); a.appendChild(f);
    return a;
  }

  // ---------- chrome (barre, menu latéral, barre mobile) ----------
  function buildSidebar(active, activeProto) {
    $sidebar.textContent = '';
    var route = location.hash || '#/';
    function link(href, ic, label, badge, on) {
      var a = el('a', { class: 'side-link' + (on ? ' on' : ''), href: href }, [icon(ic, 19), el('span', { text: label })]);
      if (badge) a.appendChild(el('span', { class: 'badge', text: String(badge) })); return a;
    }
    $sidebar.appendChild(link('#/', 'home', 'Accueil', null, route === '#/' || route === '#' || route === ''));
    $sidebar.appendChild(link('#/favoris', 'star', 'Favoris', favs.length || null, /favoris/.test(route)));
    if (window.MATERIAUX) $sidebar.appendChild(link('#/materiaux', 'box', 'Matériaux', MAT_TOTAL || null, /materiaux/.test(route)));
    $sidebar.appendChild(el('div', { class: 'side-title', text: 'Disciplines' }));
    DISCIPLINES.forEach(function (d) {
      var on = d.id === active;
      $sidebar.appendChild(el('a', { class: 'side-disc' + (on ? ' on' : ''), href: '#/' + d.id, style: colorStyle(d) }, [
        discIco(d.id, 'side-ico'), el('span', { text: d.nom }), el('span', { class: 'badge', text: String(d.protocoles.length) })
      ]));
      var sub = el('div', { class: 'side-sub' });
      d.protocoles.forEach(function (p) { sub.appendChild(el('a', { href: '#/' + d.id + '/' + p.id, class: p.id === activeProto && on ? 'on' : '', text: p.titre })); });
      $sidebar.appendChild(sub);
    });
  }
  function buildTabbar() {
    var route = location.hash || '#/';
    $tabbar.textContent = '';
    function tab(href, ic, label, on, badge) {
      var a = el('a', { href: href, class: on ? 'on' : '' }, [icon(ic, 22), el('span', { text: label })]);
      if (badge) a.appendChild(el('span', { class: 'n', text: String(badge) })); return a;
    }
    $tabbar.appendChild(tab('#/', 'home', 'Accueil', route === '#/' || route === '#' || route === ''));
    var b = el('button', { type: 'button', onclick: function () { openMenu(true); } }, [icon('grid', 22), el('span', { text: 'Disciplines' })]);
    $tabbar.appendChild(b);
    $tabbar.appendChild(tab('#/favoris', 'star', 'Favoris', /favoris/.test(route), favs.length || null));
    if (window.MATERIAUX) $tabbar.appendChild(tab('#/materiaux', 'box', 'Matériaux', /materiaux/.test(route), null));
  }
  function openMenu(on) {
    $sidebar.classList.toggle('open', on); $scrim.classList.toggle('on', on); document.body.classList.toggle('menu-open', !!on);
    $('menuBtn').setAttribute('aria-expanded', on ? 'true' : 'false');
  }
  function refreshChrome(active, proto) {
    if (arguments.length === 0) { active = currentDisc; proto = currentProto; }
    currentDisc = active; currentProto = proto;
    buildSidebar(active, proto); buildTabbar();
  }
  var currentDisc = null, currentProto = null;

  // ---------- pages ----------
  function crumbs(parts) {
    var nav = el('nav', { class: 'crumbs', 'aria-label': "Fil d'Ariane" });
    parts.forEach(function (p, i) {
      if (i) nav.appendChild(el('span', { 'aria-hidden': 'true', text: '/' }));
      nav.appendChild(p.href ? el('a', { href: p.href, text: p.label }) : el('span', { text: p.label }));
    });
    return nav;
  }
  function mount(node) { $main.textContent = ''; $main.appendChild(node); if (window.UIFX) window.UIFX.page($main); }
  function banner() {
    try { if (sessionStorage.getItem('bannerOff')) return null; } catch (e) {}
    var b = el('div', { class: 'banner', role: 'note' }, [
      icon('warn', 20),
      el('p', null, [el('strong', { text: 'Contenu à valider. ' }), document.createTextNode('Ces fiches sont des brouillons rédigés d\'après les recommandations et la pratique du service. Elles doivent être relues et validées par les référents avant toute utilisation en consultation.')]),
      el('button', { type: 'button', 'aria-label': 'Masquer', onclick: function () { try { sessionStorage.setItem('bannerOff', '1'); } catch (e) {} b.remove(); } }, [icon('close', 18)])
    ]);
    return b;
  }

  function renderHome() {
    setTitle(''); setDisc(null); refreshChrome(null, null);
    var frag = document.createDocumentFragment();
    var heroBtns = el('div', { class: 'hero-cta' }, [
      el('button', { type: 'button', class: 'hero-btn main', onclick: function () { window.scrollTo(0, 0); $q.focus(); } }, [icon('search', 18), el('span', { text: 'Rechercher un protocole' })]),
      el('button', { type: 'button', class: 'hero-btn', onclick: function () { var g = document.querySelector('.grid'); if (g) g.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }); } }, [el('span', { text: 'Parcourir les disciplines' })])
    ]);
    var A = window.MOLARIUM_ART;
    frag.appendChild(el('section', { class: 'hero' }, [
      el('div', { class: 'hero-copy' }, [
        el('p', { class: 'kicker', text: 'Atlas clinique · Odontologie' }),
        el('h1', null, [document.createTextNode('Protocoles '), el('span', { class: 'hl', text: 'cliniques' }), document.createTextNode(' d\'odontologie')]),
        el('p', { class: 'lead', text: 'Les fiches de protocoles du service, discipline par discipline : séances, matériel, points de vigilance et consignes au patient.' }),
        heroBtns,
        el('div', { class: 'hero-meta' }, [
          el('div', null, [el('b', { text: pad2(DISCIPLINES.length) }), el('span', { text: 'disciplines' })]),
          el('div', null, [el('b', { text: String(TOTAL) }), el('span', { text: 'protocoles' })]),
          el('a', { href: '#/materiaux' }, [el('b', { text: String(MAT_TOTAL) }), el('span', { text: 'matériaux' })])
        ])
      ]),
      A ? el('figure', { class: 'plate' }, [
        (function () { var f = el('div', { class: 'plate-frame' }); f.appendChild(rawSvg(A.plate())); return f; })(),
        el('figcaption', null, [el('span', { text: 'Planche 01' }), document.createTextNode(' · Molaire en coupe')])
      ]) : null
    ]));
    var bn = banner(); if (bn) frag.appendChild(bn);
    if (A) {
      var od = el('div', { class: 'odonto', role: 'presentation' }, [el('p', { class: 'kicker', text: 'Odontogramme · notation FDI' })]);
      od.appendChild(rawSvg(A.odonto())); frag.appendChild(od);
    }

    var rec = recents.map(byKey).filter(Boolean).slice(0, 6);
    if (rec.length) {
      frag.appendChild(el('div', { class: 'section-title' }, [el('h2', { text: 'Récemment consultés' })]));
      var rail = el('div', { class: 'rail' }); rec.forEach(function (p) { rail.appendChild(protoCard(p, true)); }); frag.appendChild(rail);
    }
    var fv = favs.map(byKey).filter(Boolean);
    if (fv.length) {
      frag.appendChild(el('div', { class: 'section-title' }, [el('h2', { text: 'Favoris' }), el('a', { href: '#/favoris', text: 'Tout voir' })]));
      var rail2 = el('div', { class: 'rail' }); fv.slice(0, 6).forEach(function (p) { rail2.appendChild(protoCard(p, true)); }); frag.appendChild(rail2);
    }

    frag.appendChild(el('div', { class: 'section-title' }, [el('span', { class: 'sec-k', text: '01' }), el('h2', { text: 'Disciplines' })]));
    var grid = el('div', { class: 'grid' });
    DISCIPLINES.forEach(function (d, i) {
      grid.appendChild(el('a', { class: 'card', href: '#/' + d.id, style: colorStyle(d) }, [
        el('div', { class: 'card-top' }, [el('span', { class: 'badge-ico', 'aria-hidden': 'true' }, [discIco(d.id)]), el('span', { class: 'idx', text: pad2(i + 1) })]),
        el('h3', { text: d.nom }),
        el('p', { text: d.description }),
        el('div', { class: 'meta' }, [el('b', { text: plural(d.protocoles.length, 'fiche') }), el('span', { class: 'arr' }, [icon('arrow', 18, '2.2')])])
      ]));
    });
    frag.appendChild(grid);
    if (window.MATERIAUX) {
      frag.appendChild(el('div', { class: 'section-title' }, [el('span', { class: 'sec-k', text: '02' }), el('h2', { text: 'Matériaux' })]));
      frag.appendChild(el('a', { class: 'card card-wide', href: '#/materiaux', style: colorStyle({ couleur: '#1d5fa8' }) }, [
        el('div', { class: 'card-top' }, [el('span', { class: 'badge-ico', 'aria-hidden': 'true' }, [discIco('materiaux')]), el('span', { class: 'idx', text: String(MAT_TOTAL) })]),
        el('h3', { text: 'Matériaux du service' }),
        el('p', { text: 'Indications, contre-indications, méthode d\'utilisation et choix selon la situation, d\'après les notices.' }),
        el('div', { class: 'meta' }, [el('b', { text: plural(MAT_TOTAL, 'produit') }), el('span', { class: 'arr' }, [icon('arrow', 18, '2.2')])])
      ]));
    }
    mount(frag);
  }

  function renderDiscipline(d) {
    setTitle(d.nom); setDisc(d); refreshChrome(d.id, null);
    var frag = document.createDocumentFragment();
    frag.appendChild(crumbs([{ href: '#/', label: 'Accueil' }, { label: d.nom }]));
    var di = DISCIPLINES.indexOf(d) + 1;
    frag.appendChild(el('header', { class: 'disc-head', style: colorStyle(d) }, [el('span', { class: 'dh-ico', 'aria-hidden': 'true' }, [discIco(d.id)]), el('p', { class: 'kicker', text: 'Discipline ' + pad2(di) + ' · ' + plural(d.protocoles.length, 'fiche') }), el('h1', { text: d.nom })]));
    var list = el('div', { class: 'plist' });
    d.protocoles.forEach(function (p) { list.appendChild(protoCard(p, false)); });
    frag.appendChild(list); mount(frag);
  }

  // --- page protocole ---
  function acc(id, titre, body, opts) {
    opts = opts || {};
    var d = el('details', { class: 'acc ' + (opts.cls || ''), id: id });
    if (opts.open) d.setAttribute('open', '');
    var sum = el('summary', null, [opts.icon ? el('span', { class: 'acc-ico' }, [icon(opts.icon, 20, '2')]) : null, el('h2', { text: titre }), opts.count ? el('span', { class: 'cnt', text: String(opts.count) }) : null, el('span', { class: 'chev' }, [icon('chev', 20)])]);
    d.appendChild(sum); d.appendChild(el('div', { class: 'acc-body' }, [body])); return d;
  }

  function renderProtocol(d, p) {
    setTitle(p.titre); setDisc(d); refreshChrome(d.id, p.id); pushRecent(p._key);
    var storeKey = 'proto:' + d.id + ':' + p.id;
    var done = load(storeKey, {});
    var narrow = isNarrow();
    var frag = document.createDocumentFragment();

    frag.appendChild(el('div', { class: 'print-head' }, [document.createTextNode('Molarium · Protocoles d\'odontologie · ' + d.nom + (p.statut === 'valide' ? '' : ' · DOCUMENT À VALIDER'))]));
    frag.appendChild(crumbs([{ href: '#/', label: 'Accueil' }, { href: '#/' + d.id, label: d.nom }, { label: p.titre }]));

    // en-tête
    var chips = [statusChip(p)];
    var favB = el('button', { class: 'btn' + (isFav(p._key) ? ' fav-on on' : ''), type: 'button', onclick: function () {
      var on = toggleFav(p._key); favB.classList.toggle('fav-on', on); favB.classList.toggle('on', on); if (on && window.UIFX) window.UIFX.pop(favB); favB.lastChild.textContent = on ? 'Dans mes favoris' : 'Favori';
    } }, [icon('star', 18), el('span', { text: isFav(p._key) ? 'Dans mes favoris' : 'Favori' })]);
    var wake = null, wakeBtn = null;
    var actions = [favB];
    if (navigator.wakeLock) {
      wakeBtn = el('button', { class: 'btn', type: 'button', 'aria-pressed': 'false', onclick: function () {
        if (wake) { wake.release(); wake = null; wakeBtn.classList.remove('on'); wakeBtn.setAttribute('aria-pressed', 'false'); return; }
        navigator.wakeLock.request('screen').then(function (l) { wake = l; wakeBtn.classList.add('on'); wakeBtn.setAttribute('aria-pressed', 'true'); toast('Écran maintenu allumé'); l.addEventListener('release', function () { wake = null; wakeBtn.classList.remove('on'); }); }, function () { toast('Non disponible sur cet appareil'); });
      } }, [icon('bulb', 18), el('span', { text: 'Écran allumé' })]);
      actions.push(wakeBtn);
    }
    if ((p.materiel && p.materiel.length) || (p.etapes || []).some(function (x) { return x.materiel && x.materiel.length; })) {
      actions.unshift(el('button', { class: 'btn primary', type: 'button', onclick: function () { openPrep(d, p); } }, [icon('box', 18), el('span', { text: 'Préparer la séance (matériel)' })]));
    }
    actions.push(el('button', { class: 'btn', type: 'button', onclick: function () { window.print(); } }, [icon('print', 18), el('span', { text: 'Imprimer / PDF' })]));
    actions.push(el('button', { class: 'btn', type: 'button', onclick: function () {
      var data = { title: p.titre, text: p.resume, url: location.href };
      if (navigator.share) navigator.share(data).catch(function () {});
      else if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(function () { toast('Lien copié'); }, function () { prompt('Copiez le lien :', location.href); });
      else prompt('Copiez le lien :', location.href);
    } }, [icon(navigator.share ? 'share' : 'link', 18), el('span', { text: navigator.share ? 'Partager' : 'Copier le lien' })]));

    var pi = d.protocoles.indexOf(p) + 1;
    frag.appendChild(el('header', { class: 'page-head', style: colorStyle(d) }, [
      el('span', { class: 'ph-art', 'aria-hidden': 'true' }, [discIco(d.id)]),
      el('p', { class: 'kicker', text: d.nom + ' · Fiche ' + pad2(pi) + '/' + pad2(d.protocoles.length) }),
      el('h1', { text: p.titre }),
      el('div', { class: 'chips' }, chips), el('div', { class: 'actions' }, actions)
    ]));

    // sections
    var secs = [], toc = [], items = [];
    function add(id, label, node) { items.push({ id: id, label: label, node: node, i: items.length }); }
    var RANK = { 's-etapes': 0, 's-alertes': 1, 's-mat': 2, 's-prereq': 3, 's-indic': 4 };

    if (p.etapes && p.etapes.length) {
      var nVal = p.etapes.filter(function (x) { return x.validation; }).length;
      var facts = el('div', { class: 'facts' });
      function fact(ic, big, small) { facts.appendChild(el('div', { class: 'fact' }, [icon(ic, 20, '2'), el('div', null, [el('b', { text: big }), el('small', { text: small })])])); }
      if (p.duree) fact('clock', p.duree, 'durée');
      fact('steps', String(p.etapes.length), p.etapes.length > 1 ? 'étapes' : 'étape');
      if (nVal) fact('check', String(nVal), nVal > 1 ? 'validations encadrant' : 'validation encadrant');
      var ovl = el('ol', { class: 'ov-steps' });
      p.etapes.forEach(function (x, i) {
        var lab = stepLabel(x.titre, i);
        ovl.appendChild(el('li', null, [el('a', { href: '#step-' + i, 'data-step': String(i) }, [el('span', { class: 'ov-n', text: lab.n }), el('span', { class: 'ov-t' }, [document.createTextNode(lab.title)]), x.validation ? el('span', { class: 'ov-v', title: 'Validation encadrant' }, [icon('check', 14, '3')]) : null])]));
      });
      ovl.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[data-step]'); if (!a) return; e.preventDefault();
        var box = document.getElementById('s-etapes'); if (box) box.setAttribute('open', '');
        var st = document.getElementById('step-' + a.getAttribute('data-step')); if (st) st.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      void ('s-apercu', 'Aperçu', el('section', { class: 'overview', id: 's-apercu' }, [el('h2', { text: 'Aperçu de la fiche' }), facts, el('h3', { class: 'ov-h', text: 'Les étapes d\'un coup d\'œil' }), ovl]));
    }
    if (p.alertes && p.alertes.length) add('s-alertes', 'Vigilance', acc('s-alertes', 'Points de vigilance', ul(p.alertes), { cls: 'alert', open: false, icon: 'warn' }));
    if (p.indications || p.contreIndications) {
      var two = el('div', { class: 'two' });
      if (p.indications) two.appendChild(el('div', null, [el('h3', { text: 'Indications' }), ul(p.indications)]));
      if (p.contreIndications) two.appendChild(el('div', null, [el('h3', { text: 'Contre-indications / précautions' }), ul(p.contreIndications)]));
      add('s-indic', 'Indications', acc('s-indic', 'Indications et précautions', two, { open: false, icon: 'clip', cls: 'sec-blue' }));
    }

    if (p.etapes && p.etapes.length) {
      var bar = el('i'), label = el('span');
      var prog = el('div', { class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(p.etapes.length) }, [label, el('div', { class: 'bar' }, [bar])]);
      var steps = el('ol', { class: 'steps' });
      var save2 = function () { save(storeKey, done); };
      var update = function () {
        var n = Object.keys(done).filter(function (k) { return done[k]; }).length;
        bar.style.transform = 'scaleX(' + (n / p.etapes.length) + ')'; label.textContent = n + ' / ' + p.etapes.length + ' faites';
        prog.setAttribute('aria-valuenow', String(n));
      };
      var reset = el('button', { class: 'reset', type: 'button', text: 'Réinitialiser le suivi', onclick: function () {
        done = {}; save2(); Array.prototype.forEach.call(steps.children, function (li) { li.classList.remove('done'); li.querySelector('.step-n').setAttribute('aria-pressed', 'false'); }); update();
      } });
      p.etapes.forEach(function (s, i) {
        var lab = stepLabel(s.titre, i);
        var li = el('li', { class: 'step' + (done[i] ? ' done' : ''), id: 'step-' + i });
        var n = el('button', { class: 'step-n', type: 'button', 'data-n': lab.n, 'aria-pressed': done[i] ? 'true' : 'false', 'aria-label': 'Marquer l\'étape ' + lab.n + ' comme faite', onclick: function () {
          done[i] = !done[i]; li.classList.toggle('done', !!done[i]); n.setAttribute('aria-pressed', done[i] ? 'true' : 'false'); save2(); update(); if (done[i] && window.UIFX) window.UIFX.done(li, n);
        } });
        var head = el('div', { class: 'step-head' }, [lab.kind ? el('span', { class: 'eyebrow', text: lab.kind + ' ' + lab.n }) : null, el('h3', { text: lab.title }), lab.note ? el('p', { class: 'step-note', text: lab.note.charAt(0).toUpperCase() + lab.note.slice(1) }) : null]);
        var body = el('div', { class: 'step-body' }, [head]);
        if (s.details && s.details.length) body.appendChild(ul(s.details));
        if (s.materiel && s.materiel.length) {
          var m = el('div', { class: 'mat' }, [el('span', { class: 'lbl' }, [icon('box', 15, '2'), document.createTextNode('Matériel')])]);
          s.materiel.forEach(function (x) { m.appendChild(el('span', { class: 'm' }, [rich(x)])); }); body.appendChild(m);
        }
        if (s.validation) body.appendChild(el('div', { class: 'valid' }, [icon('check', 18, '2.6'), el('span', null, [el('strong', { text: 'À faire valider par l\'encadrant' }), document.createTextNode(typeof s.validation === 'string' ? ' : ' + s.validation : '')])]));
        if (s.astuce) body.appendChild(el('div', { class: 'tip' }, [icon('bulb', 18, '2'), el('span', null, [el('strong', { text: 'À retenir : ' }), rich(s.astuce)])]));
        li.appendChild(n); li.appendChild(body); steps.appendChild(li);
      });
      update();
      add('s-etapes', 'Déroulement', acc('s-etapes', 'Déroulement', el('div', null, [el('div', { class: 'progress-wrap' }, [prog]), steps, reset]), { open: false, count: p.etapes.length, icon: 'steps', cls: 'main-acc' }));
    }
    (p.annexes || []).forEach(function (x, i) {
      add('s-annexe-' + i, x.court || x.titre, acc('s-annexe-' + i, x.titre, annexeBody(x), { open: false, icon: x.icone || 'book', cls: 'sec-blue' }));
    });
    if (p.consignes && p.consignes.length) add('s-consignes', 'Consignes patient', acc('s-consignes', 'Consignes à donner au patient', ul(p.consignes), { open: false, icon: 'chat', cls: 'sec-ok' }));
    if (p.suivi && p.suivi.length) add('s-suivi', 'Suivi', acc('s-suivi', 'Suivi', ul(p.suivi), { open: false, icon: 'cal', cls: 'sec-blue' }));
    if (p.complications && p.complications.length) add('s-compl', 'Complications', acc('s-compl', 'Complications et conduite à tenir', ul(p.complications), { open: false, icon: 'warn', cls: 'sec-warn' }));
    if (p.erreurs && p.erreurs.length) add('s-erreurs', 'Erreurs fréquentes', acc('s-erreurs', 'Erreurs fréquentes à éviter', ul(p.erreurs), { open: false, icon: 'close', cls: 'sec-danger' }));
    if (p.references && p.references.length) add('s-refs', 'Références', acc('s-refs', 'Références', el('div', { class: 'refs' }, [ul(p.references)]), { open: false, icon: 'book', cls: 'sec-grey' }));

    var ORD = d.ordreSections;
    function rk(it) {
      if (ORD) { var k = ORD.indexOf(it.id.indexOf('s-annexe') === 0 ? 's-annexe' : it.id); return (k < 0 ? 100 : k) * 100 + it.i; }
      return it.id in RANK ? RANK[it.id] : 10 + it.i;
    }
    items.sort(function (x, y) { return rk(x) - rk(y); });
    items.forEach(function (it) { secs.push(it.node); toc.push({ id: it.id, label: it.label }); });

    // sommaire (barre mobile + colonne desktop)
    function tocLinks(cls) {
      return toc.map(function (t) { return el('a', { href: '#' + t.id, 'data-t': t.id, text: t.label }); });
    }
    var bar2 = el('nav', { class: 'toc-bar', 'aria-label': 'Sommaire' }, tocLinks());
    var side = el('nav', { class: 'toc-side', 'aria-label': 'Sommaire' }, [el('strong', { text: 'Sommaire' })].concat(tocLinks()));
    function jump(e) {
      var t = e.target.closest && e.target.closest('a[data-t]'); if (!t) return;
      e.preventDefault();
      var node = document.getElementById(t.getAttribute('data-t'));
      if (node) { if (node.tagName === 'DETAILS') node.setAttribute('open', ''); node.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
    bar2.addEventListener('click', jump); side.addEventListener('click', jump);

    frag.appendChild(bar2);
    frag.appendChild(el('div', { class: 'pwrap', style: colorStyle(d) }, [el('div', null, secs), side]));
    mount(frag);

    // section active dans le sommaire
    if ('IntersectionObserver' in window) {
      if (window._io) window._io.disconnect();
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var id = en.target.id;
          [bar2, side].forEach(function (nav) {
            Array.prototype.forEach.call(nav.querySelectorAll('a'), function (a) { var on = a.getAttribute('data-t') === id; a.classList.toggle('on', on); if (on && nav === bar2) { try { nav.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' }); } catch (e) {} } });
          });
        });
      }, { rootMargin: '-25% 0px -65% 0px' });
      toc.forEach(function (t) { var n = document.getElementById(t.id); if (n) io.observe(n); });
      window._io = io;
    }
  }


  // --- liste de matériel (« Préparer la séance ») ---
  function openPrep(d, p) {
    var key = 'prep:' + d.id + ':' + p.id;
    var checked = load(key, {});
    var stepsWith = (p.etapes || []).map(function (st, i) { return { i: i, lab: stepLabel(st.titre, i), items: st.materiel || [] }; }).filter(function (x) { return x.items.length; });
    var general = p.materiel || [];
    var mode = stepsWith.length ? 'steps' : 'gen', sel = null;
    var opener = document.activeElement;
    var wrap = el('div', { class: 'sheet-wrap' });
    var sheet = el('div', { class: 'sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Préparer la séance' });
    wrap.appendChild(sheet);
    function k(t) { return norm(plain(t)); }
    function visibleGroups() {
      if (mode === 'gen') return [{ title: null, items: general }];
      return stepsWith.filter(function (x) { return sel == null || sel === x.i; }).map(function (x) { return { title: (x.lab.kind ? x.lab.kind + ' ' + x.lab.n + ' · ' : '') + x.lab.title, items: x.items }; });
    }
    function uniqueKeys(groups) {
      var seen = {}, out = [];
      groups.forEach(function (g) { g.items.forEach(function (t) { var kk = k(t); if (!seen[kk]) { seen[kk] = 1; out.push(kk); } }); });
      return out;
    }
    function close() {
      document.removeEventListener('keydown', onKey); wrap.remove(); document.body.classList.remove('no-scroll');
      if (opener && opener.focus) try { opener.focus(); } catch (e) {}
    }
    function onKey(e) {
      if (e.key === 'Escape') { close(); return; }
      if (e.key === 'Tab') {
        var f = sheet.querySelectorAll('button,input,[tabindex]:not([tabindex="-1"])'); if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    function render(focusSel) {
      var groups = visibleGroups(), keys = uniqueKeys(groups);
      var n = keys.filter(function (kk) { return checked[kk]; }).length;
      sheet.textContent = '';
      var closeB = el('button', { class: 'icon-btn sheet-x', type: 'button', 'aria-label': 'Fermer', onclick: close }, [icon('close', 20)]);
      sheet.appendChild(el('div', { class: 'sheet-head' }, [el('div', null, [el('h2', { text: 'Préparer la séance' }), el('p', { class: 'muted', text: p.titre })]), closeB]));
      var body = el('div', { class: 'sheet-body' });
      if (stepsWith.length && general.length) {
        var tabs = el('div', { class: 'seg', role: 'tablist' });
        [['steps', 'Par séance'], ['gen', 'Liste générale']].forEach(function (t) {
          tabs.appendChild(el('button', { type: 'button', role: 'tab', class: mode === t[0] ? 'on' : '', 'aria-selected': mode === t[0] ? 'true' : 'false', text: t[1], onclick: function () { mode = t[0]; render('seg'); } }));
        });
        body.appendChild(tabs);
      }
      if (mode === 'steps' && stepsWith.length > 1) {
        var chips = el('div', { class: 'pchips' });
        chips.appendChild(el('button', { type: 'button', class: 'pchip' + (sel == null ? ' on' : ''), text: 'Tout', onclick: function () { sel = null; render('chip'); } }));
        stepsWith.forEach(function (x) {
          chips.appendChild(el('button', { type: 'button', class: 'pchip' + (sel === x.i ? ' on' : ''), text: x.lab.kind ? x.lab.kind + ' ' + x.lab.n : String(x.lab.n), title: x.lab.title, onclick: function () { sel = x.i; render('chip'); } }));
        });
        body.appendChild(chips);
      }
      var prog = el('div', { class: 'prep-prog' }, [el('strong', { text: n + ' / ' + keys.length + ' prêts' }), el('div', { class: 'bar' }, [el('i', { style: 'transform:scaleX(' + (keys.length ? n / keys.length : 0) + ')' })])]);
      body.appendChild(prog);
      if (n === keys.length && keys.length) body.appendChild(el('p', { class: 'prep-done', text: 'Tout est prêt. Bonne séance !' }));
      groups.forEach(function (g) {
        var box = el('div', { class: 'prep-group' });
        if (g.title) box.appendChild(el('h3', { text: g.title }));
        var list = el('ul', { class: 'prep-list' });
        g.items.forEach(function (t) {
          var kk = k(t), id = 'pp' + Math.random().toString(36).slice(2, 8);
          var cb = el('input', { type: 'checkbox', id: id });
          cb.checked = !!checked[kk];
          cb.addEventListener('change', function () { if (cb.checked) checked[kk] = true; else delete checked[kk]; save(key, checked); render('cb:' + kk); });
          list.appendChild(el('li', { class: checked[kk] ? 'on' : '' }, [el('label', { 'for': id }, [cb, el('span', null, [rich(t)])])]));
        });
        box.appendChild(list); body.appendChild(box);
      });
      if (!keys.length) body.appendChild(el('p', { class: 'muted', text: 'Aucun matériel renseigné pour cette fiche.' }));
      sheet.appendChild(body);
      var copyB = el('button', { class: 'btn', type: 'button', onclick: function () {
        var lines = [p.titre];
        groups.forEach(function (g) { if (g.title) lines.push('', g.title); g.items.forEach(function (t) { lines.push((checked[k(t)] ? '[x] ' : '[ ] ') + plain(t)); }); });
        var txt = lines.join('\n');
        var ok = function () { copyB.lastChild.textContent = 'Copié'; setTimeout(function () { copyB.lastChild.textContent = 'Copier la liste'; }, 1600); };
        if (navigator.clipboard) navigator.clipboard.writeText(txt).then(ok, function () { prompt('Copiez la liste :', txt); }); else prompt('Copiez la liste :', txt);
      } }, [icon('link', 16), el('span', { text: 'Copier la liste' })]);
      sheet.appendChild(el('div', { class: 'sheet-foot' }, [
        el('button', { class: 'btn', type: 'button', text: 'Tout cocher', onclick: function () { keys.forEach(function (kk) { checked[kk] = true; }); save(key, checked); render('foot'); } }),
        el('button', { class: 'btn', type: 'button', text: 'Réinitialiser', onclick: function () { keys.forEach(function (kk) { delete checked[kk]; }); save(key, checked); render('foot'); } }),
        copyB,
        el('button', { class: 'btn primary', type: 'button', text: 'Fermer', onclick: close })
      ]));
      var target = null, keepScroll = false;
      if (focusSel && focusSel.slice(0, 3) === 'cb:') {
        var want = focusSel.slice(3), boxes = sheet.querySelectorAll('.prep-list input'), gi = 0;
        groups.forEach(function (g) { g.items.forEach(function (t) { if (!target && k(t) === want) target = boxes[gi]; gi++; }); });
        keepScroll = true;
      }
      else if (focusSel === 'seg') target = sheet.querySelector('.seg .on');
      else if (focusSel === 'chip') target = sheet.querySelector('.pchip.on');
      else if (focusSel === 'foot') target = sheet.querySelector('.sheet-foot .btn');
      else target = sheet.querySelector('.sheet-x');
      if (target) try { target.focus({ preventScroll: keepScroll }); } catch (e) {}
    }
    wrap.addEventListener('click', function (e) { if (e.target === wrap) close(); });
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    document.body.appendChild(wrap);
    render();
  }

  // --- recherche ---
  function highlight(text, terms) {
    var frag = document.createDocumentFragment();
    if (!terms.length) { frag.appendChild(document.createTextNode(text)); return frag; }
    var nt = norm(text), ranges = [];
    terms.forEach(function (t) { var i = -1; while ((i = nt.indexOf(t, i + 1)) !== -1) ranges.push([i, i + t.length]); });
    ranges.sort(function (a, b) { return a[0] - b[0]; });
    var pos = 0;
    ranges.forEach(function (r) {
      if (r[0] < pos) return;
      frag.appendChild(document.createTextNode(text.slice(pos, r[0]))); frag.appendChild(el('mark', { text: text.slice(r[0], r[1]) })); pos = r[1];
    });
    frag.appendChild(document.createTextNode(text.slice(pos)));
    return frag;
  }
  function search(query) {
    var terms = norm(query).split(/\s+/).filter(Boolean), hits = [];
    ALL.forEach(function (p) {
      if (!terms.every(function (t) { return p._hay.indexOf(t) !== -1; })) return;
      var tn = norm(p.titre), score = terms.reduce(function (s, t) { return s + (tn.indexOf(t) !== -1 ? 4 : 0) + (norm(p._d.nom).indexOf(t) !== -1 ? 1 : 0) + (norm(p.resume).indexOf(t) !== -1 ? 1 : 0); }, 0);
      hits.push({ p: p, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    return { terms: terms, hits: hits };
  }
  function renderSearch(query) {
    setTitle('Recherche : ' + query); setDisc(null); refreshChrome(null, null);
    var r = search(query), frag = document.createDocumentFragment();
    frag.appendChild(crumbs([{ href: '#/', label: 'Accueil' }, { label: 'Recherche' }]));
    frag.appendChild(el('h1', { text: 'Résultats pour « ' + query + ' »' }));
    frag.appendChild(el('p', { class: 'muted', text: plural(r.hits.length, 'protocole trouvé', 'protocoles trouvés') }));
    if (!r.hits.length) frag.appendChild(el('div', { class: 'empty', text: 'Aucun protocole ne correspond. Essayez un autre terme (ex. « digue », « empreinte », « sondage »).' }));
    var list = el('div', { class: 'plist', style: 'margin-top:16px' });
    r.hits.forEach(function (h) {
      var p = h.p;
      var a = el('a', { class: 'pcard', href: '#/' + p._d.id + '/' + p.id, style: colorStyle(p._d) }, [
        el('span', { class: 'disc', text: p._d.nom }), el('h3', null, [highlight(p.titre, r.terms)]), el('p', null, [highlight(p.resume, r.terms)]), cardChips(p)
      ]);
      var f = favButton(p); f.classList.add('fav'); a.appendChild(f); list.appendChild(a);
    });
    frag.appendChild(list); mount(frag);
  }

  // suggestions instantanées
  var sugIndex = -1;
  function closeSuggest() { $suggest.hidden = true; $suggest.textContent = ''; sugIndex = -1; }
  function showSuggest(v) {
    var r = search(v); $suggest.textContent = '';
    if (!r.hits.length) { $suggest.appendChild(el('div', { class: 'empty', style: 'padding:16px', text: 'Aucun résultat' })); $suggest.hidden = false; return; }
    r.hits.slice(0, 6).forEach(function (h) {
      $suggest.appendChild(el('a', { href: '#/' + h.p._d.id + '/' + h.p.id, role: 'option', style: colorStyle(h.p._d), onclick: closeSuggest }, [
        el('span', { class: 'dot' }), el('span', null, [highlight(h.p.titre, r.terms), el('small', { text: h.p._d.nom })])
      ]));
    });
    if (r.hits.length > 6) $suggest.appendChild(el('a', { class: 'all', href: '#/recherche/' + encodeURIComponent(v), onclick: closeSuggest, text: 'Voir les ' + r.hits.length + ' résultats' }));
    $suggest.hidden = false; sugIndex = -1;
  }

  // --- favoris ---
  function renderFavs() {
    setTitle('Favoris'); setDisc(null); refreshChrome(null, null);
    var frag = document.createDocumentFragment();
    frag.appendChild(crumbs([{ href: '#/', label: 'Accueil' }, { label: 'Favoris' }]));
    frag.appendChild(el('h1', { text: 'Favoris' }));
    var list = favs.map(byKey).filter(Boolean);
    if (!list.length) frag.appendChild(el('div', { class: 'empty', text: 'Aucun favori pour le moment. Touchez l\'étoile d\'une fiche pour l\'ajouter ici.' }));
    var g = el('div', { class: 'plist' }); list.forEach(function (p) { g.appendChild(protoCard(p, true)); });
    frag.appendChild(g); mount(frag);
  }

  // --- matériaux du service ---
  var MAT_TOTAL = window.MATERIAUX ? window.MATERIAUX.sections.reduce(function (n, x) { return n + x.produits.length; }, 0) : 0;
  function matBlock(cls, titre, items) {
    return items && items.length ? el('div', { class: 'mblk ' + cls }, [el('h3', { text: titre }), ul(items)]) : null;
  }
  function matCard(p) {
    var src = p.src && p.src.length ? el('p', { class: 'msrc' }, [document.createTextNode('Source : ')].concat(p.src.reduce(function (acc2, x, i) {
      if (i) acc2.push(document.createTextNode(' · '));
      acc2.push(x.u === '#/materiaux' ? document.createTextNode(x.t) : /^https?:/.test(x.u) ? el('a', { href: x.u, target: '_blank', rel: 'noopener noreferrer', text: x.t }) : el('a', { href: x.u, text: x.t }));
      return acc2;
    }, []))) : null;
    var im = window.MATERIAUX_IMG && window.MATERIAUX_IMG[p.id];
    var fig = im ? el('figure', { class: 'mfig' }, [
      el('img', { src: im.f, alt: 'Photo : ' + p.nom.replace(/\*\*/g, ''), loading: 'lazy', width: '180', height: '180' }),
      im.credit ? el('figcaption', null, [document.createTextNode((im.note ? im.note + ' ' : '') + 'Image : ' + im.credit + (im.page ? ' · ' : '')), im.page ? el('a', { href: im.page, target: '_blank', rel: 'noopener noreferrer', text: 'page du produit' }) : null]) : null
    ]) : null;
    var body = el('div', null, [fig, el('p', { class: 'mtype', text: p.type }), matBlock('m-ind', 'Indications', p.ind), matBlock('m-ci', 'Contre-indications et précautions', p.ci), matBlock('m-met', 'Méthode d\'utilisation', p.met), matBlock('m-ret', 'À retenir', p.ret), src]);
    var d = acc('mat-' + p.id, p.nom.replace(/\*\*/g, ''), body, { open: false, icon: 'box', cls: 'mat-acc' });
    if (im && im.f) { var ico = d.querySelector('.acc-ico'); if (ico) { ico.textContent = ''; ico.appendChild(el('img', { src: im.f, alt: '', loading: 'lazy', width: '56', height: '56' })); } }
    d._hay = plain([p.nom, p.type, (p.ind || []).join(' '), (p.ci || []).join(' '), (p.met || []).join(' '), (p.ret || []).join(' ')].join(' ')).toLowerCase();
    return d;
  }
  function renderMateriaux() {
    setTitle('Matériaux'); setDisc(null); refreshChrome(null, null);
    var M = window.MATERIAUX; if (!M) return renderNotFound();
    var frag = document.createDocumentFragment();
    frag.appendChild(crumbs([{ href: '#/', label: 'Accueil' }, { label: 'Matériaux' }]));
    frag.appendChild(el('h1', { text: 'Matériaux du service' }));
    frag.appendChild(el('p', { class: 'muted', text: MAT_TOTAL + ' produits : indications, contre-indications, méthode d\'utilisation et choix selon la situation, d\'après les notices des fabricants et des thèses. Vérifier la notice du lot et faire valider par l\'encadrant.' }));
    var q = el('input', { type: 'search', class: 'mat-search', placeholder: 'Filtrer : produit ou usage…', 'aria-label': 'Filtrer les matériaux' });
    frag.appendChild(el('div', { class: 'toolbar' }, [q]));

    var choix = el('div', { class: 'mchoix' });
    M.choix.forEach(function (c) { choix.appendChild(el('div', { class: 'mc' }, [el('h3', { text: c.t }), el('p', null, [rich(c.x)])])); });
    var choixAcc = acc('mat-choix', 'Quel matériau dans quelle situation ?', choix, { open: true, icon: 'list', cls: 'sec-blue' });
    frag.appendChild(choixAcc);

    var groups = [];
    M.sections.forEach(function (sec) {
      var head = el('div', { class: 'section-title' }, [el('h2', { text: sec.titre })]);
      var cards = sec.produits.map(matCard);
      frag.appendChild(head); cards.forEach(function (c) { frag.appendChild(c); });
      groups.push({ head: head, cards: cards });
    });
    var none = el('div', { class: 'empty', text: 'Aucun produit ne correspond.', hidden: 'hidden' });
    frag.appendChild(none);
    q.addEventListener('input', function () {
      var v = q.value.trim().toLowerCase(), any = false;
      choixAcc.hidden = !!v;
      groups.forEach(function (g) {
        var n = 0;
        g.cards.forEach(function (c) { var ok = !v || c._hay.indexOf(v) >= 0; c.hidden = !ok; if (ok) n++; if (v && ok) c.setAttribute('open', ''); });
        g.head.hidden = !n; any = any || n > 0;
      });
      none.hidden = any || !v;
    });
    mount(frag);
  }

  function renderNotFound() {
    setTitle('Introuvable'); setDisc(null); refreshChrome(null, null);
    mount(el('div', { class: 'empty' }, [el('h1', { text: 'Page introuvable' }), el('a', { href: '#/', text: 'Retour à l\'accueil' })]));
  }

  // ---------- routeur ----------
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {}
  function toTop() {
    var h = document.documentElement; h.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0); document.body.scrollTop = 0; h.scrollTop = 0;
    requestAnimationFrame(function () { window.scrollTo(0, 0); setTimeout(function () { window.scrollTo(0, 0); h.style.scrollBehavior = ''; }, 60); });
  }
  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent).filter(Boolean);
    closeSuggest(); openMenu(false);
    toTop();
    if (parts[0] === 'recherche') { var q = parts.slice(1).join('/'); $q.value = q; return renderSearch(q); }
    $q.value = '';
    if (!parts.length) return renderHome();
    if (parts[0] === 'favoris') return renderFavs();
    if (parts[0] === 'materiaux') return renderMateriaux();
    var d = findDisc(parts[0]);
    if (!d) return renderNotFound();
    if (parts.length === 1) return renderDiscipline(d);
    var p = findProto(d, parts[1]);
    return p ? renderProtocol(d, p) : renderNotFound();
  }

  // ---------- interactions globales ----------
  $('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); var v = $q.value.trim(); closeSuggest();
    if (sugIndex >= 0 && $suggest.children[sugIndex]) { location.hash = $suggest.children[sugIndex].getAttribute('href'); return; }
    location.hash = v ? '#/recherche/' + encodeURIComponent(v) : '#/';
  });
  var timer;
  $q.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { var v = $q.value.trim(); if (v.length >= 2) showSuggest(v); else closeSuggest(); }, 120);
  });
  $q.addEventListener('keydown', function (e) {
    var items = $suggest.hidden ? [] : Array.prototype.filter.call($suggest.children, function (c) { return c.tagName === 'A'; });
    if (!items.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault(); sugIndex = (sugIndex + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items.forEach(function (a, i) { a.classList.toggle('on', i === sugIndex); });
    }
    if (e.key === 'Escape') closeSuggest();
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.search-wrap')) closeSuggest(); });
  document.addEventListener('keydown', function (e) {
    var tag = document.activeElement && document.activeElement.tagName;
    if (e.key === '/' && !/INPUT|TEXTAREA/.test(tag)) { e.preventDefault(); $q.focus(); }
    if (e.key === 'Escape') { if (document.activeElement === $q) $q.blur(); openMenu(false); }
  });
  $scrim.addEventListener('click', function () { openMenu(false); });
  $('menuBtn').addEventListener('click', function () { openMenu(!$sidebar.classList.contains('open')); });

  // thème et taille du texte
  var root = document.documentElement;
  root.setAttribute('data-theme', 'light'); try { localStorage.removeItem('theme'); } catch (e) {}
  var scales = [1, 1.12, 1.26], scaleIdx = Math.max(0, Math.min(2, load('scale', 0)));
  function applyScale() { root.style.setProperty('--scale', scales[scaleIdx]); }
  applyScale();
  $('textBtn').addEventListener('click', function () { scaleIdx = (scaleIdx + 1) % scales.length; save('scale', scaleIdx); applyScale(); toast('Texte : ' + ['normal', 'grand', 'très grand'][scaleIdx]); });

  put($('menuBtn'), 'menu'); put($('searchIco'), 'search', 18); put($('textBtn'), 'textsize');
  var bm = $('brandMark'); bm.appendChild(window.MOLARIUM_ART ? rawSvg(window.MOLARIUM_ART.logo()) : icon('tooth', 22, '1.8'));
  (function () { var A = window.MOLARIUM_ART, fi = document.querySelector('.foot-in'); if (A && fi) { var w = el('div', { class: 'foot-odonto', 'aria-hidden': 'true' }); w.appendChild(rawSvg(A.odonto())); fi.insertBefore(w, fi.firstChild); } })();
  $('footStats').textContent = plural(TOTAL, 'protocole') + ' · ' + plural(DISCIPLINES.length, 'discipline') + '.';

  window.addEventListener('beforeprint', function () { Array.prototype.forEach.call(document.querySelectorAll('details.acc'), function (x) { x.setAttribute('open', ''); }); });
  window.addEventListener('hashchange', route);
  route();
})();
