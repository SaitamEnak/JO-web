import { Logo } from './ui/Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-violet text-cream/70 px-6 md:px-10 py-12">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6">
        <Logo
          variant="vertical"
          className="h-20 w-auto"
        />
        <span className="text-[10px] tracking-[0.3em] uppercase">
          © {year} · Johanna Otranto · Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
}
