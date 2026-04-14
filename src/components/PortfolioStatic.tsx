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
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const heroFloatingTokens = [
  { text: 'const', top: '9%', left: '8%', rotate: -18, drift: 7, duration: 9.2, delay: 0.3 },
  { text: 'flutter()', top: '12%', left: '19%', rotate: 14, drift: 9, duration: 8.4, delay: 0.9 },
  { text: '<Widget />', top: '18%', left: '10%', rotate: 45, drift: 8, duration: 10.1, delay: 0.2 },
  { text: 'FutureBuilder', top: '26%', left: '7%', rotate: 90, drift: 10, duration: 11.3, delay: 0.6 },
  { text: 'BlocProvider', top: '34%', left: '14%', rotate: -45, drift: 7, duration: 8.8, delay: 0.1 },
  { text: 'PlatformChannel', top: '43%', left: '6%', rotate: 270, drift: 10, duration: 10.7, delay: 0.8 },
  { text: '{ api: true }', top: '58%', left: '11%', rotate: -90, drift: 8, duration: 9.6, delay: 1.1 },
  { text: 'Firebase', top: '68%', left: '7%', rotate: 22, drift: 9, duration: 11.5, delay: 0.4 },
  { text: '</>', top: '78%', left: '15%', rotate: 135, drift: 7, duration: 8.9, delay: 0.7 },
  { text: 'main.dart', top: '13%', left: '84%', rotate: -14, drift: 10, duration: 10.9, delay: 0.5 },
  { text: 'return MaterialApp(...)', top: '21%', left: '78%', rotate: 6, drift: 8, duration: 9.7, delay: 0.2 },
  { text: 'State • Bloc • Provider', top: '29%', left: '88%', rotate: 270, drift: 11, duration: 11.8, delay: 1.0 },
  { text: 'Dio + Http', top: '38%', left: '80%', rotate: -26, drift: 9, duration: 8.6, delay: 0.4 },
  { text: 'Crashlytics', top: '47%', left: '90%', rotate: 45, drift: 7, duration: 9.1, delay: 0.9 },
  { text: 'CI/CD', top: '59%', left: '83%', rotate: 90, drift: 10, duration: 10.2, delay: 0.3 },
  { text: 'Mini App', top: '67%', left: '91%', rotate: -45, drift: 8, duration: 9.9, delay: 0.6 },
  { text: 'Super App', top: '76%', left: '82%', rotate: 270, drift: 11, duration: 11.1, delay: 1.2 },
  { text: 'NFC • eKYC', top: '84%', left: '92%', rotate: -20, drift: 7, duration: 8.7, delay: 0.8 },
];

