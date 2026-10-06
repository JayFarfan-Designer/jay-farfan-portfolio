/* ===== Contenido general ===== */
const EMAIL = "josem4n@gmail.com", LINKEDIN = "https://www.linkedin.com/in/jayfarfan/";

const NAV = [
  ["#/work", x("Experiencia", "Experience")],
  ["#/process", x("Proceso", "Process")],
  ["#/about", x("Sobre mí", "About")],
  ["#/contact", x("Contacto", "Contact")]
];

const QUOTES = [
  { img: "eliana", n: "Eliana Campos del Valle", url: "https://www.linkedin.com/in/eliana-campos-designer/", r: x("Design Lead · Produbanco", "Design Lead · Produbanco"),
    q: x("“Destaco su habilidad para conectar diseño, negocio y tecnología, entendiendo profundamente las necesidades de los usuarios para proponer soluciones claras y valiosas.”",
         "“I highlight his ability to connect design, business and technology, deeply understanding user needs to propose clear and valuable solutions.”") },
  { img: "solangie", n: "Solangie Chuica de la Cruz", url: "https://www.linkedin.com/in/solangie-chuica-de-la-cruz-180a5243/", r: x("Product Owner · Pacífico Seguros", "Product Owner · Pacífico Seguros"),
    q: x("Jay siempre mantuvo el foco en el usuario, transformando flujos complejos en experiencias simples, intuitivas y fáciles de usar. Además, destacó por su comunicación y coordinación con distintas áreas del equipo.",
         "Jay always kept the focus on the user, transforming complex flows into simple, intuitive, and easy-to-use experiences. Furthermore, he stood out for his communication and coordination with different areas of the team.") },
  { img: "rodrigo", n: "Rodrigo Solís", url: "https://www.linkedin.com/in/rodrigo-solis-1958751bb/", r: x("CEO/Founder · Pablo IA", "CEO/Founder · Pablo IA"),
    q: x("“Fue un placer trabajar con Jay. Siempre pone al usuario en el centro y tiene la capacidad de ayudar al equipo a entenderlo en profundidad. En Pablo nos ayudó a conectar las necesidades del usuario con el producto y a construir el flujo inicial de la experiencia.”",
         "“It was a pleasure working with Jay. He always puts the user at the center and has the ability to help the team understand them in depth. At Pablo he helped us connect user needs with the product and build the initial flow of the experience.”") },
  { img: "willington", n: "Willington Jesús Ortiz Maurtua", url: "https://www.linkedin.com/in/willington-jesus-ortiz-maurtua-a96163145/", r: x("Software Engineer · Inetum", "Software Engineer · Inetum"),
    q: x("“Lo que más destaco de Jay es su capacidad para mantener siempre al usuario como prioridad, transformando necesidades complejas en experiencias claras, funcionales y bien resueltas.”",
         "“What I highlight most about Jay is his ability to always keep the user as a priority, transforming complex needs into clear, functional, and well-resolved experiences.”") }
];

function cvBtn(cls = "btn s") { return `<button class="${cls}" data-cv>${tx("Descargar CV", "Download CV")} ↓</button>`; }

function contactBlock(custom) {
  return `<section class="sec"><div class="wrap"><div class="shead"><div><div class="eyebrow dash">${tx("Contacto", "Contact")}</div><h2 class="hl balance" style="margin-top:1rem">${tx("Trabajemos juntos. Conversemos.", "Let’s work together. Let’s talk.")}</h2></div><div><p class="lead">${custom ? t(custom) : tx("Trabajo desde Quito, Ecuador, y estoy abierto a oportunidades como Product Designer / UX/UI Designer y a proyectos freelance. Colaboro en remoto con equipos de cualquier parte del mundo.", "I’m based in Quito, Ecuador, and open to Product Designer / UX/UI Designer opportunities and freelance projects. I collaborate remotely with teams anywhere in the world.")}</p><div class="btns"><a class="btn p" href="https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}" target="_blank" rel="noopener noreferrer">${tx("Conversemos", "Let’s talk")} ↗</a>${cvBtn()}<a class="btn s" href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn ↗</a></div></div></div></div></section>`;
}

/* ===== HOME ===== */
function metricsHTML() {
  const m = [
    ["+10M", x("de personas usaron una app pública de salud que rediseñé", "people used a public health app I redesigned"), "minsa", x("Carné de Vacunación", "Vaccination Record")],
    ["8/10", x("de NPS en pruebas con usuarios de una firma digital", "NPS in user tests of a digital signature flow"), "certezia", x("Certezia", "Certezia")],
    ["+150%", x("de adopción del plan de pago de un asistente financiero", "paid-plan adoption of a financial assistant"), "pablo", x("Pablo", "Pablo")],
    ["+55%", x("de conversión en un marketplace automotriz rediseñado", "conversion in a redesigned automotive marketplace"), "karway", x("Karway", "Karway")]
  ];
  return `<div class="metrics">${m.map((a) => `<div class="metric"><b>${a[0]}</b><span>${t(a[1])}</span>${caseLink(a[2], `${tx("Ver proyecto", "View project")} ${t(a[3])} →`, "metric-link lu")}</div>`).join("")}</div>`;
}

