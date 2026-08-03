import type { Project } from '@/src/data/portfolioData';
import { projectVisuals } from '@/lib/projectMeta';
import { FadeIn } from '../shared/FadeIn';

export function Gallery({ project }: { project: Project }) {
  const visual = projectVisuals[project.id];
  const Icon = visual?.icon;

  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-xl font-semibold text-foreground">Product Preview</h2>
          <p className="mt-2 text-sm text-muted-foreground">A look at {project.name}&apos;s interface.</p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-6 overflow-hidden rounded-2xl card-surface">
          {visual?.image ? (
            <img src={visual.image} alt={`${project.name} preview`} className="mx-auto max-h-[420px] w-full object-contain bg-muted p-6" />
          ) : (
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              {Icon && <Icon className="h-16 w-16 text-primary/40" strokeWidth={1.3} />}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
