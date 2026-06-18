# Mone Rodríguez · Portfolio

Soy diseñadora de producto y estratega UX con 12 años de experiencia. Este es el código del portafolio. HTML, CSS y JS vanilla, sin frameworks ni dependencias.

**Ver en vivo:** [monedesign.github.io/MoneDesign](https://monedesign.github.io/MoneDesign/)

---

## Proyectos

| Proyecto | Tipo | Cliente |
|---|---|---|
| Alphabet Renting | UX Consulting · Web | Alphabet (BMW Group) |
| Global Camiones | UX/UI · Web | Global Camiones |
| Ipsum | UX/UI · App | Ipsum |
| KDPOF | UX Consulting · Web | KDPOF |
| Radianna | UX/UI · App | Radianna |
| Sports Club | UX/UI · Web | Sports Club |
| Tracker | Product Design · Dashboard | Tracker |
| Trina Solar | UX/UI · Web | Trina Solar |
| UGT | UX Consulting · Web | UGT |
| VMG | UX/UI · Web | VMG |
| Yuuju | Product Design · App | Yuuju |
| ZenderBox App | Product Design · iOS/Android | ZenderBox |
| ZenderBox Ecosystem | Brand + Web + DS | ZenderBox |
| ZenderHub | Brand + Web + DS | ZenderHub |

---

## Stack

HTML5 · CSS3 · JavaScript ES6 vanilla. Sin build step, sin bundler, sin node_modules.

Algunas decisiones de código que tienen razón de ser:

- `proj_data.js` guarda todos los case studies como objetos JS. El HTML de cada proyecto se inyecta en un layout único, así que agregar un proyecto nuevo es solo agregar una entrada al objeto.
- El switch de idioma (ES/EN) usa atributos `data-en` / `data-es` y cambia en tiempo real sin recargar la página.
- El TOC de la sidebar usa `IntersectionObserver` para detectar qué sección está visible y resaltar el item activo.

---

## Estructura

```
portfolio-web/
├── index.html              # Home
├── selected-work.html      # Selected Work
├── dashboard.html          # Dashboard
├── proj_data.js            # Data + HTML de todos los proyectos
├── lang.js                 # i18n
├── images/                 # Imágenes
├── files/                  # PDFs
└── projects/               # HTMLs legacy
```

---

## Una aclaración sobre el código

No hay frameworks porque no los necesitaba. Cada pieza responde a algo concreto: que el trabajo se vea sin ruido, que navegar entre proyectos no interrumpa, que el idioma cambie sin recargar. Si estás revisando esto como parte de una evaluación, el criterio fue que fuera mantenible sin dependencias externas. Funciona en cualquier servidor estático.

---

## Contacto

Mone Rodríguez · Product Designer & UX Strategist
[LinkedIn](https://www.linkedin.com/in/monerodriguez) · [Email](mailto:monerodriguez@gmail.com)
