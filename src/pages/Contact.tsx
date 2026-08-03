import { SectionHeading } from '../components/shared/SectionHeading';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactSidebar } from '../components/contact/ContactSidebar';

export function Contact() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Available for Hire"
          title={
            <>
              Let&apos;s Build Something <span className="text-accent">Together.</span>
            </>
          }
          subtitle="Whether you're looking to build a high-performance cross-platform application or need architectural guidance on a Flutter project, I'm here to help turn your vision into reality."
          align="left"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-[1.5fr_1fr]">
          <ContactForm />
          <ContactSidebar />
        </div>
      </div>
    </section>
  );
}
