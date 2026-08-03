import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '@/src/data/portfolioData';
import { SectionHeading } from '../shared/SectionHeading';
import { FadeIn } from '../shared/FadeIn';
import { ProjectCard } from '../projects/ProjectCard';

export function FeaturedProjects() {
  const featured = portfolioData.projects.slice(0, 3);

  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          subtitle="A selection of products shipped end-to-end, from architecture to release."
          align="left"
          action={
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.06}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
