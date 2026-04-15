import { portfolioData } from '@/src/data/portfolioData';
import type { Project } from '@/src/data/portfolioData';
import {
  Apple, ArrowUpRight, Award, Briefcase, CalendarDays, Code2, CreditCard, Download,
  Github, Globe, GraduationCap, Linkedin, type LucideIcon, Mail, MapPin, Menu,
  Phone, Search, Shield, Smartphone, Sparkles, Users, Wifi, X, Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { type HTMLAttributes, type ReactNode, useEffect, useState } from 'react';

/* ── Animation ── */
function FadeIn({ children, className = '', delay = 0, ...rest }: { children: ReactNode; className?: string; delay?: number } & HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }} className={className} {...rest}>
      {children}
    </motion.div>
  );
}

/* ── Config ── */
const base = import.meta.env.BASE_URL;
const img = (path: string) => `${base}${path.replace(/^\//, '')}`;
const mapsUrl = 'https://maps.app.goo.gl/yoKBspd2fi23c9A26';
const cvUrl = 'https://docs.google.com/document/d/1DgD3Q7C4jAC1WF4Il195zXL8jNVFMJse2WyTPQqSBhE/edit?tab=t.vspq59j4bol0';
const aptechLogoUrl = img('/images/companies/aptech.png');

const projectVisuals: Record<string, { bg: string; bgLight: string; icon: LucideIcon; logo?: string }> = {
  unitel: { bg: '#e8581c', bgLight: '#f4762e', icon: Wifi, logo: img('/images/projects/unitel.png') },
  vsale: { bg: '#d42020', bgLight: '#ef3434', icon: Smartphone, logo: img('/images/projects/vsale.png') },
  phoenix: { bg: '#c67a1a', bgLight: '#e8952e', icon: CreditCard },
  'hapa-kristin': { bg: '#eb6088', bgLight: '#f48aaa', icon: Search, logo: img('/images/projects/hapa-kristin.png') },
  'smart-info': { bg: '#1456a0', bgLight: '#2572cc', icon: Shield, logo: img('/images/projects/mbbank.png') },
  mymb: { bg: '#1456a0', bgLight: '#2572cc', icon: Zap, logo: img('/images/projects/mbbank.png') },
  vcm360: { bg: '#e83848', bgLight: '#f05868', icon: Users, logo: img('/images/projects/vcm360.png') },
  hellojob: { bg: '#2ca8d8', bgLight: '#4ec0e8', icon: Briefcase, logo: img('/images/projects/hellojob.png') },
};

const companyInfo: Record<string, { logo: string; url: string }> = {
  BES: { logo: img('/images/companies/bes.png'), url: 'https://besgroup.vn/' },
  'CMC Global': { logo: img('/images/companies/cmc-global.svg'), url: 'https://cmcglobal.com.vn/' },
  'AHT Tech': { logo: img('/images/companies/aht-tech.svg'), url: 'https://www.arrowhitech.com/' },
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Selected Works', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

/* ── Shared ── */
function Tag({ children, ...rest }: { children: ReactNode } & HTMLAttributes<HTMLSpanElement>) {
  return <span {...rest} className="rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 text-xs text-[#c7d1de]">{children}</span>;
}

function GradientDivider() {
  return <div className="mx-auto h-px max-w-6xl gh-gradient-line opacity-30" />;
}

function FlutterMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path d="M4 13.5L13.5 4h6L10.5 13.5l4.5 4.5h-6L4 13.5Z" fill="#47C5FB" />
      <path d="M10.5 13.5L14 10h6l-5.5 5.5L20 21h-6l-3.5-3.5 0-4.0Z" fill="#02569B" />
    </svg>
  );
}

