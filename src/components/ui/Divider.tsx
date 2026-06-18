type Props = {
  className?: string;
  tone?: 'dark' | 'light';
};

export function Divider({ className = '', tone = 'dark' }: Props) {
  const color = tone === 'dark' ? 'text-purple/40' : 'text-cream/60';
  return (
    <div
      className={`flex items-center justify-center gap-4 ${color} ${className}`}
      aria-hidden="true"
    >
      <span className="block h-px w-12 bg-current opacity-40" />
      <span className="text-lg leading-none">✦</span>
      <span className="block h-px w-12 bg-current opacity-40" />
    </div>
  );
}
