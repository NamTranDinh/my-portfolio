import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '@/src/data/portfolioData';
import { Tag } from '../shared/Tag';
import { FadeIn } from '../shared/FadeIn';

const buckets: { heading: string; categories: string[] }[] = [
  { heading: 'Flutter & Ecosystem', categories: ['Core Flutter & State Management', 'Mini App & Super App'] },
  { heading: 'Native Knowledge', categories: ['Native Integration & Platform SDKs'] },
  { heading: 'Tools & DevOps', categories: ['Cloud, Infrastructure & Deployment', 'Process & Collaboration', 'AI-Assisted Development'] },
];

export function SkillsSidebar() {
  return (
    <div className="flex flex-col gap-6">
      <FadeIn className="card-surface rounded-2xl p-6">
        <div className="flex items-center gap-2 text-base font-semibold text-foreground">
          <Terminal className="h-4 w-4 text-primary" />
          Core Skills
        </div>

        <div className="mt-5 space-y-5">
          {buckets.map((bucket) => {
            const skills = portfolioData.skills.filter((g) => bucket.categories.includes(g.category)).flatMap((g) => g.skills);
            return (
              <div key={bucket.heading}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{bucket.heading}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {skills.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="navy-surface rounded-2xl p-6">
        <h3 className="text-lg font-semibold">Looking for a Senior Developer?</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/75">
          Let&apos;s discuss how my experience in high-performance mobile architecture can benefit your next project.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:bg-white/90"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </FadeIn>
    </div>
  );
}
