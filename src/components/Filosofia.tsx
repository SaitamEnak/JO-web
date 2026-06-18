import { Section } from './ui/Section';
import { Divider } from './ui/Divider';
import { Reveal } from './ui/Reveal';

export function Filosofia() {
  return (
    <Section
      className="bg-grad-blush text-cream"
      containerClassName="text-center max-w-3xl"
    >
      <Reveal>
        <p className="text-xs tracking-[0.3em] uppercase text-cream/70 mb-6">
          Filosofía
        </p>
      </Reveal>
      <Reveal direction="scale" delay={120}>
        <h2 className="font-serif text-cream text-3xl md:text-5xl leading-[1.1]">
          No estás acá para <span className="italic">"manifestar"</span>…
          <br />
          estás acá para <span className="italic">recordar</span>.
        </h2>
      </Reveal>

      <Reveal direction="fade" delay={300}>
        <Divider tone="light" className="my-10" />
      </Reveal>

      <div className="space-y-5 text-cream/90 text-sm md:text-base">
        <Reveal delay={80}>
          <p>
            No es repetir afirmaciones vacías. <br />
            No es fingir positividad. <br />
            No es controlar la realidad.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p>
            Es rendirte al orden perfecto de Dios. <br />
            Es soltar el ego. <br />
            Es elevar tu nivel de conciencia.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <p className="text-cream">
            Porque cuando estás en coherencia… te volvés magnético.
          </p>
        </Reveal>
        <Reveal delay={440}>
          <p>
            Y ya no atraés desde la necesidad, <br />
            atraés desde la abundancia que sos.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
