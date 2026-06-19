import { forwardRef, type ReactNode } from 'react';
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
  thumbnailSrc?: string;
};

const tierStyles: Record<Tier, string> = {
  entry: 'bg-white text-violet border-purple/10',
  level1: 'bg-white text-violet border-purple/10',
  level2: 'bg-white text-violet border-purple/10',
  vip: 'bg-violet text-cream border-violet',
};

const tierEyebrow: Record<Tier, string> = {
  entry: 'text-purple/70',
  level1: 'text-purple/70',
  level2: 'text-purple/60',
  vip: 'text-lavender',
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

const tierThumb: Record<Tier, string> = {
  entry: 'bg-grad-blush',
  level1: 'bg-grad-gold',
  level2: 'bg-grad-mint',
  vip: 'bg-[radial-gradient(circle_at_30%_20%,#A984FF_0%,#3E2A54_55%,#2B1F45_100%)]',
};

export const ProductCard = forwardRef<HTMLElement, Props>(function ProductCard(
  { tier, eyebrow, title, subtitle, intro, features, prices, ctas, footnote, badge, thumbnailSrc },
  ref,
) {
  return (
    <article
      ref={ref}
      className={`relative overflow-hidden rounded-3xl border shadow-[0_20px_60px_-30px_rgba(43,31,69,0.35)] ${tierStyles[tier]}`}
    >
      {badge && (
        <span className="absolute right-8 top-8 rounded-full bg-lavender text-violet text-[10px] tracking-[0.25em] uppercase px-3 py-1 font-medium z-10">
          {badge}
        </span>
      )}

      <div className="grid md:grid-cols-2 divide-y divide-x-0 md:divide-x md:divide-y-0 divide-purple/10">
        {/* Left — thumbnail + title */}
        <div className="p-8 md:p-10 flex flex-col">
          <div
            className={`relative w-full rounded-xl overflow-hidden mb-6 ${tierThumb[tier]}`}
            style={{ aspectRatio: '16 / 9' }}
          >
            {thumbnailSrc ? (
              <img src={thumbnailSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-end p-3">
                <span className="text-[9px] tracking-[0.25em] uppercase text-cream/50">thumbnail</span>
              </div>
            )}
          </div>

          <div className="mt-auto">
            <p className={`text-[10px] tracking-[0.3em] uppercase ${tierEyebrow[tier]} mb-3`}>
              {eyebrow}
            </p>
            <h3 className={`font-serif text-2xl md:text-3xl leading-tight ${tierTitle[tier]}`}>
              {title}
            </h3>
            {subtitle && (
              <p className={`mt-1.5 font-serif italic text-base ${tierTitle[tier]}/70`}>
                {subtitle}
              </p>
            )}
            {intro && (
              <div className={`mt-4 text-sm leading-relaxed ${tierBody[tier]}`}>
                {intro}
              </div>
            )}
          </div>
        </div>

        {/* Right — features + price + CTA */}
        <div className="p-8 md:p-10 flex flex-col justify-end gap-6">
          <ul className={`space-y-2.5 text-sm ${tierBody[tier]}`}>
            {features.map((f) => (
              <li key={f} className="flex gap-3">
                <span className="text-lavender shrink-0">✦</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-1">
            {prices.map((p, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className={
                    p.strike
                      ? `${tierBody[tier]} line-through opacity-60 text-sm`
                      : `${tierTitle[tier]} font-serif text-xl`
                  }
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
            <p className={`text-xs ${tierBody[tier]} opacity-80`}>{footnote}</p>
          )}

          <div className="flex flex-col md:flex-row gap-3">
            {ctas.map((c) => (
              <Button key={c.label} href={c.href} variant={c.variant ?? 'primary'} className="w-full md:w-auto">
                {c.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
});
