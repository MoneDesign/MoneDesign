const PROJ_DATA = {
  'alphabet': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}a{text-decoration:none;color:inherit}img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}.nav-home:hover{color:var(--brand)}.nav-home svg{width:18px;height:18px}.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}.agency-label{font-size:14px;color:var(--gray);margin-bottom:8px}.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}.btn-site{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:var(--brand);color:#fff;border-radius:100px;font-size:15px;font-weight:700;transition:opacity .2s}.btn-site:hover{opacity:.85}
.hero-img-wrap{width:100%;max-height:600px;overflow:hidden}.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}.tools-grid{display:flex;flex-direction:column;gap:8px}.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}.content-section{margin-bottom:64px;scroll-margin-top:100px}.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}.section-img img{width:100%;height:auto;display:block}.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}
.process-steps{display:flex;flex-direction:column;gap:16px;margin:20px 0}.step{display:flex;align-items:flex-start;gap:16px}.step-num{width:32px;height:32px;border-radius:50%;background:#6f00ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;margin-top:1px}.step-title{font-size:15px;font-weight:700;margin-bottom:2px}.step-desc{font-size:14px;color:var(--gray);line-height:1.5}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}.fab:hover{background:rgba(204,31,114,0.22)}.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}.proj-nav-link{display:flex;flex-direction:column;gap:4px}.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
@media(max-width:768px){.nav-inner,.proj-nav{padding:0 20px}.proj-hero{padding:40px 20px 32px}.proj-body{grid-template-columns:1fr;padding:0}.sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}.toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}.content{padding:32px 20px 60px}.section-img-row{grid-template-columns:1fr}.proj-nav{padding:24px 20px}}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags"><span class="tag t" data-en="🎯 UX Consulting" data-es="🎯 UX Consulting">🎯 UX Consulting</span><span class="tag t" data-en="🖥️ Web" data-es="🖥️ Web">🖥️ Web</span></div>
  <h1 class="proj-title">Renting Solutions</h1>
  <p class="proj-subtitle t" data-en="Empowering Alphabet Renting Spain with a custom digital solution — Drupal 9 migration with SSO, advanced filtering, and automated communications" data-es="Solución digital de renting a medida para Alphabet España, migración a Drupal 9 con SSO, filtrado avanzado y comunicaciones automatizadas">Empowering Alphabet Renting Spain with a custom digital solution — Drupal 9 migration with SSO, advanced filtering, and automated communications</p>
  <a href="https://www.ofertas-renting.alphabet.es/" target="_blank" class="btn-site t" data-en="Go to website ↗" data-es="Ver web ↗">Go to website ↗</a>
</section>

<div class="hero-img-wrap"><img src="../images/al-hero.jpg" alt="Alphabet Renting Hero"></div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#challenge"><span class="t" data-en="The Challenge" data-es="El reto">The Challenge</span></a></li>
        <li><a href="#requirements"><span class="t" data-en="Key Requirements" data-es="Requisitos clave">Key Requirements</span></a></li>
        <li><a href="#process"><span class="t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</span></a></li>
        <li><a href="#results"><span class="t" data-en="Results" data-es="Resultados">Results</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#0acf83;color:#fff">F</div> Figma</div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff6244;color:#fff">Mi</div> Miro</div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> Illustrator</div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="challenge">
      <p class="section-label t" data-en="01 — Challenge" data-es="01 — Reto">01 — Challenge</p>
      <h2 class="section-title t" data-en="The Challenge" data-es="El reto">The Challenge</h2>
      <p class="section-text t" data-en="Alphabet (a BMW Group company) needed to migrate its Spanish renting site to Drupal 9 while building a completely custom renting solution tailored to the Spanish market. The challenge: preserve the international brand's visual consistency while creating a highly localised, legally compliant experience." data-es="Alphabet (empresa del Grupo BMW) necesitaba migrar su web de renting española a Drupal 9 construyendo una solución de renting completamente a medida para el mercado español. El reto: preservar la coherencia visual de la marca internacional creando una experiencia muy localizada y con cumplimiento legal.">Alphabet (a BMW Group company) needed to migrate its Spanish renting site to Drupal 9 while building a completely custom renting solution tailored to the Spanish market. The challenge: preserve the international brand's visual consistency while creating a highly localised, legally compliant experience.</p>
      <div class="section-img"><img src="../images/al-img1.jpg" alt="Challenge" loading="lazy"></div>
      <p class="section-text t" data-en="The platform required SSO user authentication, advanced traceable filtering, automated lead communications, and a CRM adaptation — all within Drupal 9's architecture." data-es="La plataforma requería autenticación SSO, filtrado avanzado con trazabilidad, comunicaciones de leads automatizadas y adaptación del CRM — todo dentro de la arquitectura de Drupal 9.">The platform required SSO user authentication, advanced traceable filtering, automated lead communications, and a CRM adaptation — all within Drupal 9's architecture.</p>
      <div class="section-img"><img src="../images/al-img2.jpg" alt="Analysis" loading="lazy"></div>
    </section>

    <section class="content-section" id="requirements">
      <p class="section-label t" data-en="02 — Requirements" data-es="02 — Requisitos">02 — Requirements</p>
      <h2 class="section-title t" data-en="Key Project Requirements" data-es="Requisitos clave del proyecto">Key Project Requirements</h2>
      <div class="section-img"><img src="../images/al-img3.jpg" alt="Requirements" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Maintain international brand visual consistency" data-es="Mantener la coherencia visual de la marca internacional">Maintain international brand visual consistency</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="SSO user area with personalised dashboard" data-es="Área de usuario SSO con dashboard personalizado">SSO user area with personalised dashboard</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Advanced vehicle filtering with full search trazability" data-es="Filtrado avanzado de vehículos con trazabilidad completa">Advanced vehicle filtering with full search trazability</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Automated lead communications and follow-up flows" data-es="Comunicaciones de leads automatizadas y flujos de seguimiento">Automated lead communications and follow-up flows</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Mobile-first responsive design" data-es="Diseño mobile-first responsivo">Mobile-first responsive design</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="CRM adaptation for Spanish market requirements" data-es="Adaptación del CRM para requisitos del mercado español">CRM adaptation for Spanish market requirements</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Full Drupal 9 compatibility" data-es="Compatibilidad total con Drupal 9">Full Drupal 9 compatibility</span></li>
      </ul>
    </section>

    <section class="content-section" id="process">
      <p class="section-label t" data-en="03 — Process" data-es="03 — Proceso">03 — Process</p>
      <h2 class="section-title t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</h2>
      <div class="process-steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><p class="step-title t" data-en="Stakeholder Interviews" data-es="Entrevistas con stakeholders">Stakeholder Interviews</p><p class="step-desc t" data-en="Interviews with Alphabet Spain's marketing, sales, and IT teams to align on requirements and constraints." data-es="Entrevistas con stakeholders (marketing, ventas y TI de Alphabet España)">Interviews with Alphabet Spain's marketing, sales, and IT teams to align on requirements and constraints.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><p class="step-title t" data-en="End-to-End Journey Mapping" data-es="Mapeo end-to-end del journey">End-to-End Journey Mapping</p><p class="step-desc t" data-en="Mapped the full user journey from vehicle discovery through enquiry, SSO login, and CRM handoff." data-es="Mapeo end-to-end del journey del usuario desde descubrimiento hasta handoff al CRM">Mapped the full user journey from vehicle discovery through enquiry, SSO login, and CRM handoff.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><p class="step-title t" data-en="Mobile-First Design Strategy" data-es="Estrategia de diseño mobile-first">Mobile-First Design Strategy</p><p class="step-desc t" data-en="Designed all flows mobile-first, ensuring the renting experience worked flawlessly on small screens." data-es="Estrategia de diseño mobile-first para todos los flujos">Designed all flows mobile-first, ensuring the renting experience worked flawlessly on small screens.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><p class="step-title t" data-en="Automated Validation &amp; Forms" data-es="Formularios y validación automatizada">Automated Validation &amp; Forms</p><p class="step-desc t" data-en="Designed lead capture forms with inline validation, conditional fields, and clear error states." data-es="Formularios de captación de leads con validación inline y campos condicionales">Designed lead capture forms with inline validation, conditional fields, and clear error states.</p></div></div>
        <div class="step"><div class="step-num">5</div><div class="step-content"><p class="step-title t" data-en="Automation &amp; Communication Flow" data-es="Automatización y flujos de comunicación">Automation &amp; Communication Flow</p><p class="step-desc t" data-en="Mapped automated email sequences and CRM triggers for each stage of the customer journey." data-es="Flujos de email automatizados y triggers CRM para cada etapa del journey">Mapped automated email sequences and CRM triggers for each stage of the customer journey.</p></div></div>
        <div class="step"><div class="step-num">6</div><div class="step-content"><p class="step-title t" data-en="CRM Evolution &amp; Handoff" data-es="Evolución del CRM y handoff">CRM Evolution &amp; Handoff</p><p class="step-desc t" data-en="Redesigned CRM views for the Spanish sales team and delivered full Drupal-compatible specs." data-es="Vistas CRM rediseñadas para el equipo de ventas español con handoff para Drupal">Redesigned CRM views for the Spanish sales team and delivered full Drupal-compatible specs.</p></div></div>
      </div>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/al-img4.jpg" alt="Process" loading="lazy"></div>
        <div class="section-img"><img src="../images/al-img5.jpg" alt="Design" loading="lazy"></div>
      </div>
    </section>

    <section class="content-section" id="results">
      <p class="section-label t" data-en="04 — Results" data-es="04 — Resultados">04 — Results</p>
      <h2 class="section-title t" data-en="Results and Deliverables" data-es="Resultados y entregables">Results and Deliverables</h2>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Custom renting platform live on Drupal 9" data-es="Plataforma de renting a medida en producción con Drupal 9">Custom renting platform live on Drupal 9</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="SSO user area with personalised vehicle history" data-es="Área de usuario SSO con historial de vehículos personalizado">SSO user area with personalised vehicle history</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Advanced filtering with full trazability for analytics" data-es="Filtrado avanzado con trazabilidad completa para analítica">Advanced filtering with full trazability for analytics</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Automated communication flows reducing manual follow-up" data-es="Flujos de comunicación automatizados reduciendo el seguimiento manual">Automated communication flows reducing manual follow-up</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Mobile-first experience serving the majority of traffic" data-es="Experiencia mobile-first sirviendo la mayoría del tráfico">Mobile-first experience serving the majority of traffic</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="CRM adapted and adopted by the Spanish sales team" data-es="CRM adaptado y adoptado por el equipo de ventas español">CRM adapted and adopted by the Spanish sales team</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="International branding preserved across all touchpoints" data-es="Marca internacional preservada en todos los puntos de contacto">International branding preserved across all touchpoints</span></li>
      </ul>
      <div class="section-img"><img src="../images/al-img1.jpg" alt="Results" loading="lazy"></div>
      <div style="margin-top:24px"><a href="https://www.ofertas-renting.alphabet.es/" target="_blank" class="btn-site t" data-en="Go to website ↗" data-es="Ver web ↗">Go to website ↗</a></div>
    </section>
  </main>
</div>






`
  },
  'global': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}a{text-decoration:none;color:inherit}img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}.nav-home:hover{color:var(--brand)}.nav-home svg{width:18px;height:18px}.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}.btn-site{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:var(--brand);color:#fff;border-radius:100px;font-size:15px;font-weight:700;transition:opacity .2s}.btn-site:hover{opacity:.85}
.hero-img-wrap{width:100%;max-height:600px;overflow:hidden}.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}.tools-grid{display:flex;flex-direction:column;gap:8px}.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}.content-section{margin-bottom:64px;scroll-margin-top:100px}.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}.section-img img{width:100%;height:auto;display:block}.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}.fab:hover{background:rgba(204,31,114,0.22)}.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}.proj-nav-link{display:flex;flex-direction:column;gap:4px}.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
@media(max-width:768px){.nav-inner,.proj-nav{padding:0 20px}.proj-hero{padding:40px 20px 32px}.proj-body{grid-template-columns:1fr;padding:0}.sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}.toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}.content{padding:32px 20px 60px}.section-img-row{grid-template-columns:1fr}.proj-nav{padding:24px 20px}}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags"><span class="tag t" data-en="🖥️ Web" data-es="🖥️ Web">🖥️ Web</span><span class="tag t" data-en="🌟 Branding" data-es="🌟 Branding">🌟 Branding</span></div>
  <h1 class="proj-title">Global Cover Solutions</h1>
  <p class="proj-subtitle t" data-en="Elevating Global Cover Solutions — a bold brand &amp; digital transformation for a logistics and transportation company" data-es="Transformación de marca y digital para una empresa de logística y transporte — identidad renovada y web completamente rediseñada">Elevating Global Cover Solutions — a bold brand &amp; digital transformation for a logistics and transportation company</p>
  <a href="https://www.globalcoversolutions.com/es/" target="_blank" class="btn-site t" data-en="Go to website ↗" data-es="Ver web ↗">Go to website ↗</a>
</section>

<div class="hero-img-wrap"><img src="../images/gc-hero.jpg" alt="Global Cover Solutions Hero"></div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#brand"><span class="t" data-en="The Brand" data-es="La marca">The Brand</span></a></li>
        <li><a href="#website"><span class="t" data-en="The Website" data-es="La web">The Website</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#333;color:#fff">Sk</div> Sketch</div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> Illustrator</div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> Photoshop</div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="brand">
      <p class="section-label t" data-en="01 — Brand" data-es="01 — Marca">01 — Brand</p>
      <h2 class="section-title t" data-en="Revitalising the Brand" data-es="Renovando la marca">Revitalising the Brand</h2>
      <p class="section-text t" data-en="Global Cover Solutions, a logistics and transportation company, came to us with a clear need: their existing brand no longer reflected the scale and ambition of their operation. The identity felt dated, inconsistent across touchpoints, and failed to communicate the trust and reliability that clients expected from a logistics partner." data-es="Global Cover Solutions, empresa de logística y transporte, nos llegó con una necesidad clara: su marca existente ya no reflejaba la escala y ambición de su operación. La identidad se sentía anticuada, inconsistente en los puntos de contacto y no transmitía la confianza y fiabilidad que los clientes esperaban de un socio logístico.">Global Cover Solutions, a logistics and transportation company, came to us with a clear need: their existing brand no longer reflected the scale and ambition of their operation. The identity felt dated, inconsistent across touchpoints, and failed to communicate the trust and reliability that clients expected from a logistics partner.</p>
      <div class="section-img"><img src="../images/gc-img1.jpg" alt="Brand before" loading="lazy"></div>
      <p class="section-label t" style="margin-top:32px" data-en="Key Branding Enhancements" data-es="Mejoras clave de marca">Key Branding Enhancements</p>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Refreshed logo with stronger typographic presence and icon clarity" data-es="Logo renovado con mayor presencia tipográfica y claridad del ícono">Refreshed logo with stronger typographic presence and icon clarity</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Vibrant, professional color palette conveying trust and energy" data-es="Paleta de colores vibrante y profesional que transmite confianza y energía">Vibrant, professional color palette conveying trust and energy</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Cohesive visual language across all brand touchpoints" data-es="Lenguaje visual cohesivo en todos los puntos de contacto de la marca">Cohesive visual language across all brand touchpoints</span></li>
      </ul>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/gc-img2.jpg" alt="New identity" loading="lazy"></div>
        <div class="section-img"><img src="../images/gc-img3.jpg" alt="Brand system" loading="lazy"></div>
      </div>
    </section>

    <section class="content-section" id="website">
      <p class="section-label t" data-en="02 — Website" data-es="02 — Web">02 — Website</p>
      <h2 class="section-title t" data-en="Transforming the Website" data-es="Transformando la web">Transforming the Website</h2>
      <p class="section-text t" data-en="With the new brand identity in place, the website needed a complete redesign. The previous site was static, hard to navigate, and didn't communicate the company's services or reach effectively. The new site needed to be dynamic, interactive, and drive enquiries." data-es="Con la nueva identidad de marca lista, la web necesitaba un rediseño completo. El sitio anterior era estático, difícil de navegar y no comunicaba los servicios ni el alcance de la empresa de forma efectiva. La nueva web debía ser dinámica, interactiva y generar consultas.">With the new brand identity in place, the website needed a complete redesign. The previous site was static, hard to navigate, and didn't communicate the company's services or reach effectively. The new site needed to be dynamic, interactive, and drive enquiries.</p>
      <div class="section-img"><img src="../images/gc-img4.jpg" alt="Website design" loading="lazy"></div>
      <p class="section-label t" style="margin-top:32px" data-en="Website Redesign Highlights" data-es="Puntos destacados del rediseño web">Website Redesign Highlights</p>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Dynamic homepage communicating services and reach immediately" data-es="Homepage dinámica que comunica servicios y alcance de inmediato">Dynamic homepage communicating services and reach immediately</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Interactive elements improving engagement and time on site" data-es="Elementos interactivos mejorando el engagement y el tiempo en el sitio">Interactive elements improving engagement and time on site</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Enhanced navigation making services and contact immediately accessible" data-es="Navegación mejorada haciendo los servicios y el contacto inmediatamente accesibles">Enhanced navigation making services and contact immediately accessible</span></li>
      </ul>
      <div class="section-img"><img src="../images/gc-img5.jpg" alt="Website live" loading="lazy"></div>
      <div style="margin-top:24px"><a href="https://www.globalcoversolutions.com/es/" target="_blank" class="btn-site t" data-en="Go to website ↗" data-es="Ver web ↗">Go to website ↗</a></div>
    </section>
  </main>
</div>






`
  },
  'ipsum': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}a{text-decoration:none;color:inherit}img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}.nav-home:hover{color:var(--brand)}.nav-home svg{width:18px;height:18px}.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}.agency-label{font-size:14px;color:var(--gray);margin-bottom:8px}.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}