const heroPlatformBadges: Array<{
  top: string;
  left: string;
  rotate: number;
  scale: number;
  drift: number;
  duration: number;
  delay: number;
  label: string;
  icon: 'flutter' | 'android' | 'ios';
}> = [
  { top: '16%', left: '30%', rotate: -22, scale: 1, drift: 8, duration: 12, delay: 0.2, label: 'Flutter', icon: 'flutter' },
  { top: '39%', left: '22%', rotate: 45, scale: 0.9, drift: 10, duration: 13.5, delay: 0.9, label: 'Android', icon: 'android' },
  { top: '63%', left: '27%', rotate: 90, scale: 0.95, drift: 9, duration: 11.8, delay: 0.3, label: 'iOS', icon: 'ios' },
  { top: '26%', left: '70%', rotate: 270, scale: 1, drift: 11, duration: 14.2, delay: 0.7, label: 'Android', icon: 'android' },
  { top: '49%', left: '76%', rotate: -45, scale: 0.92, drift: 8, duration: 12.7, delay: 0.1, label: 'Flutter', icon: 'flutter' },
  { top: '72%', left: '68%', rotate: 135, scale: 0.88, drift: 10, duration: 13.8, delay: 1.1, label: 'iOS', icon: 'ios' },
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
      <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
      <motion.div className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-xl border border-[#30363d] bg-[#010409] shadow-2xl" onClick={e => e.stopPropagation()} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
        <button onClick={onClose} className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-md bg-[#21262d] text-[#c7d1de] transition hover:text-white"><X className="h-4 w-4" /></button>
        <div className="max-h-[90vh] overflow-y-auto">
          <div className="relative flex h-44 items-end p-6" style={{ background: `linear-gradient(135deg, ${v?.bg ?? '#58a6ff'}, ${v?.bgLight ?? '#79c0ff'})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#010409]/60 to-transparent" />
            <div className="relative flex items-end gap-4">
              {v?.logo ? <img src={v.logo} alt="" className="h-16 w-16 rounded-xl shadow-lg ring-1 ring-white/20" /> : <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/15 backdrop-blur"><Icon className="h-8 w-8 text-white" /></div>}
              <div><p className="font-display text-xl font-bold text-white">{project.name}</p><p className="text-sm text-white/72">{project.company}</p></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 border-b border-[#21262d] px-6 py-3 text-xs text-[#c7d1de]">
            <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{project.time}</span>
            <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{project.role}</span>
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{project.teamSize}</span>
            <span className="flex items-center gap-1"><Code2 className="h-3.5 w-3.5" />{project.platform.join(', ')}</span>
          </div>
          <div className="space-y-5 p-6">
            <p className="text-sm leading-relaxed text-[#c7d1de]">{project.description}</p>
            <div className="rounded-lg border border-[#58a6ff]/20 bg-[#58a6ff]/5 p-4">
              <p className="flex gap-2 text-sm text-[#58a6ff]"><Sparkles className="mt-0.5 h-4 w-4 shrink-0" />{project.highlight}</p>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#9bacbf]">Responsibilities</p>
              <ul className="space-y-2">{project.responsibilities.map(r => <li key={r} className="flex gap-2.5 text-sm text-[#c7d1de]"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#58a6ff]/40" />{r}</li>)}</ul>
            </div>
            <div className="flex flex-wrap gap-2">{project.technologies.map(t => <Tag key={t}>{t}</Tag>)}{project.languages.map(l => <Tag key={l}>{l}</Tag>)}</div>
            {project.modules && project.modules.length > 0 && <div><p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#9bacbf]">Modules</p><div className="flex flex-wrap gap-2">{project.modules.map(m => <Tag key={m}>{m}</Tag>)}</div></div>}
            {project.links && (
              <div className="flex flex-wrap gap-2 border-t border-[#21262d] pt-4">
                {project.links.web && <a href={project.links.web} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-[#30363d] bg-[#21262d] px-3 py-1.5 text-xs text-[#c9d1d9] transition hover:border-[#58a6ff]/40 hover:text-[#58a6ff]"><Globe className="h-3.5 w-3.5" />Web<ArrowUpRight className="h-3 w-3" /></a>}
                {project.links.googlePlay && <a href={project.links.googlePlay} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-[#30363d] bg-[#21262d] px-3 py-1.5 text-xs text-[#c9d1d9] transition hover:border-[#58a6ff]/40 hover:text-[#58a6ff]">Google Play<ArrowUpRight className="h-3 w-3" /></a>}
                {project.links.appStore && <a href={project.links.appStore} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-[#30363d] bg-[#21262d] px-3 py-1.5 text-xs text-[#c9d1d9] transition hover:border-[#58a6ff]/40 hover:text-[#58a6ff]">App Store<ArrowUpRight className="h-3 w-3" /></a>}
              </div>
            )}
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

  return (
    <div className="min-h-screen bg-[#010409] text-[#e6edf3]">
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#58a6ff]/[0.04] blur-[120px]" />
        <div className="absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-[#d2a8ff]/[0.03] blur-[100px]" />
        <div className="absolute -left-40 bottom-1/4 h-[350px] w-[350px] rounded-full bg-[#ff7b72]/[0.02] blur-[100px]" />
      </div>

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
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {heroFloatingTokens.map((item) => (
              <motion.div
                key={`${item.text}-${item.top}-${item.left}`}
                className="absolute rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/16 backdrop-blur-[1px]"
                style={{ top: item.top, left: item.left, transform: `rotate(${item.rotate}deg)` }}
                animate={{ y: [0, -item.drift, 0, item.drift, 0], x: [0, item.drift * 0.35, 0, -item.drift * 0.35, 0] }}
                transition={{ duration: item.duration, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
              >
                {item.text}
              </motion.div>
            ))}

            {heroPlatformBadges.map((badge) => (
              <motion.div
                key={`${badge.label}-${badge.top}-${badge.left}-${badge.rotate}`}
                className="absolute flex items-center gap-2 rounded-xl border border-[#58a6ff]/20 bg-[#08111d]/65 px-3 py-2 shadow-[0_0_32px_rgba(88,166,255,0.10)] backdrop-blur"
                style={{ top: badge.top, left: badge.left, transform: `rotate(${badge.rotate}deg) scale(${badge.scale})` }}
                animate={{ y: [0, -badge.drift, 0, badge.drift, 0], x: [0, badge.drift * 0.3, 0, -badge.drift * 0.3, 0] }}
                transition={{ duration: badge.duration, delay: badge.delay, repeat: Infinity, ease: 'easeInOut' }}
              >
                {badge.icon === 'flutter' ? (
                  <FlutterMark className="h-5 w-5 drop-shadow-[0_0_10px_rgba(71,197,251,0.35)]" />
                ) : badge.icon === 'android' ? (
                  <Smartphone className="h-4 w-4 text-[#79c0ff]" />
                ) : (
                  <Apple className="h-4 w-4 text-[#79c0ff]" />
                )}
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8cbcff]">{badge.label}</span>
              </motion.div>
            ))}
          </div>
          {/* Top gradient line */}
          <div className="mx-auto h-px max-w-4xl gh-gradient-line" />

          <motion.div className="mx-auto max-w-[1280px] px-6 py-20 md:py-32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-col items-center text-center">
              {/* Avatar - large & prominent */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }} className="relative">
                <div className="relative h-40 w-40 md:h-52 md:w-52 lg:h-60 lg:w-60">
                  {/* Glow ring */}
                  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-[#58a6ff] via-[#d2a8ff] to-[#ff7b72] opacity-20 blur-xl" />
                  <div className="relative h-full w-full overflow-hidden rounded-full p-[3px] bg-gradient-to-r from-[#58a6ff] via-[#d2a8ff] to-[#ff7b72]">
                    <img src={img('/images/avatar.jpeg')} alt={portfolioData.name} className="h-full w-full rounded-full object-cover" />
                  </div>
                </div>
                {/* Available badge - prominent */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <span className="flex w-max items-center gap-2.5 whitespace-nowrap rounded-full border border-[#58a6ff]/50 bg-[#010409]/95 px-5 py-2.5 text-sm font-bold tracking-wide text-[#79c0ff] shadow-[0_0_25px_rgba(88,166,255,0.25),0_0_50px_rgba(88,166,255,0.1)] ring-1 ring-[#58a6ff]/30 backdrop-blur-sm">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#58a6ff] opacity-60" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-[#58a6ff] to-[#79c0ff] shadow-[0_0_6px_rgba(88,166,255,0.6)]" />
                    </span>
                    Available for work
                  </span>
                </motion.div>
              </motion.div>

              {/* Greeting */}
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-12 font-display text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                Hey, I'm{' '}<span className="gh-gradient-text">{portfolioData.name.split(' ').pop()}</span>
                <span className="ml-2 inline-block animate-[wave_1.5s_ease-in-out_infinite] origin-[70%_70%]">👋</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c7d1de] md:text-xl">
                {dynamicTagline}
              </motion.p>

              {/* Stats inline */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex items-center gap-8">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold gh-gradient-text">{yearsStatText}</p>
                  <p className="text-xs text-[#9bacbf]">Years</p>
                </div>
                <div className="h-10 w-px bg-[#21262d]" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold gh-gradient-text">{portfolioData.stats.projectsCompleted}+</p>
                  <p className="text-xs text-[#9bacbf]">Projects</p>
                </div>
                <div className="h-10 w-px bg-[#21262d]" />
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-[#c7d1de] transition hover:text-[#58a6ff]">
                  <MapPin className="h-4 w-4" />{portfolioData.location}
                  </a>
              </motion.div>

              {/* CTA buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center gap-2 rounded-full bg-[#58a6ff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#58a6ff]/25 transition hover:bg-[#79c0ff] hover:shadow-[#58a6ff]/40">
                  <Mail className="h-4 w-4" />Get in touch
                </a>
                <a href={cvUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#f0f6fc]/10 bg-[#f0f6fc]/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#f0f6fc]/10">
                  <Download className="h-4 w-4" />Download CV
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-6 flex items-center gap-4 text-[13px] text-[#9bacbf]">
                {[
                  { icon: Github, href: portfolioData.socials.github, label: 'GitHub' },
                  { icon: Linkedin, href: portfolioData.socials.linkedin, label: 'LinkedIn' },
                  { icon: Globe, href: portfolioData.socials.pubDev, label: 'Pub.dev' },
                ].map((s, i) => (
                  <span key={s.label} className="contents">
                    {i > 0 && <span className="h-3 w-px bg-[#21262d]" />}
                    <a href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition hover:text-[#58a6ff]"><s.icon className="h-3.5 w-3.5" />{s.label}</a>
                  </span>
                ))}
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
                  <div className="overflow-hidden rounded-2xl bg-[#0d1117] ring-1 ring-[#364153] transition-all duration-300 hover:ring-[#58a6ff]/45 hover:shadow-[0_0_30px_rgba(88,166,255,0.10)]">
                    <a
                      href={company?.url ?? '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="group/company relative flex items-center gap-5 px-6 py-6 transition-all duration-300 hover:bg-[#161b22]/70"
                    >
                      <div className="absolute left-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#58a6ff]/[0.08] blur-2xl transition-all duration-300 group-hover/company:bg-[#58a6ff]/[0.16]" />

                      {company?.logo ? (
                        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-[0_0_20px_rgba(88,166,255,0.15)] ring-1 ring-white/30 transition-all duration-300 group-hover/company:scale-110 group-hover/company:shadow-[0_0_30px_rgba(88,166,255,0.3)] group-hover/company:ring-[#58a6ff]/50">
                          <img src={company.logo} alt="" className="h-full w-full object-contain" />
                        </div>
                      ) : (
                        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#58a6ff] to-[#d2a8ff] shadow-[0_0_20px_rgba(88,166,255,0.2)] transition-all duration-300 group-hover/company:scale-110 group-hover/company:shadow-[0_0_30px_rgba(88,166,255,0.35)]">
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                      )}

                      <div className="relative min-w-0 flex-1">
                        <p className="font-display text-xl font-bold text-white transition-colors group-hover/company:text-[#79c0ff]">{item.company}</p>
                        <p className="mt-1 text-sm font-medium text-[#d8e2f0]">{item.role}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <ArrowUpRight className="h-4 w-4 text-[#718096] transition-all duration-300 group-hover/company:-translate-y-0.5 group-hover/company:translate-x-0.5 group-hover/company:text-[#58a6ff]" />
                        {current && (
                          <span className="relative flex items-center gap-1.5 rounded-full border border-[#58a6ff]/30 bg-[#58a6ff]/15 px-3 py-1.5 text-[11px] font-bold text-[#79c0ff] shadow-[0_0_12px_rgba(88,166,255,0.15)]">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#58a6ff]" />NOW
                          </span>
                        )}
                      </div>
                    </a>

                    <div className="mx-6 h-px gh-gradient-line opacity-25" />

                    <div className="px-6 py-5">
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9fd4ff]">Responsibilities</p>
                      <div className="space-y-2.5">
                        {item.responsibilities.map((r) => (
                          <p key={r} className="flex gap-2.5 text-[14px] leading-relaxed text-[#d8e2f0]">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58a6ff]/50" />{r}
                          </p>
                        ))}
                      </div>

                      {item.achievements.map((a) => (
                        <div key={a} className="mt-4 flex gap-2.5 rounded-lg border border-[#d29922]/25 bg-gradient-to-r from-[#d29922]/12 to-[#d29922]/6 px-4 py-3">
                          <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#f0b84a]" />
                          <p className="text-[13px] font-semibold text-[#f3c76b]">{a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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
        <section id="projects" className="py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#58a6ff]">Projects</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Delivery Timeline<span className="gh-gradient-text">.</span></h2>
            </div>

            <div className="relative mx-auto mt-14 max-w-5xl">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-white/50 via-white/20 to-transparent md:left-1/2" />

              <div className="space-y-12">
                {portfolioData.projects.map((project, index) => {
                  const [start, end] = project.time.split(' - ');
                  const isLeft = index % 2 === 0;
                  const v = projectVisuals[project.id];
                  const Icon = v?.icon ?? Code2;

                  const projectCard = (
                    <button type="button" onClick={() => setSelectedProject(project)} className="group/c w-full cursor-pointer text-left transition-transform duration-300 hover:scale-[1.03]">
                      <div className="relative overflow-hidden rounded-xl bg-[#0d1117] ring-1 ring-[#30363d] transition-all duration-300 group-hover/c:ring-[#58a6ff]/50 group-hover/c:shadow-[0_0_30px_rgba(88,166,255,0.12),0_0_60px_rgba(210,168,255,0.06)]">
                        {/* Hover overlay */}
                        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-all duration-300 group-hover/c:bg-black/60 group-hover/c:backdrop-blur-[2px] group-hover/c:opacity-100">
                          <span className="flex items-center gap-2 rounded-full bg-[#58a6ff] px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-[#58a6ff]/30 scale-90 transition-transform duration-300 group-hover/c:scale-100">
                            <ArrowUpRight className="h-4 w-4" />View details
                          </span>
                        </div>

                        {/* Banner - taller, more prominent */}
                        <div className="relative flex h-40 items-end overflow-hidden p-5" style={{ background: `linear-gradient(135deg, ${v?.bg ?? '#58a6ff'} 0%, ${v?.bgLight ?? '#79c0ff'} 100%)` }}>
                          {/* Shine effect */}
                          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, white 0%, transparent 50%)' }} />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />

                          {/* Logo + name */}
                          <div className="relative flex w-full items-end gap-4">
                            {v?.logo ? (
                              <img src={v.logo} alt="" className="h-14 w-14 rounded-xl bg-white/10 shadow-xl shadow-black/30 ring-2 ring-white/25 backdrop-blur-sm" />
                            ) : (
                              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 shadow-xl shadow-black/30 ring-2 ring-white/25 backdrop-blur-sm">
                                <Icon className="h-7 w-7 text-white" />
                              </div>
                            )}
                            <div className="flex-1 pb-0.5">
                              <p className="font-display text-lg font-bold text-white drop-shadow-md">{project.name}</p>
                              <p className="text-xs text-white/72">{project.company}</p>
                            </div>
                          </div>

                          {/* Platform badges */}
                          <div className="absolute right-4 top-4 flex gap-1.5">
                            {project.platform.map(p => (
                              <span key={p} className="rounded-md bg-black/40 px-2 py-0.5 text-[10px] font-semibold text-white/80 shadow backdrop-blur-md">{p}</span>
                            ))}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          {/* Role badge */}
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#58a6ff]/10 px-2.5 py-1 text-xs font-semibold text-[#58a6ff]">
                            <Briefcase className="h-3 w-3" />{project.role}
                          </span>

                          {/* Highlight */}
                          <p className="mt-3 text-[13px] leading-relaxed text-[#c9d1d9] line-clamp-2">{project.highlight}</p>

                          {/* Tech tags */}
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 4).map(t => (
                              <span key={t} className="rounded-full border border-[#30363d] bg-[#161b22] px-2.5 py-1 text-[11px] font-medium text-[#c7d1de]">{t}</span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="rounded-full border border-[#30363d] bg-[#161b22] px-2.5 py-1 text-[11px] text-[#9bacbf]">+{project.technologies.length - 4}</span>
                            )}
                          </div>
                        </div>

                        {/* Bottom gradient accent line */}
                        <div className="h-[2px] w-full gh-gradient-line opacity-40 transition-opacity duration-300 group-hover/c:opacity-80" />
                      </div>
                    </button>
                  );

                  const timeLabel = (align: 'left' | 'right') => (
                    <div className={`flex pt-5 ${align === 'left' ? 'justify-end' : ''}`}>
                      <div className={align === 'left' ? 'text-right' : ''}>
                        <p className="font-display text-xl font-bold gh-gradient-text">{start}</p>
                        <p className="mt-1 text-sm text-[#9bacbf]">{end}</p>
                        <div className={`mt-2 h-px w-8 gh-gradient-line ${align === 'left' ? 'ml-auto' : ''}`} />
                      </div>
                    </div>
                  );

                  return (
                    <FadeIn key={project.id} className="relative" delay={index * 0.06}>
                      <div className="absolute left-5 top-5 z-10 -translate-x-1/2 md:left-1/2">
                        <div className={`h-3 w-3 rounded-full border-2 border-[#010409] ${index === 0 ? 'bg-[#58a6ff] shadow-[0_0_8px_rgba(88,166,255,0.4)]' : 'bg-[#30363d]'}`} />
                      </div>
                      <div className="pl-14 md:hidden">
                        <span className="mb-2 inline-flex rounded-full border border-[#58a6ff]/20 bg-[#58a6ff]/10 px-3 py-1 text-xs font-medium text-[#58a6ff]"><CalendarDays className="mr-1.5 h-3 w-3" />{project.time}</span>
                        {projectCard}
                      </div>
                      <div className="hidden md:grid md:grid-cols-2 md:gap-10">
                        <div>{isLeft ? projectCard : timeLabel('left')}</div>
                        <div>{isLeft ? timeLabel('right') : projectCard}</div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
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
              <p className="text-sm font-semibold uppercase tracking-wider text-[#58a6ff]">Skills</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Technical Expertise<span className="gh-gradient-text">.</span></h2>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {portfolioData.skills.map((group, i) => (
                <FadeIn key={group.category} delay={i * 0.05}>
                <div className="rounded-lg border border-[#21262d] bg-[#010409] p-5 transition hover:border-[#30363d]">
                  <h3 className="text-sm font-semibold text-[#e6edf3]">{group.category}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {group.skills.map(s => <span key={s} className="rounded-full border border-[#30363d] px-2.5 py-1 text-[11px] text-[#c7d1de]">{s}</span>)}
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-8">
            <div className="overflow-hidden rounded-lg border border-[#21262d]">
              <div className="border-b border-[#21262d] bg-[#161b22] px-5 py-3">
                <h3 className="text-sm font-semibold text-[#e6edf3]">Technical Profile</h3>
              </div>
              <div className="divide-y divide-[#21262d]">
                {portfolioData.technicalSkillsTable.map(row => (
                  <div key={row.category} className="grid gap-1 px-5 py-3 md:grid-cols-[160px_1fr] md:gap-6">
                    <p className="text-[13px] font-medium text-[#58a6ff]">{row.category}</p>
                    <p className="text-[13px] text-[#c7d1de]">{row.skills}</p>
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
              <p className="text-sm font-semibold uppercase tracking-wider text-[#58a6ff]">Education</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Training & Recognition<span className="gh-gradient-text">.</span></h2>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {portfolioData.education.map(entry => (
                <FadeIn key={entry.institution}>
                <div className="rounded-lg border border-[#21262d] bg-[#010409] p-6">
                  <div className="flex items-center gap-3">
                    {entry.institution.toLowerCase().includes('aptech') ? (
                      <img
                        src={aptechLogoUrl}
                        alt="Aptech logo"
                        className="h-11 w-auto max-w-[180px] object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#58a6ff]"><GraduationCap className="h-5 w-5 text-white" /></div>
                    )}
                    <div><h3 className="font-semibold text-[#e6edf3]">{entry.institution}</h3><p className="text-xs text-[#9bacbf]">{entry.period}</p></div>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {entry.details.map(d => <li key={d} className="flex gap-2 text-[13px] text-[#c7d1de]"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#58a6ff]/30" />{d}</li>)}
                  </ul>
                  {entry.certificate && <p className="mt-4 rounded-md border border-[#21262d] bg-[#161b22] px-4 py-2.5 text-[13px] text-[#c9d1d9]">{entry.certificate}</p>}
                  {entry.award && <div className="mt-2 flex gap-2 rounded-md border border-[#d29922]/20 bg-[#d29922]/5 px-4 py-2.5"><Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d29922]" /><p className="text-[13px] text-[#e3b341]">{entry.award}</p></div>}
                </div>
                </FadeIn>
              ))}
              <FadeIn>
              <div className="rounded-lg border border-[#21262d] bg-[#010409] p-6">
                <h3 className="font-semibold text-[#e6edf3]">Achievements</h3>
                <ul className="mt-4 space-y-2">
                  {portfolioData.achievements.map(a => (
                    <li key={a} className="flex gap-2 rounded-md border border-[#d29922]/20 bg-[#d29922]/5 px-4 py-2.5 text-[13px] text-[#e3b341]">
                      <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d29922]" />{a}
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
            <div className="relative overflow-hidden rounded-xl border border-[#21262d] bg-[#161b22]">
              {/* Glow bg */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#58a6ff]/[0.06] blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#d2a8ff]/[0.04] blur-[80px]" />

              <div className="relative grid md:grid-cols-2">
                <div className="p-10 md:p-14">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#58a6ff]">Contact</p>
                  <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Let's build together<span className="gh-gradient-text">.</span></h2>
                  <p className="mt-4 text-sm text-[#c7d1de]">Open for opportunities in Flutter, mobile, and super-app development.</p>
                  <a href={`mailto:${portfolioData.email}`} className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#58a6ff] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#79c0ff]">
                    <Mail className="h-4 w-4" />Send Email
                  </a>
                </div>
                <div className="border-t border-[#21262d] p-10 md:border-l md:border-t-0 md:p-14">
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}` },
                      { icon: Phone, label: 'Phone', value: portfolioData.phone ?? '' },
                      { icon: MapPin, label: 'Address', value: portfolioData.address, href: mapsUrl },
                    ].map(item => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#30363d] bg-[#010409]"><item.icon className="h-3.5 w-3.5 text-[#9bacbf]" /></div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9bacbf]">{item.label}</p>
                          {item.href ? <a href={item.href} target="_blank" rel="noreferrer" className="text-sm text-[#c7d1de] transition hover:text-[#58a6ff]">{item.value}</a> : <p className="text-sm text-[#c7d1de]">{item.value}</p>}
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-[#21262d] pt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9bacbf]">Social</p>
                      <div className="mt-2 flex gap-2">
                        {[
                          { icon: Github, href: portfolioData.socials.github, label: 'GitHub' },
                          { icon: Linkedin, href: portfolioData.socials.linkedin, label: 'LinkedIn' },
                          { icon: Globe, href: portfolioData.socials.pubDev, label: 'Pub.dev' },
                        ].map(s => (
                          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-md border border-[#30363d] bg-[#010409] px-3 py-2 text-xs text-[#c7d1de] transition hover:border-[#58a6ff]/30 hover:text-[#58a6ff]">
                            <s.icon className="h-3.5 w-3.5" />{s.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </FadeIn>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-3 px-6 text-center">
          <span className="font-display text-sm font-bold text-white">Nam<span className="gh-gradient-text">.</span></span>
          <p className="text-sm text-[#9bacbf]">Designed & Developed with <span className="text-[#ff7b72]">❤️</span> by Nam</p>
          <p className="text-xs text-[#30363d]">© 2026 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
