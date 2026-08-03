import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/src/data/portfolioData';
import { projectCategoryTag, projectVisuals } from '@/lib/projectMeta';
import { Tag } from '../shared/Tag';

export function ProjectCard({ project }: { project: Project }) {
  const visual = projectVisuals[project.id];
  const Icon = visual?.icon;
  const tags = project.technologies.slice(0, 3);

  return (
    <Link
      to={`/projects/${project.id}`}
      className="card-surface group flex flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-muted">
        {visual?.image ? (
          <img src={visual.image} alt={project.name} className="h-full w-full object-cover" />
        ) : (
          Icon && <Icon className="h-12 w-12 text-primary/40" strokeWidth={1.4} />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary-foreground">
          {projectCategoryTag[project.id]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium text-primary">
          Case Study
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
