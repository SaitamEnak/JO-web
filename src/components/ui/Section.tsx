import type { ReactNode } from 'react';
import { useReveal } from '../../lib/useReveal';

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: 'section' | 'header' | 'footer';
};

export function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  as: Tag = 'section',
}: Props) {
  const ref = useReveal<HTMLElement>();

  return (
    <Tag
      id={id}
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal w-full px-6 md:px-10 py-20 md:py-28 ${className}`}
    >
      <div className={`mx-auto max-w-6xl ${containerClassName}`}>{children}</div>
    </Tag>
  );
}
