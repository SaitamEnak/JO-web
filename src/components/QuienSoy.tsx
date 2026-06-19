import { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import johannaImg from '../img/johanna-otranto.jpg';

type StackImage = { src: string; alt: string } | { src: null; gradient: string };

const IMAGES: StackImage[] = [
  { src: johannaImg, alt: 'Johanna Otranto' },
  { src: null, gradient: 'linear-gradient(180deg, #5E457F 0%, #F39BD8 100%)' },
  { src: null, gradient: 'linear-gradient(180deg, #5E457F 0%, #e7be7e 100%)' },
];

const STACK_TRANSFORMS = [
  { rotate: '-1deg', scale: 1,    opacity: 1,    z: 30, x:  0, y:  0 },
  { rotate:  '5deg', scale: 0.95, opacity: 0.75, z: 20, x: 14, y:  6 },
  { rotate: '-5deg', scale: 0.90, opacity: 0.55, z: 10, x: -10, y: 10 },
];

function ImageStack() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  const advance = () => setActive(i => (i + 1) % IMAGES.length);

  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ aspectRatio: '4 / 5' }}
      onClick={advance}
      role="button"
      aria-label="Ver siguiente imagen"
    >
      {IMAGES.map((img, i) => {
        const pos = (i - active + IMAGES.length) % IMAGES.length;
        const t = STACK_TRANSFORMS[pos] ?? { rotate: '0deg', scale: 0.85, opacity: 0, z: 0, x: 0, y: 0 };

        const style: React.CSSProperties = {
          transform: `rotate(${t.rotate}) scale(${t.scale}) translate(${t.x}px, ${t.y}px)`,
          opacity: t.opacity,
          zIndex: t.z,
          transition: 'all 0.55s cubic-bezier(0.34, 1.4, 0.64, 1)',
          position: 'absolute',
          inset: 0,
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: pos === 0 ? '0 30px 80px -20px rgba(43,31,69,0.45)' : 'none',
        };

        if (img.src !== null) {
          return (
            <div key={i} style={style}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          );
        }

        return (
          <div
            key={i}
            style={{ ...style, background: (img as { src: null; gradient: string }).gradient }}
          />
        );
      })}

      {/* dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); setActive(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'bg-cream w-4' : 'bg-cream/50'
            }`}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function QuienSoy() {
  return (
    <Section id="quien-soy" className="bg-cream">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Reveal direction="left" className="order-2 md:order-1">
          <ImageStack />
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal direction="right">
            <p className="text-xs tracking-[0.3em] uppercase text-purple/60 mb-5">
              ¿Quién soy?
            </p>
          </Reveal>
          <Reveal direction="right" delay={80}>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Soy <span className="italic">Johanna Otranto</span>.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-soft text-sm md:text-base max-w-prose">
            {[
              'Coach Ontológica Profesional, mentora, speaker… y algunos títulos más que el personaje se pone en esta experiencia humana.',
              'Pero más allá de eso, soy un alma en expansión, profundamente conectada con Dios y comprometida con el despertar de la conciencia.',
              'Mi propósito es recordarte quién sos de verdad: un ser infinito, creador, conectado con una fuente inagotable de abundancia, amor y poder.',
              'Acompaño procesos de transformación profunda integrando coaching ontológico, metafísica, leyes universales, espiritualidad, mindfulness y conciencia.',
              'No para que "te conviertas en alguien"… sino para que dejes de resistirte a lo que ya sos.',
            ].map((p, i) => (
              <Reveal key={i} direction="up" delay={180 + i * 90}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal direction="up" delay={680}>
              <p className="text-violet font-serif italic">
                Porque cuando te alineás con tu esencia, tu energía cambia… y
                tu realidad también.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
