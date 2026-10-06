/* ===== Estado ===== */
let lang = "es";
let workMode = "hybrid";
try { const l = localStorage.getItem("pf-lang"); if (l === "es" || l === "en") lang = l; else if ((navigator.language || "").toLowerCase().indexOf("es") !== 0) lang = "en"; } catch (e) {}
try { const m = localStorage.getItem("pf-work"); if (["carousel","cards","hybrid"].includes(m)) workMode = m; } catch (e) {}

const $ = (s, r = document) => r.querySelector(s);
const t = (o) => (o && typeof o === "object" && "es" in o) ? o[lang] : o;
const tx = (es, en) => lang === "es" ? es : en;
/* [[texto]] -> contenido inventado (se pinta en ámbar) */
const md = (s) => String(s == null ? "" : s).replace(/\[\[([\s\S]*?)\]\]/g, '<span class="dm">$1</span>');
const T = (o) => md(t(o));
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const plain = (s) => String(s).replace(/\[\[|\]\]/g, "").replace(/<[^>]+>/g, "");
const byslug = (s) => CASES.find((c) => c.slug === s);
const img = (k) => IMG[k];
const imageAttributes = (key, eager = false) => {
  const size = IMG_SIZE[key];
  return `${size ? ` width="${size[0]}" height="${size[1]}"` : ""} loading="${eager ? "eager" : "lazy"}" decoding="async"${eager ? ' fetchpriority="high"' : ""}`;
};
const imageBackground = (key) => IMAGE_BACKGROUNDS[key] || "var(--image-surface)";

function confidentialWatermark(key) {
  if (key !== "diners_confidential") return "";
  return `<div class="confidential-watermark"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v3"/></svg><strong>${tx("Contenido protegido por confidencialidad", "Content protected by confidentiality")}</strong><span>${tx("Diners Club · Acuerdo de confidencialidad", "Diners Club · Confidentiality agreement")}</span></div>`;
}

function ph(o) {
  return `<div class="ph"><b>${tx("Imagen pendiente · Figma", "Image pending · Figma")}</b><span>${T(o.ph)}</span></div>`;
}
function fig(o, cls = "") {
  if (o.ph) return ph(o);
  const picture = `<img src="${img(o.key)}" alt="${esc(plain(t(o.cap)))}"${imageAttributes(o.key)}>`;
  return `<figure class="${cls}"><div class="frame${o.pad ? " pad" : ""}${o.evidence ? " evidence evidence-" + o.evidence : ""}" style="background:${imageBackground(o.key)}">${picture}</div>${o.cap ? `<figcaption class="cap">${T(o.cap)}</figcaption>` : ""}</figure>`;
}
function figs(list) {
  const one = list.length === 1;
  return `<div class="imgs${one ? "" : " c2"}">` + list.map((o) => {
    const span = one || o.wide;
    return o.ph ? `<div class="${span ? "sp" : ""}">${ph(o)}${o.cap ? `<div class="cap">${o.capH ? `<strong>${T(o.capH)}</strong><br>` : ""}${T(o.cap)}</div>` : ""}</div>` : fig(o, span ? "sp" : "");
  }).join("") + `</div>`;
}

/* ===== Bloques de un caso ===== */
function blockHTML(b, i) {
  const n = String(i + 1).padStart(2, "0");
  let body = "";
  if (b.t === "text") {
    if (b.p) body += b.p.map((p) => `<p>${T(p)}</p>`).join("");
    if (b.list) body += `<ul>${b.list.map((l) => `<li>${T(l)}</li>`).join("")}</ul>`;
    if (b.callouts) body += `<div class="callouts">${b.callouts.map((k) => `<div class="callout two"><strong>${T(k.h)}</strong>${k.p ? `<p>${T(k.p)}</p>` : ""}</div>`).join("")}</div>`;
    if (b.callout) body += `<div class="callout">${T(b.callout)}</div>`;
    if (b.cells) body += `<div class="grid c2" style="margin-top:1.75rem">${b.cells.map((k) => `<div class="cell"><div class="n">${T(k.n)}</div><h4>${T(k.h)}</h4><p>${T(k.p)}</p></div>`).join("")}</div>`;
    if (b.capText) body += `<div class="cap">${T(b.capText)}</div>`;
    if (b.img) body += (b.img.ph ? ph(b.img) : fig(b.img, "solo"));
    if (b.imgs) body += figs(b.imgs);
  } else if (b.t === "decisions") {
    body += b.items.map((d, k) => `<div class="dec"><h4><i>${String(k + 1).padStart(2, "0")}</i>${T(d.h)}</h4><p>${T(d.p)}</p>${d.w ? `<div class="w"><em>${b.wLabel ? T(b.wLabel) : tx("Trade-off", "Trade-off")}</em>${T(d.w)}</div>` : ""}</div>`).join("");
  } else if (b.t === "ai") {
    body += `<p>${tx("Uso IA para acelerar, no para decidir. Esto es lo que hice con ella y lo que seguí decidiendo yo.", "I use AI to speed up, not to decide. This is what I did with it and what I kept deciding myself.")}</p>`;
    body += `<div class="cols2"><div><div class="k">${tx("Usé IA para", "I used AI for")}</div><ul>${b.used.map((u) => `<li>${T(u)}</li>`).join("")}</ul></div><div><div class="k">${tx("Lo que decidí yo", "What I decided myself")}</div><ul>${b.mine.map((u) => `<li>${T(u)}</li>`).join("")}</ul></div></div>`;
    if (b.img) body += b.img.ph ? ph(b.img) : fig(b.img, "solo");
  } else if (b.t === "twocol") {
    if (b.p) body += b.p.map((p) => `<p>${T(p)}</p>`).join("");
    body += `<div class="cols2">${b.cols.map((k) => `<div><div class="k">${T(k.k)}</div>${k.paras ? k.paras.map((q) => `<p>${T(q)}</p>`).join("") : `<ul>${k.items.map((it) => it.p ? `<li><strong>${T(it.h)}</strong><br>${T(it.p)}</li>` : `<li>${T(it.h)}</li>`).join("")}</ul>`}</div>`).join("")}</div>`;
    if (b.callout) body += `<div class="callout">${T(b.callout)}</div>`;
    if (b.imgs) body += figs(b.imgs);
  } else if (b.t === "list") {
    body += `<ul>${b.items.map((l) => `<li>${T(l)}</li>`).join("")}</ul>`;
  }
  return `<section class="blk"><div class="bh"><span class="bn">${n}</span><h2 class="hm">${T(b.h)}</h2></div><div class="bb">${body}</div></section>`;
}

