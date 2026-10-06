/* ===== Header ===== */
function headerHTML() {
  const links = NAV.map((n) => `<a href="${n[0]}" data-nav="${n[0]}">${t(n[1])}</a>`).join("");
  return `<div class="wrap bar"><a class="brand brand-logo" href="#/" aria-label="${tx("Jay Farfán, inicio", "Jay Farfán, home")}"><picture><source media="(max-width: 480px), (min-width: 861px) and (max-width: 1050px)" srcset="img/brand/header-compact.svg"><img src="img/brand/header-wordmark.svg" width="156" height="56" alt="Jay Farfán."></picture></a><button class="menu" id="menu" aria-label="${tx("Menú de navegación", "Navigation menu")}" aria-controls="nav" aria-expanded="false">☰</button><nav class="main" id="nav">${links}<div class="seg" role="group" aria-label="${tx("Idioma", "Language")}"><button data-lang="es" aria-pressed="${lang === "es"}">ES</button><button data-lang="en" aria-pressed="${lang === "en"}">EN</button></div>${cvBtn("btn s sm")}</nav></div>`;
}
function footerHTML() {
  return `<div class="wrap"><div class="fgrid"><div><a class="brand brand-logo footer-logo" href="#/" aria-label="${tx("Jay Farfán, inicio", "Jay Farfán, home")}"><img src="img/brand/header-wordmark.svg" width="130" height="50" alt="Jay Farfán." loading="lazy" decoding="async"></a><p class="fdesc">${tx("Product Designer peruano, basado en Quito. Trabajo en productos digitales entre research, estrategia y UX/UI.", "Peruvian Product Designer based in Quito. I work on digital products across research, strategy and UX/UI.")}</p></div><div class="flinks"><a href="#/contact">${tx("Contacto", "Contact")}</a><a href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn ↗</a><a href="mailto:${EMAIL}">${EMAIL}</a></div></div></div>`;
}

/* ===== CV: un solo botón, el archivo depende del idioma ===== */
function toast(m) { const e = $("#toast"); e.textContent = m; e.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => { e.hidden = true; }, 3000); }
function downloadCV() {
  const a = document.createElement("a");
  a.href = CV[lang];
  a.download = lang === "es" ? "CV_JayFarfan_ES.pdf" : "CV_JayFarfan_EN.pdf";
  document.body.appendChild(a); a.click(); a.remove();
}

/* ===== Router ===== */
const TITLES = { "": "Jay Farfán · Product Designer", work: "Proyectos · Jay Farfán", process: "Proceso + IA · Jay Farfán", about: "Sobre mí · Jay Farfán", contact: "Contacto · Jay Farfán" };
function render() {
  const h = (location.hash || "#/").replace(/^#/, "");
  const p = h.split("/").filter(Boolean);
  const k = p[0] || "";
  let html;
  if (!k) html = viewHome();
  else if (k === "work" && p[1]) {
    if (byslug(p[1])?.comingSoon) {
      history.replaceState(null, "", "#/work");
      render();
      return;
    }
    html = viewCase(p[1]);
  }
  else if (k === "work") html = viewWork();
  else if (k === "process") html = viewProcess();
  else if (k === "about") html = viewAbout();
  else if (k === "contact") html = `<div style="height:1px"></div>` + contactBlock();
  else html = viewNotFound();
  $("#app").innerHTML = `<div class="view">${html}</div>`;
  $("header.site").innerHTML = headerHTML();
  $("footer.site").innerHTML = footerHTML();
  document.documentElement.lang = lang;
  const c = p[1] ? byslug(p[1]) : null;
  document.title = c ? plain(t(c.short)) + " · Jay Farfán" : (TITLES[k] || TITLES[""]);
  document.querySelectorAll("[data-nav]").forEach((a) => { if (a.getAttribute("data-nav") === "#/" + k) a.setAttribute("aria-current", "page"); });
  window.scrollTo(0, 0);
  HeroMotion.mount();
}

/* ===== Eventos ===== */
document.addEventListener("click", (e) => {
  const sc = e.target.closest("[data-scroll]"); if (sc) { e.preventDefault(); if ((location.hash || "#/") !== "#/") { location.hash = "#/"; } setTimeout(() => { const el = document.getElementById(sc.getAttribute("data-scroll")); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 60); return; }
  const cv = e.target.closest("[data-cv]"); if (cv) { e.preventDefault(); downloadCV(); return; }
  const lg = e.target.closest("[data-lang]"); if (lg) { lang = lg.getAttribute("data-lang"); try { localStorage.setItem("pf-lang", lang); } catch (x) {} const y = window.scrollY; render(); document.querySelector(`[data-lang="${lang}"]`)?.focus({ preventScroll: true }); window.scrollTo(0, y); return; }
  if (e.target.closest("#menu")) { const n = $("#nav"), o = n.classList.toggle("open"); $("#menu").setAttribute("aria-expanded", String(o)); return; }
  if (e.target.closest("#nav a")) { $("#nav").classList.remove("open"); }
  const mq = e.target.closest("#mqp"); if (mq) { const on = mq.getAttribute("aria-pressed") !== "true"; mq.setAttribute("aria-pressed", String(on)); document.querySelectorAll(".marq").forEach((m) => m.classList.toggle("paused", on)); mq.textContent = (on ? tx("Reanudar", "Resume") + " ▶" : tx("Pausar", "Pause") + " ❚❚"); }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && $("#nav")?.classList.contains("open")) { $("#nav").classList.remove("open"); $("#menu").setAttribute("aria-expanded", "false"); $("#menu").focus(); }
});
window.addEventListener("hashchange", render);

/* ===== Arranque ===== */
render();
