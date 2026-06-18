export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-violet text-cream/70 px-6 md:px-10 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-[0.2em] uppercase">
        <span>Johanna Otranto</span>
        <span aria-hidden="true" className="text-lavender">
          ✦
        </span>
        <span>© {year} · Todos los derechos reservados</span>
      </div>
    </footer>
  );
}
