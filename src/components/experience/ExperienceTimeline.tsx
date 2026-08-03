import { CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/src/data/portfolioData';
import { extractTags } from '@/lib/projectMeta';
import { FadeIn } from '../shared/FadeIn';
import { Tag } from '../shared/Tag';

const TAG_VOCAB = ['Flutter', 'Dart', 'Firebase', 'Architecture', 'Agile', 'SDK', 'CI/CD', 'Docker', 'Jenkins', 'Crashlytics', 'DevTools', 'Provider', 'Bloc'];

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-[7px] top-2 w-px bg-border" />
      <div className="space-y-8">
        {portfolioData.experience.map((item, index) => {
          const current = index === 0;
          const work = portfolioData.workHistory.find((w) => w.id === `work-${item.id.replace('exp-', '')}`);
          const tags = extractTags([...item.responsibilities, ...item.achievements], TAG_VOCAB, 4);

          return (
            <FadeIn key={item.id} delay={index * 0.06} className="relative pl-9">
              <span
                className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 ${
                  current ? 'border-primary bg-primary' : 'border-border bg-background'
                }`}
              />
              <div className="card-surface rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{item.period}</span>
                </div>

                {work && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{work.summary}</p>}

                <ul className="mt-4 space-y-2">
                  {[...item.responsibilities, ...item.achievements].map((line) => (
                    <li key={line} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {line}
                    </li>
                  ))}
                </ul>

                {tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <Tag key={t}>{t.toUpperCase()}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