function workSection() {
  const feat = ["minsa", "certezia", "pablo"].map(byslug);
  return `<section class="sec" id="work"><div class="wrap"><div class="shead stack"><div class="eyebrow dash">${tx("Experiencia", "Experience")}</div><h2 class="hl balance" style="margin-top:1rem">${tx("Proyectos destacados", "Featured projects")}</h2><p class="lead">${tx("He trabajado en productos de fintech, govtech y marketplaces, como parte de equipos de diseño y liderando proyectos. Mi base en Ingeniería Civil se refleja en cómo conecto sistemas, trabajo con restricciones y considero el uso real de cada producto. Estos casos muestran mi trabajo desde research y definición del problema hasta diseño, validación y colaboración con desarrollo.", "I’ve worked on fintech, govtech and marketplace products, as part of design teams and leading projects. My Civil Engineering background shapes how I connect systems, work within constraints and consider how people actually use each product. These cases show my work from research and problem definition through design, validation and collaboration with engineering.")}</p></div><div class="cards" data-n="3">${feat.map((c, i) => cardHTML(c, String(i + 1).padStart(2, "0"))).join("")}</div><div class="btns" style="margin-top:2rem"><a class="btn p" href="#/work">${tx("Ver toda mi experiencia", "See all my experience")} →</a></div></div></section>`;
}

function processBand() {
  return `<section class="sec band"><div class="wrap"><div class="bandrow"><div><div class="eyebrow dash">${tx("Proceso + IA", "Process + AI")}</div><h3 class="hm balance" style="margin-top:.9rem;max-width:26ch">${tx("Cómo trabajo y dónde uso IA", "How I work and where I use AI")}</h3></div><div class="bandr"><p>${tx("Uso Claude y ChatGPT para research y exploración, y Claude Design y ChatGPT Sites para prototipos funcionales y sitios.", "I use Claude and ChatGPT for research and exploration, and Claude Design and ChatGPT Sites for functional prototypes and websites.")}</p><p>${tx("Las decisiones de diseño las tomo con usuarios, métricas y necesidades de negocio.", "I make design decisions based on users, metrics and business needs.")}</p><a class="lu" href="#/process">${tx("Ver mi proceso", "See my process")} →</a></div></div></div></section>`;
}

function quotesSection() {
  return `<section class="sec"><div class="wrap"><div class="shead quotes-head"><div><div class="eyebrow dash">${tx("Recomendaciones", "Endorsements")}</div><h2 class="hl balance" style="margin-top:1rem">${tx("Lo que dicen las personas con las que he trabajado", "What people I’ve worked with say")}</h2></div></div><div class="quotes">${QUOTES.map((q) => `<figure class="q"><p>${t(q.q)}</p><div class="who"><img src="${img(q.img)}" alt="${esc(q.n)}"${imageAttributes(q.img)}><div><b><a href="${q.url}" target="_blank" rel="noopener noreferrer">${q.n}</a></b><span>${t(q.r)}</span></div></div></figure>`).join("")}</div></div></section>`;
}
function viewHome() {
  return `<section class="sec first hero"><canvas class="hero-motion" aria-hidden="true"></canvas><div class="wrap"><div class="hero-availability"><span class="chip dot available">${tx("Disponible para roles full-time y proyectos freelance", "Available for full-time roles and freelance projects")}</span></div><h1 class="hx balance" style="margin-top:1.75rem">${tx("Resuelvo problemas complejos combinando estrategia, criterio humano e inteligencia artificial.", "I solve complex problems by combining strategy, human judgment and artificial intelligence.")}</h1><div class="tagline hero-facts"><span>${tx("Product Designer peruano en Quito", "Peruvian Product Designer based in Quito")}</span><span>${tx("+5 años de experiencia", "5+ years of experience")}</span></div><div class="btns"><a class="btn p" href="#/" data-scroll="work">${tx("Ver experiencia", "See experience")} ↓</a>${cvBtn()}</div>${metricsHTML()}</div></section>${workSection()}${processBand()}${quotesSection()}${contactBlock()}`;
}

