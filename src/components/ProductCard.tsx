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
  imageLabel?: string;
  imageSrc?: string;
};

const tierStyles: Record<Tier, string> = {
  entry: 'bg-cream text-violet border-purple/15',
  level1: 'bg-cream text-violet border-purple/15',
  level2: 'bg-cream text-violet border-purple/15',
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

const tierImage: Record<Tier, string> = {
  entry: 'bg-grad-blush',
  level1: 'bg-grad-gold',
  level2: 'bg-grad-mint',
  vip: 'bg-[radial-gradient(circle_at_30%_20%,#A984FF_0%,#3E2A54_55%,#2B1F45_100%)]',
};

export const ProductCard = forwardRef<HTMLElement, Props>(function ProductCard(
  {
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
    imageLabel = 'Imagen',
    imageSrc,
  },
  ref,
) {
  return (
    <article
      ref={ref}
      className={`relative grid overflow-hidden rounded-3xl border shadow-[0_30px_80px_-40px_rgba(43,31,69,0.45)] lg:grid-cols-[5fr_7fr] ${tierStyles[tier]}`}
    >
      <div
        className={`relative min-h-[260px] lg:min-h-[460px] ${tierImage[tier]}`}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageLabel}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 mix-blend-soft-light"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 60%)',
              }}
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end p-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/70">
                {imageLabel}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="relative flex flex-col gap-8 p-8 md:p-10 lg:p-12">
        {badge && (
          <span className="absolute right-8 top-8 rounded-full bg-lavender text-violet text-[10px] tracking-[0.25em] uppercase px-3 py-1 font-medium">
            {badge}
          </span>
        )}

        <div>
          <p
            className={`text-[10px] tracking-[0.3em] uppercase ${tierEyebrow[tier]} mb-4`}
          >
            {eyebrow}
          </p>

          <h3
            className={`font-serif text-2xl md:text-3xl lg:text-4xl leading-tight ${tierTitle[tier]}`}
          >
            {title}
          </h3>
          {subtitle && (
            <p
              className={`mt-2 font-serif italic text-lg ${tierTitle[tier]}/80`}
            >
              {subtitle}
            </p>
          )}

          {intro && (
            <div
              className={`mt-5 text-sm md:text-base leading-relaxed ${tierBody[tier]}`}
            >
              {intro}
            </div>
          )}

          <ul className={`mt-6 space-y-2.5 text-sm ${tierBody[tier]}`}>
            {features.map((f) => (
              <li key={f} className="flex gap-3">
                <span className="text-lavender">✦</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <div className="space-y-1">
            {prices.map((p, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span
                  className={
                    p.strike
                      ? `${tierBody[tier]} line-through opacity-60 text-base`
                      : `${tierTitle[tier]} font-serif text-2xl`
                  }
                >
                  {p.amount}
                </span>
                {p.note && (
                  <span
                    className={`text-xs uppercase tracking-widest ${tierBody[tier]}`}
                  >
                    {p.note}
                  </span>
                )}
              </div>
            ))}
          </div>

          {footnote && (
            <p className={`mt-4 text-xs ${tierBody[tier]} opacity-80`}>
              {footnote}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {ctas.map((c) => (
              <Button
                key={c.label}
                href={c.href}
                variant={c.variant ?? 'primary'}
              >
                {c.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
});
