import { useEffect, useState } from 'react';
import { Logo } from './ui/Logo';

const links = [
  { href: '#empezar-gratis', label: 'Empezar' },
  { href: '#quien-soy', label: 'Quién soy' },
  { href: '#escuela', label: 'Escuela' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b border-purple/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Logo
            variant="horizontal"
            className="h-8 md:h-9 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.22em] uppercase text-purple/80 hover:text-violet transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