.hero-img-wrap{width:100%;max-height:600px;overflow:hidden}.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}.tools-grid{display:flex;flex-direction:column;gap:8px}.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}.content-section{margin-bottom:64px;scroll-margin-top:100px}.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}.section-img img{width:100%;height:auto;display:block}.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}.fab:hover{background:rgba(204,31,114,0.22)}.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}.proj-nav-link{display:flex;flex-direction:column;gap:4px}.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
@media(max-width:768px){.nav-inner,.proj-nav{padding:0 20px}.proj-hero{padding:40px 20px 32px}.proj-body{grid-template-columns:1fr;padding:0}.sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}.toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}.content{padding:32px 20px 60px}.section-img-row{grid-template-columns:1fr}.proj-nav{padding:24px 20px}}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags"><span class="tag">🌟 Branding</span></div>
  <p class="agency-label t" data-en="Freelance work" data-es="Proyecto Freelance">Freelance work</p>
  <h1 class="proj-title">IPSUM — Agency</h1>
  <p class="proj-subtitle t" data-en="Building a bold &amp; digital-first identity for a marketing startup — a complete brand from scratch with no room for compromise" data-es="Construyendo una identidad audaz y digital-first para una startup de marketing — una marca completa desde cero sin margen para el compromiso">Building a bold &amp; digital-first identity for a marketing startup — a complete brand from scratch with no room for compromise</p>
</section>

<div class="hero-img-wrap">
  <img src="../images/ipsum-hero.jpg" alt="IPSUM Agency Hero">
</div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#brand"><span class="t" data-en="The Brand" data-es="La marca">The Brand</span></a></li>
        <li><a href="#results"><span class="t" data-en="Results &amp; Impact" data-es="Resultados e impacto">Results &amp; Impact</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> Illustrator</div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="brand">
      <p class="section-label t" data-en="01 — Brand" data-es="01 — Marca">01 — Brand</p>
      <h2 class="section-title t" data-en="Crafting a Distinctive &amp; Scalable Brand" data-es="Creando una marca distintiva y escalable">Crafting a Distinctive &amp; Scalable Brand</h2>
      <p class="section-text t" data-en="A newly founded digital marketing agency, Ipsum, approached me with a clear vision — to establish a strong brand presence that would position them as a premium player in the market from day one. The agency needed an identity that felt confident, cutting-edge, and entirely ownable in a crowded digital landscape." data-es="Ipsum, una agencia de marketing digital recién fundada, me contactó con una visión clara — establecer una fuerte presencia de marca que los posicionara como referente premium en el mercado desde el primer día. La agencia necesitaba una identidad que transmitiera confianza, vanguardia y total propiedad en un panorama digital muy competitivo.">A newly founded digital marketing agency, Ipsum, approached me with a clear vision — to establish a strong brand presence that would position them as a premium player in the market from day one. The agency needed an identity that felt confident, cutting-edge, and entirely ownable in a crowded digital landscape.</p>
      <p class="section-text t" data-en="The design direction drew from the digital landscape itself: grid structures, UI-inspired geometric accents, and a typography-first approach that turned the brand name into a visual asset. Every element was designed to scale — from business cards to large-format campaigns." data-es="La dirección creativa bebió del propio paisaje digital: estructuras de cuadrícula, acentos geométricos inspirados en UI y un enfoque tipográfico que convirtió el nombre de la marca en un activo visual. Cada elemento fue diseñado para escalar — desde tarjetas de visita hasta campañas de gran formato.">The design direction drew from the digital landscape itself: grid structures, UI-inspired geometric accents, and a typography-first approach that turned the brand name into a visual asset. Every element was designed to scale — from business cards to large-format campaigns.</p>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/ipsum-img1.jpg" alt="Logo system" loading="lazy"></div>
        <div class="section-img"><img src="../images/ipsum-img2.jpg" alt="Color palette" loading="lazy"></div>
      </div>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/ipsum-img3.jpg" alt="Typography" loading="lazy"></div>
        <div class="section-img"><img src="../images/ipsum-img4.jpg" alt="Brand elements" loading="lazy"></div>
      </div>
    </section>

    <section class="content-section" id="results">
      <p class="section-label t" data-en="02 — Results &amp; Impact" data-es="02 — Resultados e impacto">02 — Results &amp; Impact</p>
      <h2 class="section-title t" data-en="Positioned to Win" data-es="Posicionada para ganar">Positioned to Win</h2>
      <p class="section-text t" data-en="The resulting brand positioned IPSUM as a cutting-edge, premium agency — not a startup trying to look established, but a confident new voice with a clear point of view. The identity provided a solid foundation for all future marketing, digital, and client-facing materials." data-es="La marca resultante posicionó a IPSUM como una agencia premium de vanguardia — no una startup intentando parecer consolidada, sino una nueva voz segura con un punto de vista claro. La identidad proporcionó una base sólida para todos los materiales futuros de marketing, digitales y de cara al cliente.">The resulting brand positioned IPSUM as a cutting-edge, premium agency — not a startup trying to look established, but a confident new voice with a clear point of view. The identity provided a solid foundation for all future marketing, digital, and client-facing materials.</p>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/ipsum-img5.jpg" alt="Brand in use" loading="lazy"></div>
        <div class="section-img"><img src="../images/ipsum-img6.jpg" alt="Applications" loading="lazy"></div>
      </div>
      <div class="section-img"><img src="../images/ipsum-img7.jpg" alt="Final brand system" loading="lazy"></div>
    </section>
  </main>
</div>






`
  },
  'kdpof': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}a{text-decoration:none;color:inherit}img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}.nav-home:hover{color:var(--brand)}.nav-home svg{width:18px;height:18px}.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}
.hero-banner{width:100%;background:#290e76;display:flex;align-items:center;justify-content:center;padding:80px 48px;min-height:400px}
.hero-banner img{max-width:480px;width:100%;height:auto}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}.tools-grid{display:flex;flex-direction:column;gap:8px}.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}.content-section{margin-bottom:64px;scroll-margin-top:100px}.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}.section-img img{width:100%;height:auto;display:block}
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}.fab:hover{background:rgba(204,31,114,0.22)}.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}.proj-nav-link{display:flex;flex-direction:column;gap:4px}.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
@media(max-width:768px){.nav-inner,.proj-nav{padding:0 20px}.proj-hero{padding:40px 20px 32px}.hero-banner{padding:48px 24px;min-height:260px}.proj-body{grid-template-columns:1fr;padding:0}.sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}.toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}.content{padding:32px 20px 60px}.proj-nav{padding:24px 20px}}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags"><span class="tag">🧩 Workshops</span><span class="tag">🌟 Branding</span></div>
  <h1 class="proj-title t" data-en="From KDPOF to KD" data-es="De KDPOF a KD">From KDPOF to KD</h1>
  <p class="proj-subtitle t" data-en="A new brand identity for a new era — strategic workshop and complete rebranding for a high-speed optical communication company" data-es="Una nueva identidad de marca para una nueva era — workshop estratégico y rebranding completo para una empresa de comunicaciones ópticas de alta velocidad">A new brand identity for a new era — strategic workshop and complete rebranding for a high-speed optical communication company</p>
</section>

<div class="hero-banner">
  <img src="../images/kd-hero.jpg" alt="KD brand identity">
</div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#workshop"><span class="t" data-en="The Workshop" data-es="El workshop">The Workshop</span></a></li>
        <li><a href="#brand"><span class="t" data-en="The Brand" data-es="La marca">The Brand</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#333;color:#fff">Sk</div> Sketch</div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> Illustrator</div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> Photoshop</div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="workshop">
      <p class="section-label t" data-en="01 — Workshop" data-es="01 — Workshop">01 — Workshop</p>
      <h2 class="section-title t" data-en="The Workshop" data-es="El workshop">The Workshop</h2>
      <p class="section-text t" data-en="KDPOF, a leading company in high-speed optical communication solutions for harsh environments, decided to take a strategic leap — to expand beyond its original acronym and evolve into a broader technology brand known simply as KD. This wasn't just a name change; it required a complete strategic repositioning." data-es="KDPOF, empresa líder en soluciones de comunicaciones ópticas de alta velocidad para entornos hostiles, decidió dar un salto estratégico — expandirse más allá de su acrónimo original y evolucionar hacia una marca tecnológica más amplia conocida simplemente como KD. No era solo un cambio de nombre; requería un reposicionamiento estratégico completo.">KDPOF, a leading company in high-speed optical communication solutions for harsh environments, decided to take a strategic leap — to expand beyond its original acronym and evolve into a broader technology brand known simply as KD. This wasn't just a name change; it required a complete strategic repositioning.</p>
      <p class="section-text t" data-en="A tailor-made brand strategy workshop brought together KDPOF's leadership team to align on vision, values, and target positioning before a single design decision was made." data-es="Un workshop de estrategia de marca a medida reunió al equipo directivo de KDPOF para alinear visión, valores y posicionamiento antes de tomar ninguna decisión de diseño.">A tailor-made brand strategy workshop brought together KDPOF's leadership team to align on vision, values, and target positioning before a single design decision was made.</p>
      <div class="section-img"><img src="../images/kd-img1.jpg" alt="Workshop" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Brand vision and mission alignment workshop" data-es="Workshop de alineación de visión y misión de marca">Brand vision and mission alignment workshop</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Competitive landscape and positioning mapping" data-es="Mapeo del panorama competitivo y posicionamiento">Competitive landscape and positioning mapping</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Target audience and key message definition" data-es="Definición de audiencia objetivo y mensajes clave">Target audience and key message definition</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Strategic brand direction consensus across leadership" data-es="Consenso de dirección estratégica de marca entre el equipo directivo">Strategic brand direction consensus across leadership</span></li>
      </ul>
    </section>

    <section class="content-section" id="brand">
      <p class="section-label t" data-en="02 — Brand" data-es="02 — Marca">02 — Brand</p>
      <h2 class="section-title t" data-en="Reimagining the Brand" data-es="Reimaginando la marca">Reimagining the Brand</h2>
      <p class="section-text t" data-en="The new KD brand had to honour the company's deep technical heritage — 15+ years of innovation in optical communications — while opening the door to a wider technology market. The identity needed to feel both authoritative and forward-looking, grounded in engineering excellence but ready for a global stage." data-es="La nueva marca KD debía honrar el profundo legado técnico de la empresa — más de 15 años de innovación en comunicaciones ópticas — mientras abría la puerta a un mercado tecnológico más amplio. La identidad debía transmitir autoridad y visión de futuro, anclada en la excelencia ingenieril pero preparada para el escenario global.">The new KD brand had to honour the company's deep technical heritage — 15+ years of innovation in optical communications — while opening the door to a wider technology market. The identity needed to feel both authoritative and forward-looking, grounded in engineering excellence but ready for a global stage.</p>
      <div class="section-img"><img src="../images/kd-img2.jpg" alt="Brand concept" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Refined name and monogram — KD — clean, ownable, scalable" data-es="Nombre y monograma refinados — KD — limpio, propio y escalable">Refined name and monogram — KD — clean, ownable, scalable</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Strategic brand personality bridging legacy and innovation" data-es="Personalidad de marca estratégica que conecta legado e innovación">Strategic brand personality bridging legacy and innovation</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="New typography and design elements reflecting precision and technology" data-es="Nueva tipografía y elementos de diseño que reflejan precisión y tecnología">New typography and design elements reflecting precision and technology</span></li>
      </ul>
      <div class="section-img"><img src="../images/kd-img3.jpg" alt="Brand system" loading="lazy"></div>
    </section>
  </main>
</div>






`
  },
  'radianna': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}a{text-decoration:none;color:inherit}img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}.nav-home:hover{color:var(--brand)}.nav-home svg{width:18px;height:18px}.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}.btn-site{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:var(--brand);color:#fff;border-radius:100px;font-size:15px;font-weight:700;transition:opacity .2s}.btn-site:hover{opacity:.85}
.hero-img-wrap{width:100%;max-height:600px;overflow:hidden}.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}.tools-grid{display:flex;flex-direction:column;gap:8px}.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}.content-section{margin-bottom:64px;scroll-margin-top:100px}.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}.section-img img{width:100%;height:auto;display:block}.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}.section-img-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin:24px 0}
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}.fab:hover{background:rgba(204,31,114,0.22)}.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}.proj-nav-link{display:flex;flex-direction:column;gap:4px}.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
@media(max-width:768px){.nav-inner,.proj-nav{padding:0 20px}.proj-hero{padding:40px 20px 32px}.proj-body{grid-template-columns:1fr;padding:0}.sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}.toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}.content{padding:32px 20px 60px}.section-img-row,.section-img-3{grid-template-columns:1fr}.proj-nav{padding:24px 20px}}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags"><span class="tag">🌟 Branding</span><span class="tag">🖥️ Web</span></div>
  <h1 class="proj-title">RADIANNA</h1>
  <p class="proj-subtitle t" data-en="Building Trust Through Design — complete brand identity and website for a radiology RIS system expanding into hospitals" data-es="Construyendo confianza a través del diseño — identidad de marca completa y web para un sistema RIS de radiología en expansión hospitalaria">Building Trust Through Design — complete brand identity and website for a radiology RIS system expanding into hospitals</p>
  <a href="https://radianna.es/" target="_blank" class="btn-site t" data-en="Go to website ↗" data-es="Ver web ↗">Go to website ↗</a>
</section>

