// ============================================================
//  EDITA SOLO ESTE ARCHIVO para personalizar tu portfolio.
//  Todo lo que está entre comillas es texto que puedes cambiar.
// ============================================================

const DATOS = {
  nombre: "Juan Antonio Durán",
  iniciales: "JA",
  rol: "Desarrollador de Software Junior",
  // Frases que se van escribiendo en la portada
  frases: ["Desarrollador de Software Junior", "Java · Angular · Android", "Web y móvil con Firebase"],
  ubicacion: "Sevilla, España",
  disponible: true, // true = muestra "Disponible para proyectos"
  intro:
    "Técnico Superior en DAM. Desarrollo aplicaciones web y móviles con Java, Angular/TypeScript, Android y Firebase, desde el análisis hasta el despliegue.",

  sobreMi: [
    "Soy Juan Antonio, desarrollador de software junior de Sevilla y Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM).",
    "Los últimos meses he trabajado como freelance en proyectos propios, gestionando yo mismo todo el ciclo: análisis, implementación, pruebas y despliegue. Antes estuve en Sagatech, donde trabajé en un equipo profesional haciendo desarrollo, pruebas, depuración y APIs REST.",
    "Busco incorporarme a un equipo de desarrollo donde aportar desde el primer día y seguir creciendo. Me defino por el trabajo en equipo, la autonomía y las ganas de aprender continuamente.",
  ],
  datosRapidos: [
    { valor: "DAM", etiqueta: "Técnico Superior" },
    { valor: "B2", etiqueta: "inglés" },
    { valor: "Ya", etiqueta: "disponible" },
  ],

  habilidades: {
    Lenguajes: ["Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    "Desarrollo e integración": ["Angular", "Android", "APIs REST", "Odoo 19"],
    "Cloud y calidad": ["Firebase Auth", "Realtime Database", "Firebase Hosting", "AWS (nociones)", "Azure (nociones)", "Pruebas unitarias", "Pruebas de integración"],
    Herramientas: ["Git", "GitHub", "Asistentes de IA"],
  },

  proyectos: [
    {
      titulo: "Finanzly",
      descripcion:
        "Web para controlar tus finanzas personales: registra gastos e ingresos por categoría, fija presupuestos mensuales con aviso al superarlos y crea metas de ahorro. Incluye movimientos fijos automáticos, gráfico de los últimos 6 meses, búsqueda y filtros, modo oscuro y copia de seguridad en JSON o exportación a CSV. Se instala como app, funciona sin internet y los datos nunca salen de tu dispositivo.",
      tecnologias: ["HTML", "CSS", "JavaScript", "PWA", "Service Worker", "localStorage"],
      demo: "",
      codigo: "https://github.com/juanandurfer2004-star/Finanzly",
      destacado: true,
    },
    {
      titulo: "Portfolio personal",
      descripcion: "Esta misma web: estática, rápida y adaptada a móvil, sin librerías y publicada en GitHub Pages.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      demo: "https://juanandurfer2004-star.github.io",
      codigo: "https://github.com/juanandurfer2004-star/juanandurfer2004-star.github.io",
    },
  ],

  experiencia: [
    {
      periodo: "May. 2026 — Actualidad",
      puesto: "Desarrollador de software freelance",
      lugar: "Proyectos propios",
      descripcion:
        "Desarrollo integral de aplicaciones web y móviles con Angular/TypeScript, Java/Android y Firebase: análisis, diseño, implementación, pruebas y despliegue en Firebase Hosting, con control de versiones en Git.",
    },
    {
      periodo: "Abr. 2025 — Jun. 2025",
      puesto: "Programador júnior",
      lugar: "Sagatech · Sevilla",
      descripcion:
        "Pruebas unitarias y de integración, depuración y mejora de funcionalidades existentes. Participé en el análisis de requisitos y apoyé la creación de APIs REST y la integración con soluciones cloud (AWS/Azure).",
    },
    {
      periodo: "2024 — 2026",
      puesto: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      lugar: "Profesor Juan Antonio Carrillo Salcedo · Morón de la Frontera",
      descripcion: "Formación en desarrollo de aplicaciones web, móviles y de escritorio, bases de datos y sistemas de gestión empresarial.",
    },
  ],

  contacto: {
    email: "juanandurfer2004@gmail.com",
    github: "https://github.com/juanandurfer2004-star",
    linkedin: "", // pon aquí tu URL de LinkedIn si tienes
    cv: "cv.pdf",
  },
};
