import { Section } from './ui/Section';
import { Divider } from './ui/Divider';
import { links } from '../lib/links';

type Channel = {
  name: string;
  description: string;
  href: string;
};

const channels: Channel[] = [
  {
    name: 'YouTube',
    description:
      'Enseñanza en profundidad, podcast y meditaciones para comprender, integrar y elevar tu nivel de conciencia.',
    href: links.youtube,
  },
  {
    name: 'Instagram',
    description:
      'Contenido diario para recordarte quién sos, sostener tu energía y mantenerte conectado con tu proceso.',
    href: links.instagram,
  },
  {
    name: 'TikTok',
    description:
      'Espacio de cercanía, insights y mensajes directos que despiertan y te hacen ver lo que antes no veías.',
    href: links.tiktok,
  },
  {
    name: 'Spotify',
    description:
      'Playlist consciente y episodios de podcast para acompañarte, integrar, elevar tu vibración y profundizar en tu proceso.',
    href: links.spotify,
  },
  {
    name: 'Tu Nueva Frecuencia',
    description:
      'Comunidad de WhatsApp · Espacio de acompañamiento cercano, contención y guía para sostener tu proceso y encarnar una nueva versión de vos.',
    href: links.comunidadWhatsapp,
  },
];

export function EmpezarGratis() {
  return (
    <Section id="empezar-gratis" className="bg-cream-dark">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-purple/60 mb-5">
          Por dónde empezar · gratis
        </p>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight">
          Empezá a conectarte con tu{' '}
          <span className="italic">verdadera esencia</span>.
        </h2>
        <p className="mt-6 text-soft text-base md:text-lg">
          No necesitas tener todo resuelto. Solo empezar a mirar hacia adentro.
        </p>
        <p className="mt-4 text-soft text-base md:text-lg">
          La transformación real empieza cuando dejás de buscar afuera y
          empezás a alinearte con la energía de Dios, la abundancia y tu poder
          creador.
        </p>
      </div>

      <Divider className="my-14" />

      <p className="text-center text-sm text-purple/70 mb-8 tracking-wide">
        Elegí por dónde empezar:
      </p>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {channels.map((c) => (
          <li
            key={c.name}
            className="group rounded-2xl border border-purple/15 bg-cream p-6 transition-all duration-300 hover:border-purple/40 hover:-translate-y-0.5"
          >
            <a
              href={c.href || undefined}
              target={c.href ? '_blank' : undefined}
              rel={c.href ? 'noreferrer noopener' : undefined}
              aria-disabled={!c.href}
              className={`block ${!c.href ? 'cursor-not-allowed' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-violet text-xl">
                  {c.name}
                </span>
                <span className="text-purple/40 group-hover:text-purple transition-colors">
                  ↗
                </span>
              </div>
              <p className="mt-3 text-sm text-soft leading-relaxed">
                {c.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
