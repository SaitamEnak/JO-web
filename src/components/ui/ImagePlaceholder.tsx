type Props = {
  label?: string;
  gradient?: 'blush' | 'gold' | 'mint';
  ratio?: string;
  className?: string;
};

const gradients = {
  blush: 'bg-grad-blush',
  gold: 'bg-grad-gold',
  mint: 'bg-grad-mint',
};

export function ImagePlaceholder({
  label = 'FOTO',
  gradient = 'blush',
  ratio = '3 / 4',
  className = '',
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] ${gradients[gradient]} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-end p-6">
        <span className="text-[10px] tracking-[0.3em] uppercase text-cream/70">
          {label}
        </span>
      </div>
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 60%)',
        }}
      />
    </div>
  );
}