/* ── Project Modal ── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const v = projectVisuals[project.id];
  const Icon = v?.icon ?? Code2;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', h); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <motion.div className="absolute inset-0 bg-black/75 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
      <motion.div className="relative w-full max-w-[min(92vw,1120px)] overflow-hidden rounded-[28px] border border-white/10 bg-[#08111d] shadow-[0_40px_120px_rgba(0,0,0,0.55)]" onClick={e => e.stopPropagation()} initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}>
        <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#c7d1de] transition hover:bg-white/10 hover:text-white"><X className="h-4 w-4" /></button>
        <div className="max-h-[90vh] overflow-y-auto">
          <div className="relative overflow-hidden border-b border-white/10 p-6 md:p-8" style={{ background: `linear-gradient(135deg, ${v?.bg ?? '#58a6ff'} 0%, ${v?.bgLight ?? '#79c0ff'} 100%)` }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_40%),linear-gradient(180deg,_rgba(1,4,9,0.0),_rgba(1,4,9,0.35))]" />
            <div className="relative flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                {v?.logo ? (
                  <img src={v.logo} alt="" className="h-16 w-16 rounded-2xl border border-white/20 bg-white/10 object-contain shadow-[0_16px_40px_rgba(0,0,0,0.25)]" />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                )}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">Selected work</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-white md:text-4xl">{project.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{project.company}</p>
                </div>
              </div>
              <div className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 md:inline-flex">{project.role}</div>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
              <div className="flex flex-wrap gap-2">
                <Tag>{project.time}</Tag>
                <Tag>{project.teamSize}</Tag>
                {project.platform.map((item) => <Tag key={item}>{item}</Tag>)}
              </div>

              <p className="mt-5 text-sm leading-7 text-[#c7d1de] md:text-base">{project.description}</p>

              <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.04] p-4 md:p-5">
                <p className="flex gap-2 text-sm leading-7 text-white">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#79c0ff]" />{project.highlight}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8a96a8]">Responsibilities</p>
                <ul className="mt-3 space-y-2.5">
                  {project.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2.5 text-sm leading-7 text-[#c7d1de]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58a6ff]/60" />{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="space-y-4">
                <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 md:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8a96a8]">Technologies</p>
                  <div className="mt-3 flex flex-wrap gap-2">{project.technologies.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 md:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8a96a8]">Languages</p>
                  <div className="mt-3 flex flex-wrap gap-2">{project.languages.map((l) => <Tag key={l}>{l}</Tag>)}</div>
                </div>

                {project.modules && project.modules.length > 0 && (
                  <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 md:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8a96a8]">Modules</p>
                    <div className="mt-3 flex flex-wrap gap-2">{project.modules.map((m) => <Tag key={m}>{m}</Tag>)}</div>
                  </div>
                )}

                {project.links && (
                  <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 md:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8a96a8]">Links</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.links.web && <a href={project.links.web} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white transition hover:bg-white/10">Web<ArrowUpRight className="h-3 w-3" /></a>}
                      {project.links.googlePlay && <a href={project.links.googlePlay} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white transition hover:bg-white/10">Google Play<ArrowUpRight className="h-3 w-3" /></a>}
                      {project.links.appStore && <a href={project.links.appStore} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white transition hover:bg-white/10">App Store<ArrowUpRight className="h-3 w-3" /></a>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Main ── */
