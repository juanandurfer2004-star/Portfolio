// Rellena la página con lo que hay en datos.js. No hace falta tocar este archivo.
(function () {
  const d = DATOS;
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const icons = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.6V9h3.5v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>',
    folder: '<svg class="folder" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  };

  // Básicos
  document.title = `${d.nombre} · ${d.rol}`;
  document.querySelectorAll("[data-nombre]").forEach((el) => (el.textContent = d.nombre));
  document.querySelectorAll("[data-iniciales]").forEach((el) => (el.textContent = d.iniciales));
  $("#intro").textContent = d.intro;
  $("#year").textContent = new Date().getFullYear();
  if (!d.disponible) $("#badge").remove();

  // Foto opcional: si existe foto.jpg en la carpeta, se usa en lugar de las iniciales
  const img = new Image();
  img.onload = () => { const a = $(".avatar"); a.innerHTML = ""; img.alt = d.nombre; a.appendChild(img); };
  img.src = "foto.jpg";

  // Redes
  const c = d.contacto;
  const socials = [
    c.github && `<a href="${esc(c.github)}" target="_blank" rel="noopener" aria-label="GitHub">${icons.github}</a>`,
    c.linkedin && `<a href="${esc(c.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${icons.linkedin}</a>`,
    c.email && `<a href="mailto:${esc(c.email)}" aria-label="Email">${icons.email}</a>`,
  ].filter(Boolean).join("");
  $("#socialsHero").innerHTML = socials;
  $("#socialsFooter").innerHTML = socials;
  $("#mailBtn").href = `mailto:${c.email}`;
  if (c.cv) $("#cvBtn").href = c.cv; else $("#cvBtn").remove();

  // Sobre mí
  $("#sobreMi").innerHTML = d.sobreMi.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#stats").innerHTML = d.datosRapidos.map((s) => `<div class="stat"><strong>${esc(s.valor)}</strong><span>${esc(s.etiqueta)}</span></div>`).join("");

  // Habilidades
  $("#skills").innerHTML = Object.entries(d.habilidades).map(([grupo, lista]) => `
    <div class="skill-group">
      <h4>${esc(grupo)}</h4>
      <div class="chips">${lista.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
    </div>`).join("");

  // Proyectos
  $("#projects").innerHTML = d.proyectos.map((p) => `
    <article class="project${p.destacado ? " featured" : ""}">
      <div class="project-top">
        ${icons.folder}
        <div class="project-links">
          ${p.codigo ? `<a href="${esc(p.codigo)}" target="_blank" rel="noopener" aria-label="Código de ${esc(p.titulo)}">${icons.github}</a>` : ""}
          ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener" aria-label="Demo de ${esc(p.titulo)}">${icons.external}</a>` : ""}
        </div>
      </div>
      ${p.destacado ? `<span class="tag-featured">★ Proyecto destacado</span>` : ""}
      <h4>${esc(p.titulo)}</h4>
      <p>${esc(p.descripcion)}</p>
      <div class="tech">${p.tecnologias.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    </article>`).join("");

  document.querySelectorAll(".project").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  // Experiencia
  $("#timeline").innerHTML = d.experiencia.map((e) => `
    <li>
      <span class="period">${esc(e.periodo)}</span>
      <h4>${esc(e.puesto)}</h4>
      <span class="place">${esc(e.lugar)}</span>
      <p>${esc(e.descripcion)}</p>
    </li>`).join("");

  // Efecto máquina de escribir
  const typed = $("#typed");
  const frases = d.frases && d.frases.length ? d.frases : [d.rol];
  let fi = 0, ci = 0, borrando = false;
  (function tick() {
    const f = frases[fi];
    typed.textContent = f.slice(0, ci);
    if (!borrando && ci < f.length) { ci++; return setTimeout(tick, 70); }
    if (!borrando) { borrando = true; return setTimeout(tick, 1800); }
    if (ci > 0) { ci--; return setTimeout(tick, 35); }
    borrando = false; fi = (fi + 1) % frases.length; setTimeout(tick, 300);
  })();

  // Nav: fondo al hacer scroll + menú móvil
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const btn = $("#menuBtn"), links = $("#links");
  const toggle = (open) => { links.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); };
  btn.addEventListener("click", () => toggle(!links.classList.contains("open")));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggle(false)));

  // Aparición al hacer scroll
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
