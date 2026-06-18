import type { ReactNode } from 'react';
import { useReveal } from '../../lib/useReveal';

type Direction = 'up' | 'left' | 'right' | 'scale' | 'fade';

type Props = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: 'div' | 'span' | 'li' | 'article' | 'section' | 'header' | 'p' | 'h2';
};

const directionClass: Record<Direction, string> = {
  up: 'reveal reveal-up',
  left: 'reveal reveal-left',
  right: 'reveal reveal-right',
  scale: 'reveal reveal-scale',
  fade: 'reveal reveal-fade',
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}: Props) {
  const ref = useReveal<HTMLElement>();
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref as unknown as React.Ref<never>}
      className={`${directionClass[direction]} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
