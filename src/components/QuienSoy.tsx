import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import johannaImg from '../img/johanna-otranto.jpg';

export function QuienSoy() {
  return (
    <Section id="quien-soy" className="bg-cream">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Reveal direction="left" className="order-2 md:order-1">
          <img
            src={johannaImg}
            alt="Johanna Otranto"
            className="w-full object-cover rounded-2xl -rotate-3 shadow-[0_30px_80px_-30px_rgba(43,31,69,0.4)]"
            style={{ aspectRatio: '4 / 5' }}
          />
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal direction="right">
            <p className="text-xs tracking-[0.3em] uppercase text-purple/60 mb-5">
              ¿Quién soy?
            </p>
          </Reveal>
          <Reveal direction="right" delay={80}>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Soy <span className="italic">Johanna Otranto</span>.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-soft text-sm md:text-base max-w-prose">
            {[
              'Coach Ontológica Profesional, mentora, speaker… y algunos títulos más que el personaje se pone en esta experiencia humana.',
              'Pero más allá de eso, soy un alma en expansión, profundamente conectada con Dios y comprometida con el despertar de la conciencia.',
              'Mi propósito es recordarte quién sos de verdad: un ser infinito, creador, conectado con una fuente inagotable de abundancia, amor y poder.',
              'Acompaño procesos de transformación profunda integrando coaching ontológico, metafísica, leyes universales, espiritualidad, mindfulness y conciencia.',
              'No para que “te conviertas en alguien”… sino para que dejes de resistirte a lo que ya sos.',
            ].map((p, i) => (
              <Reveal key={i} direction="up" delay={180 + i * 90}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal direction="up" delay={680}>
              <p className="text-violet font-serif italic">
                Porque cuando te alineás con tu esencia, tu energía cambia… y
                tu realidad también.
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </Section>
  );
}
