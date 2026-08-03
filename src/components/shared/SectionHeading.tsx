import { type ReactNode } from 'react';
import { FadeIn } from './FadeIn';

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  action,
}: {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  action?: ReactNode;
}) {
  return (
    <FadeIn
      className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${action ? 'md:flex-row md:items-end md:justify-between md:text-left' : ''}`}
    >
      <div className={action ? 'max-w-2xl' : align === 'center' ? 'max-w-2xl' : 'max-w-2xl'}>
        {label && (
          <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground ring-1 ring-border">
            {label}
          </span>
        )}
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </FadeIn>
  );
}
