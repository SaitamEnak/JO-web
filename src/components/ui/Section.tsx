import type { ReactNode } from 'react';

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
  return (
    <Tag id={id} className={`w-full px-6 md:px-10 py-20 md:py-28 ${className}`}>
      <div className={`mx-auto max-w-6xl ${containerClassName}`}>{children}</div>
    </Tag>
  );
}
