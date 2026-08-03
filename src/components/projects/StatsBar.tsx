import { Briefcase, CalendarDays, Smartphone, Users } from 'lucide-react';
import type { Project } from '@/src/data/portfolioData';
import { FadeIn } from '../shared/FadeIn';
import { StatTile } from '../shared/StatTile';

export function StatsBar({ project }: { project: Project }) {
  return (
    <FadeIn className="px-4 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        <StatTile icon={Briefcase} value={project.role} label="Role" size="sm" />
        <StatTile icon={Users} value={project.teamSize} label="Team" size="sm" />
        <StatTile icon={CalendarDays} value={project.time} label="Duration" size="sm" />
        <StatTile icon={Smartphone} value={project.platform.join(' / ')} label="Platforms" size="sm" />
      </div>
    </FadeIn>
  );
}
