import { CheckCircle2, TrendingUp } from 'lucide-react';
import { portfolioData } from '@/src/data/portfolioData';
import { FadeIn } from '../shared/FadeIn';
import { SectionHeading } from '../shared/SectionHeading';
import { StatTile } from '../shared/StatTile';

export function CareerJourney() {
  return (
    <section className="bg-muted/40 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.6fr]">
          <FadeIn className="flex flex-col gap-6">
            <SectionHeading align="left" label="Journey" title="Career Journey" />
            <StatTile icon={TrendingUp} value={`${portfolioData.yearsOfExperience}+ Years`} label="Experience specializing in mobile development" />
          </FadeIn>

          <div className="relative">
            <div className="absolute bottom-0 left-[3px] top-1 w-px bg-border" />
            <div className="space-y-10">
              {portfolioData.experience.map((item, index) => {
                const current = index === 0;
                const work = portfolioData.workHistory.find((w) => w.id === `work-${item.id.replace('exp-', '')}`);
                const bullets = [...item.responsibilities.slice(0, 1), ...item.achievements].slice(0, 3);

                return (
                  <FadeIn key={item.id} delay={index * 0.06} className="relative pl-8">
                    <span
                      className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
                        current ? 'border-primary bg-primary' : 'border-border bg-background'
                      }`}
                    />
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{item.period}</p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {item.role} <span className="text-muted-foreground">@ {item.company}</span>
                    </h3>
                    {work && <p className="mt-1 text-sm italic text-muted-foreground">{work.summary}</p>}
                    <ul className="mt-3 space-y-2">
                      {bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
