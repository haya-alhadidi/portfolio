import { useEffect, useState } from 'react';
import { About, Contact, Focus, Header, Hero, Process, Services, Stack } from './components';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem('portfolio-theme');
    return saved || 'dark';
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const moveGlow = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', moveGlow, { passive: true });
    return () => window.removeEventListener('pointermove', moveGlow);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('main .section, .contact');
    document.documentElement.classList.add('has-scroll-reveal');

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-revealed'));
      return () => document.documentElement.classList.remove('has-scroll-reveal');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('has-scroll-reveal');
    };
  }, []);

  return (
    <div className="page-shell">
      <div className={`loading-screen ${isLoading ? 'is-visible' : ''}`} aria-hidden={!isLoading}>
        <div className="loading-mark" aria-label="Loading Haya Alhadidi portfolio">AI</div>
        <span className="loading-line" />
      </div>
      <div className="cursor-glow" aria-hidden="true" />
      <Header theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <Focus />
        <About />
        <Services />
        <Process />
        <Stack />
      </main>
      <Contact />
    </div>
  );
}
