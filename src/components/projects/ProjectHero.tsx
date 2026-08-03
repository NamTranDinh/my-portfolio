import { ArrowUpRight, Briefcase } from 'lucide-react';
import type { Project } from '@/src/data/portfolioData';
import { projectVisuals } from '@/lib/projectMeta';
import { FadeIn } from '../shared/FadeIn';

export function ProjectHero({ project }: { project: Project }) {
  const visual = projectVisuals[project.id];
  const Icon = visual?.icon;
  const hasLinks = project.links && (project.links.appStore || project.links.googlePlay || project.links.web);

  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <FadeIn>
          <span className="inline-flex items-center rounded-full bg-muted px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground ring-1 ring-border">
            Featured Project
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-primary md:text-4xl">{project.name}</h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {hasLinks ? (
              <>
                {project.links?.appStore && (
                  <a href={project.links.appStore} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                    App Store<ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.links?.googlePlay && (
                  <a href={project.links.googlePlay} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90">
                    Google Play<ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.links?.web && (
                  <a href={project.links.web} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-muted">
                    Visit Website<ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </>
            ) : (
              <span className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground ring-1 ring-border">
                Internal / Enterprise Project
              </span>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="relative">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl card-surface">
            {visual?.image ? (
              <img src={visual.image} alt={project.name} className="h-72 w-full object-cover" />
            ) : (
              <div className="flex h-72 w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                {Icon && <Icon className="h-16 w-16 text-primary/50" strokeWidth={1.3} />}
              </div>
            )}
          </div>
          <div className="absolute -bottom-5 -right-2 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-border md:-right-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">{project.role}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
