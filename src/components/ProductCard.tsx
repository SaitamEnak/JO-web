import type { ReactNode } from 'react';
import { Button } from './ui/Button';

export type Tier = 'entry' | 'level1' | 'level2' | 'vip';

export type PriceLine = {
  amount: string;
  note?: string;
  strike?: boolean;
};

export type CTA = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
};

type Props = {
  tier: Tier;
  eyebrow: string;
  title: string;
  subtitle?: string;
  intro?: ReactNode;
  features: string[];
  prices: PriceLine[];
  ctas: CTA[];
  footnote?: string;
  badge?: string;
};

const tierStyles: Record<Tier, string> = {
  entry: 'bg-cream-dark text-violet border-purple/15',
  level1: 'bg-cream text-violet border-purple/20',
  level2: 'bg-cream text-violet border-purple/15 opacity-90',
  vip: 'bg-violet text-cream border-violet',
};

const tierEyebrow: Record<Tier, string> = {
  entry: 'text-purple/70',
  level1: 'text-purple/70',
  level2: 'text-purple/60',
  vip: 'text-cream/70',
};

const tierBody: Record<Tier, string> = {
  entry: 'text-soft',
  level1: 'text-soft',
  level2: 'text-soft',
  vip: 'text-cream/85',
};

const tierTitle: Record<Tier, string> = {
  entry: 'text-violet',
  level1: 'text-violet',
  level2: 'text-violet',
  vip: 'text-cream',
};

export function ProductCard({
  tier,
  eyebrow,
  title,
  subtitle,
  intro,
  features,
  prices,
  ctas,
  footnote,
  badge,
}: Props) {
  return (
    <article
      className={`relative flex flex-col rounded-3xl border p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 ${tierStyles[tier]}`}
    >
      {badge && (
        <span className="absolute -top-3 left-8 rounded-full bg-lavender text-violet text-[10px] tracking-[0.25em] uppercase px-3 py-1 font-medium">
          {badge}
        </span>
      )}

      <p
        className={`text-[10px] tracking-[0.3em] uppercase ${tierEyebrow[tier]} mb-4`}
      >
        {eyebrow}
      </p>

      <h3 className={`font-serif text-2xl md:text-3xl leading-tight ${tierTitle[tier]}`}>
        {title}
      </h3>
      {subtitle && (
        <p className={`mt-2 font-serif italic text-lg ${tierTitle[tier]}/80`}>
          {subtitle}
        </p>
      )}

      {intro && (
        <div className={`mt-5 text-sm md:text-base leading-relaxed ${tierBody[tier]}`}>
          {intro}
        </div>
      )}

      <ul className={`mt-6 space-y-2.5 text-sm ${tierBody[tier]}`}>
        {features.map((f) => (
          <li key={f} className="flex gap-3">
            <span className={tier === 'vip' ? 'text-lavender' : 'text-purple'}>
              ✦
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 space-y-1">
        {prices.map((p, i) => (
          <div key={i} className="flex items-baseline gap-3">
            <span
              className={`${
                p.strike
                  ? `${tierBody[tier]} line-through opacity-60 text-base`
                  : `${tierTitle[tier]} font-serif text-2xl`
              }`}
            >
              {p.amount}
            </span>
            {p.note && (
              <span className={`text-xs uppercase tracking-widest ${tierBody[tier]}`}>
                {p.note}
              </span>
            )}
          </div>
        ))}
      </div>

      {footnote && (
        <p className={`mt-4 text-xs ${tierBody[tier]} opacity-80`}>{footnote}</p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {ctas.map((c) => (
          <Button
            key={c.label}
            href={c.href}
            variant={c.variant ?? (tier === 'vip' ? 'light' : 'primary')}
          >
            {c.label}
          </Button>
        ))}
      </div>
    </article>
  );
}