<div class="hero-img-wrap"><img src="../images/rad-hero.jpg" alt="RADIANNA Hero"></div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#brand"><span class="t" data-en="The Brand" data-es="La marca">The Brand</span></a></li>
        <li><a href="#website"><span class="t" data-en="The Website" data-es="La web">The Website</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#333;color:#fff">Sk</div> Sketch</div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> Illustrator</div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> Photoshop</div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="brand">
      <p class="section-label t" data-en="01 — Brand" data-es="01 — Marca">01 — Brand</p>
      <h2 class="section-title t" data-en="Revitalising the Brand" data-es="Renovando la marca">Revitalising the Brand</h2>
      <p class="section-text t" data-en="Radianna is a radiology RIS (Radiology Information System) already implemented and sold to hospitals, with a clear expansion plan in place. Despite having a functional and validated product, it lacked any cohesive brand identity — no logo, no visual system, no brand manual. The challenge was to build everything from scratch, establishing a visual identity that would earn the trust of hospital directors and medical professionals." data-es="Radianna es un sistema RIS de radiología (Sistema de Información Radiológica) ya implementado y vendido a hospitales, con un plan de expansión claro. A pesar de contar con un producto funcional y validado, carecía de identidad de marca — sin logo, sin sistema visual, sin manual. El reto era construirlo todo desde cero, estableciendo una identidad visual que ganara la confianza de directores hospitalarios y profesionales médicos.">Radianna is a radiology RIS (Radiology Information System) already implemented and sold to hospitals, with a clear expansion plan in place. Despite having a functional and validated product, it lacked any cohesive brand identity — no logo, no visual system, no brand manual. The challenge was to build everything from scratch, establishing a visual identity that would earn the trust of hospital directors and medical professionals.</p>
      <div class="section-img"><img src="../images/rad-img1.jpg" alt="Brand foundation" loading="lazy"></div>
      <p class="section-text t" data-en="The brand needed to communicate three core values: precision, reliability, and technological innovation. It had to feel at home in clinical environments while remaining modern and forward-looking." data-es="La marca debía comunicar tres valores fundamentales: precisión, fiabilidad e innovación tecnológica. Tenía que encajar en entornos clínicos sin perder modernidad ni visión de futuro.">The brand needed to communicate three core values: precision, reliability, and technological innovation. It had to feel at home in clinical environments while remaining modern and forward-looking.</p>
      <div class="section-img-3">
        <div class="section-img" style="margin:0"><img src="../images/rad-img2.jpg" alt="Logo" loading="lazy"></div>
        <div class="section-img" style="margin:0"><img src="../images/rad-img3.jpg" alt="Color system" loading="lazy"></div>
        <div class="section-img" style="margin:0"><img src="../images/rad-img4.jpg" alt="Brand manual" loading="lazy"></div>
      </div>
    </section>

    <section class="content-section" id="website">
      <p class="section-label t" data-en="02 — Website" data-es="02 — Web">02 — Website</p>
      <h2 class="section-title t" data-en="The Website" data-es="La web">The Website</h2>
      <p class="section-text t" data-en="With the brand identity established, the next step was a focused landing page designed for a very specific audience: hospital directors and procurement managers evaluating RIS software. The site needed to communicate the product's value proposition clearly, establish credibility, and convert interest into contact." data-es="Con la identidad de marca establecida, el siguiente paso fue una landing page enfocada diseñada para una audiencia muy específica: directores hospitalarios y responsables de compras que evaluaban software RIS. El sitio debía comunicar claramente la propuesta de valor, establecer credibilidad y convertir el interés en contacto.">With the brand identity established, the next step was a focused landing page designed for a very specific audience: hospital directors and procurement managers evaluating RIS software. The site needed to communicate the product's value proposition clearly, establish credibility, and convert interest into contact.</p>
      <p class="section-text t" data-en="No distractions, no unnecessary pages — just a clear, focused digital presence that reflected the precision of the product itself." data-es="Sin distracciones, sin páginas innecesarias — solo una presencia digital clara y enfocada que reflejaba la precisión del propio producto.">No distractions, no unnecessary pages — just a clear, focused digital presence that reflected the precision of the product itself.</p>
      <div class="section-img"><img src="../images/rad-img5.jpg" alt="Desktop website" loading="lazy"></div>
      <div class="section-img"><img src="../images/rad-img6.jpg" alt="Mobile website" loading="lazy"></div>
      <div style="margin-top:24px"><a href="https://radianna.es/" target="_blank" class="btn-site t" data-en="Go to website ↗" data-es="Ver web ↗">Go to website ↗</a></div>
    </section>
  </main>
</div>






`
  },
  'sports-club': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}
.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}
.nav-home:hover{color:var(--brand)}
.nav-home svg{width:18px;height:18px}
.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}
.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}
.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}
.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}
.agency-label{font-size:14px;color:var(--gray);margin-bottom:8px}
.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}
.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}
.hero-img-wrap{width:100%;max-height:600px;overflow:hidden}
.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}
.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}
.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}
.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}
.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}
.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}
.tools-grid{display:flex;flex-direction:column;gap:8px}
.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}
.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}
.content-section{margin-bottom:64px;scroll-margin-top:100px}
.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}
.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}
.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}
.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}
.section-img img{width:100%;height:auto;display:block}
.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}
.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}
.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}
.process-steps{display:flex;flex-direction:column;gap:16px;margin:20px 0}
.step{display:flex;align-items:flex-start;gap:16px}
.step-num{width:32px;height:32px;border-radius:50%;background:#6f00ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;margin-top:1px}
.step-title{font-size:15px;font-weight:700;margin-bottom:2px}
.step-desc{font-size:14px;color:var(--gray);line-height:1.5}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}
.fab:hover{background:rgba(204,31,114,0.22)}
.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}
.proj-nav-link{display:flex;flex-direction:column;gap:4px}
.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}
.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}
.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
@media(max-width:768px){
  .nav-inner{padding:0 20px}
  .proj-hero{padding:40px 20px 32px}
  .proj-body{grid-template-columns:1fr;padding:0}
  .sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}
  .toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}
  .content{padding:32px 20px 60px}
  .proj-nav{padding:24px 20px}
  .section-img-row{grid-template-columns:1fr}
}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags">
    <span class="tag">📲 APPs</span>
    <span class="tag">🧩 Workshops</span>
  </div>
  <p class="agency-label t" data-en="Work done at Thankium Digital Agency" data-es="Proyecto en Thankium Digital Agency">Work done at Thankium Digital Agency</p>
  <h1 class="proj-title">Sports Club APP &amp; Virtual Office</h1>
  <p class="proj-subtitle t" data-en="Digital transformation of 4 sports clubs — hybrid app + integrated virtual office with +70% retention" data-es="Transformación digital de 4 clubes deportivos — app híbrida + oficina virtual integrada con +70% de retención">Digital transformation of 4 sports clubs — hybrid app + integrated virtual office with +70% retention</p>
</section>

<div class="hero-img-wrap">
  <img src="../images/sc-hero.jpg" alt="Sports Club App Hero">
</div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#challenge"><span class="t" data-en="The Challenge" data-es="El reto">The Challenge</span></a></li>
        <li><a href="#requirements"><span class="t" data-en="Key Requirements" data-es="Requisitos clave">Key Requirements</span></a></li>
        <li><a href="#process"><span class="t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</span></a></li>
        <li><a href="#results"><span class="t" data-en="Results" data-es="Resultados">Results</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#0acf83;color:#fff">F</div> <span class="t" data-en="Figma" data-es="Figma">Figma</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff6244;color:#fff">Mi</div> <span class="t" data-en="Miro" data-es="Miro">Miro</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> <span class="t" data-en="Illustrator" data-es="Illustrator">Illustrator</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> <span class="t" data-en="Photoshop" data-es="Photoshop">Photoshop</span></div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="challenge">
      <p class="section-label t" data-en="01 — Challenge" data-es="01 — Reto">01 — Challenge</p>
      <h2 class="section-title t" data-en="The Challenge" data-es="El reto">The Challenge</h2>
      <p class="section-text t" data-en="Four sports clubs each had unique requirements, yet all relied on the same outdated software. A significant percentage of their members — including older adults and non-digital users — were not using the platform. The clubs needed a modern, unified digital experience without losing club-specific identity." data-es="Cuatro clubes deportivos tenían requisitos únicos pero dependían del mismo software obsoleto. Un porcentaje significativo de sus socios — incluidos adultos mayores y usuarios no digitales — no usaba la plataforma. Los clubes necesitaban una experiencia digital moderna y unificada sin perder la identidad de cada club.">Four sports clubs each had unique requirements, yet all relied on the same outdated software. A significant percentage of their members — including older adults and non-digital users — were not using the platform. The clubs needed a modern, unified digital experience without losing club-specific identity.</p>
      <div class="section-img"><img src="../images/sc-img1.jpg" alt="Challenge" loading="lazy"></div>
      <p class="section-text t" data-en="The project required building a hybrid iOS/Android app plus an integrated web Virtual Office — all designed for users who had never engaged with a digital platform before." data-es="El proyecto requería construir una app híbrida iOS/Android más una Oficina Virtual web integrada — todo diseñado para usuarios que nunca habían interactuado con una plataforma digital.">The project required building a hybrid iOS/Android app plus an integrated web Virtual Office — all designed for users who had never engaged with a digital platform before.</p>
    </section>

    <section class="content-section" id="requirements">
      <p class="section-label t" data-en="02 — Requirements" data-es="02 — Requisitos">02 — Requirements</p>
      <h2 class="section-title t" data-en="Key Project Requirements" data-es="Requisitos clave del proyecto">Key Project Requirements</h2>
      <div class="section-img"><img src="../images/sc-img2.jpg" alt="Requirements" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Hybrid app (iOS &amp; Android) + integrated Virtual Office web platform" data-es="App híbrida (iOS y Android) + plataforma web de Oficina Virtual integrada">Hybrid app (iOS &amp; Android) + integrated Virtual Office web platform</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Dynamic booking system for facilities, classes, and events" data-es="Sistema de reservas dinámico para instalaciones, clases y eventos">Dynamic booking system for facilities, classes, and events</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Digital wallet with QR code access control" data-es="Monedero digital con control de acceso por código QR">Digital wallet with QR code access control</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Tournament management and push notifications" data-es="Gestión de torneos y notificaciones push">Tournament management and push notifications</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Custom UI kit per club maintaining shared system" data-es="UI kit personalizado por club sobre un sistema compartido">Custom UI kit per club maintaining shared system</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Designed for non-digital users — accessibility first" data-es="Diseñado para usuarios no digitales — accesibilidad primero">Designed for non-digital users — accessibility first</span></li>
      </ul>
    </section>

    <section class="content-section" id="process">
      <p class="section-label t" data-en="03 — Process" data-es="03 — Proceso">03 — Process</p>
      <h2 class="section-title t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</h2>
      <div class="process-steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><p class="step-title t" data-en="Discovery Workshops" data-es="Workshops de Discovery (3 días con stakeholders de cada club)">Discovery Workshops</p><p class="step-desc t" data-en="3-day workshops with each club's stakeholders, members, and staff to map needs, pain points, and workflows." data-es="Mapeo de necesidades, puntos de dolor y flujos de trabajo con stakeholders, socios y personal de cada club.">3-day workshops with each club's stakeholders, members, and staff to map needs, pain points, and workflows.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><p class="step-title t" data-en="User Journey Mapping" data-es="Mapeo de Journey de Usuario (4 tipos de usuario: socios, staff, entrenadores, gestores)">User Journey Mapping</p><p class="step-desc t" data-en="Mapped end-to-end journeys for 4 distinct user types: members, admin staff, coaches, and club managers." data-es="Mapeo de journeys completos para 4 tipos de usuario distintos: socios, staff, entrenadores y gestores.">Mapped end-to-end journeys for 4 distinct user types: members, admin staff, coaches, and club managers.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><p class="step-title t" data-en="Information Architecture" data-es="Arquitectura de la Información (estructura compartida personalizable por club)">Information Architecture</p><p class="step-desc t" data-en="Designed a shared app structure that could be customised per club without duplicating dev effort." data-es="Estructura de app compartida personalizable por club sin duplicar el esfuerzo de desarrollo.">Designed a shared app structure that could be customised per club without duplicating dev effort.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><p class="step-title t" data-en="Design System Creation" data-es="Creación del Design System (UI kit con tematización por club — colores, logos, iconos)">Design System Creation</p><p class="step-desc t" data-en="Built a scalable UI kit with club-specific theming — colors, logos, and icons — while sharing components." data-es="UI kit escalable con tematización por club — colores, logos e iconos — compartiendo componentes base.">Built a scalable UI kit with club-specific theming — colors, logos, and icons — while sharing components.</p></div></div>
        <div class="step"><div class="step-num">5</div><div class="step-content"><p class="step-title t" data-en="Prototyping &amp; Testing" data-es="Prototipado y Testing (con socios reales incluidas personas mayores)">Prototyping &amp; Testing</p><p class="step-desc t" data-en="Tested with actual club members including seniors, iterating on onboarding, booking flows, and wallet UX." data-es="Testing con socios reales incluidas personas mayores, iterando sobre onboarding, reservas y monedero.">Tested with actual club members including seniors, iterating on onboarding, booking flows, and wallet UX.</p></div></div>
        <div class="step"><div class="step-num">6</div><div class="step-content"><p class="step-title t" data-en="Handoff &amp; Launch Support" data-es="Handoff y soporte al lanzamiento (specs Figma, librería de componentes)">Handoff &amp; Launch Support</p><p class="step-desc t" data-en="Full dev handoff with annotated Figma specs, component library, and ongoing launch consulting." data-es="Handoff completo con specs Figma anotadas, librería de componentes y consultoría durante el lanzamiento.">Full dev handoff with annotated Figma specs, component library, and ongoing launch consulting.</p></div></div>
      </div>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/sc-img3.jpg" alt="Process" loading="lazy"></div>
        <div class="section-img"><img src="../images/sc-img4.jpg" alt="Design" loading="lazy"></div>
      </div>
    </section>

    <section class="content-section" id="results">
      <p class="section-label t" data-en="04 — Results" data-es="04 — Resultados">04 — Results</p>
      <h2 class="section-title t" data-en="Results and Deliverables" data-es="Resultados y entregables">Results and Deliverables</h2>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="+70% increase in app retention and active daily usage" data-es="+70% de incremento en la retención y uso diario activo de la app">+70% increase in app retention and active daily usage</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Hybrid app deployed across 4 clubs with custom theming" data-es="App híbrida desplegada en 4 clubes con tematización personalizada">Hybrid app deployed across 4 clubs with custom theming</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Virtual Office web platform successfully integrated" data-es="Plataforma web de Oficina Virtual integrada con éxito">Virtual Office web platform successfully integrated</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Digital wallet + QR access adopted by majority of members" data-es="Monedero digital + acceso QR adoptados por la mayoría de socios">Digital wallet + QR access adopted by majority of members</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Non-digital users onboarded successfully via simplified flows" data-es="Usuarios no digitales incorporados con éxito mediante flujos simplificados">Non-digital users onboarded successfully via simplified flows</span></li>
      </ul>
      <div class="section-img"><img src="../images/sc-img5.jpg" alt="Results" loading="lazy"></div>
    </section>
  </main>
</div>







`
  },
  'tracker': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}a{text-decoration:none;color:inherit}img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}.nav-home:hover{color:var(--brand)}.nav-home svg{width:18px;height:18px}.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}.agency-label{font-size:14px;color:var(--gray);margin-bottom:8px}.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}
.hero-img-wrap{width:100%;max-height:600px;overflow:hidden}.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}.tools-grid{display:flex;flex-direction:column;gap:8px}.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}.content-section{margin-bottom:64px;scroll-margin-top:100px}.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}.section-img img{width:100%;height:auto;display:block}.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}
.process-steps{display:flex;flex-direction:column;gap:16px;margin:20px 0}.step{display:flex;align-items:flex-start;gap:16px}.step-num{width:32px;height:32px;border-radius:50%;background:#6f00ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;margin-top:1px}.step-title{font-size:15px;font-weight:700;margin-bottom:2px}.step-desc{font-size:14px;color:var(--gray);line-height:1.5}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}.fab:hover{background:rgba(204,31,114,0.22)}.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}.proj-nav-link{display:flex;flex-direction:column;gap:4px}.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
@media(max-width:768px){.nav-inner,.proj-nav{padding:0 20px}.proj-hero{padding:40px 20px 32px}.proj-body{grid-template-columns:1fr;padding:0}.sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}.toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}.content{padding:32px 20px 60px}.section-img-row{grid-template-columns:1fr}.proj-nav{padding:24px 20px}}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags"><span class="tag t" data-en="🎯 UX Consulting" data-es="🎯 UX Consulting">🎯 UX Consulting</span><span class="tag t" data-en="📲 APPs" data-es="📲 APPs">📲 APPs</span><span class="tag t" data-en="🌟 Branding" data-es="🌟 Branding">🌟 Branding</span></div>
  <p class="agency-label t" data-en="Independent project · Freelance" data-es="Proyecto independiente · Freelance">Independent project · Freelance</p>
  <h1 class="proj-title">ZenderBox APP</h1>
  <p class="proj-subtitle t" data-en="Redesigning Logistics Through Clarity — a complete iOS &amp; Android redesign without touching the underlying codebase" data-es="Rediseño de la logística a través de la claridad — rediseño completo iOS y Android sin tocar el código base existente">Redesigning Logistics Through Clarity — a complete iOS &amp; Android redesign without touching the underlying codebase</p>
</section>

