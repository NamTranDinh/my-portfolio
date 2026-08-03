import { Navigate, useParams } from 'react-router-dom';
import { portfolioData } from '@/src/data/portfolioData';
import { ProjectHero } from '../components/projects/ProjectHero';
import { StatsBar } from '../components/projects/StatsBar';
import { ChallengeSolution } from '../components/projects/ChallengeSolution';
import { SolutionHighlights } from '../components/projects/SolutionHighlights';
import { Gallery } from '../components/projects/Gallery';
import { CTASection } from '../components/shared/CTASection';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <>
      <ProjectHero project={project} />
      <StatsBar project={project} />
      <ChallengeSolution project={project} />
      <SolutionHighlights project={project} />
      <Gallery project={project} />
      <CTASection
        title="Looking for a Cross-Platform Expert?"
        subtitle="I specialize in building scalable, enterprise-grade mobile ecosystems. Let's discuss how we can bring your next vision to life."
        primary={{ label: 'Schedule a Strategy Call', href: `mailto:${portfolioData.email}` }}
        secondary={{ label: 'View More Projects', href: '/projects' }}
      />
    </>
  );
}
