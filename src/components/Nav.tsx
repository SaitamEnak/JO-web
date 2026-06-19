import { useEffect, useState } from 'react';
import { Logo } from './ui/Logo';

const links = [
  { href: '#empezar-gratis', label: 'Empezar' },
  { href: '#quien-soy', label: 'Quién soy' },
  { href: '#escuela', label: 'Escuela' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Fullscreen overlay — z-40, debajo del header */}
      <div
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 z-40 bg-cream overflow-hidden flex flex-col justify-center transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center px-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className={`font-serif text-3xl text-violet py-5 border-b border-purple/10 w-full text-center transition-all duration-300 hover:text-purple ${
                open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: open ? `${80 + i * 70}ms` : '0ms' }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Header — z-50, siempre encima del overlay */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'bg-cream/95 backdrop-blur-md border-b border-purple/10'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" onClick={close}>
            <Logo variant="horizontal" className="h-8 md:h-9 w-auto" />
          </a>

          {/* Desktop nav */}
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

          {/* Hamburger */}
          <button
            className="md:hidden relative flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={`block h-px w-6 bg-violet transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-px w-6 bg-violet transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-px w-6 bg-violet transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </header>
    </>
  );
}
