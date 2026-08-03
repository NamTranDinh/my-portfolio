import { Sparkles } from 'lucide-react';
import type { Project } from '@/src/data/portfolioData';
import { FadeIn } from '../shared/FadeIn';

export function SolutionHighlights({ project }: { project: Project }) {
  return (
    <section className="px-4 py-4 md:px-8">
      <FadeIn className="mx-auto max-w-6xl card-surface rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-semibold text-foreground">The Solution</h2>

        <ul className="mt-5 space-y-3">
          {project.responsibilities.map((r) => (
            <li key={r} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3 rounded-xl bg-accent/10 p-5 ring-1 ring-accent/20">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-foreground/70">Core Innovation</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">{project.highlight}</p>
          </div>
        </div>

        {project.modules && project.modules.length > 0 && (
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Modules Delivered</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.modules.map((m) => (
                <div key={m} className="rounded-xl bg-muted px-4 py-3 text-sm font-medium text-foreground">
                  {m}
                </div>
              ))}
            </div>
          </div>
        )}
      </FadeIn>
    </section>
  );
}
