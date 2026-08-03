import { SectionHeading } from '../components/shared/SectionHeading';
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline';
import { SkillsSidebar } from '../components/experience/SkillsSidebar';

export function Experience() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Professional Journey"
          title="Career Experience"
          subtitle="A track record of delivering high-performance cross-platform applications and scalable architecture across enterprise, telecom, and banking teams."
          align="left"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-[1.7fr_1fr]">
          <ExperienceTimeline />
          <SkillsSidebar />
        </div>
      </div>
    </section>
  );
}
