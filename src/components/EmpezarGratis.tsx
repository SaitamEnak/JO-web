import type { ComponentType, SVGProps } from 'react';
import { Section } from './ui/Section';
import { Divider } from './ui/Divider';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import {
  InstagramIcon,
  SpotifyIcon,
  TikTokIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from './ui/SocialIcons';
import { links } from '../lib/links';

type Social = {
  name: string;
  description: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const socials: Social[] = [
  {
    name: 'YouTube',
    description:
      'Enseñanza en profundidad, podcast y meditaciones para comprender, integrar y elevar tu nivel de conciencia.',
    href: links.youtube,
    Icon: YouTubeIcon,
  },
  {
    name: 'Instagram',
    description:
      'Contenido diario para recordarte quién sos, sostener tu energía y mantenerte conectado con tu proceso.',
    href: links.instagram,
    Icon: InstagramIcon,
  },
  {
    name: 'TikTok',
    description:
      'Espacio de cercanía, insights y mensajes directos que despiertan y te hacen ver lo que antes no veías.',
    href: links.tiktok,
    Icon: TikTokIcon,
  },
  {
    name: 'Spotify',
    description:
      'Playlist consciente y episodios de podcast para acompañarte, integrar, elevar tu vibración y profundizar en tu proceso.',
    href: links.spotify,
    Icon: SpotifyIcon,
  },
];

export function EmpezarGratis() {
  return (
    <Section id="empezar-gratis" className="bg-cream">
      <div className="text-center max-w-3xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-purple/60 mb-5">
            Por dónde empezar · gratis
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Empezá a conectarte con tu{' '}
            <span className="italic">verdadera esencia</span>.
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-6 text-soft text-sm md:text-base">
            No necesitas tener todo resuelto. Solo empezar a mirar hacia adentro.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <p className="mt-4 text-soft text-sm md:text-base">
            La transformación real empieza cuando dejás de buscar afuera y
            empezás a alinearte con la energía de Dios, la abundancia y tu poder
            creador.
          </p>
        </Reveal>
      </div>

      <Reveal direction="fade" delay={120}>
        <Divider className="my-14" />
      </Reveal>

      <Reveal>
        <p className="text-center text-sm text-purple/70 mb-8 tracking-wide">
          Elegí por dónde empezar:
        </p>
      </Reveal>

      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map((s, i) => (
          <Reveal
            key={s.name}
            as="li"
            direction="up"
            delay={i * 110}
            className="group rounded-2xl border border-purple/15 bg-white p-6 transition-all duration-300 hover:border-purple/40 hover:-translate-y-0.5"
          >
            <a
              href={s.href || '#'}
              target={s.href ? '_blank' : undefined}
              rel={s.href ? 'noreferrer noopener' : undefined}
              className="block cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <s.Icon className="h-5 w-5 text-purple group-hover:text-violet transition-colors" />
                  <span className="font-serif text-violet text-xl">
                    {s.name}
                  </span>
                </div>
                <span className="text-purple/40 group-hover:text-purple transition-colors">
                  ↗
                </span>
              </div>
              <p className="mt-3 text-sm text-soft leading-relaxed">
                {s.description}
              </p>
            </a>
          </Reveal>
        ))}
      </ul>

      <Reveal direction="up" delay={120} className="mt-4">
        <div className="relative overflow-hidden rounded-3xl bg-violet text-cream p-8 md:p-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lavender/20 blur-3xl"
          />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <WhatsAppIcon className="h-7 w-7 text-lavender" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-lavender">
                Comunidad de WhatsApp
              </p>
            </div>
            <h3 className="font-serif text-cream text-3xl md:text-4xl leading-tight">
              Tu Nueva Frecuencia
            </h3>
            <p className="mt-4 text-cream/80 text-sm md:text-base max-w-xl">
              Espacio de acompañamiento cercano, contención y guía para sostener
              tu proceso y encarnar una nueva versión de vos.
            </p>
          </div>
          <div className="relative flex lg:flex-col gap-3 lg:items-end">
            <Button href={links.comunidadWhatsapp} variant="primary">
              Unirme a la comunidad
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
