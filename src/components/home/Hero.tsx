import { ArrowUpRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../shared/FadeIn';

const base = import.meta.env.BASE_URL;
const avatarUrl = `${base}images/avatar.jpeg`;
const cvUrl = 'https://docs.google.com/document/d/1DgD3Q7C4jAC1WF4Il195zXL8jNVFMJse2WyTPQqSBhE/edit?tab=t.vspq59j4bol0';

export function Hero() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground ring-1 ring-border">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for new challenges
          </span>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-primary md:text-5xl">
            Building breakthrough mobile experiences with Flutter
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            I&apos;m Nam, a Flutter Developer with 4+ years of experience specializing in Super Apps, Mini Apps,
            and large-scale application architecture.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-muted"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl card-surface">
            <img src={avatarUrl} alt="Tran Dinh Nam" className="h-64 w-full object-cover object-bottom" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
