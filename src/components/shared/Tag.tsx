import { type HTMLAttributes, type ReactNode } from 'react';

export function Tag({
  children,
  className = '',
  tone = 'light',
  ...rest
}: { children: ReactNode; className?: string; tone?: 'light' | 'dark' } & HTMLAttributes<HTMLSpanElement>) {
  const toneClass =
    tone === 'dark'
      ? 'bg-white/10 text-white ring-1 ring-white/15'
      : 'bg-muted text-muted-foreground ring-1 ring-border';
  return (
    <span
      {...rest}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
}
