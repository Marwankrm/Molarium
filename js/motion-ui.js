/* Micro-animations discrètes (bibliothèque Motion, version « mini », licence MIT).
   Principes : 1 à 2 éléments animés par écran, 150 à 300 ms, aucun défilement forcé,
   et rien du tout si l'appareil demande moins d'animations (prefers-reduced-motion). */
(function () {
  'use strict';
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var EASE = [0.22, 1, 0.36, 1];
  function ok() { return !!(window.Motion && window.Motion.animate) && !(mq && mq.matches); }
  function clean(el) { el.style.opacity = ''; el.style.transform = ''; }
  function run(el, keyframes, opts) {
    try {
      var c = window.Motion.animate(el, keyframes, opts);
      var done = function () { clean(el); };
      if (c && c.finished && c.finished.then) c.finished.then(done, done); else setTimeout(done, ((opts.duration || .3) + (opts.delay || 0)) * 1000 + 80);
      return c;
    } catch (e) { clean(el); }
  }
  function all(root, sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
  function inViewport(el) { var r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < (window.innerHeight || 800); }

  window.UIFX = {
    // à l'arrivée d'une page : en-tête puis cartes visibles, en cascade (12 éléments au plus)
    page: function (root) {
      if (!ok() || !root) return;
      var targets = all(root, '.hero, .disc-head, .page-head, .stats .stat, .card, .pcard, .dcard, .section-title, .acc').filter(inViewport).slice(0, 12);
      targets.forEach(function (el, i) {
        run(el, { opacity: [0, 1], transform: ['translateY(10px)', 'translateY(0px)'] }, { duration: .3, delay: i * .045, ease: EASE });
      });
      // ouverture d'une section repliable : le contenu apparaît en douceur
      all(root, 'details.acc').forEach(function (d) {
        d.addEventListener('toggle', function () {
          if (!d.open || !ok()) return;
          var body = d.querySelector('.acc-body'); if (body) run(body, { opacity: [0, 1], transform: ['translateY(-6px)', 'translateY(0px)'] }, { duration: .22, ease: 'easeOut' });
        });
      });
    },
    // petit « rebond » sur un bouton (étape cochée, favori)
    // étape cochée : le rond rebondit, un anneau s'élargit, la ligne de l'étape s'éclaire un instant
    done: function (li, n) {
      if (!ok() || !li || !n) return;
      run(n, { transform: ['scale(1)', 'scale(1.14)', 'scale(1)'] }, { duration: .28, ease: EASE });
      try {
        var c = getComputedStyle(n).backgroundColor;
        var ring = window.Motion.animate(n, { boxShadow: ['0 0 0 0 ' + c, '0 0 0 10px rgba(0,0,0,0)'] }, { duration: .45, ease: 'easeOut' });
        var rm = function () { n.style.boxShadow = ''; };
        if (ring && ring.finished && ring.finished.then) ring.finished.then(rm, rm); else setTimeout(rm, 600);
      } catch (e) { n.style.boxShadow = ''; }
      var body = li.querySelector('.step-body');
      if (body) run(body, { transform: ['translateX(0px)', 'translateX(6px)', 'translateX(0px)'] }, { duration: .3, ease: EASE });
    },
    pop: function (el) { if (ok() && el) run(el, { transform: ['scale(1)', 'scale(1.1)', 'scale(1)'] }, { duration: .22, ease: 'easeOut' }); }
  };
})();