<div class="hero-img-wrap"><img src="../images/tr-hero.jpg" alt="ZenderBox App Hero"></div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#challenge"><span class="t" data-en="The Challenge" data-es="El reto">The Challenge</span></a></li>
        <li><a href="#requirements"><span class="t" data-en="Key Requirements" data-es="Requisitos clave">Key Requirements</span></a></li>
        <li><a href="#process"><span class="t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</span></a></li>
        <li><a href="#results"><span class="t" data-en="Results" data-es="Resultados">Results</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#0acf83;color:#fff">F</div> Figma</div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> Photoshop</div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> Illustrator</div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="challenge">
      <p class="section-label t" data-en="01 — Challenge" data-es="01 — Reto">01 — Challenge</p>
      <h2 class="section-title t" data-en="The Challenge" data-es="El reto">The Challenge</h2>
      <p class="section-text t" data-en="ZenderBox is an international locker service operating across Latin America. The existing app had an outdated visual identity, unclear navigation, and poor information hierarchy — yet a full rebuild wasn't an option. The redesign had to stay within the existing technical architecture without adding complexity to the codebase." data-es="ZenderBox es un servicio internacional de casilleros en Latinoamérica. La app existente tenía una identidad visual obsoleta, navegación poco clara y jerarquía de información deficiente — pero una reconstrucción completa no era una opción. El rediseño debía mantenerse dentro de la arquitectura técnica existente sin añadir complejidad al código.">ZenderBox is an international locker service operating across Latin America. The existing app had an outdated visual identity, unclear navigation, and poor information hierarchy — yet a full rebuild wasn't an option. The redesign had to stay within the existing technical architecture without adding complexity to the codebase.</p>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/tr-img1.jpg" alt="Before" loading="lazy"></div>
        <div class="section-img"><img src="../images/tr-img2.jpg" alt="Problems" loading="lazy"></div>
      </div>
      <p class="section-text t" data-en="The core constraint: deliver a modern, intuitive app that feels completely new — without modifying the underlying architecture. Every design decision had to be technically feasible within the existing system." data-es="La restricción principal: entregar una app moderna e intuitiva que se sienta completamente nueva — sin modificar la arquitectura subyacente. Cada decisión de diseño tenía que ser técnicamente viable dentro del sistema existente.">The core constraint: deliver a modern, intuitive app that feels completely new — without modifying the underlying architecture. Every design decision had to be technically feasible within the existing system.</p>
    </section>

    <section class="content-section" id="requirements">
      <p class="section-label t" data-en="02 — Requirements" data-es="02 — Requisitos">02 — Requirements</p>
      <h2 class="section-title t" data-en="Key Project Requirements" data-es="Requisitos clave del proyecto">Key Project Requirements</h2>
      <div class="section-img"><img src="../images/tr-img3.jpg" alt="Requirements" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Modern visual identity aligned with ZenderBox brand evolution" data-es="Identidad visual moderna alineada con la evolución de la marca ZenderBox">Modern visual identity aligned with ZenderBox brand evolution</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Technically feasible redesign within existing code architecture" data-es="Rediseño técnicamente viable dentro de la arquitectura de código existente">Technically feasible redesign within existing code architecture</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Improved UX structure with clearer navigation and hierarchy" data-es="Estructura UX mejorada con navegación y jerarquía más claras">Improved UX structure with clearer navigation and hierarchy</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Scalable design system with semantic tokens" data-es="Sistema de diseño escalable con tokens semánticos">Scalable design system with semantic tokens</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Visual status signalling system for package states" data-es="Sistema de señalización visual para estados de paquete">Visual status signalling system for package states</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Faster user comprehension of package status and actions" data-es="Comprensión más rápida del estado y acciones disponibles">Faster user comprehension of package status and actions</span></li>
      </ul>
    </section>

    <section class="content-section" id="process">
      <p class="section-label t" data-en="03 — Process" data-es="03 — Proceso">03 — Process</p>
      <h2 class="section-title t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</h2>
      <div class="process-steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><p class="step-title t" data-en="UX/UI Audit" data-es="Auditoría UX/UI">UX/UI Audit</p><p class="step-desc t" data-en="Comprehensive heuristic evaluation of the existing app — identified navigation issues, hierarchy problems, and usability gaps." data-es="Auditoría UX/UI (evaluación heurística completa — navegación, jerarquía, usabilidad)">Comprehensive heuristic evaluation of the existing app — identified navigation issues, hierarchy problems, and usability gaps.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><p class="step-title t" data-en="Structural Reorganisation" data-es="Reorganización estructural">Structural Reorganisation</p><p class="step-desc t" data-en="Redesigned the information architecture: renamed sections, regrouped features, and simplified the tab bar navigation." data-es="Reorganización estructural (IA rediseñada: secciones renombradas, funcionalidades reagrupadas, tab bar simplificado)">Redesigned the information architecture: renamed sections, regrouped features, and simplified the tab bar navigation.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><p class="step-title t" data-en="Naming &amp; Content Strategy" data-es="Estrategia de nomenclatura y contenido">Naming &amp; Content Strategy</p><p class="step-desc t" data-en="Rewrote all microcopy, labels, and section names to be clear, consistent, and user-centric." data-es="Estrategia de nomenclatura y contenido (microcopy, etiquetas y nombres de sección reescritos)">Rewrote all microcopy, labels, and section names to be clear, consistent, and user-centric.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><p class="step-title t" data-en="Design System Creation" data-es="Creación del Design System">Design System Creation</p><p class="step-desc t" data-en="Built a new mobile-only design system (Plus Jakarta Sans, semantic color tokens, 430px canvas) compatible with existing tech." data-es="Creación del Design System (nuevo sistema solo para mobile: Plus Jakarta Sans, tokens semánticos, canvas 430px)">Built a new mobile-only design system (Plus Jakarta Sans, semantic color tokens, 430px canvas) compatible with existing tech.</p></div></div>
        <div class="step"><div class="step-num">5</div><div class="step-content"><p class="step-title t" data-en="Visual Hierarchy &amp; Signalling" data-es="Jerarquía visual y señalización">Visual Hierarchy &amp; Signalling</p><p class="step-desc t" data-en="Designed a color-coded package state system: En tienda · En bodega · Despachado · En camino · Entregado." data-es="Jerarquía visual y señalización (sistema de estados de paquete codificado por color)">Designed a color-coded package state system: En tienda · En bodega · Despachado · En camino · Entregado.</p></div></div>
        <div class="step"><div class="step-num">6</div><div class="step-content"><p class="step-title t" data-en="Branding &amp; Market Readiness" data-es="Identidad de marca y posicionamiento">Branding &amp; Market Readiness</p><p class="step-desc t" data-en="Updated the visual language to position ZenderBox competitively in its markets with a fresh, trustworthy identity." data-es="Identidad de marca y posicionamiento (lenguaje visual actualizado para competir en sus mercados)">Updated the visual language to position ZenderBox competitively in its markets with a fresh, trustworthy identity.</p></div></div>
      </div>
      <div class="section-img"><img src="../images/tr-img4.jpg" alt="Process" loading="lazy"></div>
    </section>

    <section class="content-section" id="results">
      <p class="section-label t" data-en="04 — Results" data-es="04 — Resultados">04 — Results</p>
      <h2 class="section-title t" data-en="Results and Deliverables" data-es="Resultados y entregables">Results and Deliverables</h2>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Fully redesigned app — modern, intuitive, and brand-aligned" data-es="App completamente rediseñada — moderna, intuitiva y alineada con la marca">Fully redesigned app — modern, intuitive, and brand-aligned</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="New design system with semantic tokens ready for development" data-es="Nuevo sistema de diseño con tokens semánticos listo para desarrollo">New design system with semantic tokens ready for development</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Improved navigation reducing user confusion and drop-off" data-es="Navegación mejorada reduciendo confusión y abandono">Improved navigation reducing user confusion and drop-off</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Clear visual package state signalling understood at a glance" data-es="Señalización visual clara de estados de paquete comprensible de un vistazo">Clear visual package state signalling understood at a glance</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Stronger product experience without architectural changes" data-es="Mejor experiencia de producto sin cambios en la arquitectura">Stronger product experience without architectural changes</span></li>
      </ul>
      <div class="section-img"><img src="../images/tr-img5.jpg" alt="Results" loading="lazy"></div>
    </section>
  </main>
</div>






`
  },
  'trina-solar': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}a{text-decoration:none;color:inherit}img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}.nav-home:hover{color:var(--brand)}.nav-home svg{width:18px;height:18px}.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}.btn-site{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:var(--brand);color:#fff;border-radius:100px;font-size:15px;font-weight:700;transition:opacity .2s}.btn-site:hover{opacity:.85}
.hero-img-wrap{width:100%;max-height:600px;overflow:hidden}.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}.tools-grid{display:flex;flex-direction:column;gap:8px}.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}.content-section{margin-bottom:64px;scroll-margin-top:100px}.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}.section-img img{width:100%;height:auto;display:block}
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}
.process-steps{display:flex;flex-direction:column;gap:16px;margin:20px 0}.step{display:flex;align-items:flex-start;gap:16px}.step-num{width:32px;height:32px;border-radius:50%;background:#6f00ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;margin-top:1px}.step-title{font-size:15px;font-weight:700;margin-bottom:2px}.step-desc{font-size:14px;color:var(--gray);line-height:1.5}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}.fab:hover{background:rgba(204,31,114,0.22)}.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}.proj-nav-link{display:flex;flex-direction:column;gap:4px}.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
@media(max-width:768px){.nav-inner,.proj-nav{padding:0 20px}.proj-hero{padding:40px 20px 32px}.proj-body{grid-template-columns:1fr;padding:0}.sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}.toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}.content{padding:32px 20px 60px}.proj-nav{padding:24px 20px}}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags"><span class="tag t" data-en="🎯 UX Consulting" data-es="🎯 UX Consulting">🎯 UX Consulting</span><span class="tag t" data-en="🖥️ Web" data-es="🖥️ Web">🖥️ Web</span></div>
  <h1 class="proj-title">Interactive Solar Plant</h1>
  <p class="proj-subtitle t" data-en="Revolutionising solar plant design with a real-time interactive web configurator — built from scratch with 3D integration" data-es="Revolucionando el diseño de plantas solares con un configurador web interactivo en tiempo real — construido desde cero con integración 3D">Revolutionising solar plant design with a real-time interactive web configurator — built from scratch with 3D integration</p>
  <a href="https://interactivepvplant.trinasolar.com/" target="_blank" class="btn-site t" data-en="Go to website ↗" data-es="Ver web ↗">Go to website ↗</a>
</section>

<div class="hero-img-wrap"><img src="../images/ts-hero.jpg" alt="Trina Solar Hero"></div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#challenge"><span class="t" data-en="The Challenge" data-es="El reto">The Challenge</span></a></li>
        <li><a href="#requirements"><span class="t" data-en="Key Requirements" data-es="Requisitos clave">Key Requirements</span></a></li>
        <li><a href="#process"><span class="t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</span></a></li>
        <li><a href="#results"><span class="t" data-en="Results" data-es="Resultados">Results</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#0acf83;color:#fff">F</div> Figma</div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> Photoshop</div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> Illustrator</div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="challenge">
      <p class="section-label t" data-en="01 — Challenge" data-es="01 — Reto">01 — Challenge</p>
      <h2 class="section-title t" data-en="The Challenge" data-es="El reto">The Challenge</h2>
      <p class="section-text t" data-en="Trina Solar, a global leader in solar energy, needed an interactive web platform that would allow engineers and buyers to design custom solar plants in real time. Budget constraints meant the configurator had to be built from scratch — no off-the-shelf solution could meet their requirements." data-es="Trina Solar, líder mundial en energía solar, necesitaba una plataforma web interactiva para que ingenieros y compradores pudieran diseñar plantas solares personalizadas en tiempo real. Las restricciones presupuestarias significaban que el configurador tenía que construirse desde cero.">Trina Solar, a global leader in solar energy, needed an interactive web platform that would allow engineers and buyers to design custom solar plants in real time. Budget constraints meant the configurator had to be built from scratch — no off-the-shelf solution could meet their requirements.</p>
      <div class="section-img"><img src="../images/ts-img1.jpg" alt="Challenge" loading="lazy"></div>
      <p class="section-text t" data-en="The platform required 3D model integration, terrain adaptation across multiple surface types, real-time inventory selection, configuration saving, and PDF report generation — all within a web browser, accessible to both technical and non-technical users." data-es="La plataforma requería integración de modelos 3D, adaptación a distintos tipos de terreno, selección de inventario en tiempo real, guardado de configuraciones y generación de informes PDF — todo en el navegador, accesible para usuarios técnicos y no técnicos.">The platform required 3D model integration, terrain adaptation across multiple surface types, real-time inventory selection, configuration saving, and PDF report generation — all within a web browser, accessible to both technical and non-technical users.</p>
    </section>

    <section class="content-section" id="requirements">
      <p class="section-label t" data-en="02 — Requirements" data-es="02 — Requisitos">02 — Requirements</p>
      <h2 class="section-title t" data-en="Key Project Requirements" data-es="Requisitos clave del proyecto">Key Project Requirements</h2>
      <div class="section-img"><img src="../images/ts-img2.jpg" alt="Requirements" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Fully interactive solar plant configurator in the browser" data-es="Configurador solar completamente interactivo en el navegador">Fully interactive solar plant configurator in the browser</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Terrain adaptation across flat, hillside, and rooftop surfaces" data-es="Adaptación a distintos tipos de terreno (plano, ladera, tejado)">Terrain adaptation across flat, hillside, and rooftop surfaces</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Real-time configuration with inventory selection" data-es="Configuración en tiempo real con selección de inventario">Real-time configuration with inventory selection</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Save configurations and export detailed PDF reports" data-es="Guardar configuraciones y exportar informes PDF detallados">Save configurations and export detailed PDF reports</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Modular and scalable design system" data-es="Sistema de diseño modular y escalable">Modular and scalable design system</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="3D model integration for visual plant representation" data-es="Integración de modelos 3D para representación visual de la planta">3D model integration for visual plant representation</span></li>
      </ul>
    </section>

    <section class="content-section" id="process">
      <p class="section-label t" data-en="03 — Process" data-es="03 — Proceso">03 — Process</p>
      <h2 class="section-title t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</h2>
      <div class="process-steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><p class="step-title t" data-en="Research &amp; Analysis" data-es="Investigación y análisis">Research &amp; Analysis</p><p class="step-desc t" data-en="Studied solar plant engineering workflows, user profiles (engineers, procurement, sales), and competitive landscape." data-es="Investigación y análisis (workflows de ingeniería solar, perfiles de usuario, análisis competitivo)">Studied solar plant engineering workflows, user profiles (engineers, procurement, sales), and competitive landscape.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><p class="step-title t" data-en="Concept &amp; Wireframing" data-es="Concepto y wireframing">Concept &amp; Wireframing</p><p class="step-desc t" data-en="Defined the configurator interaction model — panel placement, terrain selection, inventory sidebar — through low-fi wireframes." data-es="Concepto y wireframing (modelo de interacción del configurador: colocación de paneles, selección de terreno, barra lateral de inventario)">Defined the configurator interaction model — panel placement, terrain selection, inventory sidebar — through low-fi wireframes.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><p class="step-title t" data-en="Prototyping &amp; UI Design" data-es="Prototipado y diseño UI">Prototyping &amp; UI Design</p><p class="step-desc t" data-en="High-fidelity interactive prototypes simulating the real-time configurator experience, tested with solar engineers." data-es="Prototipado y diseño UI (prototipos interactivos de alta fidelidad, testing con ingenieros solares)">High-fidelity interactive prototypes simulating the real-time configurator experience, tested with solar engineers.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><p class="step-title t" data-en="Design System" data-es="Design System">Design System</p><p class="step-desc t" data-en="Built a modular design system aligned with Trina Solar's brand — controls, panels, status indicators, and data tables." data-es="Design System (sistema modular alineado con la marca Trina Solar)">Built a modular design system aligned with Trina Solar's brand — controls, panels, status indicators, and data tables.</p></div></div>
        <div class="step"><div class="step-num">5</div><div class="step-content"><p class="step-title t" data-en="Usability Testing" data-es="Tests de usabilidad">Usability Testing</p><p class="step-desc t" data-en="Tested with engineers and non-technical buyers, iterating on the configuration flow and PDF output format." data-es="Tests de usabilidad (con ingenieros y compradores no técnicos, iterando en flujos y PDFs)">Tested with engineers and non-technical buyers, iterating on the configuration flow and PDF output format.</p></div></div>
        <div class="step"><div class="step-num">6</div><div class="step-content"><p class="step-title t" data-en="Final Implementation" data-es="Implementación final">Final Implementation</p><p class="step-desc t" data-en="Full handoff with detailed specs for 3D integration, interaction states, and responsive breakpoints." data-es="Implementación final (handoff con specs para integración 3D, estados de interacción y breakpoints)">Full handoff with detailed specs for 3D integration, interaction states, and responsive breakpoints.</p></div></div>
      </div>
      <div class="section-img"><img src="../images/ts-img3.jpg" alt="Process" loading="lazy"></div>
    </section>

    <section class="content-section" id="results">
      <p class="section-label t" data-en="04 — Results" data-es="04 — Resultados">04 — Results</p>
      <h2 class="section-title t" data-en="Results and Deliverables" data-es="Resultados y entregables">Results and Deliverables</h2>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Fully interactive configurator live at trinasolar.com" data-es="Configurador completamente interactivo en producción en trinasolar.com">Fully interactive configurator live at trinasolar.com</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Terrain adaptation across multiple surface types" data-es="Adaptación a distintos tipos de terreno">Terrain adaptation across multiple surface types</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Modular design system reused across product pages" data-es="Sistema de diseño modular reutilizado en páginas de producto">Modular design system reused across product pages</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Dynamic configuration with real-time inventory updates" data-es="Configuración dinámica con actualizaciones de inventario en tiempo real">Dynamic configuration with real-time inventory updates</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Exportable PDF reports used by sales and engineering teams" data-es="Informes PDF exportables utilizados por equipos de ventas e ingeniería">Exportable PDF reports used by sales and engineering teams</span></li>
      </ul>
      <div class="section-img"><img src="../images/ts-img4.jpg" alt="Results" loading="lazy"></div>
      <div class="section-img"><img src="../images/ts-img5.jpg" alt="Live platform" loading="lazy"></div>
      <div style="margin-top:24px"><a href="https://interactivepvplant.trinasolar.com/" target="_blank" class="btn-site t" data-en="Go to website ↗" data-es="Ver web ↗">Go to website ↗</a></div>
    </section>
  </main>
</div>






`
  },
  'ugt': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}