export function PortfolioStatic() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);

  // Experience is calculated from 05/2022 and rounded up to 0.5-year steps.
  const experienceStartDate = new Date(2022, 4, 1);
  const today = new Date();
  const diffMs = Math.max(0, today.getTime() - experienceStartDate.getTime());
  const rawYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  const roundedYears = Math.ceil(rawYears * 2) / 2;
  const yearsText = Number.isInteger(roundedYears)
    ? roundedYears.toFixed(0)
    : roundedYears.toFixed(1).replace('.', ',');
  const yearsStatText = `${yearsText}+`;
  const dynamicTagline = /Over\s+\d+(?:[.,]\d+)?\s+years/i.test(portfolioData.tagline)
    ? portfolioData.tagline.replace(/Over\s+\d+(?:[.,]\d+)?\s+years/i, `Over ${yearsText} years`)
    : `Over ${yearsText} years of experience shipping Flutter, native mobile, and super-app solutions for enterprise teams.`;

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
      setCursorHover(Boolean((event.target as HTMLElement | null)?.closest('a, button')));
    };

    const onLeave = () => setCursorHover(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#010409] text-[#e6edf3]">
      <div className="pointer-events-none fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_top,_rgba(88,166,255,0.08),_transparent_42%),radial-gradient(circle_at_right,_rgba(210,168,255,0.05),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.02)_0%,_transparent_24%,_transparent_100%)]" />
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#58a6ff]/[0.04] blur-[120px]" />
        <div className="absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-[#d2a8ff]/[0.03] blur-[100px]" />
        <div className="absolute -left-40 bottom-1/4 h-[350px] w-[350px] rounded-full bg-[#ff7b72]/[0.02] blur-[100px]" />
      </div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-4 w-4 rounded-full bg-white md:block"
        animate={{ x: cursor.x - 8, y: cursor.y - 8, scale: cursorHover ? 1.4 : 1 }}
        transition={{ type: 'tween', duration: 0.08, ease: 'linear' }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden h-12 w-12 rounded-full border border-white/35 md:block"
        animate={{ x: cursor.x - 24, y: cursor.y - 24, scale: cursorHover ? 1.25 : 1 }}
        transition={{ type: 'tween', duration: 0.18, ease: 'easeOut' }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-0 hidden h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(88,166,255,0.25)_0%,rgba(88,166,255,0.09)_35%,transparent_72%)] opacity-55 blur-2xl mix-blend-screen md:block"
        animate={{ x: cursor.x - 144, y: cursor.y - 144 }}
        transition={{ type: 'tween', duration: 0.18, ease: 'linear' }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#21262d] bg-[#010409]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3">
          <a href="#top" className="font-display text-lg font-bold text-white">Nam<span className="gh-gradient-text">.</span></a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map(n => <a key={n.href} href={n.href} className="text-[13px] text-[#c7d1de] transition hover:text-white">{n.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href={cvUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-md border border-[#f0f6fc]/10 bg-[#f0f6fc]/[0.04] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#f0f6fc]/10 sm:inline-flex"><Download className="h-3.5 w-3.5" />Download CV</a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#c7d1de] md:hidden">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-[#21262d] px-6 py-3 md:hidden">
            {navItems.map(n => <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-[#c7d1de] transition hover:text-white">{n.label}</a>)}
            <a href={cvUrl} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#58a6ff] py-2 text-sm font-semibold text-white"><Download className="h-4 w-4" />Download CV</a>
          </div>
        )}
      </header>

      <main id="top">
        {/* ── Hero ── */}
        <section className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(88,166,255,0.10),_transparent_34%),radial-gradient(circle_at_75%_20%,_rgba(210,168,255,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,123,114,0.05),_transparent_22%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
          <motion.div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-24 lg:py-28" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="max-w-4xl">
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#8a96a8]">
                  Interactive portfolio / motion-heavy UI
                </motion.p>

                <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-6 max-w-5xl font-display text-[clamp(3.6rem,11vw,9rem)] font-semibold leading-[0.88] tracking-[-0.09em] text-white">
                  Hi, I&apos;m{' '}
                  <span className="gh-gradient-text">Tran Dinh Nam</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="mt-6 max-w-2xl text-lg leading-8 text-[#c7d1de] md:text-xl">
                  {dynamicTagline}
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mt-8 flex flex-wrap gap-3">
                  <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#010409] transition hover:-translate-y-0.5 hover:bg-[#f1f5f9]">
                    <Mail className="h-4 w-4" />Get in touch
                  </a>
                  <a href={cvUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                    <Download className="h-4 w-4" />Download CV
                  </a>
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-[#c7d1de] transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white">
                    <MapPin className="h-4 w-4" />{portfolioData.location}
                  </a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }} className="mt-10 flex flex-wrap gap-3 text-sm text-[#9bacbf]">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Flutter</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Android</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">iOS</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Super App</span>
                </motion.div>

                <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                    <p className="font-display text-3xl font-bold gh-gradient-text">{yearsStatText}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#9bacbf]">Years</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                    <p className="font-display text-3xl font-bold gh-gradient-text">{portfolioData.stats.projectsCompleted}+</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#9bacbf]">Projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                    <p className="font-display text-3xl font-bold text-white">Open</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#9bacbf]">For work</p>
                  </div>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.16, duration: 0.6 }} className="relative">
                <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-6">
                  <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#08111d] p-6 md:p-7">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,166,255,0.14),_transparent_48%),linear-gradient(180deg,_rgba(255,255,255,0.02)_0%,_transparent_100%)]" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8a96a8]">Now</p>
                        <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">Building mobile systems.</h2>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#c7d1de]">Flutter / Android / iOS</div>
                    </div>

                    <div className="relative mt-8 flex justify-center">
                      <div className="relative h-[19rem] w-[19rem] sm:h-[24rem] sm:w-[24rem]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#58a6ff] via-[#d2a8ff] to-[#ff7b72] opacity-25 blur-3xl" />
                        <div className="absolute inset-2 rounded-full border border-white/10" />
                        <div className="relative h-full w-full overflow-hidden rounded-full p-[3px] bg-gradient-to-r from-[#58a6ff] via-[#d2a8ff] to-[#ff7b72]">
                          <img src={img('/images/avatar.jpeg')} alt={portfolioData.name} className="h-full w-full rounded-full object-cover" />
                        </div>
                      </div>

                      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }} className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                        <span className="flex items-center gap-2 rounded-full border border-[#58a6ff]/30 bg-[#010409]/90 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_28px_rgba(88,166,255,0.18)]">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#58a6ff] opacity-60" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#58a6ff]" />
                          </span>
                          Available for work
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <GradientDivider />

        {/* ── About ── */}
        <FadeIn>
        <section id="about" className="py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#58a6ff]">About</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">A product-minded engineer<span className="gh-gradient-text">.</span></h2>
            <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_0.6fr]">
              <div>
                <p className="text-[15px] leading-[1.8] text-[#c7d1de]">{portfolioData.about}</p>
                <div className="mt-6 max-w-2xl">
                  <p className="font-display text-lg font-semibold leading-relaxed text-[#f5d48f] md:text-xl">
                    {portfolioData.careerGoal.includes('Product Manager') ? (
                      <>
                        {portfolioData.careerGoal.split('Product Manager')[0]}
                        <span className="gh-gradient-gold mx-1 text-xl font-extrabold tracking-wide align-middle">Product Manager</span>
                        {portfolioData.careerGoal.split('Product Manager')[1]}
                      </>
                    ) : (
                      <span className="gh-gradient-gold">{portfolioData.careerGoal}</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Phone, label: portfolioData.phone ?? '' },
                  { icon: Mail, label: portfolioData.email },
                  { icon: MapPin, label: portfolioData.address, href: mapsUrl },
                  { icon: CalendarDays, label: `Born ${portfolioData.dateOfBirth}` },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 rounded-md border border-[#21262d] bg-[#161b22] px-4 py-3 text-sm text-[#c7d1de]">
                    <item.icon className="h-4 w-4 shrink-0 text-[#9bacbf]" />
                    {item.href ? <a href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-[#58a6ff]">{item.label}</a> : item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        </FadeIn>

        <GradientDivider />

        {/* ── Experience ── */}
        <FadeIn>
        <section id="experience" className="py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#58a6ff]">Experience</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Career Timeline<span className="gh-gradient-text">.</span></h2>
            </div>

            <div className="relative mx-auto mt-14 max-w-5xl">
              <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-white/55 via-white/20 to-transparent md:hidden" />
              <div className="absolute bottom-0 left-[108px] top-0 hidden w-px bg-gradient-to-b from-white/55 via-white/20 to-transparent md:block" />

              {portfolioData.experience.map((item, index) => {
                const company = companyInfo[item.company];
                const current = index === 0;
                const [periodStart, periodEnd = 'Present'] = item.period.split(' - ');

                const card = (
                  <a
                    href={company?.url ?? '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="group/company block overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220]/85 shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:-translate-y-1 hover:border-[#58a6ff]/35 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35),0_0_30px_rgba(88,166,255,0.12)]"
                  >
                    <div className="relative overflow-hidden p-5 md:p-6">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(88,166,255,0.10),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(210,168,255,0.08),_transparent_30%)] opacity-0 transition-opacity duration-300 group-hover/company:opacity-100" />

                      <div className="relative grid gap-5 lg:grid-cols-[1fr_220px] lg:items-start lg:gap-8">
                        <div className="flex items-start gap-4 md:gap-5">
                          {company?.logo ? (
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-2.5 shadow-[0_0_20px_rgba(88,166,255,0.12)] transition duration-300 group-hover/company:scale-105 group-hover/company:border-[#58a6ff]/30 group-hover/company:shadow-[0_0_30px_rgba(88,166,255,0.22)]">
                              <img src={company.logo} alt="" className="h-full w-full object-contain" />
                            </div>
                          ) : (
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#58a6ff] to-[#d2a8ff] shadow-[0_0_20px_rgba(88,166,255,0.18)] transition duration-300 group-hover/company:scale-105">
                              <Briefcase className="h-6 w-6 text-white" />
                            </div>
                          )}

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white transition-colors group-hover/company:text-[#79c0ff] md:text-[2rem]">{item.company}</p>
                              {current && (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#58a6ff]/30 bg-[#58a6ff]/12 px-3 py-1 text-[11px] font-semibold text-[#79c0ff]">
                                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#58a6ff]" />NOW
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-sm font-medium uppercase tracking-[0.22em] text-[#8a96a8]">{item.role}</p>
                          </div>
                        </div>

                        <div className="flex items-start justify-between gap-4 lg:justify-end lg:text-right">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8a96a8]">Timeline</p>
                            <p className="mt-2 font-display text-xl font-semibold text-white">{item.period}</p>
                          </div>
                          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#718096] transition-all duration-300 group-hover/company:-translate-y-0.5 group-hover/company:translate-x-0.5 group-hover/company:text-[#58a6ff]" />
                        </div>
                      </div>

                      <div className="relative mt-6 grid gap-5 border-t border-white/10 pt-5 lg:grid-cols-[1fr_0.85fr] lg:gap-8">
                        <div>
                          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8a96a8]">Responsibilities</p>
                          <div className="space-y-2.5">
                            {item.responsibilities.map((r) => (
                              <p key={r} className="flex gap-2.5 text-[14px] leading-relaxed text-[#d8e2f0]">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58a6ff]/55" />{r}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8a96a8]">Highlight</p>
                          {item.achievements.map((a) => (
                            <div key={a} className="flex gap-2.5 rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3">
                              <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#58a6ff]" />
                              <p className="text-[13px] leading-6 text-[#e6edf3]">{a}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                );

                return (
                  <FadeIn key={item.id} className="relative mb-10 last:mb-0" delay={index * 0.08}>
                    <div className="pl-14 md:hidden">
                      <span className="mb-2 inline-flex rounded-full border border-[#58a6ff]/20 bg-[#58a6ff]/10 px-3 py-1 text-xs font-medium text-[#58a6ff]">
                        <CalendarDays className="mr-1.5 h-3 w-3" />{item.period}
                      </span>
                      <div className="absolute left-5 top-8 z-10 -translate-x-1/2">
                        <div className={`h-3 w-3 rounded-full border-2 border-[#010409] ${current ? 'bg-[#58a6ff] shadow-[0_0_10px_rgba(88,166,255,0.45)]' : 'bg-[#4b5563]'}`} />
                      </div>
                      {card}
                    </div>

                    <div className="hidden md:grid md:grid-cols-[108px_1fr]">
                      <div className="pt-6 pr-6 text-right">
                        <p className="font-display text-lg font-bold gh-gradient-text">{periodStart}</p>
                        <p className="mt-1 text-sm font-medium text-[#9bacbf]">{periodEnd}</p>
                      </div>

                      <div className="relative pl-8">
                        <div className="absolute left-0 top-8 z-10 -translate-x-1/2">
                          <div className={`h-3 w-3 rounded-full border-2 border-[#010409] ${current ? 'bg-[#58a6ff] shadow-[0_0_10px_rgba(88,166,255,0.45)]' : 'bg-[#4b5563]'}`} />
                        </div>
                        {card}
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
        </FadeIn>

        <GradientDivider />

        {/* ── Projects ── */}
        <FadeIn>
        <section id="projects" className="py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#8a96a8]">Selected works</p>
                <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.75rem,6vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">Projects as stories, not cards<span className="text-[#58a6ff]">.</span></h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-[#9bacbf] lg:justify-self-end lg:text-right">
                Hover or open a row to inspect the stack, role, and impact. The layout is intentionally sparse so the work reads like a curated sequence.
              </p>
            </div>

            <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.03] px-5 backdrop-blur-sm md:px-8">
              {portfolioData.projects.map((project, index) => {
                const [start, end] = project.time.split(' - ');
                const v = projectVisuals[project.id];
                const tags = project.technologies.slice(0, 3);

                return (
                  <FadeIn key={project.id} className="group border-b border-white/10 last:border-b-0" delay={index * 0.05}>
                    <button type="button" onClick={() => setSelectedProject(project)} className="grid w-full gap-4 px-0 py-6 text-left transition duration-300 hover:translate-x-1 lg:grid-cols-[88px_minmax(0,1fr)_300px] lg:items-center lg:gap-10 lg:py-8">
                      <div className="font-display text-2xl font-semibold text-[#8a96a8] md:text-3xl">{String(index + 1).padStart(2, '0')}</div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white md:text-4xl">{project.name}</h3>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8a96a8]">{project.company}</span>
                        </div>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#c7d1de] md:text-base">{project.highlight}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/90">
                            <Briefcase className="h-3 w-3" />{project.role}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-[#c7d1de]">
                            <CalendarDays className="h-3 w-3" />{project.time}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 lg:items-end">
                        <div className="flex gap-1.5">
                          {tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-[#161b22] px-2.5 py-1 text-[11px] font-medium text-[#c7d1de]">{tag}</span>
                          ))}
                          {project.technologies.length > tags.length && (
                            <span className="rounded-full border border-white/10 bg-[#161b22] px-2.5 py-1 text-[11px] text-[#9bacbf]">+{project.technologies.length - tags.length}</span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-[#8a96a8] transition group-hover:text-white">
                          <span className="text-xs uppercase tracking-[0.28em]">View</span>
                          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>

                        <div className="h-[2px] w-20 gh-gradient-line opacity-40 transition group-hover:w-28 group-hover:opacity-80" />
                      </div>
                    </button>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
        </FadeIn>

        <GradientDivider />

        {/* ── Skills ── */}
        <FadeIn>
        <section id="skills" className="py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#8a96a8]">Skills</p>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">Technical Expertise<span className="text-[#58a6ff]">.</span></h2>
            </div>

            <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 md:p-8">
              <div className="grid gap-0">
              {portfolioData.skills.map((group, i) => (
                <FadeIn key={group.category} delay={i * 0.05}>
                  <div className="grid gap-4 border-b border-white/10 py-6 last:border-b-0 lg:grid-cols-[260px_1fr] lg:items-start lg:gap-8 lg:py-8">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8a96a8]">{String(i + 1).padStart(2, '0')}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white">{group.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map(s => <Tag key={s}>{s}</Tag>)}
                    </div>
                  </div>
                </FadeIn>
              ))}
              </div>
            </div>

            <FadeIn className="mt-8">
            <div className="rounded-[28px] border border-white/10 bg-[#0b1220]/70 p-5 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8a96a8]">Technical profile</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white">Stack snapshot</h3>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[#9bacbf]">A compact inventory of tools, architecture, and delivery practices I use across product teams.</p>
              </div>

              <div className="mt-6 grid gap-3">
                {portfolioData.technicalSkillsTable.map(row => (
                  <div key={row.category} className="grid gap-3 rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 lg:grid-cols-[180px_1fr] lg:gap-6 lg:px-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a96a8]">{row.category}</p>
                    <p className="text-sm leading-7 text-[#e6edf3]">{row.skills}</p>
                  </div>
                ))}
              </div>
            </div>
            </FadeIn>
          </div>
        </section>
        </FadeIn>

        <GradientDivider />

        {/* ── Education ── */}
        <FadeIn>
        <section id="education" className="py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#8a96a8]">Education</p>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">Training & Recognition<span className="text-[#58a6ff]">.</span></h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {portfolioData.education.map(entry => (
                <FadeIn key={entry.institution}>
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    {entry.institution.toLowerCase().includes('aptech') ? (
                      <img
                        src={aptechLogoUrl}
                        alt="Aptech logo"
                        className="h-11 w-auto max-w-[180px] object-contain opacity-95"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5"><GraduationCap className="h-5 w-5 text-white" /></div>
                    )}
                    <div><h3 className="font-display text-2xl font-semibold text-white">{entry.institution}</h3><p className="text-xs uppercase tracking-[0.24em] text-[#8a96a8]">{entry.period}</p></div>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {entry.details.map(d => <li key={d} className="flex gap-2 text-sm leading-7 text-[#c7d1de]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58a6ff]/50" />{d}</li>)}
                  </ul>
                  {entry.certificate && <p className="mt-5 rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[#e6edf3]">{entry.certificate}</p>}
                  {entry.award && <div className="mt-3 flex gap-2 rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3"><Award className="mt-0.5 h-4 w-4 shrink-0 text-[#58a6ff]" /><p className="text-sm leading-7 text-[#c7d1de]">{entry.award}</p></div>}
                </div>
                </FadeIn>
              ))}
              <FadeIn>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-2xl font-semibold text-white">Achievements</h3>
                <ul className="mt-5 space-y-3">
                  {portfolioData.achievements.map(a => (
                    <li key={a} className="flex gap-2 rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[#c7d1de]">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#58a6ff]" />{a}
                    </li>
                  ))}
                </ul>
              </div>
              </FadeIn>
            </div>
          </div>
        </section>
        </FadeIn>

        <GradientDivider />

        {/* ── Contact ── */}
        <FadeIn>
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid gap-5 rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#08111d] p-6 md:p-8">
                <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#58a6ff]/[0.08] blur-[70px]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#8a96a8]">Contact</p>
                <h2 className="mt-4 max-w-md font-display text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">Let&apos;s build together<span className="text-[#58a6ff]">.</span></h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[#c7d1de] md:text-base">Open for opportunities in Flutter, mobile, and super-app development. If you need someone who can ship with product thinking, let&apos;s talk.</p>
                <a href={`mailto:${portfolioData.email}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#010409] transition hover:-translate-y-0.5 hover:bg-[#f1f5f9]">
                  <Mail className="h-4 w-4" />Send email
                </a>
              </div>

              <div className="grid gap-3 self-start">
                {[
                  { icon: Mail, label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}` },
                  { icon: Phone, label: 'Phone', value: portfolioData.phone ?? '' },
                  { icon: MapPin, label: 'Address', value: portfolioData.address, href: mapsUrl },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"><item.icon className="h-4 w-4 text-[#8a96a8]" /></div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8a96a8]">{item.label}</p>
                      {item.href ? <a href={item.href} target="_blank" rel="noreferrer" className="mt-1 block truncate text-sm text-white transition hover:text-[#58a6ff]">{item.value}</a> : <p className="mt-1 text-sm text-white">{item.value}</p>}
                    </div>
                  </div>
                ))}

                <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8a96a8]">Social</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { icon: Github, href: portfolioData.socials.github, label: 'GitHub' },
                      { icon: Linkedin, href: portfolioData.socials.linkedin, label: 'LinkedIn' },
                      { icon: Globe, href: portfolioData.socials.pubDev, label: 'Pub.dev' },
                    ].map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white transition hover:bg-white/10">
                        <s.icon className="h-3.5 w-3.5" />{s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </FadeIn>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-3 px-6 text-center">
          <span className="font-display text-sm font-bold text-white">Nam<span className="text-[#58a6ff]">.</span></span>
          <p className="text-sm text-[#9bacbf]">Designed & developed with motion, contrast, and clarity.</p>
          <p className="text-xs text-[#6b7280]">© 2026 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