/* ===== Tarjeta compacta ===== */
function thumbHTML(c) {
  if (c.thumb) return `<img src="${img(c.thumb)}" alt=""${imageAttributes(c.thumb)}>${confidentialWatermark(c.thumb)}`;
  return `<div class="phm">${T(c.thumbPh)}</div>`;
}
function comingSoonBadge(c) {
  return c.comingSoon ? `<span class="coming-soon-badge">${tx("Próximamente", "Coming soon")}</span>` : "";
}
function caseLink(slug, label, cls = "") {
  return byslug(slug)?.comingSoon ? `<span class="${cls} case-pending">${label.replace(/ →$/, "")} · ${tx("Próximamente", "Coming soon")}</span>` : `<a class="${cls}" href="#/work/${slug}">${label}</a>`;
}
function cardHTML(c, num) {
  const tags = c.tags.slice(0, 3).join(" · ");
  const tag = c.comingSoon ? "div" : "a";
  return `<${tag} class="card${c.comingSoon ? " coming-soon" : ""}"${c.comingSoon ? ' aria-disabled="true"' : ` href="#/work/${c.slug}"`} style="--accent:${c.accent}"><div class="th"${c.thumb ? ` style="background:${imageBackground(c.thumb)}"` : ""}>${thumbHTML(c)}${comingSoonBadge(c)}</div><div class="cb"><div class="cm">${num || c.num} — ${esc(plain(t(c.client)))}</div><h3>${T(c.short)}</h3><div class="co">${esc(tags)}</div><div class="go">${c.comingSoon ? tx("Caso de estudio en preparación", "Case study in preparation") : tx("Ver caso", "View case") + " →"}</div></div></${tag}>`;
}

/* ===== Carrusel estilo antonsten.com ===== */
function tileHTML(c, key, ph_) {
  if (c.comingSoon) return `<div class="tile coming-soon" style="--accent:${c.accent};background:${imageBackground(key)}" aria-hidden="true"><img src="${img(key)}" alt=""${imageAttributes(key)}>${comingSoonBadge(c)}</div>`;
  if (key) return `<a class="tile" href="#/work/${c.slug}" style="--accent:${c.accent};background:${imageBackground(key)}" tabindex="-1" aria-hidden="true"><img src="${img(key)}" alt=""${imageAttributes(key)}>${confidentialWatermark(key)}</a>`;
  return `<a class="tile" href="#/work/${c.slug}" style="--accent:${c.accent};aspect-ratio:16/10;display:grid;place-items:center" tabindex="-1" aria-hidden="true"><span class="cm" style="padding:1rem;text-align:center;font-family:var(--font-mono);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted-2)">${T(ph_)}</span></a>`;
}
function marquee(items, rev) {
  const html = items.map((it) => tileHTML(it.c, it.key, it.ph)).join("");
  return `<div class="marq${rev ? " rev" : ""}"><div class="track">${html}${html}</div></div>`;
}
function carouselHTML(rows) {
  const K = (s, key) => ({ c: byslug(s), key });
  const D = K("diners", "diners_confidential");
  const r1 = [K("certezia", "certezia_hero"), K("pablo", "pablo_hero"), K("minsa", "minsa_hero"), D, K("karway", "karway_hero"), K("kindberry", "kindberry_hero"), K("certezia", "certezia_vista-prototipo")];
  const r2 = [K("minsa", "minsa_final-mockups"), K("certezia", "certezia_problema"), K("minsa", "minsa_before-after"), K("certezia", "certezia_vista-testing"), K("minsa", "minsa_old-app"), K("pablo", "pablo_hero"), K("karway", "karway_hero")];
  return `<div class="wrap"><div class="mq-ctl"><button class="btn s sm" id="mqp" aria-pressed="false">${tx("Pausar", "Pause")} ❚❚</button></div></div>` + marquee(r1, false) + (rows === 2 ? marquee(r2, true) : "");
}
