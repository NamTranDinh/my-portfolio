import { Github, Globe, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '@/src/data/portfolioData';
import { CodeCard, CodeKeyword, CodeString } from '../shared/CodeCard';
import { FadeIn } from '../shared/FadeIn';

const base = import.meta.env.BASE_URL;
const avatarUrl = `${base}images/avatar.jpeg`;

export function ContactSidebar() {
  return (
    <div className="flex flex-col gap-5">
      <FadeIn className="card-surface flex items-center gap-3 rounded-2xl p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
          <Mail className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Direct Email</p>
          <a href={`mailto:${portfolioData.email}`} className="text-sm font-medium text-foreground transition hover:text-primary">
            {portfolioData.email}
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.05} className="card-surface overflow-hidden rounded-2xl">
        <div className="navy-surface h-16" />
        <div className="-mt-8 px-5 pb-5">
          <img src={avatarUrl} alt={portfolioData.name} className="h-16 w-16 rounded-full border-4 border-white object-cover" />
          <h3 className="mt-3 text-base font-semibold text-foreground">{portfolioData.name}</h3>
          <p className="text-sm text-muted-foreground">{portfolioData.title}</p>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {portfolioData.location}
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 gap-3">
        <FadeIn delay={0.1}>
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="card-surface flex flex-col items-center gap-2 rounded-2xl px-4 py-5 text-sm font-medium text-foreground transition hover:-translate-y-0.5"
          >
            <Github className="h-5 w-5 text-primary" />
            GitHub
          </a>
        </FadeIn>
        <FadeIn delay={0.12}>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card-surface flex flex-col items-center gap-2 rounded-2xl px-4 py-5 text-sm font-medium text-foreground transition hover:-translate-y-0.5"
          >
            <Linkedin className="h-5 w-5 text-primary" />
            LinkedIn
          </a>
        </FadeIn>
      </div>

      <FadeIn delay={0.16}>
        <a
          href={portfolioData.socials.pubDev}
          target="_blank"
          rel="noreferrer"
          className="card-surface flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5"
        >
          <Globe className="h-4 w-4 text-primary" />
          Pub.dev
        </a>
      </FadeIn>

      <FadeIn delay={0.2}>
        <CodeCard
          filename="contact_service.dart"
          lines={[
            <span key="1">
              <CodeKeyword>void</CodeKeyword> startCollaboration() {'{'}
            </span>,
            <span key="2" className="pl-4">
              <CodeKeyword>final</CodeKeyword> project = Project(
            </span>,
            <span key="3" className="pl-8">
              partner: <CodeString>&apos;You&apos;</CodeString>,
            </span>,
            <span key="4" className="pl-8">
              developer: <CodeString>&apos;Nam&apos;</CodeString>,
            </span>,
            <span key="5" className="pl-8">
              goal: <CodeString>&apos;Excellence&apos;</CodeString>,
            </span>,
            <span key="6" className="pl-4">);</span>,
            <span key="7" className="pl-4">project.launch();</span>,
            <span key="8">{'}'}</span>,
          ]}
        />
      </FadeIn>
    </div>
  );
}