.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}
.nav-home:hover{color:var(--brand)}
.nav-home svg{width:18px;height:18px}
.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}
.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}
.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}
.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}
.agency-label{font-size:14px;color:var(--gray);margin-bottom:8px}
.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}
.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}
.hero-img-wrap{width:100%;max-height:600px;overflow:hidden}
.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}
.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}
.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}
.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}
.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}
.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}
.tools-grid{display:flex;flex-direction:column;gap:8px}
.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}
.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}
.content-section{margin-bottom:64px;scroll-margin-top:100px}
.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}
.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}
.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}
.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}
.section-img img{width:100%;height:auto;display:block}
.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}
.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}
.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}
.process-steps{display:flex;flex-direction:column;gap:16px;margin:20px 0}
.step{display:flex;align-items:flex-start;gap:16px}
.step-num{width:32px;height:32px;border-radius:50%;background:#6f00ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;margin-top:1px}
.step-title{font-size:15px;font-weight:700;margin-bottom:2px}
.step-desc{font-size:14px;color:var(--gray);line-height:1.5}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}
.fab:hover{background:rgba(204,31,114,0.22)}
.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}
.proj-nav-link{display:flex;flex-direction:column;gap:4px}
.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}
.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}
.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
@media(max-width:768px){
  .nav-inner,.proj-nav{padding:0 20px}
  .proj-hero{padding:40px 20px 32px}
  .proj-body{grid-template-columns:1fr;padding:0}
  .sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}
  .toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}
  .content{padding:32px 20px 60px}
  .section-img-row{grid-template-columns:1fr}
  .proj-nav{padding:24px 20px}
}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags">
    <span class="tag">🎯 UX Consulting</span>
    <span class="tag">🧩 Workshops</span>
    <span class="tag">🖥️ Web</span>
  </div>
  <p class="agency-label t" data-en="Work done at Thankium Digital Agency" data-es="Proyecto en Thankium Digital Agency">Work done at Thankium Digital Agency</p>
  <h1 class="proj-title">Trabajamos en digital</h1>
  <p class="proj-subtitle t" data-en="Revolutionizing the UGT Enrollment System — delivered in 2 months vs 6+ months industry standard" data-es="Revolucionando el sistema de matriculación de UGT — entregado en 2 meses frente a los 6+ meses del estándar">Revolutionizing the UGT Enrollment System — delivered in 2 months vs 6+ months industry standard</p>
</section>

<div class="hero-img-wrap">
  <img src="../images/ugt-hero.jpg" alt="UGT Enrollment Hero">
</div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#challenge"><span class="t" data-en="The Challenge" data-es="El reto">The Challenge</span></a></li>
        <li><a href="#requirements"><span class="t" data-en="Key Requirements" data-es="Requisitos clave">Key Requirements</span></a></li>
        <li><a href="#process"><span class="t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</span></a></li>
        <li><a href="#results"><span class="t" data-en="Results" data-es="Resultados">Results</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#0acf83;color:#fff">F</div> <span class="t" data-en="Figma" data-es="Figma">Figma</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff6244;color:#fff">Mi</div> <span class="t" data-en="Miro" data-es="Miro">Miro</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> <span class="t" data-en="Illustrator" data-es="Illustrator">Illustrator</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> <span class="t" data-en="Photoshop" data-es="Photoshop">Photoshop</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#09b585;color:#fff">Br</div> <span class="t" data-en="Brevo" data-es="Brevo">Brevo</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#000;color:#fff">No</div> <span class="t" data-en="Notion" data-es="Notion">Notion</span></div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="challenge">
      <p class="section-label t" data-en="01 — Challenge" data-es="01 — Reto">01 — Challenge</p>
      <h2 class="section-title t" data-en="The Challenge" data-es="El reto">The Challenge</h2>
      <p class="section-text t" data-en="UGT needed to completely digitize their union course enrollment process — replacing a slow, paper-heavy manual workflow with an AI-powered, integrated digital system. The existing process took 6+ months to complete for each enrollment cycle and was full of manual verification bottlenecks." data-es="UGT necesitaba digitalizar completamente su proceso de matriculación de cursos sindicales — reemplazando un flujo manual lento y lleno de papel por un sistema digital integrado e impulsado por IA. El proceso existente tardaba 6+ meses en completar cada ciclo de matriculación.">UGT needed to completely digitize their union course enrollment process — replacing a slow, paper-heavy manual workflow with an AI-powered, integrated digital system. The existing process took 6+ months to complete for each enrollment cycle and was full of manual verification bottlenecks.</p>
      <div class="section-img"><img src="../images/ugt-img1.jpg" alt="Challenge" loading="lazy"></div>
      <p class="section-text t" data-en="A 3-day discovery workshop helped map all existing processes, legal constraints, and integration requirements before a single screen was designed. The tight 2-month delivery timeline required perfect alignment from day one." data-es="Un workshop de discovery de 3 días ayudó a mapear todos los procesos existentes, restricciones legales y requisitos de integración antes de diseñar una sola pantalla. El plazo de entrega de 2 meses requería alineación perfecta desde el primer día.">A 3-day discovery workshop helped map all existing processes, legal constraints, and integration requirements before a single screen was designed. The tight 2-month delivery timeline required perfect alignment from day one.</p>
    </section>

    <section class="content-section" id="requirements">
      <p class="section-label t" data-en="02 — Requirements" data-es="02 — Requisitos">02 — Requirements</p>
      <h2 class="section-title t" data-en="Key Project Requirements" data-es="Requisitos clave del proyecto">Key Project Requirements</h2>
      <div class="section-img"><img src="../images/ugt-img2.jpg" alt="Requirements" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Automated document verification with AI identity validation" data-es="Verificación automatizada de documentos con validación de identidad por IA">Automated document verification with AI identity validation</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Full CEOE/CEPYME database integration" data-es="Integración completa con bases de datos CEOE/CEPYME">Full CEOE/CEPYME database integration</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Moodle and Telefónica platform connectivity" data-es="Conectividad con plataformas Moodle y Telefónica">Moodle and Telefónica platform connectivity</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Dynamic high-complexity enrollment form with conditional logic" data-es="Formulario de matriculación dinámico de alta complejidad con lógica condicional">Dynamic high-complexity enrollment form with conditional logic</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Trained chatbot for student support and enrollment guidance" data-es="Chatbot entrenado para soporte a estudiantes y orientación en la matriculación">Trained chatbot for student support and enrollment guidance</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Full document management system" data-es="Sistema completo de gestión documental">Full document management system</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Dedicated landing page for course discovery" data-es="Landing page dedicada para descubrir cursos">Dedicated landing page for course discovery</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Custom CRM for enrollment management and reporting" data-es="CRM personalizado para gestión de matriculaciones e informes">Custom CRM for enrollment management and reporting</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Full delivery in 2 months" data-es="Entrega completa en 2 meses">Full delivery in 2 months</span></li>
      </ul>
    </section>

    <section class="content-section" id="process">
      <p class="section-label t" data-en="03 — Process" data-es="03 — Proceso">03 — Process</p>
      <h2 class="section-title t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</h2>
      <div class="process-steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><p class="step-title t" data-en="Discovery Workshop (3 days)" data-es="Workshop de Discovery (3 días)">Discovery Workshop (3 days)</p><p class="step-desc t" data-en="Intensive workshop mapping all existing enrollment processes, stakeholder pain points, legal requirements, and integration dependencies." data-es="Workshop intensivo de 3 días mapeando todos los procesos de matriculación existentes, puntos de dolor y dependencias de integración.">Intensive workshop mapping all existing enrollment processes, stakeholder pain points, legal requirements, and integration dependencies.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><p class="step-title t" data-en="System &amp; Automation Mapping" data-es="Mapeo de sistemas y automatizaciones">System &amp; Automation Mapping</p><p class="step-desc t" data-en="Mapped all data flows between UGT, CEOE/CEPYME, Moodle, and Telefónica to define integration architecture." data-es="Mapeo de todos los flujos de datos entre UGT, CEOE/CEPYME, Moodle y Telefónica para definir la arquitectura de integración.">Mapped all data flows between UGT, CEOE/CEPYME, Moodle, and Telefónica to define integration architecture.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><p class="step-title t" data-en="Automation &amp; AI Design" data-es="Diseño de automatizaciones e IA">Automation &amp; AI Design</p><p class="step-desc t" data-en="Designed the AI document verification flow and chatbot conversation architecture for student support." data-es="Diseño del flujo de verificación de documentos por IA y la arquitectura conversacional del chatbot.">Designed the AI document verification flow and chatbot conversation architecture for student support.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><p class="step-title t" data-en="Complex Form UX Design" data-es="Diseño UX de formularios complejos">Complex Form UX Design</p><p class="step-desc t" data-en="Designed the dynamic enrollment form with conditional branching, validation states, and error prevention patterns." data-es="Diseño del formulario dinámico de matriculación con ramificación condicional y patrones de prevención de errores.">Designed the dynamic enrollment form with conditional branching, validation states, and error prevention patterns.</p></div></div>
        <div class="step"><div class="step-num">5</div><div class="step-content"><p class="step-title t" data-en="ERP &amp; CRM Development" data-es="Diseño de ERP y CRM">ERP &amp; CRM Development</p><p class="step-desc t" data-en="Designed the custom CRM interface for admin staff to manage enrollments, documents, and communications." data-es="Diseño de la interfaz CRM personalizada para que el personal gestione matriculaciones, documentos y comunicaciones.">Designed the custom CRM interface for admin staff to manage enrollments, documents, and communications.</p></div></div>
        <div class="step"><div class="step-num">6</div><div class="step-content"><p class="step-title t" data-en="Chatbot Integration &amp; Testing" data-es="Integración y testing del chatbot">Chatbot Integration &amp; Testing</p><p class="step-desc t" data-en="Designed chatbot flows, tested with real students, iterated on response accuracy and UX clarity." data-es="Diseño de flujos del chatbot, testing con estudiantes reales e iteración sobre la precisión.">Designed chatbot flows, tested with real students, iterated on response accuracy and UX clarity.</p></div></div>
        <div class="step"><div class="step-num">7</div><div class="step-content"><p class="step-title t" data-en="Rapid Deployment" data-es="Despliegue rápido">Rapid Deployment</p><p class="step-desc t" data-en="Full handoff and launch support to deliver the complete system in 2 months from kickoff." data-es="Handoff completo y soporte al lanzamiento para entregar el sistema en 2 meses desde el kickoff.">Full handoff and launch support to deliver the complete system in 2 months from kickoff.</p></div></div>
      </div>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/ugt-img3.jpg" alt="Process" loading="lazy"></div>
        <div class="section-img"><img src="../images/ugt-img4.jpg" alt="Design" loading="lazy"></div>
      </div>
    </section>

    <section class="content-section" id="results">
      <p class="section-label t" data-en="04 — Results" data-es="04 — Resultados">04 — Results</p>
      <h2 class="section-title t" data-en="Results and Deliverables" data-es="Resultados y entregables">Results and Deliverables</h2>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Fully automated enrollment replacing a 6-month manual process" data-es="Matriculación completamente automatizada que reemplaza un proceso manual de 6 meses">Fully automated enrollment replacing a 6-month manual process</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Seamless AI identity verification and document processing" data-es="Verificación de identidad por IA y procesamiento documental fluido">Seamless AI identity verification and document processing</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Intuitive UI adopted immediately by staff with minimal training" data-es="UI intuitiva adoptada de inmediato por el personal sin necesidad de formación">Intuitive UI adopted immediately by staff with minimal training</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Smart chatbot reducing support tickets from day one" data-es="Chatbot inteligente reduciendo tickets de soporte desde el primer día">Smart chatbot reducing support tickets from day one</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Custom CRM delivering full visibility and control to management" data-es="CRM personalizado con visibilidad y control total para la dirección">Custom CRM delivering full visibility and control to management</span></li>
      </ul>
      <div class="section-img"><img src="../images/ugt-img5.jpg" alt="Results" loading="lazy"></div>
    </section>
  </main>
</div>







