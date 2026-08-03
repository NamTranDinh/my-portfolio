import { Github, Globe, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '@/src/data/portfolioData';

export function Footer() {
  const links = [
    { icon: Linkedin, label: 'LinkedIn', href: portfolioData.socials.linkedin },
    { icon: Github, label: 'GitHub', href: portfolioData.socials.github },
    { icon: Mail, label: 'Email', href: `mailto:${portfolioData.email}` },
    { icon: Globe, label: 'Pub.dev', href: portfolioData.socials.pubDev },
  ];

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <Link to="/" className="text-base font-semibold text-primary">
            Nam.dev
          </Link>
          <p className="mt-1 text-xs text-muted-foreground">© 2026 {portfolioData.name}. Built with React &amp; Tailwind.</p>
        </div>
        <div className="flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={l.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition hover:text-primary"
            >
              <l.icon className="h-3.5 w-3.5" />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
