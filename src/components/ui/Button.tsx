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
    'bg-violet text-cream hover:bg-purple-dark border border-violet',
  secondary:
    'bg-transparent text-violet border border-violet hover:bg-violet hover:text-cream',
  ghost:
    'bg-transparent text-violet border border-violet/30 hover:border-violet hover:bg-violet/5',
  light:
    'bg-cream text-violet border border-cream hover:bg-cream-dark',
};

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}: Props) {
  const disabled = !href;
  const base =
    'inline-flex items-center justify-center px-7 py-3.5 text-xs md:text-sm font-medium tracking-[0.18em] uppercase rounded-full transition-all duration-300 ease-out';

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${base} ${styles[variant]} cursor-not-allowed opacity-50 ${className}`}
      >
        {children}
      </span>
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
