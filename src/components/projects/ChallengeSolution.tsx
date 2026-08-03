import { Building2, CalendarClock, Users } from 'lucide-react';
import type { Project } from '@/src/data/portfolioData';
import { techIcon } from '@/lib/projectMeta';
import { FadeIn } from '../shared/FadeIn';

export function ChallengeSolution({ project }: { project: Project }) {
  const facts = [
    { icon: Building2, label: 'Client', value: project.client ?? project.company },
    { icon: Users, label: 'Team', value: project.teamSize },
    { icon: CalendarClock, label: 'Duration', value: project.time },
  ];

  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.2fr_1fr]">
        <FadeIn className="card-surface rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold text-foreground">The Challenge</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="mt-6 space-y-3">
            {facts.map((f) => (
              <div key={f.label} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3">
                <f.icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{f.label}</span>
                <span className="ml-auto text-sm font-medium text-foreground">{f.value}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="navy-surface rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold">Technical Stack</h2>
          <div className="mt-5 space-y-3">
            {[...project.languages, ...project.technologies].map((tech) => {
              const Icon = techIcon(tech);
              return (
                <div key={tech} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                  <Icon className="h-4 w-4 shrink-0 text-white/80" />
                  <span className="text-sm text-white/90">{tech}</span>
                </div>
              );
            })}
          </div>
          {project.platform.length > 0 && (
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">Platforms</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.platform.map((p) => (
                  <span key={p} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/85 ring-1 ring-white/15">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
