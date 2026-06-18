import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export function QuienSoy() {
  return (
    <Section id="quien-soy" className="bg-cream">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="order-2 md:order-1">
          <ImagePlaceholder
            label="Foto · Johanna retrato"
            gradient="gold"
            ratio="4 / 5"
            className="shadow-[0_30px_80px_-30px_rgba(43,31,69,0.4)]"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-xs tracking-[0.3em] uppercase text-purple/60 mb-5">
            ¿Quién soy?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Soy <span className="italic">Johanna Otranto</span>.
          </h2>

          <div className="mt-8 space-y-5 text-soft text-base md:text-lg max-w-prose">
            <p>
              Coach Ontológica Profesional, mentora, speaker… y algunos títulos
              más que el personaje se pone en esta experiencia humana.
            </p>
            <p>
              Pero más allá de eso, soy un alma en expansión, profundamente
              conectada con Dios y comprometida con el despertar de la
              conciencia.
            </p>
            <p>
              Mi propósito es recordarte quién sos de verdad: un ser infinito,
              creador, conectado con una fuente inagotable de abundancia, amor
              y poder.
            </p>
            <p>
              Acompaño procesos de transformación profunda integrando coaching
              ontológico, metafísica, leyes universales, espiritualidad,
              mindfulness y conciencia.
            </p>
            <p>
              No para que “te conviertas en alguien”… sino para que dejes de
              resistirte a lo que ya sos.
            </p>
            <p className="text-violet font-serif italic">
              Porque cuando te alineás con tu esencia, tu energía cambia… y tu
              realidad también.
            </p>
          </div>

          <div className="mt-10">
            <Button variant="ghost">Conocéme más</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
