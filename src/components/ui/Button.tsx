import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
};

const styles: Record<Variant, string> = {
  primary:
    'bg-lavender text-violet border border-lavender hover:bg-violet hover:text-cream hover:border-violet shadow-[0_10px_30px_-12px_rgba(169,132,255,0.7)]',
  secondary:
    'bg-transparent text-violet border border-violet hover:bg-violet hover:text-cream',
  ghost:
    'bg-transparent text-violet border border-violet/30 hover:border-violet hover:bg-violet/5',
  light:
    'bg-lavender text-violet border border-lavender hover:bg-cream hover:border-cream',
};

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}: Props) {
  const base =
    'inline-flex items-center justify-center px-7 py-3.5 text-xs md:text-sm font-medium tracking-[0.18em] uppercase rounded-full transition-all duration-300 ease-out cursor-pointer';

  if (!href) {
    return (
      <button
        type="button"
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
