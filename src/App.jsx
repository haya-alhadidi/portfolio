import { useEffect } from 'react';
import { About, Contact, Focus, Header, Hero, Process, Services, Stack } from './components';

export default function App() {
  useEffect(() => {
    const moveGlow = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', moveGlow, { passive: true });
    return () => window.removeEventListener('pointermove', moveGlow);
  }, []);

  return (
    <div className="page-shell">
      <div className="cursor-glow" aria-hidden="true" />
      <Header />
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
