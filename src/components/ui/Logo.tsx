import Isotipo from '../../img/logos/isotipo.svg?react';
import Wordmark from '../../img/logos/wordmark.svg?react';
import IsologoHorizontal from '../../img/logos/isologo-horizontal.svg?react';
import IsologoVertical from '../../img/logos/isologo-vertical.svg?react';

type Variant = 'isotipo' | 'wordmark' | 'horizontal' | 'vertical';

type Props = {
  variant?: Variant;
  className?: string;
  title?: string;
};

const variants = {
  isotipo: Isotipo,
  wordmark: Wordmark,
  horizontal: IsologoHorizontal,
  vertical: IsologoVertical,
} as const;

export function Logo({
  variant = 'wordmark',
  className = '',
  title = 'Johanna Otranto',
}: Props) {
  const Svg = variants[variant];
  return (
    <Svg
      role="img"
      aria-label={title}
      className={`text-lavender ${className}`}
    />
  );
}
