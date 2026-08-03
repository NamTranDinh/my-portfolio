import { portfolioData } from '@/src/data/portfolioData';
import { SectionHeading } from '../components/shared/SectionHeading';
import { FadeIn } from '../components/shared/FadeIn';
import { ProjectCard } from '../components/projects/ProjectCard';

export function Projects() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Work"
          title="All Projects"
          subtitle="Eight products shipped end-to-end across telecom, banking, fintech, and e-commerce — spanning solo builds to 10-developer teams."
          align="left"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
