import { Section } from './ui/Section';
import { Divider } from './ui/Divider';
import { Reveal } from './ui/Reveal';

export function Cierre() {
  return (
    <Section
      className="bg-violet text-cream"
      containerClassName="text-center max-w-3xl"
    >
      <Reveal>
        <p className="text-xs tracking-[0.3em] uppercase text-cream/60 mb-6">
          Cierre
        </p>
      </Reveal>
      <Reveal direction="scale" delay={140}>
        <h2 className="font-serif text-cream text-3xl md:text-5xl leading-[1.1]">
          No llegaste hasta acá <span className="italic">por casualidad</span>.
        </h2>
      </Reveal>

      <Reveal direction="scale" delay={320}>
        <div
          aria-hidden="true"
          className="my-12 text-6xl md:text-7xl text-lavender/80"
        >
          ✦
        </div>
      </Reveal>

      <div className="space-y-5 text-cream/85 text-sm md:text-base">
        {[
          'Hay algo en vos que ya lo sabe.',
          'Que estás listo para dejar de sobrevivir… y empezar a vivir en coherencia con tu esencia.',
          'Dios no crea desde la escasez.\nY vos tampoco.',
          'Solo estabas desconectado.',
        ].map((line, i) => (
          <Reveal key={i} delay={80 + i * 110}>
            <p>
              {line.split('\n').map((part, j) => (
                <span key={j}>
                  {part}
                  {j < line.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </Reveal>
        ))}
        <Reveal direction="up" delay={680}>
          <p className="font-serif italic text-cream text-xl md:text-2xl pt-4">
            Te veo adentro.
          </p>
        </Reveal>
      </div>

      <Reveal direction="fade" delay={820}>
        <Divider tone="light" className="mt-14" />
      </Reveal>
    </Section>
  );
}
