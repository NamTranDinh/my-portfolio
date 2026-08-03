import { Cloud, Cpu, Layers, Sparkles, type LucideIcon } from 'lucide-react';
import { portfolioData } from '@/src/data/portfolioData';
import { FadeIn } from '../shared/FadeIn';
import { SectionHeading } from '../shared/SectionHeading';
import { Tag } from '../shared/Tag';

const cards: { title: string; icon: LucideIcon; category: string }[] = [
  { title: 'Flutter & State', icon: Layers, category: 'Core Flutter & State Management' },
  { title: 'AI Integration', icon: Sparkles, category: 'AI-Assisted Development' },
  { title: 'Native Hybrid', icon: Cpu, category: 'Native Integration & Platform SDKs' },
  { title: 'Cloud & DevOps', icon: Cloud, category: 'Cloud, Infrastructure & Deployment' },
];

export function CoreSkills() {
  return (
    <section id="skills" className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Core Skills"
          subtitle="Focused on resilient system architecture and smooth user experiences across every platform."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const group = portfolioData.skills.find((g) => g.category === card.category);
            const tags = group?.skills.slice(0, 3) ?? [];
            return (
              <FadeIn key={card.title} delay={i * 0.05}>
                <div className="card-surface flex h-full flex-col gap-4 rounded-2xl p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                    <card.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
