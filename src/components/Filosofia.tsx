import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Logo } from './ui/Logo';

export function Filosofia() {
  return (
    <Section className="bg-cream overflow-hidden" containerClassName="flex justify-center">
      <div className="relative flex justify-center w-full max-w-2xl">
        {/* decorative circle behind the card */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{ background: 'linear-gradient(180deg, #5E457F 0%, #F39BD8 100%)' }}
        />

      <Reveal direction="scale" className="w-full">
        {/* gradient border wrapper */}
        <div
          className="rounded-3xl rotate-[-1deg] p-px shadow-[0_40px_100px_-20px_rgba(43,31,69,0.35)]"
          style={{ background: 'linear-gradient(135deg, #A984FF 0%, #F39BD8 100%)' }}
        >
        <div className="relative bg-[#FAF6F4] rounded-3xl px-10 py-12 md:px-16 md:py-16">

          {/* Letterhead */}
          <div className="flex items-center justify-between mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-purple/50">
              Filosofía
            </p>
            <Logo variant="isotipo" className="h-8 w-auto text-lavender" />
          </div>

          {/* Salutation */}
          <p className="font-[Mynerve] text-purple/60 text-base mb-6">
            Para vos, que llegaste hasta acá…
          </p>

          {/* Title */}
          <h2 className="font-serif text-violet text-2xl md:text-4xl leading-snug mb-8">
            No estás acá para <span className="italic">"manifestar"</span>…
            <br />estás acá para <span className="italic">recordar</span>.
          </h2>

          <hr className="border-purple/10 mb-8" />

          {/* Body */}
          <div className="space-y-5 text-soft text-sm md:text-base leading-relaxed">
            <p>
              No es repetir afirmaciones vacías.<br />
              No es fingir positividad.<br />
              No es controlar la realidad.
            </p>
            <p>
              Es rendirte al orden perfecto de Dios.<br />
              Es soltar el ego.<br />
              Es elevar tu nivel de conciencia.
            </p>
            <p className="text-violet font-medium">
              Porque cuando estás en coherencia… te volvés magnético.
            </p>
            <p>
              Y ya no atraés desde la necesidad,<br />
              atraés desde la abundancia que sos.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10 flex flex-col items-start gap-1">
            <p className="text-soft/60 text-xs tracking-widest uppercase">Con amor,</p>
            <p className="font-[Mynerve] text-violet text-3xl mt-1">Johanna</p>
          </div>

          {/* Decorative corner dot */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-lavender/20 blur-xl pointer-events-none"
          />
        </div>
        </div>
      </Reveal>
      </div>
    </Section>
  );
}
