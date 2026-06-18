import { Section } from './ui/Section';
import { Divider } from './ui/Divider';

export function Filosofia() {
  return (
    <Section
      className="bg-grad-blush text-cream"
      containerClassName="text-center max-w-3xl"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-cream/70 mb-6">
        Filosofía
      </p>
      <h2 className="font-serif text-cream text-3xl md:text-5xl leading-[1.1]">
        No estás acá para <span className="italic">"manifestar"</span>…
        <br />
        estás acá para <span className="italic">recordar</span>.
      </h2>

      <Divider tone="light" className="my-10" />

      <div className="space-y-5 text-cream/90 text-base md:text-lg">
        <p>
          No es repetir afirmaciones vacías. <br />
          No es fingir positividad. <br />
          No es controlar la realidad.
        </p>
        <p>
          Es rendirte al orden perfecto de Dios. <br />
          Es soltar el ego. <br />
          Es elevar tu nivel de conciencia.
        </p>
        <p className="text-cream">
          Porque cuando estás en coherencia… te volvés magnético.
        </p>
        <p>
          Y ya no atraés desde la necesidad, <br />
          atraés desde la abundancia que sos.
        </p>
      </div>
    </Section>
  );
}