/* ===== PROYECTOS ===== */
function viewWork() {
  return `<section class="sec first"><div class="wrap"><div class="eyebrow dash">${tx("Experiencia", "Experience")}</div><h1 class="hl balance" style="margin-top:1rem;max-width:22ch">${tx("Proyectos donde diseñar también significó decidir.", "Projects where designing also meant deciding.")}</h1><div class="work-intro"><p class="lead">${tx("He trabajado en fintech, govtech, marketplaces y e-commerce.", "I’ve worked in fintech, govtech, marketplaces and e-commerce.")}</p><p class="lead">${tx("En estos casos muestro cómo entendí el problema, qué decisiones tomé y qué impacto tuvieron en el producto.", "In these cases I show how I understood the problem, what decisions I made and what impact they had on the product.")}</p></div><div class="cards" style="margin-top:2.5rem">${CASES.map((c) => cardHTML(c)).join("")}</div><div class="next" style="margin-top:2.5rem"><div style="max-width:58ch"><h3 class="hm">${tx("¿Cómo llegué a cada resultado?", "How did I get to each result?")}</h3><p style="margin-top:.5rem">${tx("Mira cómo integro IA en cada etapa del proceso, sin perder criterio humano.", "See how I integrate AI at each stage of the process without losing human judgment.")}</p></div><a class="btn s" href="#/process">${tx("Ver mi proceso", "See my process")} →</a></div></div></section>${contactBlock()}`;
}

/* ===== CASO ===== */
function viewCase(slug) {
  const c = byslug(slug);
  if (!c) return viewNotFound();
  if (c.comingSoon) return viewWork();
  const available = CASES.filter(item => !item.comingSoon);
  const i = available.indexOf(c), nx = available[(i + 1) % available.length];
  const heroKey = c.hero || c.thumb;
  const heroImg = heroKey ? `<div class="frame hero-img" style="--accent:${c.accent};background:${imageBackground(heroKey)}"><img src="${img(heroKey)}" alt="${heroKey === "diners_confidential" ? esc(tx("Composición abstracta, sin pantallas ni datos reales de Diners.", "Abstract composition, without real Diners screens or data.")) : esc(plain(t(c.title)))}"${imageAttributes(heroKey, true)}>${confidentialWatermark(heroKey)}</div>` : `<div style="--accent:${c.accent}">${ph({ ph: c.thumbPh })}</div>`;
  const nda = c.nda ? `<div class="note"><b>${tx("Sobre la confidencialidad", "About confidentiality")}</b>${tx("Este proyecto está bajo acuerdo de confidencialidad. No muestro pantallas, nombres de funcionalidades ni datos internos: el caso se centra en el problema, mis decisiones y lo que cambió. Con gusto te lo explico en detalle en una entrevista.", "This project is under a confidentiality agreement. I don’t show screens, feature names or internal data: the case focuses on the problem, my decisions and what changed. Happy to walk through it in detail in an interview.")}</div>` : "";
  return `<article class="${c.final ? "final" : ""}" style="--accent:${c.accent}"><div class="wrap"><div class="chead"><a class="back" href="#/work">← ${tx("Mi experiencia", "My experience")}</a><div class="eyebrow">${c.eyebrow ? T(c.eyebrow) : c.num + " — " + T(c.client)}</div><h1 class="hl balance">${T(c.title)}</h1><p class="lead">${T(c.summary)}</p>${c.summary2 ? `<p class="lead">${T(c.summary2)}</p>` : ""}${nda}</div>${heroImg}<div class="meta">${c.meta.map((m) => `<div><div class="k">${t(m[0])}</div><div class="v">${T(m[1])}</div></div>`).join("")}</div>${c.tldr.one ? `<div class="tldr one" style="margin-top:2rem"><div><p>${T(c.tldr.one)}</p></div></div>` : `<div class="tldr" style="margin-top:2rem"><div><div class="k">${c.tldr.kProblem ? T(c.tldr.kProblem) : tx("El problema", "The problem")}</div><p>${T(c.tldr ? c.tldr.problem : c.tldr)}</p></div><div><div class="k">${c.tldr.kRole ? T(c.tldr.kRole) : tx("Mi rol", "My role")}</div><p>${T(c.tldr.role)}</p></div><div><div class="k">${tx("Resultado", "Outcome")}</div><p>${T(c.tldr.result)}</p></div></div>`}${c.metrics.length ? `<div class="res">${c.metrics.map((m) => `<div><b${String(t(m[0])).length > 6 ? ' class="w"' : ""}>${md(t(m[0]))}</b><span>${T(m[1])}</span></div>`).join("")}</div>` : ""}${c.blocks.map(blockHTML).join("")}<div class="next" style="margin:clamp(2rem,5vw,4rem) 0"><div><div class="eyebrow">${tx("Siguiente caso", "Next case")}</div><h3 class="hm balance" style="margin-top:.6rem;max-width:30ch">${T(nx.short)}</h3></div><a class="btn s" href="#/work/${nx.slug}">${tx("Ver caso", "View case")} →</a></div></div></article>${contactBlock(c.cta)}`;
}
