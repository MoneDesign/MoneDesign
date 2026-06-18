# Mone Rodríguez · Portfolio

Portafolio personal de Mone Rodríguez, Product Designer & UX Strategist con 12+ años de experiencia. Contiene los case studies de trabajo seleccionado, construido a mano en HTML/CSS/JS vanilla sin frameworks.

**Ver en vivo →** [monedesign.github.io/MoneDesign](https://monedesign.github.io/MoneDesign/)

---

## Proyectos incluidos

| Proyecto | Tipo | Cliente |
|---|---|---|
| **Alphabet Renting** | UX Consulting · Web | Alphabet (BMW Group) |
| **Global Camiones** | UX/UI · Web | Global Camiones |
| **Ipsum** | UX/UI · App | Ipsum |
| **KDPOF** | UX Consulting · Web | KDPOF |
| **Radianna** | UX/UI · App | Radianna |
| **Sports Club** | UX/UI · Web | Sports Club |
| **Tracker** | Product Design · Dashboard | Tracker |
| **Trina Solar** | UX/UI · Web | Trina Solar |
| **UGT** | UX Consulting · Web | UGT |
| **VMG** | UX/UI · Web | VMG |
| **Yuuju** | Product Design · App | Yuuju |
| **ZenderBox App** | Product Design · iOS/Android | ZenderBox |
| **ZenderBox Ecosystem** | Brand + Web + DS | ZenderBox |

---

## Stack técnica

El portafolio está construido sin frameworks deliberadamente. La decisión muestra criterio técnico y control total sobre cada pixel y cada interacción.

```
HTML5          Estructura semántica, sin dependencias de build
CSS3           Grid, Flexbox, animaciones, variables custom
JavaScript ES6 Vanilla: routing de proyectos, i18n, TOC activo
```

**Patrones notables:**
- `proj_data.js`: todos los case studies como objetos JS; el HTML de cada proyecto se inyecta dinámicamente. Un solo layout sirve para ~13 proyectos distintos.
- Sistema i18n propio: cada texto tiene `data-en` / `data-es` y cambia en tiempo real sin recarga.
- TOC con scroll activo: la sidebar resalta la sección visible usando `IntersectionObserver`.
- Google Analytics 4 integrado (`G-09KYHTFP6Q`).

---

## Estructura del repositorio

```
portfolio-web/
├── index.html              # Home, dashboard de proyectos
├── selected-work.html      # Vista de Selected Work
├── dashboard.html          # Dashboard completo
├── proj_data.js            # Data + HTML de todos los case studies
├── lang.js                 # Sistema de internacionalización
├── images/                 # Assets visuales de proyectos
├── files/                  # PDFs y descargas
└── projects/               # HTML individuales de proyectos legacy
```

---

## Sobre este código

Este repo no es un proyecto de ingeniería. Es la implementación técnica de decisiones de diseño. Cada componente responde a una necesidad de comunicación: mostrar trabajo sin que la UI compita con él, navegar entre proyectos sin perder contexto, adaptar el idioma sin recargar.

Si estás revisando este código como parte de una evaluación técnica: el criterio aquí fue **simplicidad mantenible sobre abstracción prematura**. No hay build step, no hay bundler, no hay dependencias en `node_modules`. Funciona en cualquier servidor estático.

---

## Contacto

**Mone Rodríguez** · Product Designer & UX Strategist  
[LinkedIn](https://www.linkedin.com/in/monerodriguez) · [Email](mailto:monerodriguez@gmail.com)
