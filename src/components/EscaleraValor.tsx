import { useEffect, useRef } from 'react';
import { Section } from './ui/Section';
import { Divider } from './ui/Divider';
import { Reveal } from './ui/Reveal';
import { ProductCard, type Tier, type PriceLine, type CTA } from './ProductCard';
import { links } from '../lib/links';
import type { ReactNode } from 'react';

type Product = {
  tier: Tier;
  eyebrow: string;
  title: string;
  subtitle?: string;
  badge?: string;
  intro?: ReactNode;
  features: string[];
  prices: PriceLine[];
  ctas: CTA[];
  footnote?: string;
};

const products: Product[] = [
  {
    tier: 'entry',
    eyebrow: 'Puerta de entrada',
    title: 'Manual de Manifestación',
    intro: (
      <>
        <p>Tu primer paso dentro de la escuela.</p>
        <p className="mt-3">
          Un proceso práctico para empezar a aplicar las leyes universales desde
          la conciencia y dejar de manifestar desde el ego.
        </p>
      </>
    ),
    features: [
      'Ebook paso a paso',
      '10 bonos (mentorías, audios, meditaciones, ebooks)',
      'Herramientas para transformar tu realidad',
    ],
    prices: [
      { amount: 'USD 15', note: 'pago único · acceso de por vida' },
      { amount: '$19.999 ARS' },
    ],
    ctas: [{ label: 'Empezar', href: links.manual }],
  },
  {
    tier: 'level1',
    eyebrow: 'Nivel 1',
    title: 'Sala Despierta tu Poder',
    subtitle: 'mentoría mensual',
    badge: 'Lanzamiento',
    intro: (
      <>
        <p>El espacio donde dejás de buscar… y empezás a sostener.</p>
        <p className="mt-3">
          Mentoría mensual para integrar, aplicar y elevar tu nivel de
          conciencia.
        </p>
      </>
    ),
    features: [
      'Encuentros en vivo semanales (Zoom)',
      'Plataforma con contenido grabado',
      'Ejercicios y herramientas prácticas',
      'Comunidad privada de alumnos (WhatsApp)',
      'Entorno consciente para sostener el proceso',
    ],
    prices: [
      { amount: 'USD 100', strike: true },
      { amount: 'USD 27 / mes', note: 'precio lanzamiento' },
    ],
    ctas: [{ label: 'Quiero unirme', href: links.salaDespierta }],
    footnote: 'No es usar las leyes desde el ego. Es trascenderlo.',
  },
  {
    tier: 'level2',
    eyebrow: 'Nivel 2 · próximamente',
    title: 'Sala Marca Personal',
    subtitle: 'propósito y negocio consciente',
    intro: (
      <p>
        Para quienes sienten el llamado de vivir de su propósito y crear
        abundancia desde la conciencia.
      </p>
    ),
    features: [
      'Claridad en tu mensaje',
      'Marca personal consciente',
      'Negocio alineado a tu esencia',
      'Expansión desde la conciencia',
    ],
    prices: [{ amount: 'USD 5.000' }],
    ctas: [
      {
        label: 'Lista de espera',
        href: links.marcaPersonal,
        variant: 'secondary',
      },
    ],
  },
  {
    tier: 'vip',
    eyebrow: 'VIP · 1:1',
    title: 'Sesiones 1:1',
    subtitle: 'salto cuántico',
    intro: (
      <>
        <p>Proceso intensivo y personalizado. No es para todos.</p>
        <p className="mt-3">
          Es para quienes están listos para trabajar en profundidad y generar
          cambios reales.
        </p>
      </>
    ),
    features: [
      'Acceso directo por WhatsApp 24/7',
      'Acompañamiento cercano',
      'Alumnos VIP — espacio exclusivo',
    ],
    prices: [
      { amount: 'Full intensivo · 3 meses · 12 sesiones' },
      { amount: 'USD 3.000', strike: true },
      { amount: 'USD 1.500' },
      { amount: 'Proceso · 3 meses · 6 sesiones' },
      { amount: 'USD 2.000', strike: true },
      { amount: 'USD 1.000' },
    ],
    ctas: [
      { label: 'Aplicar full', href: links.vipFull, variant: 'light' },
      { label: 'Aplicar proceso', href: links.vipProceso, variant: 'light' },
    ],
    footnote: 'Cupos limitados — aplicación previa.',
  },
];

const DESKTOP_QUERY = '(min-width: 1024px)';

export function EscaleraValor() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const equalize = () => {
      const cards = cardRefs.current.filter(
        (el): el is HTMLElement => el !== null,
      );
      if (cards.length === 0) return;

      cards.forEach((c) => {
        c.style.minHeight = '';
      });

      if (!window.matchMedia(DESKTOP_QUERY).matches) return;

      void cards[0].offsetHeight;
      const max = Math.max(
        ...cards.map((c) => c.getBoundingClientRect().height),
      );
      cards.forEach((c) => {
        c.style.minHeight = `${max}px`;
      });
    };

    equalize();
    window.addEventListener('resize', equalize);
    document.fonts?.ready.then(equalize).catch(() => {});

    return () => window.removeEventListener('resize', equalize);
  }, []);

  return (
    <Section id="escuela" className="bg-cream">
      <div className="text-center max-w-3xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-purple/60 mb-5">
            Bienvenid@
          </p>
        </Reveal>
        <Reveal direction="scale" delay={120}>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Escuela de Autoconocimiento
            <br />
            <span className="italic text-purple">Johanna Otranto</span>
          </h2>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-6 text-soft text-sm md:text-base">
            Esto no es contenido. <br /> Es un proceso.
          </p>
        </Reveal>
        <Reveal delay={380}>
          <p className="mt-3 text-soft text-sm md:text-base">
            No importa dónde estés hoy, hay una forma de empezar.
          </p>
        </Reveal>
      </div>

      <Reveal direction="fade" delay={120}>
        <Divider className="my-14" />
      </Reveal>

      <div className="space-y-8 lg:space-y-24">
        {products.map((p, i) => (
          <div
            key={p.title}
            className="lg:sticky"
            style={{ top: `${96 + i * 18}px` }}
          >
            <ProductCard
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              {...p}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
