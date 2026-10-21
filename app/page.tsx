
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Diseño web profesional",
    description:
      "Páginas modernas, rápidas y adaptadas a cada dispositivo para presentar tu negocio con una imagen impecable.",
    tags: ["Web corporativa", "Diseño responsive"],
  },
  {
    number: "02",
    icon: Bot,
    title: "Inteligencia artificial",
    description:
      "Asistentes virtuales y soluciones inteligentes para atender consultas y mejorar la experiencia de tus clientes.",
    tags: ["Agentes de IA", "Atención al cliente"],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Conectamos herramientas y tareas repetitivas para que tu equipo pueda centrarse en lo que realmente importa.",
    tags: ["Integraciones", "Flujos de trabajo"],
  },
  {
    number: "04",
    icon: Layers3,
    title: "Software a medida",
    description:
      "Paneles de control, CRM y herramientas digitales diseñadas alrededor de la forma de trabajar de tu empresa.",
    tags: ["Dashboards", "Sistemas de gestión"],
  },
];

const projects = [
  {
    number: "01",
    category: "DISEÑO WEB",
    title: "Web corporativa",
    description:
      "Una presencia digital cuidada para presentar servicios y generar nuevas oportunidades.",
    className: "project-web",
    visual: (
      <div className="mini-browser corporate-preview">
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <small>transportai.es</small>
        </div>
        <div className="mini-content">
          <div className="mini-nav">
            <span>TA<span className="blue-dot">.</span></span>
            <div><i /><i /><i /></div>
          </div>
          <div className="mini-hero">
            <div className="mini-kicker">SOLUCIONES DIGITALES</div>
            <div className="mini-heading">Ideas que<br />impulsan <em>negocios.</em></div>
            <div className="mini-line" />
            <div className="mini-button">Descubrir más ↗</div>
          </div>
          <div className="mini-footer">
            <span>ESTRATEGIA</span><span>DISEÑO</span><span>TECNOLOGÍA</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    category: "INTELIGENCIA ARTIFICIAL",
    title: "Asistente virtual",
    description:
      "Una experiencia conversacional para orientar a visitantes y recoger solicitudes.",
    className: "project-ai",
    visual: (
      <div className="ai-preview">
        <div className="ai-orbit orbit-one" />
        <div className="ai-orbit orbit-two" />
        <div className="ai-core"><Bot size={34} strokeWidth={1.4} /></div>
        <div className="ai-label ai-label-top"><span /> ASISTENTE IA</div>
        <div className="ai-label ai-label-bottom"><Sparkles size={13} /> Conversaciones inteligentes</div>
        <div className="ai-particle particle-one" />
        <div className="ai-particle particle-two" />
      </div>
    ),
  },
  {
    number: "03",
    category: "AUTOMATIZACIÓN",
    title: "Procesos conectados",
    description:
      "Flujos de trabajo para organizar tareas, procesar información y enviar notificaciones.",
    className: "project-flow",
    visual: (
      <div className="flow-preview">
        <div className="flow-node"><MessageCircle size={18} /><span><b>Entrada</b><small>Nuevo mensaje</small></span><Check size={15} /></div>
        <div className="flow-connector"><span /></div>
        <div className="flow-node flow-active"><Zap size={18} /><span><b>Procesamiento IA</b><small>Analizar información</small></span><Check size={15} /></div>
        <div className="flow-connector"><span /></div>
        <div className="flow-node"><Workflow size={18} /><span><b>Acción automática</b><small>Ejecutar flujo</small></span><ArrowUpRight size={15} /></div>
        <div className="flow-status"><span /> FLUJO DE EJEMPLO</div>
      </div>
    ),
  },
];

const benefits = [
  "Diseño adaptado a tu marca",
  "Experiencia optimizada para móvil",
  "Estructura preparada para SEO",
  "Soluciones que pueden crecer contigo",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Transport AI, inicio">
          <span className="brand-symbol">T<span>A</span></span>
          <span className="brand-name">TRANSPORT<span> AI</span><small>TECNOLOGÍA Y SOLUCIONES DIGITALES</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Demostraciones</a>
          <a href="#nosotros">Nosotros</a>
        </nav>

        <a className="header-cta" href="#contacto">
          Hablemos <ArrowUpRight size={16} />
        </a>
        <a className="mobile-menu" href="#servicios" aria-label="Ver servicios"><Menu /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span className="status-dot" /> DISEÑO · DESARROLLO · INTELIGENCIA ARTIFICIAL</div>
          <h1>Tu empresa.<br />Una nueva forma<br />de <span className="gradient-text">avanzar.</span></h1>
          <p className="hero-description">
            Creamos experiencias web, herramientas inteligentes y
            soluciones digitales para empresas que quieren dar el siguiente paso.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#contacto">Hablemos de tu proyecto <ArrowRight size={17} /></a>
            <a className="button-secondary" href="#proyectos">Explorar soluciones <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-trust">
            <div className="trust-icon"><ShieldCheck size={18} /></div>
            <p><strong>Soluciones pensadas para tu negocio</strong><span>Diseño cuidado. Tecnología útil. Objetivos claros.</span></p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Representación visual de soluciones digitales">
          <div className="visual-glow" />
          <div className="visual-topline"><span>TRANSPORT AI / STUDIO</span><span>01 — 04</span></div>
          <div className="visual-main">
            <div className="visual-orbit visual-orbit-a" />
            <div className="visual-orbit visual-orbit-b" />
            <div className="visual-center">
              <span className="center-monogram">T<span>A</span></span>
              <span className="center-caption">DIGITAL SOLUTIONS</span>
            </div>
            <div className="floating-card card-web"><Globe2 size={18} /><span><b>Diseño web</b><small>Tu presencia digital</small></span><span className="card-arrow">↗</span></div>
            <div className="floating-card card-ai"><Bot size={19} /><span><b>Inteligencia artificial</b><small>Automatiza lo cotidiano</small></span><span className="card-arrow">↗</span></div>
            <div className="floating-card card-code"><Code2 size={18} /><span><b>Software a medida</b><small>Creado para tu empresa</small></span></div>
            <div className="visual-cross cross-one">+</div>
            <div className="visual-cross cross-two">+</div>
          </div>
          <div className="visual-bottomline"><span>ESTRATEGIA Y TECNOLOGÍA</span><span>HECHO PARA EMPRESAS ↗</span></div>
        </div>

        <a href="#servicios" className="scroll-cue"><span /> DESPLÁZATE PARA DESCUBRIR</a>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="intro-strip" id="nosotros">
        <div className="intro-label"><span className="section-index">01 /</span> QUÉ HACEMOS</div>
        <p>La tecnología tiene sentido cuando <span>resuelve problemas reales.</span> Por eso diseñamos soluciones digitales alrededor de las necesidades de cada negocio.</p>
        <a href="#contacto" aria-label="Contactar con Transport AI"><MoveUpRight size={22} /></a>
      </section>

      <section className="services-section section-pad" id="servicios">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="section-index">02 /</span> LO QUE PODEMOS HACER</div>
            <h2>Soluciones digitales.<br /><span className="muted-heading">Sin complicaciones.</span></h2>
          </div>
          <p>Desde una web profesional hasta herramientas inteligentes que simplifican el trabajo diario. Elegimos la solución que necesita tu empresa.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top"><span>{service.number}</span><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href="#contacto" className="service-link">Explorar solución <ArrowUpRight size={16} /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="projects-section section-pad" id="proyectos">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="section-index">03 /</span> DEMOSTRACIONES</div>
            <h2>Ideas que toman<br /><span className="muted-heading">forma digital.</span></h2>
          </div>
          <p>Descubre ejemplos visuales de lo que podemos construir. Cada proyecto puede adaptarse a los objetivos, procesos y estilo de tu empresa.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.number}>
              <div className="project-visual">{project.visual}<span className="project-number">{project.number} / 03</span></div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#contacto" aria-label={`Solicitar un proyecto de ${project.title}`}>Quiero algo así <ArrowUpRight size={17} /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="projects-note"><Sparkles size={16} /><span>Ejemplos conceptuales creados por Transport AI. Las funcionalidades finales dependen de cada proyecto.</span></div>
      </section>

      <section className="why-section section-pad">
        <div className="why-visual">
          <div className="why-frame">
            <div className="why-frame-top"><span>TRANSPORT AI</span><span>DISEÑADO PARA CRECER</span></div>
            <div className="why-big-type">THINK<span>.</span><br />BUILD<span>.</span><br />GROW<span>.</span></div>
            <div className="why-frame-bottom"><span>ESTRATEGIA + DISEÑO + TECNOLOGÍA</span><ArrowUpRight size={19} /></div>
          </div>
          <div className="why-floating"><MonitorSmartphone size={21} /><span>Una experiencia<br /><b>en cada pantalla.</b></span></div>
        </div>
        <div className="why-content">
          <div className="eyebrow"><span className="section-index">04 /</span> POR QUÉ TRANSPORT AI</div>
          <h2>Tecnología con<br />un propósito <span className="gradient-text">claro.</span></h2>
          <p className="why-description">No se trata de añadir tecnología porque sí. Se trata de entender qué necesita tu negocio y crear una solución útil, clara y preparada para evolucionar.</p>
          <ul className="benefits-list">{benefits.map((benefit) => <li key={benefit}><span><Check size={14} /></span>{benefit}</li>)}</ul>
          <a className="button-primary" href="#contacto">Cuéntanos tu idea <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-glow" />
        <div className="contact-inner">
          <div className="eyebrow"><span className="status-dot" /> EL SIGUIENTE PASO EMPIEZA AQUÍ</div>
          <h2>¿Y si hacemos<br />algo <span className="gradient-text">grande?</span></h2>
          <p>Cuéntanos qué necesitas. Exploraremos contigo cómo convertir tu idea en una solución digital.</p>
          <a className="button-primary contact-button" href="mailto:contacto@transportai.es?subject=Proyecto%20web%20-%20Transport%20AI">Hablemos de tu proyecto <ArrowUpRight size={18} /></a>
          <span className="contact-note">Sin compromiso · Cuéntanos tu idea</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-symbol">T<span>A</span></span>
          <span className="brand-name">TRANSPORT<span> AI</span><small>TECNOLOGÍA Y SOLUCIONES DIGITALES</small></span>
        </a>
        <p>Soluciones digitales creadas para avanzar.</p>
        <div className="footer-right"><span>© {new Date().getFullYear()} Transport AI</span><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </main>
  );
}
