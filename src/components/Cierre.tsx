import { Section } from './ui/Section';
import { Divider } from './ui/Divider';

export function Cierre() {
  return (
    <Section
      className="bg-violet text-cream"
      containerClassName="text-center max-w-3xl"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-cream/60 mb-6">
        Cierre
      </p>
      <h2 className="font-serif text-cream text-3xl md:text-5xl leading-[1.1]">
        No llegaste hasta acá <span className="italic">por casualidad</span>.
      </h2>

      <div
        aria-hidden="true"
        className="my-12 text-6xl md:text-7xl text-lavender/80"
      >
        ✦
      </div>

      <div className="space-y-5 text-cream/85 text-base md:text-lg">
        <p>Hay algo en vos que ya lo sabe.</p>
        <p>
          Que estás listo para dejar de sobrevivir… y empezar a vivir en
          coherencia con tu esencia.
        </p>
        <p>
          Dios no crea desde la escasez. <br /> Y vos tampoco.
        </p>
        <p>Solo estabas desconectado.</p>
        <p className="font-serif italic text-cream text-xl md:text-2xl pt-4">
          Te veo adentro.
        </p>
      </div>

      <Divider tone="light" className="mt-14" />
    </Section>
  );
}
