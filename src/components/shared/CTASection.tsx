import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

type CTALink = { label: string; href: string; external?: boolean };

function CTAButton({ link, className }: { link: CTALink; className: string }) {
  const isInternal = link.href.startsWith('/');
  if (isInternal) {
    return (
      <Link to={link.href} className={className}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined} className={className}>
      {link.label}
    </a>
  );
}

export function CTASection({
  title,
  subtitle,
  primary,
  secondary,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  primary: CTALink;
  secondary?: CTALink;
}) {
  return (
    <section className="navy-surface px-4 py-20 md:px-8">
      <FadeIn className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {subtitle && <p className="text-base leading-relaxed text-white/75">{subtitle}</p>}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <CTAButton link={primary} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90" />
          {secondary && (
            <CTAButton link={secondary} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10" />
          )}
        </div>
      </FadeIn>
    </section>
  );
}
