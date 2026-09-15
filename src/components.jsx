import { useEffect, useState } from 'react';
import { focusAreas, process, profile, services, stack } from './content';

const Arrow = ({ diagonal = false }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={diagonal ? 'M7 17 17 7M8 7h9v9' : 'M5 12h14m-5-5 5 5-5 5'} />
  </svg>
);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Haya Alhadidi home">
        <span className="brand-mark">{profile.shortName}</span>
        <span>{profile.name}</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav id="site-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
          Start a project <Arrow diagonal />
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy reveal">
        <div className="status"><i /> {profile.availability}</div>
        <p className="eyebrow">{profile.role}</p>
        <h1>{profile.headline[0]} <span>{profile.headline[1]}</span></h1>
        <p className="hero-intro">{profile.introduction}</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">Explore my work <Arrow /></a>
          <a className="button ghost" href="#contact">Let’s talk <Arrow diagonal /></a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="model-core">
          <div className="core-glow" />
          <span>AI</span>
        </div>
        <div className="data-node node-a">DATA</div>
        <div className="data-node node-b">MODEL</div>
        <div className="data-node node-c">OUTPUT</div>
      </div>
      <div className="hero-footer">
        <span>{profile.location}</span>
        <a href="#work">Scroll to explore <span>↓</span></a>
      </div>
    </section>
  );
}

export function Focus() {
  return (
    <section className="section" id="work">
      <SectionHeading label="Selected focus" title="Intelligence, built with intent." text="Three areas where rigorous modeling meets real-world usefulness." />
      <div className="focus-grid">
        {focusAreas.map((item) => (
          <article className={`focus-card ${item.accent}`} key={item.title}>
            <div className="card-top"><span>{item.index}</span><Arrow diagonal /></div>
            <div className="card-visual" aria-hidden="true"><i /><i /><i /></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section about" id="about">
      <div className="about-lead">
        <p className="eyebrow">About me</p>
        <h2>Between research and <span>real-world impact.</span></h2>
      </div>
      <div className="about-copy">
        <p className="large">I build AI models around the problem—not around the hype.</p>
        <p>My work starts with the outcome a person or business actually needs. From there, I explore the data, choose the right modeling approach, and test it against clear evidence.</p>
        <p>The goal is not a clever demo. It is an intelligent system that is understandable, efficient, and dependable when people use it.</p>
        <div className="principles">
          <span>01 / Useful</span><span>02 / Measurable</span><span>03 / Responsible</span>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section" id="services">
      <SectionHeading label="What I do" title="From first hypothesis to production." text="A focused AI practice covering the complete path from exploration to delivery." />
      <div className="services-list">
        {services.map(([title, description], index) => (
          <article className="service" key={title}>
            <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p><Arrow diagonal />
          </article>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section process-section">
      <SectionHeading label="The process" title="A disciplined route to useful AI." />
      <div className="process-grid">
        {process.map(([title, description], index) => (
          <div className="process-step" key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span><i />
            <h3>{title}</h3><p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section className="section stack-section">
      <p className="eyebrow">Tools & technologies</p>
      <div className="stack-cloud">{stack.map((item) => <span key={item}>{item}</span>)}</div>
    </section>
  );
}

export function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-noise" aria-hidden="true" />
      <p className="eyebrow">Get in touch</p>
      <h2>Have an ambitious AI problem?</h2>
      <p>Let’s turn it into a model that earns its place in the real world.</p>
      <a className="contact-link" href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a>
      <div className="footer-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed for intelligent work.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function SectionHeading({ label, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