`
  },
  'vmg': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}a{text-decoration:none;color:inherit}img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}.nav-home:hover{color:var(--brand)}.nav-home svg{width:18px;height:18px}.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}
.hero-banner{width:100%;background:#009cde;display:flex;align-items:center;justify-content:center;padding:80px 48px;min-height:400px}
.hero-banner img{max-width:400px;width:100%;height:auto}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}.tools-grid{display:flex;flex-direction:column;gap:8px}.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}.content-section{margin-bottom:64px;scroll-margin-top:100px}.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}.section-img img{width:100%;height:auto;display:block}.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}.fab:hover{background:rgba(204,31,114,0.22)}.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}.proj-nav-link{display:flex;flex-direction:column;gap:4px}.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
@media(max-width:768px){.nav-inner,.proj-nav{padding:0 20px}.proj-hero{padding:40px 20px 32px}.hero-banner{padding:48px 24px;min-height:260px}.proj-body{grid-template-columns:1fr;padding:0}.sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}.toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}.content{padding:32px 20px 60px}.section-img-row{grid-template-columns:1fr}.proj-nav{padding:24px 20px}}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags"><span class="tag">🌟 Branding</span><span class="tag">🖥️ Web</span></div>
  <h1 class="proj-title t" data-en="Branding for VMG" data-es="Branding para VMG">Branding for VMG</h1>
  <p class="proj-subtitle t" data-en="Branding &amp; digital presence for VMG — a vision of progress rooted in clarity, confidence, and health technology" data-es="Branding y presencia digital para VMG — una visión de progreso arraigada en claridad, confianza y tecnología médica">Branding &amp; digital presence for VMG — a vision of progress rooted in clarity, confidence, and health technology</p>
</section>

<div class="hero-banner">
  <img src="../images/vmg-hero.jpg" alt="VMG brand identity">
</div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#brand"><span class="t" data-en="The Brand" data-es="La marca">The Brand</span></a></li>
        <li><a href="#website"><span class="t" data-en="The Website" data-es="La web">The Website</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#333;color:#fff">Sk</div> Sketch</div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> Illustrator</div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> Photoshop</div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="brand">
      <p class="section-label t" data-en="01 — Brand" data-es="01 — Marca">01 — Brand</p>
      <h2 class="section-title t" data-en="A Brand Rooted in Clarity &amp; Confidence" data-es="Una marca arraigada en claridad y confianza">A Brand Rooted in Clarity &amp; Confidence</h2>
      <p class="section-text t" data-en="VMG specialises in hyperbaric chambers — medical devices used in oxygen therapy and rehabilitation. The company's philosophy, &quot;Moving Forward&quot;, needed to be translated into a brand identity that communicated trust, innovation, and a deep connection to health and technology. Before this project, VMG operated without a consistent visual identity." data-es="VMG se especializa en cámaras hiperbáricas — dispositivos médicos utilizados en oxigenoterapia y rehabilitación. La filosofía de la empresa, &quot;Moving Forward&quot;, debía traducirse en una identidad de marca que comunicara confianza, innovación y una profunda conexión con la salud y la tecnología. Antes de este proyecto, VMG operaba sin una identidad visual consistente.">VMG specialises in hyperbaric chambers — medical devices used in oxygen therapy and rehabilitation. The company's philosophy, "Moving Forward", needed to be translated into a brand identity that communicated trust, innovation, and a deep connection to health and technology. Before this project, VMG operated without a consistent visual identity.</p>
      <p class="section-text t" data-en="The brand palette — Indigo and Bondi Blue — was chosen to evoke calmness, professionalism, and the clinical precision associated with medical environments, while remaining approachable and human." data-es="La paleta de la marca — Índigo y Bondi Blue — fue elegida para evocar calma, profesionalidad y la precisión clínica asociada a entornos médicos, manteniendo un tono accesible y humano.">The brand palette — Indigo and Bondi Blue — was chosen to evoke calmness, professionalism, and the clinical precision associated with medical environments, while remaining approachable and human.</p>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/vmg-img1.jpg" alt="VMG logo" loading="lazy"></div>
        <div class="section-img"><img src="../images/vmg-img2.jpg" alt="Brand book" loading="lazy"></div>
      </div>
    </section>

    <section class="content-section" id="website">
      <p class="section-label t" data-en="02 — Website" data-es="02 — Web">02 — Website</p>
      <h2 class="section-title t" data-en="A Digital Gateway: VMG's Landing Page" data-es="Una puerta digital: la landing page de VMG">A Digital Gateway: VMG's Landing Page</h2>
      <p class="section-text t" data-en="With the brand identity defined, VMG needed a digital presence to reach healthcare professionals, clinics, and distributors. The landing page was designed as a focused, credibility-building experience — communicating the company's mission, product range, and values without overwhelming visitors." data-es="Con la identidad de marca definida, VMG necesitaba una presencia digital para llegar a profesionales sanitarios, clínicas y distribuidores. La landing page fue diseñada como una experiencia enfocada que construye credibilidad — comunicando la misión, gama de productos y valores sin abrumar al visitante.">With the brand identity defined, VMG needed a digital presence to reach healthcare professionals, clinics, and distributors. The landing page was designed as a focused, credibility-building experience — communicating the company's mission, product range, and values without overwhelming visitors.</p>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Clear communication of VMG's mission and values above the fold" data-es="Comunicación clara de la misión y valores de VMG en el primer scroll">Clear communication of VMG's mission and values above the fold</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Essential product information structured for medical buyers" data-es="Información esencial del producto estructurada para compradores del sector médico">Essential product information structured for medical buyers</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Full brand consistency across every page element" data-es="Consistencia total de marca en cada elemento de la página">Full brand consistency across every page element</span></li>
      </ul>
      <div class="section-img"><img src="../images/vmg-img3.jpg" alt="VMG website" loading="lazy"></div>
    </section>
  </main>
</div>






`
  },
  'yuuju': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6}
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}
.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}
.nav-home:hover{color:var(--brand)}
.nav-home svg{width:18px;height:18px}
.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em}
.nav-logo span{color:var(--brand)}
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}
.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}
.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}
.agency-label{font-size:14px;color:var(--gray);margin-bottom:8px}
.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px}
.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}
.btn-site{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:var(--brand);color:#fff;border-radius:100px;font-size:15px;font-weight:700;transition:opacity .2s}
.btn-site:hover{opacity:.85}
.hero-img-wrap{width:100%;max-height:600px;overflow:hidden}
.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}
.proj-body{display:grid;grid-template-columns:240px 1fr;max-width:1200px;margin:0 auto;padding:0 48px}
.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}
.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}
.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}
.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}
.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}
.tools-grid{display:flex;flex-direction:column;gap:8px}
.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}
.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.content{padding:48px 0 80px 56px}
.content-section{margin-bottom:64px;scroll-margin-top:100px}
.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}
.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px}
.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}
.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}
.section-img img{width:100%;height:auto;display:block}
.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}
.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}
.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}
.process-steps{display:flex;flex-direction:column;gap:16px;margin:20px 0}
.step{display:flex;align-items:flex-start;gap:16px}
.step-num{width:32px;height:32px;border-radius:50%;background:#6f00ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;margin-top:1px}
.step-title{font-size:15px;font-weight:700;margin-bottom:2px}
.step-desc{font-size:14px;color:var(--gray);line-height:1.5}
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}
.fab:hover{background:rgba(204,31,114,0.22)}
.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}
.proj-nav-link{display:flex;flex-direction:column;gap:4px}
.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}
.proj-nav-title{font-size:16px;font-weight:700;transition:color .2s}
.proj-nav-link:hover .proj-nav-title{color:var(--brand)}
.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}
@media(max-width:768px){
  .nav-inner,.proj-nav{padding:0 20px}
  .proj-hero{padding:40px 20px 32px}
  .proj-body{grid-template-columns:1fr;padding:0}
  .sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}
  .toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}
  .content{padding:32px 20px 60px}
  .section-img-row{grid-template-columns:1fr}
  .proj-nav{padding:24px 20px}
}
`,
    html: `


<section class="proj-hero">
  <div class="proj-tags">
    <span class="tag">🎯 UX Consulting</span>
    <span class="tag">🧩 Workshops</span>
    <span class="tag">🖥️ Web</span>
  </div>
  <p class="agency-label t" data-en="Work done at Thankium Digital Agency" data-es="Proyecto en Thankium Digital Agency">Work done at Thankium Digital Agency</p>
  <h1 class="proj-title">Utility Services</h1>
  <p class="proj-subtitle t" data-en="Revolutionising utility services for holiday homes — a seamless multi-user contracting platform for internet and electricity" data-es="Revolucionando los servicios de suministros para viviendas vacacionales — una plataforma de contratación multi-usuario para internet y electricidad">Revolutionising utility services for holiday homes — a seamless multi-user contracting platform for internet and electricity</p>
  <a href="https://yuuju.com/" target="_blank" class="btn-site t" data-en="Go to website ↗" data-es="Ver web ↗">Go to website ↗</a>
</section>

<div class="hero-img-wrap">
  <img src="../images/yuuju-hero.jpg" alt="YUUJU Hero">
</div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#challenge"><span class="t" data-en="The Challenge" data-es="El reto">The Challenge</span></a></li>
        <li><a href="#requirements"><span class="t" data-en="Key Requirements" data-es="Requisitos clave">Key Requirements</span></a></li>
        <li><a href="#process"><span class="t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</span></a></li>
        <li><a href="#results"><span class="t" data-en="Results" data-es="Resultados">Results</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#0acf83;color:#fff">F</div> <span class="t" data-en="Figma" data-es="Figma">Figma</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff6244;color:#fff">Mi</div> <span class="t" data-en="Miro" data-es="Miro">Miro</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> <span class="t" data-en="Illustrator" data-es="Illustrator">Illustrator</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> <span class="t" data-en="Photoshop" data-es="Photoshop">Photoshop</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#09b585;color:#fff">Br</div> <span class="t" data-en="Brevo" data-es="Brevo">Brevo</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#000;color:#fff">No</div> <span class="t" data-en="Notion" data-es="Notion">Notion</span></div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="challenge">
      <p class="section-label t" data-en="01 — Challenge" data-es="01 — Reto">01 — Challenge</p>
      <h2 class="section-title t" data-en="The Challenge" data-es="El reto">The Challenge</h2>
      <p class="section-text t" data-en="YUUJU offers internet and electricity subscriptions for holiday homes across Spain. The platform needed to handle three distinct user types — individuals, businesses, and freelancers — each with completely different contracting needs, all within a single coherent experience." data-es="YUUJU ofrece suscripciones de internet y electricidad para viviendas vacacionales en España. La plataforma debía gestionar tres tipos de usuario distintos — particulares, empresas y autónomos — cada uno con necesidades de contratación completamente diferentes, todo dentro de una experiencia coherente.">YUUJU offers internet and electricity subscriptions for holiday homes across Spain. The platform needed to handle three distinct user types — individuals, businesses, and freelancers — each with completely different contracting needs, all within a single coherent experience.</p>
      <div class="section-img"><img src="../images/yuuju-img1.jpg" alt="Intro" loading="lazy"></div>
      <p class="section-text t" data-en="Users could manage up to 10 properties simultaneously, requiring a complex CRM with real-time consumption dashboards, multi-payment support, address verification, and DNI validation — all while feeling simple and approachable." data-es="Los usuarios podían gestionar hasta 10 propiedades simultáneamente, lo que requería un CRM complejo con dashboards de consumo en tiempo real, soporte multi-pago, verificación de dirección y validación de DNI — todo sin perder la sencillez.">Users could manage up to 10 properties simultaneously, requiring a complex CRM with real-time consumption dashboards, multi-payment support, address verification, and DNI validation — all while feeling simple and approachable.</p>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/yuuju-img2.jpg" alt="Challenge detail" loading="lazy"></div>
        <div class="section-img"><img src="../images/yuuju-img3.jpg" alt="Complexity" loading="lazy"></div>
      </div>
    </section>

    <section class="content-section" id="requirements">
      <p class="section-label t" data-en="02 — Requirements" data-es="02 — Requisitos">02 — Requirements</p>
      <h2 class="section-title t" data-en="Key Project Requirements" data-es="Requisitos clave del proyecto">Key Project Requirements</h2>
      <div class="section-img"><img src="../images/yuuju-img4.jpg" alt="Requirements" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Dynamic multi-service contracting system (internet + electricity)" data-es="Sistema de contratación multi-servicio dinámico (internet + electricidad)">Dynamic multi-service contracting system (internet + electricity)</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Address and DNI online verification with real-time validation" data-es="Verificación online de dirección y DNI con validación en tiempo real">Address and DNI online verification with real-time validation</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Scalable architecture supporting up to 10 simultaneous properties" data-es="Arquitectura escalable para gestionar hasta 10 propiedades simultáneas">Scalable architecture supporting up to 10 simultaneous properties</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Custom portals for B2C, B2B, and freelancer user types" data-es="Portales personalizados para usuarios B2C, B2B y autónomos">Custom portals for B2C, B2B, and freelancer user types</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Intuitive UX despite the underlying complexity" data-es="UX intuitiva a pesar de la complejidad subyacente">Intuitive UX despite the underlying complexity</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Comprehensive CRM with real-time consumption dashboards" data-es="CRM completo con dashboards de consumo en tiempo real">Comprehensive CRM with real-time consumption dashboards</span></li>
      </ul>
    </section>

    <section class="content-section" id="process">
      <p class="section-label t" data-en="03 — Process" data-es="03 — Proceso">03 — Process</p>
      <h2 class="section-title t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</h2>
      <div class="process-steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><p class="step-title t" data-en="Discovery Workshop" data-es="Workshop de Discovery (mapeo de tipos de usuario, escenarios de contratación y requisitos legales)">Discovery Workshop</p><p class="step-desc t" data-en="Mapped all user types, contracting scenarios, and legal requirements through structured stakeholder workshops." data-es="Mapeo de tipos de usuario, escenarios de contratación y requisitos legales a través de workshops estructurados.">Mapped all user types, contracting scenarios, and legal requirements through structured stakeholder workshops.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><p class="step-title t" data-en="Strategic Planning" data-es="Planificación estratégica (arquitectura compartida + portales diferenciados por tipo de usuario)">Strategic Planning</p><p class="step-desc t" data-en="Defined the platform architecture: shared foundations + differentiated portals per user type with common design language." data-es="Definición de la arquitectura de la plataforma: base compartida + portales diferenciados por tipo de usuario con lenguaje visual común.">Defined the platform architecture: shared foundations + differentiated portals per user type with common design language.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><p class="step-title t" data-en="Custom UI/UX Design" data-es="Diseño UI/UX personalizado (todos los portales, dashboards y flujos de contratación)">Custom UI/UX Design</p><p class="step-desc t" data-en="Designed all portals, dashboards, and contracting flows. Established a design system with component variants for each user context." data-es="Diseño de todos los portales, dashboards y flujos de contratación. Sistema de diseño con variantes de componentes por contexto de usuario.">Designed all portals, dashboards, and contracting flows. Established a design system with component variants for each user context.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><p class="step-title t" data-en="Automated Validation Design" data-es="Diseño de validaciones automatizadas (lookup de dirección, verificación DNI, firma electrónica)">Automated Validation Design</p><p class="step-desc t" data-en="Designed the address lookup, DNI verification, and electronic signature flows with clear feedback states." data-es="Diseño del lookup de dirección, verificación de DNI y flujos de firma electrónica con estados de feedback claros.">Designed the address lookup, DNI verification, and electronic signature flows with clear feedback states.</p></div></div>
        <div class="step"><div class="step-num">5</div><div class="step-content"><p class="step-title t" data-en="Complex Form UX" data-es="UX de formularios complejos (contratación multi-paso que parece sencilla)">Complex Form UX</p><p class="step-desc t" data-en="Structured the multi-step contracting form to feel simple despite handling highly variable data inputs." data-es="Estructuración del formulario de contratación multi-paso para que parezca sencillo a pesar de la variabilidad de datos.">Structured the multi-step contracting form to feel simple despite handling highly variable data inputs.</p></div></div>
        <div class="step"><div class="step-num">6</div><div class="step-content"><p class="step-title t" data-en="Scalable Infrastructure Design" data-es="Diseño de infraestructura escalable (preparado para añadir nuevos tipos de suministro)">Scalable Infrastructure Design</p><p class="step-desc t" data-en="Designed for future service expansion — the system was built to add new utility types without restructuring." data-es="Diseño orientado a la expansión futura — el sistema fue construido para añadir nuevos tipos de suministro sin reestructurar.">Designed for future service expansion — the system was built to add new utility types without restructuring.</p></div></div>
      </div>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/yuuju-img5.jpg" alt="Process" loading="lazy"></div>
        <div class="section-img"><img src="../images/yuuju-img6.jpg" alt="Design" loading="lazy"></div>
      </div>
      <div class="section-img"><img src="../images/yuuju-img7.jpg" alt="Prototype" loading="lazy"></div>
    </section>

    <section class="content-section" id="results">
      <p class="section-label t" data-en="04 — Results" data-es="04 — Resultados">04 — Results</p>
      <h2 class="section-title t" data-en="Results and Deliverables" data-es="Resultados y entregables">Results and Deliverables</h2>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Complete multi-service contracting system live and operational" data-es="Sistema completo de contratación multi-servicio en producción">Complete multi-service contracting system live and operational</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Full CRM with real-time dashboards for property management" data-es="CRM completo con dashboards en tiempo real para gestión de propiedades">Full CRM with real-time dashboards for property management</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Automated address, DNI, and coverage verifications" data-es="Verificaciones automatizadas de dirección, DNI y cobertura">Automated address, DNI, and coverage verifications</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Multi-payment gateway and electronic signature integrated" data-es="Pasarela de pago múltiple y firma electrónica integradas">Multi-payment gateway and electronic signature integrated</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Future-proof platform ready for new utility types" data-es="Plataforma preparada para el futuro con nuevos tipos de suministros">Future-proof platform ready for new utility types</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Full digital ecosystem delivered — portals, CRM, automations" data-es="Ecosistema digital completo entregado — portales, CRM y automatizaciones">Full digital ecosystem delivered — portals, CRM, automations</span></li>
      </ul>
      <div class="section-img"><img src="../images/yuuju-img8.jpg" alt="Results" loading="lazy"></div>
      <div style="margin-top:24px"><a href="https://yuuju.com/" target="_blank" class="btn-site t" data-en="Go to website ↗" data-es="Ver web ↗">Go to website ↗</a></div>
    </section>
  </main>
</div>







