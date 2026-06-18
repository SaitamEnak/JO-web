import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ImagePlaceholder } from './ui/ImagePlaceholder';
import { links } from '../lib/links';

export function Hero() {
  return (
    <Section className="bg-cream pt-28 md:pt-32">
      <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <p className="font-hand text-purple/70 text-xl md:text-2xl mb-6">
            Johanna Otranto
          </p>
          <h1 className="font-serif text-violet text-4xl md:text-6xl leading-[1.05] tracking-tight">
            <span className="italic">Activá</span> tu poder interior
            <br />
            y alineate con la abundancia de Dios.
          </h1>
          <p className="mt-8 text-soft text-base md:text-lg max-w-xl">
            No viniste a forzar la vida. Viniste a recordar quién sos y empezar
            a atraer desde tu esencia.
          </p>
          <p className="mt-4 text-soft text-base md:text-lg max-w-xl">
            Cuando elevás tu nivel de conciencia, te volvés magnético.
            <br />Y lo que antes perseguías… empieza a llegar.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={links.salaDespierta} variant="primary">
              Empezar ahora
            </Button>
            <Button href="#empezar-gratis" variant="secondary">
              Quiero saber más
            </Button>
          </div>
        </div>

        <div className="relative">
          <ImagePlaceholder
            label="Foto · Johanna"
            gradient="blush"
            ratio="4 / 5"
            className="shadow-[0_30px_80px_-30px_rgba(43,31,69,0.45)]"
          />
        </div>
      </div>
    </Section>
  );
}
