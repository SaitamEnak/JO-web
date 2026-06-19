import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { Logo } from './ui/Logo';
import { links } from '../lib/links';
import heroImg from '../img/johanna-otranto-coach.png';

export function Hero() {
  return (
    <Section className="bg-cream pt-28 md:pt-32">
      <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <Reveal direction="left">
            <Logo
              variant="wordmark"
              className="h-5 md:h-6 w-auto mb-8"
            />
          </Reveal>

          <Reveal direction="up" delay={80}>
            <h1 className="font-serif text-violet text-4xl md:text-6xl leading-[1.05] tracking-tight">
              <span className="italic">Activá</span> tu poder interior
              <br />
              y alineate con la abundancia de Dios.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={220}>
            <p className="mt-8 text-soft text-sm md:text-base max-w-xl">
              No viniste a forzar la vida. Viniste a recordar quién sos y
              empezar a atraer desde tu esencia.
            </p>
          </Reveal>

          <Reveal direction="up" delay={320}>
            <p className="mt-4 text-soft text-sm md:text-base max-w-xl">
              Cuando elevás tu nivel de conciencia, te volvés magnético.
              <br />Y lo que antes perseguías… empieza a llegar.
            </p>
          </Reveal>

          <Reveal direction="up" delay={440}>
            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <Button href={links.salaDespierta} variant="primary" className="w-full md:w-auto">
                Empezar ahora
              </Button>
              <Button href="#empezar-gratis" variant="secondary" className="w-full md:w-auto">
                Quiero saber más
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={180} className="relative">
          <div
            className="rounded-2xl rotate-3 shadow-[0_30px_80px_-30px_rgba(43,31,69,0.45)] p-[8px]"
            style={{ background: 'linear-gradient(180deg, #5E457F 0%, #F39BD8 100%)' }}
          >
            <img
              src={heroImg}
              alt="Johanna Otranto Coach"
              className="w-full object-cover rounded-[14px]"
              style={{ aspectRatio: '4 / 5', display: 'block' }}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