`
  },
  'zenderbox-app': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6;--radius:12px}

/* NAV */
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}
.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}
.nav-home:hover{color:var(--brand)}
.nav-home svg{width:18px;height:18px}
.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em;color:var(--dark)}
.nav-logo span{color:var(--brand)}

/* HERO SECTION */
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}
.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}
.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}
.agency-label{font-size:14px;color:var(--gray);margin-bottom:8px;text-align:center}
.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px;color:var(--dark)}
.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}
.btn-site{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:var(--brand);color:#fff;border-radius:100px;font-size:15px;font-weight:700;transition:opacity .2s}
.btn-site:hover{opacity:.85}

/* HERO IMAGE */
.hero-img-wrap{width:100%;max-height:600px;overflow:hidden;margin-bottom:0}
.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}

/* BODY LAYOUT */
.proj-body{display:grid;grid-template-columns:240px 1fr;gap:0;max-width:1200px;margin:0 auto;padding:0 48px}

/* SIDEBAR */
.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}
.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}
.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}
.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}
.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}
.tools-section{}
.tools-grid{display:flex;flex-direction:column;gap:8px}
.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}
.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}

/* CONTENT */
.content{padding:48px 0 80px 56px}
.content-section{margin-bottom:64px;scroll-margin-top:100px}
.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}
.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px;color:var(--dark)}
.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}
.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}
.section-img img{width:100%;height:auto;display:block}
.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}

/* CHECKLIST */
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}
.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}
.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}

/* PROCESS STEPS */
.process-steps{display:flex;flex-direction:column;gap:16px;margin:20px 0}
.step{display:flex;align-items:flex-start;gap:16px}
.step-num{width:32px;height:32px;border-radius:50%;background:#6f00ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;margin-top:1px}
.step-content{}
.step-title{font-size:15px;font-weight:700;color:var(--dark);margin-bottom:2px}
.step-desc{font-size:14px;color:var(--gray);line-height:1.5}

/* FAB */
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}
.fab:hover{background:rgba(204,31,114,0.22)}
.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}

/* PREV/NEXT */
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}
.proj-nav-link{display:flex;flex-direction:column;gap:4px}
.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}
.proj-nav-title{font-size:16px;font-weight:700;color:var(--dark);transition:color .2s}
.proj-nav-link:hover .proj-nav-title{color:var(--brand)}

.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}

@media(max-width:768px){
  .nav-inner{padding:0 20px}
  .proj-hero{padding:40px 20px 32px}
  .proj-body{grid-template-columns:1fr;padding:0}
  .sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}
  .toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}
  .content{padding:32px 20px 60px}
  .proj-nav{padding:24px 20px}
  .section-img-row{grid-template-columns:1fr}
}
`,
    html: `



<section class="proj-hero">
  <div class="proj-tags">
    <span class="tag">🎯 UX Consulting</span>
    <span class="tag">📲 APPs</span>
  </div>
  <p class="agency-label t" data-en="Work done at Thankium Digital Agency" data-es="Proyecto en Thankium Digital Agency">Work done at Thankium Digital Agency</p>
  <h1 class="proj-title">Mobile App Logística</h1>
  <p class="proj-subtitle t" data-en="Designing a seamless cross-border logistics experience for iOS &amp; Android users across multiple countries" data-es="Diseñando una experiencia logística transfronteriza para usuarios de iOS y Android en múltiples países">Designing a seamless cross-border logistics experience for iOS &amp; Android users across multiple countries</p>
</section>

<div class="hero-img-wrap">
  <img src="../images/za-hero.jpg" alt="Logistics App Hero">
</div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#challenge"><span class="t" data-en="The Challenge" data-es="El reto">The Challenge</span></a></li>
        <li><a href="#requirements"><span class="t" data-en="Key Requirements" data-es="Requisitos clave">Key Requirements</span></a></li>
        <li><a href="#process"><span class="t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</span></a></li>
        <li><a href="#results"><span class="t" data-en="Results" data-es="Resultados">Results</span></a></li>
      </ul>
    </div>
    <div class="tools-section">
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#0acf83;color:#fff">F</div> <span class="t" data-en="Figma" data-es="Figma">Figma</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff6244;color:#fff">Mi</div> <span class="t" data-en="Miro" data-es="Miro">Miro</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> <span class="t" data-en="Illustrator" data-es="Illustrator">Illustrator</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> <span class="t" data-en="Photoshop" data-es="Photoshop">Photoshop</span></div>
      </div>
    </div>
  </aside>

  <main class="content">
    <section class="content-section" id="challenge">
      <p class="section-label t" data-en="01 — Challenge" data-es="01 — Reto">01 — Challenge</p>
      <h2 class="section-title t" data-en="The Challenge" data-es="El reto">The Challenge</h2>
      <p class="section-text t" data-en="ZenderBox is an international locker service operating across the Americas, allowing users to shop abroad and track, manage, and receive their packages seamlessly. The app lacked a structured user experience, making interactions unclear, with no intuitive states or feedback mechanisms to guide users through their journey." data-es="ZenderBox es un servicio internacional de casilleros en las Américas que permite a los usuarios comprar en el extranjero y gestionar sus paquetes de forma sencilla. La app carecía de una experiencia de usuario estructurada, con interacciones poco claras y sin mecanismos de feedback que guiaran al usuario.">ZenderBox is an international locker service operating across the Americas, allowing users to shop abroad and track, manage, and receive their packages seamlessly. The app lacked a structured user experience, making interactions unclear, with no intuitive states or feedback mechanisms to guide users through their journey.</p>
      <div class="section-img"><img src="../images/za-img1.jpg" alt="Challenge overview" loading="lazy"></div>
      <p class="section-text t" data-en="Users across multiple countries with varying levels of digital literacy needed an app that felt effortless — clear package states, intuitive navigation, and a trustworthy interface that could scale across markets." data-es="Usuarios de múltiples países con distintos niveles de digitalización necesitaban una app intuitiva con estados de paquete claros, navegación sencilla y una interfaz de confianza que pudiera escalar entre mercados.">Users across multiple countries with varying levels of digital literacy needed an app that felt effortless — clear package states, intuitive navigation, and a trustworthy interface that could scale across markets.</p>
    </section>

    <section class="content-section" id="requirements">
      <p class="section-label t" data-en="02 — Requirements" data-es="02 — Requisitos">02 — Requirements</p>
      <h2 class="section-title t" data-en="Key Project Requirements" data-es="Requisitos clave del proyecto">Key Project Requirements</h2>
      <div class="section-img"><img src="../images/za-img2.jpg" alt="Requirements" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="End-to-end UX design for iOS and Android native apps" data-es="Diseño UX end-to-end para apps nativas iOS y Android">End-to-end UX design for iOS and Android native apps</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Clear visual package status system with color-coded states" data-es="Sistema visual de estados de paquete con codificación por color">Clear visual package status system with color-coded states</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Intuitive navigation for users with low digital literacy" data-es="Navegación intuitiva para usuarios con baja digitalización">Intuitive navigation for users with low digital literacy</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Multi-country cross-border experience with localization" data-es="Experiencia transfronteriza multi-país con localización">Multi-country cross-border experience with localization</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Scalable design system for future feature expansion" data-es="Sistema de diseño escalable para futuras funcionalidades">Scalable design system for future feature expansion</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Prototype testing and usability validation before development" data-es="Prototipado y validación de usabilidad antes del desarrollo">Prototype testing and usability validation before development</span></li>
      </ul>
    </section>

    <section class="content-section" id="process">
      <p class="section-label t" data-en="03 — Process" data-es="03 — Proceso">03 — Process</p>
      <h2 class="section-title t" data-en="My UX Process" data-es="Mi proceso UX">My UX Process</h2>
      <div class="process-steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><p class="step-title t" data-en="Discovery &amp; User Research" data-es="Investigación y descubrimiento">Discovery &amp; User Research</p><p class="step-desc t" data-en="Stakeholder interviews, competitive analysis, and user journey mapping across different country profiles." data-es="Entrevistas con stakeholders, análisis competitivo y mapeo de journeys para distintos perfiles de país.">Stakeholder interviews, competitive analysis, and user journey mapping across different country profiles.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><p class="step-title t" data-en="Information Architecture" data-es="Arquitectura de la información">Information Architecture</p><p class="step-desc t" data-en="Restructured navigation and content hierarchy to make the most critical tasks — tracking, managing, and receiving packages — immediately accessible." data-es="Reestructuración de la navegación y la jerarquía de contenido para hacer accesibles las tareas clave.">Restructured navigation and content hierarchy to make the most critical tasks — tracking, managing, and receiving packages — immediately accessible.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><p class="step-title t" data-en="Wireframing &amp; Prototyping" data-es="Wireframing y prototipado">Wireframing &amp; Prototyping</p><p class="step-desc t" data-en="Low to high fidelity wireframes, interactive prototypes for testing across both iOS and Android platforms." data-es="Wireframes de baja a alta fidelidad, prototipos interactivos para iOS y Android.">Low to high fidelity wireframes, interactive prototypes for testing across both iOS and Android platforms.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><p class="step-title t" data-en="Visual Design &amp; Design System" data-es="Diseño visual y sistema de diseño">Visual Design &amp; Design System</p><p class="step-desc t" data-en="Created a scalable UI kit with semantic color tokens for package states, typography, and component variants." data-es="UI kit escalable con tokens de color semánticos para estados de paquete, tipografía y variantes de componentes.">Created a scalable UI kit with semantic color tokens for package states, typography, and component variants.</p></div></div>
        <div class="step"><div class="step-num">5</div><div class="step-content"><p class="step-title t" data-en="Usability Testing" data-es="Tests de usabilidad">Usability Testing</p><p class="step-desc t" data-en="Moderated testing sessions with real users across different markets to validate flows and iterate on friction points." data-es="Sesiones de testing moderadas con usuarios reales de distintos mercados para validar flujos.">Moderated testing sessions with real users across different markets to validate flows and iterate on friction points.</p></div></div>
        <div class="step"><div class="step-num">6</div><div class="step-content"><p class="step-title t" data-en="Dev Handoff &amp; Consulting" data-es="Handoff y consultoría">Dev Handoff &amp; Consulting</p><p class="step-desc t" data-en="Detailed Figma handoff with annotations, interaction specs, and ongoing product consulting through launch." data-es="Handoff detallado en Figma con anotaciones, especificaciones de interacción y consultoría durante el lanzamiento.">Detailed Figma handoff with annotations, interaction specs, and ongoing product consulting through launch.</p></div></div>
      </div>
      <div class="section-img-row">
        <div class="section-img"><img src="../images/za-img3.jpg" alt="Process detail" loading="lazy"></div>
        <div class="section-img"><img src="../images/za-img4.jpg" alt="Wireframes" loading="lazy"></div>
      </div>
    </section>

    <section class="content-section" id="results">
      <p class="section-label t" data-en="04 — Results" data-es="04 — Resultados">04 — Results</p>
      <h2 class="section-title t" data-en="Results and Deliverables" data-es="Resultados y entregables">Results and Deliverables</h2>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="+85% increase in app usage across all markets" data-es="+85% de incremento en el uso de la app en todos los mercados">+85% increase in app usage across all markets</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Complete native design system for iOS and Android" data-es="Sistema de diseño nativo completo para iOS y Android">Complete native design system for iOS and Android</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Intuitive package state system with clear visual signalling" data-es="Sistema visual de estados de paquete claro de un vistazo">Intuitive package state system with clear visual signalling</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Reduced user drop-off during onboarding by improving clarity" data-es="Reducción del abandono durante el onboarding al mejorar la claridad">Reduced user drop-off during onboarding by improving clarity</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Full dev handoff documentation delivered on time" data-es="Documentación completa de handoff entregada a tiempo">Full dev handoff documentation delivered on time</span></li>
      </ul>
      <div class="section-img"><img src="../images/za-hero.jpg" alt="Results" loading="lazy"></div>
    </section>
  </main>
</div>







`
  },
  'zenderbox-ecosystem': {
    css: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;background:#fff;color:#151515;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}
:root{--brand:#cc1f72;--dark:#151515;--gray:#6b7280;--border:#edf2f6;--radius:12px}

/* NAV */
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;max-width:1440px;margin:0 auto}
.nav-home{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--dark);transition:color .2s}
.nav-home:hover{color:var(--brand)}
.nav-home svg{width:18px;height:18px}
.nav-logo{font-size:20px;font-weight:800;letter-spacing:-0.02em;color:var(--dark)}
.nav-logo span{color:var(--brand)}

/* HERO SECTION */
.proj-hero{padding:64px 48px 48px;max-width:900px;margin:0 auto;text-align:center}
.proj-tags{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:24px}
.tag{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:13px;font-weight:600;background:#f5f5f5;color:#444}
.agency-label{font-size:14px;color:var(--gray);margin-bottom:8px;text-align:center}
.proj-title{font-size:clamp(32px,4vw,56px);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px;color:var(--dark)}
.proj-subtitle{font-size:clamp(17px,1.8vw,22px);color:var(--gray);line-height:1.5;max-width:680px;margin:0 auto 28px}

/* HERO IMAGE */
.hero-img-wrap{width:100%;max-height:640px;overflow:hidden;margin-bottom:0}
.hero-img-wrap img{width:100%;height:100%;object-fit:cover;object-position:top}

/* BODY LAYOUT */
.proj-body{display:grid;grid-template-columns:240px 1fr;gap:0;max-width:1200px;margin:0 auto;padding:0 48px}

/* SIDEBAR */
.sidebar{position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;padding:48px 32px 48px 0;display:flex;flex-direction:column;gap:32px;border-right:1px solid var(--border)}
.toc-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gray);margin-bottom:12px}
.toc-list{list-style:none;display:flex;flex-direction:column;gap:8px}
.toc-list a{font-size:14px;color:var(--gray);transition:color .2s;line-height:1.4}
.toc-list a:hover,.toc-list a.active{color:var(--brand);font-weight:600}
.tools-grid{display:flex;flex-direction:column;gap:8px}
.tool-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}
.tool-icon{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}

/* CONTENT */
.content{padding:48px 0 80px 56px}
.content-section{margin-bottom:64px;scroll-margin-top:100px}
.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}
.section-title{font-size:clamp(22px,2.2vw,30px);font-weight:800;letter-spacing:-0.01em;margin-bottom:16px;color:var(--dark)}
.section-text{font-size:16px;line-height:1.7;color:#444;margin-bottom:24px}
.section-img{border-radius:16px;overflow:hidden;margin:24px 0;box-shadow:0 4px 24px rgba(0,0,0,0.08)}
.section-img img{width:100%;height:auto;display:block}
.section-img-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}

/* CHECKLIST */
.checklist{list-style:none;display:flex;flex-direction:column;gap:12px;margin:20px 0}
.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#333;line-height:1.5}
.check-icon{width:22px;height:22px;border-radius:50%;background:#02dc02;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.check-icon svg{width:13px;height:13px;stroke:#fff;stroke-width:2.5;fill:none}

/* PROCESS STEPS */
.process-steps{display:flex;flex-direction:column;gap:16px;margin:20px 0}
.step{display:flex;align-items:flex-start;gap:16px}
.step-num{width:32px;height:32px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;margin-top:1px}
.step-content{}
.step-title{font-size:15px;font-weight:700;color:var(--dark);margin-bottom:2px}
.step-desc{font-size:14px;color:var(--gray);line-height:1.5}

/* DELIVERABLES GRID */
.deliverables-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}
.deliverable-card{padding:20px;border-radius:12px;border:1px solid var(--border);background:#fafafa}
.deliverable-card h4{font-size:14px;font-weight:700;color:var(--dark);margin-bottom:6px}
.deliverable-card p{font-size:13px;color:var(--gray);line-height:1.5}

/* FAB */
.fab{position:fixed;bottom:32px;right:32px;width:52px;height:52px;background:rgba(204,31,114,0.12);border-radius:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:50}
.fab:hover{background:rgba(204,31,114,0.22)}
.fab svg{width:20px;height:20px;stroke:var(--brand);stroke-width:2;fill:none}

/* PREV/NEXT */
.proj-nav{display:flex;justify-content:space-between;align-items:center;padding:40px 48px;border-top:1px solid var(--border);max-width:1200px;margin:0 auto}
.proj-nav-link{display:flex;flex-direction:column;gap:4px}
.proj-nav-label{font-size:12px;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.08em}
.proj-nav-title{font-size:16px;font-weight:700;color:var(--dark);transition:color .2s}
.proj-nav-link:hover .proj-nav-title{color:var(--brand)}

.nav-lang{display:flex;gap:4px}
.lang-btn{padding:6px 10px;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--gray);cursor:pointer;border-radius:6px;transition:all .2s;font-family:inherit}
.lang-btn.active{color:var(--brand);background:rgba(204,31,114,0.1)}

@media(max-width:768px){
  .nav-inner{padding:0 20px}
  .proj-hero{padding:40px 20px 32px}
  .proj-body{grid-template-columns:1fr;padding:0}
  .sidebar{position:static;height:auto;padding:24px 20px;border-right:none;border-bottom:1px solid var(--border)}
  .toc-list{flex-direction:row;flex-wrap:wrap;gap:8px}
  .content{padding:32px 20px 60px}
  .proj-nav{padding:24px 20px}
  .section-img-row{grid-template-columns:1fr}
  .deliverables-grid{grid-template-columns:1fr}
}
`,
    html: `



<section class="proj-hero">
  <div class="proj-tags">
    <span class="tag">🎯 UX Strategy</span>
    <span class="tag">📲 APPs</span>
    <span class="tag">🖥️ Web</span>
    <span class="tag">🌟 Branding</span>
    <span class="tag">🗂️ Design Systems</span>
  </div>
  <p class="agency-label t" data-en="Freelance · ZenderGroup" data-es="Freelance · ZenderGroup">Freelance · ZenderGroup</p>
  <h1 class="proj-title t" data-en="ZenderBox Ecosystem" data-es="Ecosistema ZenderBox">ZenderBox Ecosystem</h1>
  <p class="proj-subtitle t"
    data-en="Full ecosystem design for a logistics group serving Latin America: brand, app, design systems, dashboards, and WMS."
    data-es="Diseño completo del ecosistema para un grupo logístico latinoamericano: marca, app, sistemas de diseño, dashboards y WMS.">
    Full ecosystem design for a logistics group serving Latin America: brand, app, design systems, dashboards, and WMS.
  </p>
