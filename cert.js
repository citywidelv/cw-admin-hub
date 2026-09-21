/* cert.js - City Wide Vendor of the Month certificate, drawn in the browser with jsPDF.
   Build 2026-09-21. A line-for-line port of generate_certificate.py v4 (the reportlab
   script in IC/Vendor of the Month/2026/_Certificate Template), so the PDF the Admin Hub
   makes matches the ones in the OneDrive folder. Assets live next to this file in ./cert/:
   four subset TTFs (DejaVu Serif Bold, DejaVu Sans, Lora, Lora Italic), logo.png and
   signature.png. jsPDF and the assets load on first use only, never on page load.

   Browser:  CWCert.make({name, month, year, region}).then(function(r){ r.doc, r.blob, r.base64, r.filename })
   Node:     require('./cert.js').draw(doc, opts, assets) after registerFonts(doc, fonts)
*/
(function (root) {
  "use strict";
  var W = 792, H = 612;   // landscape US Letter in points
  var C = {
    red: [210, 39, 48], redDark: [142, 27, 34], black: [45, 42, 38], grey: [99, 100, 102],
    teal: [10, 166, 169], tealDark: [6, 118, 121], tealLight: [95, 194, 196], tealPale: [224, 244, 244], white: [255, 255, 255]
  };
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var FONT_FILES = [
    { file: "DejaVuSerif-Bold.ttf", name: "DejaVuSerif", style: "bold" },
    { file: "DejaVuSans.ttf", name: "DejaVuSans", style: "normal" },
    { file: "Lora-Regular.ttf", name: "Lora", style: "normal" },
    { file: "Lora-Italic.ttf", name: "Lora", style: "italic" }
  ];
  var F = { serifB: ["DejaVuSerif", "bold"], sans: ["DejaVuSans", "normal"], lora: ["Lora", "normal"], loraI: ["Lora", "italic"] };

  function registerFonts(doc, fonts) {
    FONT_FILES.forEach(function (f) {
      if (!fonts[f.file]) throw new Error("Missing font " + f.file);
      doc.addFileToVFS(f.file, fonts[f.file]);
      doc.addFont(f.file, f.name, f.style);
    });
  }

  // ---------- drawing in reportlab coordinates (origin bottom-left), flipped on output ----------
  function draw(doc, o, A) {
    var name = String(o.name || "").trim();
    var month = MONTHS[(Number(o.month) || 1) - 1] || String(o.month || "");
    var year = String(o.year || "");
    var city = /north/i.test(String(o.region || "")) ? "Reno, Nevada" : "Las Vegas, Nevada";
    var cx = W / 2;

    var Y = function (y) { return H - y; };
    var fill = function (c) { doc.setFillColor(c[0], c[1], c[2]); };
    var stroke = function (c) { doc.setDrawColor(c[0], c[1], c[2]); };
    var textColor = function (c) { doc.setTextColor(c[0], c[1], c[2]); };
    var font = function (f, size) { doc.setFont(f[0], f[1]); doc.setFontSize(size); };
    var textW = function (s, f, size) { font(f, size); return doc.getTextWidth(s); };
    var centred = function (x, y, s) { doc.text(s, x, Y(y), { align: "center" }); };
    var rect = function (x, y, w, h, style) { doc.rect(x, Y(y) - h, w, h, style); };
    var circle = function (x, y, r, style) { doc.circle(x, Y(y), r, style); };
    var line = function (x1, y1, x2, y2) { doc.line(x1, Y(y1), x2, Y(y2)); };
    var poly = function (pts, style) {
      var ops = pts.map(function (p, i) { return { op: i ? "l" : "m", c: [p[0], Y(p[1])] }; });
      ops.push({ op: "h" });
      doc.path(ops);
      if (style === "F") doc.fill(); else if (style === "FD") doc.fillStroke(); else doc.stroke();
    };
    var curves = function (ops, style) {   // ops in reportlab space: [['m',x,y],['c',x1,y1,x2,y2,x3,y3],['h']]
      doc.path(ops.map(function (s) {
        if (s[0] === "h") return { op: "h" };
        var c = []; for (var i = 1; i < s.length; i += 2) { c.push(s[i]); c.push(Y(s[i + 1])); }
        return { op: s[0], c: c };
      }));
      if (style === "F") doc.fill(); else if (style === "FD") doc.fillStroke(); else doc.stroke();
    };
    var image = function (data, x, y, w, h) { doc.addImage(data, "PNG", x, Y(y) - h, w, h); };

    function star(cxs, cys, outer, inner, points, fc, sc, sw, rot) {
      var pts = [];
      for (var i = 0; i < 2 * points; i++) {
        var r = i % 2 === 0 ? outer : inner;
        var a = Math.PI / 2 + (rot || 0) + i * Math.PI / points;
        pts.push([cxs + r * Math.cos(a), cys + r * Math.sin(a)]);
      }
      if (fc) fill(fc);
      if (sc) { stroke(sc); doc.setLineWidth(sw || 0); }
      poly(pts, fc && sc ? "FD" : fc ? "F" : "S");
    }
    function iconSparkle(x, y, size, col) {
      star(x, y, size, size * 0.13, 4, col);
      star(x, y, size * 0.55, size * 0.10, 4, col, null, 0, Math.PI / 4);
      fill(col); circle(x, y, size * 0.14, "F");
    }
    function iconStar(x, y, size, col) { star(x, y, size, size * 0.42, 5, col); }
    function iconBuilding(x, y, size, col) {
      fill(col);
      var w = size * 1.6, h = size * 1.5;
      var bw1 = w * 0.30, bh1 = h;
      rect(x - w / 2, y - h / 2, bw1, bh1, "F");
      var bw2 = w * 0.32, bh2 = h * 0.72;
      rect(x - w / 2 + bw1 + 2, y - h / 2, bw2, bh2, "F");
      var bw3 = w * 0.28, bh3 = h * 0.55;
      rect(x - w / 2 + bw1 + bw2 + 4, y - h / 2, bw3, bh3, "F");
      fill(C.white);
      for (var i = 0; i < 3; i++) rect(x - w / 2 + bw1 * 0.2, y - h / 2 + h * 0.15 + i * h * 0.25, bw1 * 0.6, h * 0.06, "F");
    }
    function iconLeaf(x, y, size, col) {
      fill(col);
      curves([["m", x - size * 0.05, y - size * 0.95],
        ["c", x - size, y - size * 0.5, x - size, y + size * 0.4, x, y + size * 0.95],
        ["c", x + size, y + size * 0.4, x + size, y - size * 0.5, x - size * 0.05, y - size * 0.95], ["h"]], "F");
      stroke(C.white); doc.setLineWidth(size * 0.10);
      line(x, y + size * 0.85, x, y - size * 0.85);
    }
    function badge(x, y, r, iconFn) {
      fill(C.teal); circle(x, y, r, "F");
      fill(C.tealPale); circle(x, y, r * 0.86, "F");
      iconFn(x, y, r * 0.55, C.tealDark);
    }
    function trioFor(n) {
      var s = n.toLowerCase();
      if (/landscap|lawn|garden/.test(s)) return [iconLeaf, iconStar, iconBuilding];
      return [iconSparkle, iconStar, iconBuilding];
    }

    // borders
    var mo = 0.22 * 72;
    stroke(C.red); doc.setLineWidth(8); rect(mo, mo, W - 2 * mo, H - 2 * mo, "S");
    var mt = 0.40 * 72;
    stroke(C.teal); doc.setLineWidth(1.6); rect(mt, mt, W - 2 * mt, H - 2 * mt, "S");
    var mi = 0.52 * 72;
    stroke(C.tealLight); doc.setLineWidth(0.6); rect(mi, mi, W - 2 * mi, H - 2 * mi, "S");

    // corner rosettes
    var inset = 0.46 * 72, rs = 18;
    [[inset, inset], [W - inset, inset], [inset, H - inset], [W - inset, H - inset]].forEach(function (p) {
      star(p[0], p[1], rs, rs * 0.42, 8, C.tealLight);
      fill(C.teal); circle(p[0], p[1], rs * 0.36, "F");
      fill(C.white); circle(p[0], p[1], rs * 0.27, "F");
      star(p[0], p[1], rs * 0.24, rs * 0.10, 4, C.red);
      fill(C.teal); circle(p[0], p[1], rs * 0.05, "F");
    });

    // ribbon
    var rw = 3.6 * 72, rh = 32, rtop = H - 0.75 * 72;
    (function ribbon(top, width, height, text) {
      var hw = width / 2, notch = height * 0.32, tailW = width * 0.10, tailDrop = height * 0.55;
      [-1, 1].forEach(function (sg) {
        fill(C.redDark);
        poly([[cx + sg * (hw - 4), top - height * 0.25],
          [cx + sg * (hw + tailW), top - height * 0.25 - tailDrop * 0.4],
          [cx + sg * (hw + tailW * 0.55), top - height * 0.25 - tailDrop],
          [cx + sg * (hw - 4), top - height * 0.65]], "F");
      });
      fill(C.red); stroke(C.teal); doc.setLineWidth(1.3);
      poly([[cx - hw, top], [cx + hw, top], [cx + hw + 4, top - height + notch], [cx + hw * 0.62, top - height + notch * 0.4],
        [cx, top - height + 4], [cx - hw * 0.62, top - height + notch * 0.4], [cx - hw - 4, top - height + notch]], "FD");
      var iy = top - height / 2 + 1;
      textColor(C.white); font(F.serifB, 13); centred(cx, iy - 4, text);
      var tw = textW(text, F.serifB, 13), isz = height * 0.26;
      var off = Math.max(tw / 2 + 14, hw * 0.85); off = Math.min(off, hw - 16);
      iconSparkle(cx - off, iy, isz, C.white); iconSparkle(cx + off, iy, isz, C.white);
    })(rtop, rw, rh, "VENDOR OF THE MONTH");

    // logo
    var lw = 1.55 * 72, lh = lw * (179 / 1291), ly = rtop - rh - 16 - lh;
    image(A.logo, cx - lw / 2, ly, lw, lh);

    // service badge trio
    var trio = trioFor(name), by = ly - 30, br = 14, bg = 56, bxs = [cx - bg, cx, cx + bg];
    bxs.forEach(function (bx, i) { badge(bx, by, br, trio[i]); });
    stroke(C.tealLight); doc.setLineWidth(0.6);
    line(bxs[0] + br, by, bxs[1] - br, by); line(bxs[1] + br, by, bxs[2] - br, by);

    // eyebrow, title, divider
    var ey = by - 28;
    textColor(C.tealDark); font(F.loraI, 12); centred(cx, ey, month + " " + year);
    var ty = ey - 32;
    textColor(C.black); font(F.serifB, 30); centred(cx, ty, "Certificate of Excellence");
    function divider(y, halfW, col, orn) {
      var gap = 14; stroke(col); doc.setLineWidth(0.7);
      line(cx - halfW, y, cx - gap, y); line(cx + gap, y, cx + halfW, y);
      line(cx - halfW - 6, y, cx - halfW - 2, y); line(cx + halfW + 2, y, cx + halfW + 6, y);
      if (orn === "sparkle") iconSparkle(cx, y, 5.5, col);
      else if (orn === "trio") { fill(col); circle(cx - 8, y, 1.8, "F"); circle(cx, y, 2.4, "F"); circle(cx + 8, y, 1.8, "F"); }
    }
    var d1 = ty - 18; divider(d1, 1.4 * 72, C.teal, "sparkle");
    var py = d1 - 26;
    textColor(C.grey); font(F.loraI, 14); centred(cx, py, "is hereby presented to");

    // vendor name, auto-fit
    var maxW = W - 2 * (0.85 * 72), ns = 46;
    while (ns > 24 && textW(name, F.serifB, ns) > maxW) ns -= 1;
    var ny = py - 42;
    textColor(C.red); font(F.serifB, ns); centred(cx, ny, name);
    var nw = textW(name, F.serifB, ns), fy = ny + ns * 0.30, maxFx = W - 0.65 * 72, minFx = 0.65 * 72;
    [-1, 1].forEach(function (sg) {
      var bx = cx + sg * (nw / 2 + 28);
      [[bx, 9, C.teal], [bx + sg * 22, 5.5, C.tealLight]].forEach(function (s) { if (minFx < s[0] && s[0] < maxFx) iconSparkle(s[0], fy, s[1], s[2]); });
      var tip = bx + sg * 36;
      if (minFx < tip && tip < maxFx) { fill(C.tealLight); circle(tip, fy, 1.7, "F"); }
    });
    var d2 = ny - 26; divider(d2, 2.0 * 72, C.teal, "trio");

    // citation
    var cy = d2 - 28;
    textColor(C.black); font(F.lora, 12.5);
    ["In grateful recognition of outstanding performance, dedication, and the",
      "highest standards of service demonstrated throughout " + month + " " + year + ".",
      "Your partnership reflects the values and commitment that define City Wide."].forEach(function (s, i) { centred(cx, cy - i * 18, s); });

    // bottom row: seal | signature | date
    var bottom = 1.20 * 72;
    (function seal(sx, sy, r) {
      star(sx, sy, r * 1.05, r * 0.86, 16, C.tealLight);
      fill(C.teal); circle(sx, sy, r * 0.92, "F");
      fill(C.red); stroke(C.tealDark); doc.setLineWidth(0.7); circle(sx, sy, r * 0.78, "FD");
      fill(C.white); circle(sx, sy, r * 0.56, "F");
      star(sx, sy, r * 0.42, r * 0.17, 5, C.red);
      fill(C.teal); circle(sx, sy, r * 0.08, "F");
      [0, 90, 180, 270].forEach(function (ang) {
        var a = (ang - 45) * Math.PI / 180;
        iconSparkle(sx + Math.cos(a) * r * 0.68, sy + Math.sin(a) * r * 0.68, r * 0.07, C.white);
      });
    })(2.05 * 72, bottom + 14, 46);
    textColor(C.tealDark); font(F.loraI, 9.5); centred(2.05 * 72, bottom + 14 - 56, "Mark of Distinction");

    var sw = 1.55 * 72, sh = sw * (193 / 364), sy0 = bottom - 6;
    image(A.sig, cx - sw / 2, sy0, sw, sh);
    var liney = sy0 - 2;
    stroke(C.black); doc.setLineWidth(0.8); line(cx - sw / 2 - 8, liney, cx + sw / 2 + 8, liney);
    textColor(C.black); font(F.serifB, 11); centred(cx, liney - 13, "TJ Roberts");
    textColor(C.grey); font(F.sans, 9); centred(cx, liney - 25, "Chief Operating Officer");

    var dx = W - 1.95 * 72, dy = bottom + 12;
    textColor(C.tealDark); font(F.loraI, 9.5); centred(dx, dy + 18, "Presented this");
    textColor(C.black); font(F.serifB, 13); centred(dx, dy + 2, month + " " + year);
    stroke(C.teal); doc.setLineWidth(1.0); var uw = 1.1 * 72; line(dx - uw / 2, dy - 6, dx + uw / 2, dy - 6);
    iconSparkle(dx, dy - 18, 4, C.teal);
    textColor(C.grey); font(F.loraI, 9); centred(dx, dy - 32, "in " + city);

    doc.setProperties({ title: month + " " + year + " VOTM - " + name, author: "TJ Roberts", subject: "Vendor of the Month - " + month + " " + year, creator: "City Wide Facility Solutions" });
    return doc;
  }

  function filename(o) {
    var m = (Number(o.month) || 1);
    var mm = (m < 10 ? "0" : "") + m;
    var safe = String(o.name || "").replace(/[\/\\:*?"<>|]/g, "-").trim();
    return mm + " " + MONTHS[m - 1] + " " + o.year + " VOTM - " + safe + ".pdf";
  }

  var api = { draw: draw, registerFonts: registerFonts, filename: filename, MONTHS: MONTHS, FONT_FILES: FONT_FILES };

  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  // ---------- browser loader: jsPDF from cdnjs plus the assets in ./cert/, on first use ----------
  var BASE = (function () {
    try { var s = document.currentScript; if (s && s.src) return s.src.replace(/[^\/]*$/, ""); } catch (e) {}
    return "";
  })();
  var JSPDF = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
  var assetsP = null;
  function loadScript(src) {
    return new Promise(function (res, rej) {
      if (root.jspdf && root.jspdf.jsPDF) return res();
      var s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = function () { rej(new Error("Could not load jsPDF")); };
      document.head.appendChild(s);
    });
  }
  function b64(buf) {
    var bytes = new Uint8Array(buf), out = "", chunk = 0x8000;
    for (var i = 0; i < bytes.length; i += chunk) out += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    return btoa(out);
  }
  function fetchB64(url) { return fetch(url, { cache: "force-cache" }).then(function (r) { if (!r.ok) throw new Error("Missing " + url); return r.arrayBuffer(); }).then(b64); }
  function load() {
    if (assetsP) return assetsP;
    assetsP = Promise.all([loadScript(JSPDF)].concat(FONT_FILES.map(function (f) { return fetchB64(BASE + "cert/" + f.file); }))
      .concat([fetchB64(BASE + "cert/logo.png"), fetchB64(BASE + "cert/signature.png")]))
      .then(function (r) {
        var fonts = {}; FONT_FILES.forEach(function (f, i) { fonts[f.file] = r[i + 1]; });
        return { fonts: fonts, logo: "data:image/png;base64," + r[FONT_FILES.length + 1], sig: "data:image/png;base64," + r[FONT_FILES.length + 2] };
      })
      .catch(function (e) { assetsP = null; throw e; });
    return assetsP;
  }
  api.preload = load;
  api.make = function (o) {
    return load().then(function (A) {
      var doc = new root.jspdf.jsPDF({ orientation: "landscape", unit: "pt", format: "letter", compress: true });
      registerFonts(doc, A.fonts);
      draw(doc, o, A);
      var uri = doc.output("datauristring");
      return { doc: doc, filename: filename(o), blob: doc.output("blob"), base64: uri.slice(uri.indexOf(",") + 1) };
    });
  };
  root.CWCert = api;
})(typeof window !== "undefined" ? window : this);
