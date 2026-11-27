/* Dentadi : illustrations (SVG en ligne) — icônes de disciplines, planche anatomique, odontogramme, logo.
   Style : trait fin, une seule couleur (currentColor), remplissages à 12 % d'opacité. */
(function () {
  var A = window.MOLARIUM_ART = {};
  function svg(vb, inner, cls) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + vb + '" class="' + (cls || '') + '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + inner + '</svg>';
  }
  var TOOTH = 'M14 14c0-4.2 4-6.8 8-5.4 1.4.5 2.6.5 4 0 4-1.4 8 1.2 8 5.4 0 5-1.8 7.2-2.4 11.6-.6 4.4-1.4 10.4-4 10.4-2.4 0-2.4-5.6-3.6-5.6S22.4 41.6 20 41.6c-2.6 0-3.4-6-4-10.4C15.8 21.2 14 19 14 14z';
  var FILL = 'fill="currentColor" fill-opacity=".12" stroke="none"';

  // arc de dents (prothèse amovible)
  function arch() {
    var s = '', cx = 24, cy = 38, r1 = 14, r2 = 21, i, a, n = 7;
    s += '<path ' + FILL + ' d="M' + (cx - r2) + ' ' + cy + 'A' + r2 + ' ' + r2 + ' 0 0 1 ' + (cx + r2) + ' ' + cy + 'L' + (cx + r1) + ' ' + cy + 'A' + r1 + ' ' + r1 + ' 0 0 0 ' + (cx - r1) + ' ' + cy + 'Z"/>';
    s += '<path d="M' + (cx - r2) + ' ' + cy + 'A' + r2 + ' ' + r2 + ' 0 0 1 ' + (cx + r2) + ' ' + cy + 'M' + (cx - r1) + ' ' + cy + 'A' + r1 + ' ' + r1 + ' 0 0 1 ' + (cx + r1) + ' ' + cy + '"/>';
    for (i = 1; i < n; i++) {
      a = Math.PI + (Math.PI * i) / n;
      s += '<path d="M' + (cx + r1 * Math.cos(a)).toFixed(1) + ' ' + (cy + r1 * Math.sin(a)).toFixed(1) + 'L' + (cx + r2 * Math.cos(a)).toFixed(1) + ' ' + (cy + r2 * Math.sin(a)).toFixed(1) + '"/>';
    }
    return s + '<path d="M' + (cx - r2) + ' ' + cy + 'H' + (cx - r1) + 'M' + (cx + r1) + ' ' + cy + 'H' + (cx + r2) + '"/>';
  }
  A.disc = {
    'prothese-amovible': arch(),
    'prothese-fixee': '<path ' + FILL + ' d="' + TOOTH + '"/><path d="' + TOOTH + '"/><path d="M15.4 19.6c3.6 2.2 13.6 2.2 17.2 0"/><path d="M36 7l1.2 2.8L40 11l-2.8 1.2L36 15l-1.2-2.8L32 11l2.8-1.2z"/>',
    'endodontie': '<path ' + FILL + ' d="' + TOOTH + '"/><path d="' + TOOTH + '"/><path d="M20.5 20.5c3-1.4 4-1.4 7 0M21.5 23c-.2 6-.6 11-1.4 15M26.5 23c.2 6 .6 11 1.4 15"/>',
    'chirurgie': '<path d="M12 6l12 19M36 6L24 25"/><circle cx="24" cy="25" r="1.8" fill="currentColor"/><path d="M24 25c-5 2.4-8 6.4-8 12.4 0 2.2 1.8 3.4 4 3.4M24 25c5 2.4 8 6.4 8 12.4 0 2.2-1.8 3.4-4 3.4"/><path ' + FILL + ' d="M20 40.8c.4-3.8 1.8-5.8 4-5.8s3.6 2 4 5.8c-2.6 1.2-5.4 1.2-8 0z"/>',
    'dre': '<path ' + FILL + ' d="' + TOOTH + '"/><path d="' + TOOTH + '"/><path fill="currentColor" fill-opacity=".28" d="M19.2 16c3-1.2 7-1.2 9.6 0 .8 2.8 0 5.4-1.4 6.6-2.2 1-4.6 1-6.8 0-1.4-1.2-2.2-3.8-1.4-6.6z"/><path d="M34 8l1.2 2.6L38 12l-2.8 1.2L34 16"/>',
    'parodontologie': '<path d="M16 8.5c0-2.6 3-4.2 6-3.2 1.2.4 2.8.4 4 0 3-1 6 .6 6 3.2 0 3-1.2 4.6-1.6 7.8"/><path d="M5 22c5-3 9-3 14 0s9 3 14 0 8-3 10-.4"/><path d="M19 22c-.4 6-.8 11-1.6 14M29 22c.4 6 .8 11 1.6 14"/><path ' + FILL + ' d="M5 22c5-3 9-3 14 0s9 3 14 0 8-3 10-.4V30H5z"/><path d="M6 39c6 4.6 30 4.6 36 0"/>',
    'pedodontie': '<path ' + FILL + ' d="M12 21c0-5.4 5-8.6 12-6.4 7-2.2 12 1 12 6.4 0 5.4-2.2 8.6-3 12.8-.6 3-1.2 5-3.2 5-2.2 0-2.4-4.4-5.8-4.4s-3.6 4.4-5.8 4.4c-2 0-2.6-2-3.2-5C14.2 29.6 12 26.4 12 21z"/><path d="M12 21c0-5.4 5-8.6 12-6.4 7-2.2 12 1 12 6.4 0 5.4-2.2 8.6-3 12.8-.6 3-1.2 5-3.2 5-2.2 0-2.4-4.4-5.8-4.4s-3.6 4.4-5.8 4.4c-2 0-2.6-2-3.2-5C14.2 29.6 12 26.4 12 21z"/><path d="M40 6v8M36 10h8"/><path d="M20 22c1.6 1.4 6.4 1.4 8 0"/>',
    'tronc-commun': '<path ' + FILL + ' d="M24 5l15 5.4v11.6c0 9.4-6 16-15 20-9-4-15-10.6-15-20V10.4z"/><path d="M24 5l15 5.4v11.6c0 9.4-6 16-15 20-9-4-15-10.6-15-20V10.4z"/><path d="M16.6 23.6l5.2 5.2 9.6-10.6"/>',
    'materiaux': '<path ' + FILL + ' d="M24 5l16 8.8v18.4L24 41 8 32.2V13.8z"/><path d="M24 5l16 8.8v18.4L24 41 8 32.2V13.8z"/><path d="M8 13.8L24 23l16-9.2M24 23v18"/>'
  };
  A.discIcon = function (id, cls) { return svg('0 0 48 48', A.disc[id] || A.disc['tronc-commun'], cls || 'dico'); };

  // logo : molaire pleine, pointe de pulpe
  A.logo = function () {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="#fff" d="M8.4 9.6C8.4 6.4 11.4 4.6 14.4 5.6c1 .3 2.2.3 3.2 0 3-1 6 .8 6 4 0 3.6-1.4 5.4-1.8 8.8-.5 3.4-1.1 8-3 8-1.8 0-1.8-4.4-2.8-4.4s-1 4.4-2.8 4.4c-1.9 0-2.5-4.6-3-8-.4-3.4-1.8-5.2-1.8-8.8z"/><path d="M13.2 11.2c1.8 1 3.8 1 5.6 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>';
  };

  // molaire interactive : chaque zone ouvre la discipline correspondante
  A.molar = function (labels) {
    labels = labels || {};
    var T = 'M104 118C104 62 148 40 190 56C232 40 276 62 276 118C276 158 260 178 256 216C252 264 244 308 228 336C222 346 210 340 206 324C200 298 196 264 190 248C184 264 180 298 174 324C170 340 158 346 152 336C136 308 128 264 124 216C120 178 104 158 104 118Z';
    var PULP = 'M150 128C150 112 230 112 230 128C230 148 216 158 206 168L174 168C164 158 150 148 150 128Z';
    var CANAL = 'M176 170C172 214 168 270 162 322M204 170C208 214 212 270 218 322';
    var GUML = 'M24 192C54 166 92 162 108 176C116 196 122 214 128 226C98 234 54 232 24 224Z';
    var GUMR = 'M356 192C326 166 288 162 272 176C264 196 258 214 252 226C282 234 326 232 356 224Z';
    function zone(id, label, shapes, pin, lab, anchor) {
      var lx = lab[0], ly = lab[1];
      return '<g class="m-zone" data-disc="' + id + '" tabindex="0" role="link" aria-label="' + label + '">' +
        '<g class="m-fill">' + shapes + '</g>' +
        '<path class="m-lead" d="M' + pin[0] + ' ' + pin[1] + 'L' + lx + ' ' + ly + (anchor === 'end' ? 'h-6' : 'h6') + '"/>' +
        '<circle class="m-ring" cx="' + pin[0] + '" cy="' + pin[1] + '" r="9"/><circle class="m-dot" cx="' + pin[0] + '" cy="' + pin[1] + '" r="3.6"/>' +
        '<text class="m-lab" x="' + (anchor === 'end' ? lx - 10 : lx + 10) + '" y="' + (ly + 4) + '" text-anchor="' + (anchor || 'start') + '">' + label + '</text>' +
        '<text class="m-sub" x="' + (anchor === 'end' ? lx - 10 : lx + 10) + '" y="' + (ly + 18) + '" text-anchor="' + (anchor || 'start') + '">' + (labels[id] || '') + '</text>' +
        '</g>';
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-30 0 480 430" class="molar-svg" role="group" aria-label="Molaire interactive : survolez une zone pour ouvrir la discipline correspondante">' +
      '<defs><clipPath id="mc-root"><rect x="0" y="228" width="380" height="150"/></clipPath><clipPath id="mc-enamel"><rect x="0" y="0" width="380" height="110"/></clipPath><clipPath id="mc-crown"><rect x="0" y="0" width="380" height="178"/></clipPath></defs>' +
      '<g transform="translate(40 22)">' +
      '<path class="m-base" d="' + T + '"/>' +
      '<path class="m-enamel-line" d="M118 120C118 74 152 56 190 70C228 56 262 74 262 120"/>' +
      '<path class="m-pulp-line" d="' + PULP + '"/><path class="m-canal-line" d="' + CANAL + '"/><path class="m-gum-line" d="' + GUML + '"/><path class="m-gum-line" d="' + GUMR + '"/>' +
      zone('prothese-fixee', 'Prothèse fixée', '<path d="' + T + '" clip-path="url(#mc-crown)"/>', [112, 128], [-6, 74], 'end') +
      zone('dre', 'Restauratrice', '<path d="' + T + '" clip-path="url(#mc-enamel)"/>', [250, 78], [330, 38]) +
      zone('endodontie', 'Endodontie', '<path d="' + PULP + '"/><path d="' + CANAL + '" fill="none"/>', [226, 138], [344, 132]) +
      zone('parodontologie', 'Parodontologie', '<path d="' + GUML + '"/><path d="' + GUMR + '"/>', [58, 206], [-6, 232], 'end') +
      zone('chirurgie', 'Chirurgie orale', '<path d="' + T + '" clip-path="url(#mc-root)"/>', [236, 292], [330, 326]) +
      '</g></svg>';
  };
})();