</section>

<div class="hero-img-wrap">
  <img src="../images/proj-zenderbox-ecosystem.png" alt="ZenderBox Ecosystem Overview">
</div>

<div class="proj-body">
  <aside class="sidebar">
    <div>
      <p class="toc-label t" data-en="Contents" data-es="Contenido">Contents</p>
      <ul class="toc-list">
        <li><a href="#overview"><span class="t" data-en="Overview" data-es="Visión general">Overview</span></a></li>
        <li><a href="#challenge"><span class="t" data-en="The Challenge" data-es="El reto">The Challenge</span></a></li>
        <li><a href="#zenderhub"><span class="t" data-en="ZenderHub Brand" data-es="Marca ZenderHub">ZenderHub Brand</span></a></li>
        <li><a href="#app"><span class="t" data-en="App Redesign" data-es="Rediseño App">App Redesign</span></a></li>
        <li><a href="#dashboard"><span class="t" data-en="Dashboard &amp; WMS" data-es="Dashboard y WMS">Dashboard &amp; WMS</span></a></li>
        <li><a href="#results"><span class="t" data-en="Results" data-es="Resultados">Results</span></a></li>
      </ul>
    </div>
    <div>
      <p class="toc-label t" data-en="Tools" data-es="Herramientas">Tools</p>
      <div class="tools-grid">
        <div class="tool-item"><div class="tool-icon" style="background:#0acf83;color:#fff">F</div> <span>Figma</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff6244;color:#fff">Mi</div> <span>Miro</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#ff9a00;color:#fff">Ai</div> <span>Illustrator</span></div>
        <div class="tool-item"><div class="tool-icon" style="background:#31a8ff;color:#fff">Ps</div> <span>Photoshop</span></div>
      </div>
    </div>
  </aside>

  <main class="content">

    <section class="content-section" id="overview">
      <p class="section-label t" data-en="01 — Overview" data-es="01 — Visión general">01 — Overview</p>
      <h2 class="section-title t" data-en="A complete design ecosystem" data-es="Un ecosistema de diseño completo">A complete design ecosystem</h2>
      <p class="section-text t"
        data-en="ZenderGroup is a Latin American logistics group operating an international package-forwarding service that connects customers in Colombia, Costa Rica, and other countries with products from the United States. The group operates two interconnected products: ZenderBox (the customer-facing app and web) and ZenderHub (the B2B fulfillment platform)."
        data-es="ZenderGroup es un grupo logístico latinoamericano que opera un servicio de reenvío internacional de paquetes, conectando a clientes de Colombia, Costa Rica y otros países con productos de Estados Unidos. El grupo opera dos productos interconectados: ZenderBox (la app y web para clientes) y ZenderHub (la plataforma de fulfillment B2B).">
        ZenderGroup is a Latin American logistics group operating an international package-forwarding service that connects customers in Colombia, Costa Rica, and other countries with products from the United States. The group operates two interconnected products: ZenderBox (the customer-facing app and web) and ZenderHub (the B2B fulfillment platform).
      </p>
      <p class="section-text t"
        data-en="I was brought in as the sole designer responsible for the entire product ecosystem — from founding a new brand from scratch, to redesigning an existing mobile app, to architecting multi-platform design systems and building the operational tools used by the warehouse team."
        data-es="Fui contratada como diseñadora única responsable de todo el ecosistema de producto: desde crear una nueva marca desde cero, hasta rediseñar una app móvil existente, arquitectar sistemas de diseño multiplataforma y construir las herramientas operacionales del equipo de bodega.">
        I was brought in as the sole designer responsible for the entire product ecosystem — from founding a new brand from scratch, to redesigning an existing mobile app, to architecting multi-platform design systems and building the operational tools used by the warehouse team.
      </p>
      <div class="section-img"><img src="../images/proj-zenderbox-ecosystem.png" alt="ZenderBox Ecosystem Map" loading="lazy"></div>
    </section>

    <section class="content-section" id="challenge">
      <p class="section-label t" data-en="02 — Challenge" data-es="02 — Reto">02 — Challenge</p>
      <h2 class="section-title t" data-en="The Challenge" data-es="El reto">The Challenge</h2>
      <p class="section-text t"
        data-en="The group had a working logistics operation but lacked design coherence across its products. ZenderBox had an existing app with poor UX and no design system. ZenderHub — a new B2B platform — had no brand, no design language, and no digital identity whatsoever. The operational side (dashboard and WMS) ran on improvised tools with zero UX structure."
        data-es="El grupo tenía una operación logística funcional pero carecía de coherencia de diseño en sus productos. ZenderBox tenía una app existente con mala UX y sin sistema de diseño. ZenderHub —una nueva plataforma B2B— no tenía marca, ni lenguaje de diseño, ni identidad digital. El lado operacional (dashboard y WMS) funcionaba con herramientas improvisadas sin ninguna estructura UX.">
        The group had a working logistics operation but lacked design coherence across its products. ZenderBox had an existing app with poor UX and no design system. ZenderHub — a new B2B platform — had no brand, no design language, and no digital identity whatsoever. The operational side (dashboard and WMS) ran on improvised tools with zero UX structure.
      </p>
      <div class="section-img"><img src="../images/ze-challenge.png" alt="The Challenge" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Create ZenderHub brand identity from zero — name, mark, palette, type, voice" data-es="Crear la identidad de marca ZenderHub desde cero — nombre, marca, paleta, tipografía, voz">Create ZenderHub brand identity from zero — name, mark, palette, type, voice</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Redesign the ZenderBox iOS/Android app end-to-end" data-es="Rediseñar la app iOS/Android de ZenderBox de principio a fin">Redesign the ZenderBox iOS/Android app end-to-end</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Build multi-platform design systems (app + web + dashboard)" data-es="Construir sistemas de diseño multiplataforma (app + web + dashboard)">Build multi-platform design systems (app + web + dashboard)</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Design operational dashboards and a WMS for warehouse staff" data-es="Diseñar dashboards operacionales y un WMS para el equipo de bodega">Design operational dashboards and a WMS for warehouse staff</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Ensure visual and UX consistency across all touchpoints" data-es="Garantizar consistencia visual y UX en todos los puntos de contacto">Ensure visual and UX consistency across all touchpoints</span></li>
      </ul>
    </section>

    <section class="content-section" id="zenderhub">
      <p class="section-label t" data-en="03 — ZenderHub Brand" data-es="03 — Marca ZenderHub">03 — ZenderHub Brand</p>
      <h2 class="section-title t" data-en="Building a B2B brand from scratch" data-es="Construyendo una marca B2B desde cero">Building a B2B brand from scratch</h2>
      <p class="section-text t"
        data-en="ZenderHub needed to speak to a completely different audience than ZenderBox — logistics managers, fulfillment operators, and enterprise clients. I designed the brand from the ground up: defining the naming rationale, creating the visual identity, establishing the typographic system (Exo for display + Plus Jakarta Sans for body), and crafting the motion and interaction language."
        data-es="ZenderHub necesitaba hablar a una audiencia completamente diferente a ZenderBox: gerentes de logística, operadores de fulfillment y clientes empresariales. Diseñé la marca desde cero: definiendo la justificación del nombre, creando la identidad visual, estableciendo el sistema tipográfico (Exo para display + Plus Jakarta Sans para cuerpo) y elaborando el lenguaje de movimiento e interacción.">
        ZenderHub needed to speak to a completely different audience than ZenderBox — logistics managers, fulfillment operators, and enterprise clients. I designed the brand from the ground up: defining the naming rationale, creating the visual identity, establishing the typographic system (Exo for display + Plus Jakarta Sans for body), and crafting the motion and interaction language.
      </p>
      <div class="section-img"><img src="../images/ze-hub-web.png" alt="ZenderHub Web" loading="lazy"></div>
      <div class="process-steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><p class="step-title t" data-en="Brand Strategy &amp; Naming" data-es="Estrategia de marca y naming">Brand Strategy &amp; Naming</p><p class="step-desc t" data-en="Defined positioning, tone of voice, and personality. Justified the 'Hub' suffix to signal the platform role within the ecosystem." data-es="Definí el posicionamiento, el tono de voz y la personalidad. Justifiqué el sufijo 'Hub' para señalar el rol de plataforma central dentro del ecosistema.">Defined positioning, tone of voice, and personality. Justified the 'Hub' suffix to signal the platform role within the ecosystem.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><p class="step-title t" data-en="Visual Identity" data-es="Identidad visual">Visual Identity</p><p class="step-desc t" data-en="Primary magenta (#A3086A) paired with ZenderBox cyan as accent. Signature gradient 245deg. Logo mark, color system, and dark/light modes." data-es="Magenta primario (#A3086A) combinado con el cyan de ZenderBox como acento. Gradiente firma 245deg. Marca de logo, sistema de color y modos claro/oscuro.">Primary magenta (#A3086A) paired with ZenderBox cyan as accent. Signature gradient 245deg. Logo mark, color system, and dark/light modes.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><p class="step-title t" data-en="Design System &amp; Web" data-es="Sistema de diseño y web">Design System &amp; Web</p><p class="step-desc t" data-en="Full Figma design system and public website design. Card-based layout, 23px signature radius, Exo ALL CAPS display voice." data-es="Sistema de diseño completo en Figma y diseño del sitio web público. Layout basado en tarjetas, radio firma 23px, voz de display Exo en MAYÚSCULAS.">Full Figma design system and public website design. Card-based layout, 23px signature radius, Exo ALL CAPS display voice.</p></div></div>
      </div>
      <div class="section-img"><img src="../images/ze-hub-zero.png" alt="ZenderHub Zero" loading="lazy"></div>
    </section>

    <section class="content-section" id="app">
      <p class="section-label t" data-en="04 — App Redesign" data-es="04 — Rediseño App">04 — App Redesign</p>
      <h2 class="section-title t" data-en="ZenderBox App — End-to-end redesign" data-es="App ZenderBox — Rediseño completo">ZenderBox App — End-to-end redesign</h2>
      <p class="section-text t"
        data-en="The existing ZenderBox app had no coherent UX: unclear package states, no design system, and navigation that confused users across all literacy levels. I redesigned it entirely — 65 screens across iOS and Android — built around a White First principle where brand colors serve as meaningful signals, not decoration."
        data-es="La app ZenderBox existente no tenía una UX coherente: estados de paquete poco claros, sin sistema de diseño y una navegación que confundía a usuarios de todos los niveles. La rediseñé por completo — 65 pantallas para iOS y Android — construida alrededor del principio White First donde los colores de marca son señales con significado, no decoración.">
        The existing ZenderBox app had no coherent UX: unclear package states, no design system, and navigation that confused users across all literacy levels. I redesigned it entirely — 65 screens across iOS and Android — built around a White First principle where brand colors serve as meaningful signals, not decoration.
      </p>
      <div class="section-img"><img src="../images/ze-built.png" alt="What I built" loading="lazy"></div>
      <div class="section-img"><img src="../images/ze-app.png" alt="App redesign detail" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="65 screens — full user flows from onboarding to package consolidation" data-es="65 pantallas — flujos completos desde onboarding hasta consolidación de paquetes">65 screens — full user flows from onboarding to package consolidation</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Semantic color-coded package status system (In warehouse, In transit, Dispatched…)" data-es="Sistema semántico de estados de paquete con código de color (En bodega, En camino, Despachado…)">Semantic color-coded package status system (In warehouse, In transit, Dispatched…)</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Gamification layer — points, levels, and referral rewards" data-es="Capa de gamificación — puntos, niveles y recompensas por referidos">Gamification layer — points, levels, and referral rewards</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Full native design system with tokens, components, and variants" data-es="Sistema de diseño nativo completo con tokens, componentes y variantes">Full native design system with tokens, components, and variants</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Multi-country support — Colombia, Costa Rica, and expansion-ready" data-es="Soporte multi-país — Colombia, Costa Rica y listo para expansión">Multi-country support — Colombia, Costa Rica, and expansion-ready</span></li>
      </ul>
    </section>

    <section class="content-section" id="dashboard">
      <p class="section-label t" data-en="05 — Dashboard &amp; WMS" data-es="05 — Dashboard y WMS">05 — Dashboard &amp; WMS</p>
      <h2 class="section-title t" data-en="Operational tools for the logistics team" data-es="Herramientas operacionales para el equipo logístico">Operational tools for the logistics team</h2>
      <p class="section-text t"
        data-en="Beyond the customer-facing products, the warehouse team needed tools to manage packages, clients, and shipments. I designed the customer dashboard (mirroring the app's key modules) and a full Warehouse Management System (WMS) for the operational team — both built on the same design system tokens to ensure coherence."
        data-es="Más allá de los productos para clientes, el equipo de bodega necesitaba herramientas para gestionar paquetes, clientes y envíos. Diseñé el dashboard de clientes (reflejando los módulos clave de la app) y un Sistema de Gestión de Almacén (WMS) completo para el equipo operacional — ambos construidos sobre los mismos tokens del sistema de diseño para garantizar coherencia.">
        Beyond the customer-facing products, the warehouse team needed tools to manage packages, clients, and shipments. I designed the customer dashboard (mirroring the app's key modules) and a full Warehouse Management System (WMS) for the operational team — both built on the same design system tokens to ensure coherence.
      </p>
      <div class="section-img"><img src="../images/ze-dashboard.png" alt="Dashboard ZenderBox" loading="lazy"></div>
      <div class="deliverables-grid">
        <div class="deliverable-card">
          <h4 class="t" data-en="Customer Dashboard" data-es="Dashboard de clientes">Customer Dashboard</h4>
          <p class="t" data-en="Web panel replicating the app's key data — package card, level/points, stats tiles — with a 305px left rail navigation." data-es="Panel web que replica los datos clave de la app — tarjeta de paquete, nivel/puntos, tiles de estadísticas — con navegación en riel izquierdo de 305px.">Web panel replicating the app's key data — package card, level/points, stats tiles — with a 305px left rail navigation.</p>
        </div>
        <div class="deliverable-card">
          <h4 class="t" data-en="WMS — Warehouse Management" data-es="WMS — Gestión de almacén">WMS — Warehouse Management</h4>
          <p class="t" data-en="Backoffice tool for warehouse operators: package intake, client lookup, status updates, dispatch queue, and consolidation management." data-es="Herramienta de backoffice para operadores de bodega: recepción de paquetes, búsqueda de clientes, actualizaciones de estado, cola de despacho y gestión de consolidaciones.">Backoffice tool for warehouse operators: package intake, client lookup, status updates, dispatch queue, and consolidation management.</p>
        </div>
      </div>
    </section>

    <section class="content-section" id="results">
      <p class="section-label t" data-en="06 — Results" data-es="06 — Resultados">06 — Results</p>
      <h2 class="section-title t" data-en="Results and Deliverables" data-es="Resultados y entregables">Results and Deliverables</h2>
      <div class="section-img"><img src="../images/ze-result.jpg" alt="Results" loading="lazy"></div>
      <ul class="checklist">
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="ZenderHub brand — logo, identity system, website, and B2B design system" data-es="Marca ZenderHub — logo, sistema de identidad, sitio web y sistema de diseño B2B">ZenderHub brand — logo, identity system, website, and B2B design system</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="ZenderBox app — 65-screen redesign with full native iOS/Android design system" data-es="App ZenderBox — rediseño de 65 pantallas con sistema de diseño nativo completo para iOS/Android">ZenderBox app — 65-screen redesign with full native iOS/Android design system</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="ZenderBox public web — DS + landing in Spanish and Portuguese" data-es="Web pública ZenderBox — DS + landing en español y portugués">ZenderBox public web — DS + landing in Spanish and Portuguese</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Customer dashboard and operational WMS — fully handoff-ready" data-es="Dashboard de clientes y WMS operacional — listos para handoff al desarrollo">Customer dashboard and operational WMS — fully handoff-ready</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Unified ecosystem with consistent design language across all platforms" data-es="Ecosistema unificado con lenguaje de diseño consistente en todas las plataformas">Unified ecosystem with consistent design language across all platforms</span></li>
        <li><span class="check-icon"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span><span class="t" data-en="Full documentation and dev handoff delivered across all products" data-es="Documentación completa y handoff de desarrollo entregados en todos los productos">Full documentation and dev handoff delivered across all products</span></li>
      </ul>
    </section>

  </main>
</div>







`
  },
};