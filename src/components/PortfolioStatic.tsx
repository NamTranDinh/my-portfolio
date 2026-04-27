import { portfolioData } from '@/src/data/portfolioData';
import type { Project } from '@/src/data/portfolioData';
import {
  ArrowUpRight, Award, Briefcase, CalendarDays, Code2, CreditCard, Download,
  Github, Globe, GraduationCap, Linkedin, type LucideIcon, Mail, MapPin, Menu,
  Phone, Play, Search, Shield, Smartphone, Sparkles, Users, Wifi, X,
  Clock, Image as ImageIcon, Film, Lightbulb, Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { type HTMLAttributes, type ReactNode, useEffect, useState } from 'react';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';

/* ── Looping background videos (cinematic, royalty-free) ── */
const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4';
const CAP_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';

/* ── Animation ── */
function FadeIn({ children, className = '', delay = 0, ...rest }: { children: ReactNode; className?: string; delay?: number } & HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
      {...rest}
    >
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

const projectVisuals: Record<string, { icon: LucideIcon; logo?: string }> = {
  unitel: { icon: Wifi, logo: img('/images/projects/unitel.png') },
  vsale: { icon: Smartphone, logo: img('/images/projects/vsale.png') },
  phoenix: { icon: CreditCard },
  'hapa-kristin': { icon: Search, logo: img('/images/projects/hapa-kristin.png') },
  'smart-info': { icon: Shield, logo: img('/images/projects/mbbank.png') },
  mymb: { icon: Zap, logo: img('/images/projects/mbbank.png') },
  vcm360: { icon: Users, logo: img('/images/projects/vcm360.png') },
  hellojob: { icon: Briefcase, logo: img('/images/projects/hellojob.png') },
};

const companyInfo: Record<string, { logo: string; url: string }> = {
  BES: { logo: img('/images/companies/bes.png'), url: 'https://besgroup.vn/' },
  'CMC Global': { logo: img('/images/companies/cmc-global.svg'), url: 'https://cmcglobal.com.vn/' },
  'AHT Tech': { logo: img('/images/companies/aht-tech.svg'), url: 'https://www.arrowhitech.com/' },
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Works', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

/* ── Shared bits ── */
/* ── Apple-style liquid-glass nav pill with scroll-spy + sliding mirror highlight ── */
function NavPill({ items, ctaUrl }: { items: { label: string; href: string }[]; ctaUrl: string }) {
  // Empty initial active = no highlight while on hero (no section matches).
  const [active, setActive] = useState<string>('');
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    // Trigger line at 28% of viewport height from top.
    // Active = whichever section's vertical range contains that line.
    // No match (in hero / past last section) → empty string → no highlight.
    const sync = () => {
      const triggerY = window.innerHeight * 0.28;
      let next = '';
      for (const it of items) {
        const el = document.querySelector(it.href);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          next = it.href;
          break;
        }
      }
      setActive((prev: string) => (prev === next ? prev : next));
    };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [items]);

  const focused = hovered ?? active;

  return (
    <nav
      className="liquid-glass hidden rounded-full p-1 lg:flex lg:items-center lg:gap-0.5"
      onMouseLeave={() => setHovered(null)}
    >
      {items.map((n) => {
        const isFocused = focused === n.href;
        return (
          <a
            key={n.href}
            href={n.href}
            onMouseEnter={() => setHovered(n.href)}
            onClick={() => setActive(n.href)}
            className="relative isolate flex-none rounded-full px-4 py-2 text-sm font-body font-medium"
          >
            {isFocused && (
              <motion.span
                layoutId="nav-mirror"
                className="liquid-mirror absolute inset-0 -z-10 rounded-full"
                transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.7 }}
                aria-hidden
              />
            )}
            <span className={`relative transition-colors duration-200 ${isFocused ? 'text-white' : 'text-white/65 hover:text-white/95'}`}>
              {n.label}
            </span>
          </a>
        );
      })}
      <a
        href={ctaUrl}
        target="_blank"
        rel="noreferrer"
        className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-body font-medium text-black whitespace-nowrap transition hover:bg-white/90"
      >
        Hire Me
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </nav>
  );
}

function GlassTag({ children, className = '', ...rest }: { children: ReactNode; className?: string } & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...rest} className={`liquid-glass rounded-full bg-white/[0.06] px-3.5 py-1.5 text-xs text-white font-body font-light whitespace-nowrap ${className}`}>
      {children}
    </span>
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" onClick={onClose}>
      <motion.div className="absolute inset-0 bg-black/90 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
      <motion.div
        className="relative flex max-h-[92vh] w-full max-w-[min(94vw,1120px)] flex-col overflow-hidden rounded-[28px] bg-[#0c0c0c]"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        style={{ boxShadow: '0 40px 120px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)' }}
      >
        {/* Close button — fixed, always visible */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header — distinctive treatment with subtle gradient backdrop */}
        <div
          className="relative shrink-0 px-6 py-7 md:px-10 md:py-9"
          style={{
            background:
              'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.06), transparent 50%), radial-gradient(circle at 100% 0%, rgba(255,255,255,0.04), transparent 45%)',
          }}
        >
          <p className="text-[10px] font-body uppercase tracking-[0.4em] text-white/50">Selected Work</p>
          <div className="mt-4 flex items-start gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[1.25rem] bg-white/[0.06] p-3 ring-1 ring-white/10 md:h-24 md:w-24">
              {v?.logo ? (
                <img src={v.logo} alt={`${project.name} logo`} className="h-full w-full object-contain" />
              ) : (
                <Icon className="h-10 w-10 text-white" />
              )}
            </div>
            <div className="min-w-0 flex-1 pr-12 md:pr-16">
              <h3 className="font-heading text-4xl text-white tracking-[-1.5px] leading-[0.95] md:text-5xl">
                {project.name}
              </h3>
              <p className="mt-2 text-sm font-body font-light text-white/70 md:text-base">{project.company}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-body font-medium text-black">
                  <Briefcase className="h-3 w-3" />{project.role}
                </span>
                <GlassTag><span className="inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" />{project.time}</span></GlassTag>
                <GlassTag><span className="inline-flex items-center gap-1"><Users className="h-3 w-3" />{project.teamSize}</span></GlassTag>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="grid flex-1 grid-cols-1 gap-0 overflow-y-auto md:grid-cols-[1.1fr_0.9fr]">
          {/* Left column: description + highlight + responsibilities */}
          <div className="border-t border-white/10 px-6 py-7 md:border-r md:px-10 md:py-9">
            <p className="text-[10px] font-body uppercase tracking-[0.32em] text-white/50">About</p>
            <p className="mt-4 text-base font-body font-light leading-7 text-white/95">{project.description}</p>

            <div className="mt-7 rounded-[18px] bg-white/[0.05] p-5 ring-1 ring-white/10">
              <div className="flex items-center gap-2 text-[10px] font-body uppercase tracking-[0.32em] text-white/60">
                <Sparkles className="h-3.5 w-3.5" />Highlight
              </div>
              <p className="mt-3 text-base font-body font-light leading-7 text-white">{project.highlight}</p>
            </div>

            <div className="mt-7">
              <p className="text-[10px] font-body uppercase tracking-[0.32em] text-white/50">Responsibilities</p>
              <ul className="mt-4 space-y-3">
                {project.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm font-body font-light leading-7 text-white/90">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.platform.length > 0 && (
              <div className="mt-7">
                <p className="text-[10px] font-body uppercase tracking-[0.32em] text-white/50">Platforms</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.platform.map((item) => <GlassTag key={item}>{item}</GlassTag>)}
                </div>
              </div>
            )}
          </div>

          {/* Right column: stack info */}
          <div className="space-y-7 border-t border-white/10 px-6 py-7 md:px-10 md:py-9">
            <div>
              <p className="text-[10px] font-body uppercase tracking-[0.32em] text-white/50">Technologies</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((t) => <GlassTag key={t}>{t}</GlassTag>)}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-body uppercase tracking-[0.32em] text-white/50">Languages</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.languages.map((l) => <GlassTag key={l}>{l}</GlassTag>)}
              </div>
            </div>

            {project.modules && project.modules.length > 0 && (
              <div>
                <p className="text-[10px] font-body uppercase tracking-[0.32em] text-white/50">Modules</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.modules.map((m) => <GlassTag key={m}>{m}</GlassTag>)}
                </div>
              </div>
            )}

            {project.links && (project.links.web || project.links.googlePlay || project.links.appStore) && (
              <div>
                <p className="text-[10px] font-body uppercase tracking-[0.32em] text-white/50">Links</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.links.web && (
                    <a href={project.links.web} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] px-4 py-2 text-xs font-body font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15">
                      Web<ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.links.googlePlay && (
                    <a href={project.links.googlePlay} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] px-4 py-2 text-xs font-body font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15">
                      Google Play<ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.links.appStore && (
                    <a href={project.links.appStore} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] px-4 py-2 text-xs font-body font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15">
                      App Store<ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
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

  const experienceStartDate = new Date(2022, 4, 1);
  const today = new Date();
  const diffMs = Math.max(0, today.getTime() - experienceStartDate.getTime());
  const rawYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  const roundedYears = Math.ceil(rawYears * 2) / 2;
  const yearsText = Number.isInteger(roundedYears)
    ? roundedYears.toFixed(0)
    : roundedYears.toFixed(1).replace('.', ',');
  const yearsStatText = `${yearsText}+`;

  const partners = ['AHT Tech', 'CMC Global', 'BES', 'Viettel', 'MB Bank'];

  return (
    <div className="min-h-screen bg-black text-white font-body">
      {/* ── HERO (full viewport, looping video bg) ── */}
      <section className="relative h-screen min-h-[760px] overflow-hidden bg-black">
        {/* Background video — 120% width/height, top-aligned */}
        <FadingVideo
          src={HERO_VIDEO}
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: '120%', height: '120%' }}
        />

        {/* Top navbar */}
        <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-16">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3">
            {/* Logo */}
            <a href="#top" className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full">
              <span className="font-heading text-2xl text-white leading-none translate-y-[-1px]">n</span>
            </a>

            {/* Desktop center pill — Apple-style liquid mirror with scroll-spy */}
            <NavPill items={navItems} ctaUrl={cvUrl} />

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Right spacer (desktop, balances logo) */}
            <div className="hidden h-12 w-12 lg:block" />
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="liquid-glass mx-auto mt-3 max-w-[1400px] rounded-[1.25rem] p-4 lg:hidden">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm font-body font-medium text-white/90"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-body font-medium text-black"
              >
                Hire Me<ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </header>

        {/* Hero centered content */}
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center">
            {/* Badge */}
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="liquid-glass mb-6 inline-flex items-center gap-2 rounded-full pr-3"
            >
              <span className="rounded-full bg-white px-3 py-1 text-xs font-body font-semibold text-black">New</span>
              <span className="text-sm font-body text-white/90">Available for new opportunities · 2026</span>
            </motion.div>

            {/* Headline (BlurText) */}
            <BlurText
              text="Crafting Mobile Worlds Across Every Platform"
              className="font-heading text-white leading-[0.85] tracking-[-4px] max-w-3xl text-6xl md:text-7xl lg:text-[5.5rem]"
              delay={0.1}
            />

            {/* Subheading */}
            <motion.p
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
              className="mt-5 max-w-2xl text-sm font-body font-light leading-tight text-white md:text-base"
            >
              Hi, I&apos;m {portfolioData.name} — a Flutter developer shipping native-feeling mobile and super-app experiences for enterprise teams. {yearsStatText} years building, releasing, and supporting production apps.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
              className="mt-7 flex items-center gap-6"
            >
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-body font-medium text-white"
              >
                Download My CV
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-body font-medium text-white"
              >
                View Selected Works
                <Play className="h-4 w-4" fill="currentColor" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
              className="mt-9 flex items-stretch gap-4"
            >
              <div className="liquid-glass w-[220px] rounded-[1.25rem] p-5">
                <div className="flex h-7 w-7 items-center justify-center text-white">
                  <Clock className="h-7 w-7" strokeWidth={1.4} />
                </div>
                <p className="mt-3 font-heading text-4xl text-white tracking-[-1px] leading-none">{yearsStatText} Years</p>
                <p className="mt-2 text-xs font-body font-light text-white">Shipping production mobile apps</p>
              </div>
              <div className="liquid-glass w-[220px] rounded-[1.25rem] p-5">
                <div className="flex h-7 w-7 items-center justify-center text-white">
                  <Globe className="h-7 w-7" strokeWidth={1.4} />
                </div>
                <p className="mt-3 font-heading text-4xl text-white tracking-[-1px] leading-none">{portfolioData.stats.projectsCompleted}+ Apps</p>
                <p className="mt-2 text-xs font-body font-light text-white">Across enterprise & super-apps</p>
              </div>
            </motion.div>
          </div>

          {/* Partners row */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.4 }}
            className="flex flex-col items-center gap-4 pb-8"
          >
            <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body font-medium text-white">
              Trusted by leading enterprise & telecom teams
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {partners.map((p) => (
                <span key={p} className="font-heading text-2xl tracking-tight text-white md:text-3xl">
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CAPABILITIES (Skills, second video bg) ── */}
      <section id="capabilities" className="relative min-h-screen overflow-hidden bg-black">
        <FadingVideo src={CAP_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-8 pb-10 pt-24 md:px-16 lg:px-20">
          <div className="mb-auto">
            <p className="mb-6 text-sm font-body text-white/80">// Capabilities</p>
            <h2 className="font-heading italic text-white text-6xl leading-[0.9] tracking-[-3px] md:text-7xl lg:text-[6rem]">
              Mobile delivery,<br />evolved
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Cross-Platform Craft',
                body: 'Flutter at the core, with native bridges into Android (Java/Kotlin) and iOS (Swift). One codebase that still feels native on every device.',
                icon: ImageIcon,
                tags: ['Flutter', 'Bloc / Provider', 'Platform Channels', 'Native Modules'],
              },
              {
                title: 'Super-App Architecture',
                body: 'Mini-app runtimes, sandboxed sub-apps, inter-app messaging and permission scoping — built and shipped at telecom and banking scale.',
                icon: Film,
                tags: ['Mini Apps', 'Modularization', 'Clean Architecture', 'CI/CD'],
              },
              {
                title: 'Native Integrations',
                body: 'Camera, NFC, eKYC, video calling, deep links, Firebase, Insider, and cloud SDKs (AWS, GCP, Alibaba) integrated end-to-end with care.',
                icon: Lightbulb,
                tags: ['NFC / eKYC', 'Video SDK', 'Firebase', 'Cloud SDKs'],
              },
            ].map((card) => (
              <FadeIn key={card.title}>
                <div className="liquid-glass flex min-h-[360px] flex-col rounded-[1.25rem] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="liquid-glass flex h-11 w-11 items-center justify-center rounded-[0.75rem]">
                      <card.icon className="h-6 w-6 text-white" strokeWidth={1.6} />
                    </div>
                    <div className="flex max-w-[70%] flex-wrap justify-end gap-1.5">
                      {card.tags.map((t) => (
                        <GlassTag key={t}>{t}</GlassTag>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1" />

                  <div className="mt-6">
                    <h3 className="font-heading text-3xl text-white tracking-[-1px] leading-none md:text-4xl">{card.title}</h3>
                    <p className="mt-3 max-w-[32ch] text-sm font-body font-light leading-snug text-white/90">{card.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative bg-black px-4 py-24 md:px-8 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="mb-6 text-sm font-body text-white/80">// About</p>
            <h2 className="font-heading text-white text-6xl leading-[0.9] tracking-[-3px] md:text-7xl lg:text-[5.5rem]">
              A product-minded<br />engineer
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
            <FadeIn>
              <div className="liquid-glass rounded-[1.25rem] p-6 md:p-8">
                <p className="text-base font-body font-light leading-7 text-white/90">{portfolioData.about}</p>
                <div className="mt-6">
                  <p className="font-heading text-2xl leading-tight text-white md:text-3xl">
                    {portfolioData.careerGoal.includes('Product Manager') ? (
                      <>
                        {portfolioData.careerGoal.split('Product Manager')[0]}
                        <span className="gh-gradient-gold">Product Manager</span>
                        {portfolioData.careerGoal.split('Product Manager')[1]}
                      </>
                    ) : (
                      <span className="gh-gradient-gold">{portfolioData.careerGoal}</span>
                    )}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-3">
                {[
                  { icon: Phone, label: portfolioData.phone ?? '' },
                  { icon: Mail, label: portfolioData.email },
                  { icon: MapPin, label: portfolioData.address, href: mapsUrl },
                  { icon: CalendarDays, label: `Born ${portfolioData.dateOfBirth}` },
                ].map((item) => (
                  <div key={item.label} className="liquid-glass flex items-center gap-3 rounded-[1rem] px-4 py-3 text-sm font-body font-light text-white/90">
                    <item.icon className="h-4 w-4 shrink-0 text-white" />
                    {item.href ? <a href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-white">{item.label}</a> : item.label}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="relative bg-black px-4 py-24 md:px-8 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="mb-6 text-sm font-body text-white/80">// Experience</p>
            <h2 className="font-heading text-white text-6xl leading-[0.9] tracking-[-3px] md:text-7xl lg:text-[5.5rem]">
              Career timeline
            </h2>
          </FadeIn>

          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-white/55 via-white/15 to-transparent md:hidden" />
            <div className="absolute bottom-0 left-[108px] top-0 hidden w-px bg-gradient-to-b from-white/55 via-white/15 to-transparent md:block" />

            {portfolioData.experience.map((item, index) => {
              const company = companyInfo[item.company];
              const current = index === 0;
              const [periodStart, periodEnd = 'Present'] = item.period.split(' - ');

              const card = (
                <a
                  href={company?.url ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="liquid-glass group/company block overflow-hidden rounded-[1.25rem] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative p-5 md:p-6">
                    <div className="grid gap-5 lg:grid-cols-[1fr_220px] lg:items-start lg:gap-8">
                      <div className="flex items-start gap-4 md:gap-5">
                        {company?.logo ? (
                          <div className="liquid-glass flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem] bg-white p-2.5">
                            <img src={company.logo} alt="" className="h-full w-full object-contain" />
                          </div>
                        ) : (
                          <div className="liquid-glass flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem]">
                            <Briefcase className="h-6 w-6 text-white" />
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-heading text-2xl text-white tracking-[-1px] leading-none md:text-[2rem]">{item.company}</p>
                            {current && (
                              <span className="liquid-glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-body font-medium text-white">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />NOW
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-sm font-body uppercase tracking-[0.22em] text-white/70">{item.role}</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 lg:justify-end lg:text-right">
                        <div>
                          <p className="text-[11px] font-body uppercase tracking-[0.26em] text-white/60">Timeline</p>
                          <p className="mt-2 font-heading text-xl text-white">{item.period}</p>
                        </div>
                        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/60 transition-all duration-300 group-hover/company:-translate-y-0.5 group-hover/company:translate-x-0.5 group-hover/company:text-white" />
                      </div>
                    </div>

                    <div className="relative mt-6 grid gap-5 border-t border-white/10 pt-5 lg:grid-cols-[1fr_0.85fr] lg:gap-8">
                      <div>
                        <p className="mb-3 text-[11px] font-body uppercase tracking-[0.26em] text-white/60">Responsibilities</p>
                        <div className="space-y-2.5">
                          {item.responsibilities.map((r) => (
                            <p key={r} className="flex gap-2.5 text-sm font-body font-light leading-relaxed text-white/85">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />{r}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <p className="text-[11px] font-body uppercase tracking-[0.26em] text-white/60">Highlights</p>
                        {item.achievements.map((a) => (
                          <div key={a} className="liquid-glass flex gap-2.5 rounded-[1rem] px-4 py-3">
                            <Award className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                            <p className="text-[13px] font-body font-light leading-6 text-white/90">{a}</p>
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
                    <span className="liquid-glass mb-2 inline-flex rounded-full px-3 py-1 text-xs font-body font-medium text-white">
                      <CalendarDays className="mr-1.5 h-3 w-3" />{item.period}
                    </span>
                    <div className="absolute left-5 top-8 z-10 -translate-x-1/2">
                      <div className={`h-3 w-3 rounded-full border-2 border-black ${current ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]' : 'bg-white/40'}`} />
                    </div>
                    {card}
                  </div>

                  <div className="hidden md:grid md:grid-cols-[108px_1fr]">
                    <div className="pt-6 pr-6 text-right">
                      <p className="font-heading text-lg text-white">{periodStart}</p>
                      <p className="mt-1 text-sm font-body font-light text-white/70">{periodEnd}</p>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-8 z-10 -translate-x-1/2">
                        <div className={`h-3 w-3 rounded-full border-2 border-black ${current ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]' : 'bg-white/40'}`} />
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

      {/* ── PROJECTS ── */}
      <section id="projects" className="relative bg-black px-4 py-24 md:px-8 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="mb-6 text-sm font-body text-white/80">// Selected Works</p>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <h2 className="font-heading text-white text-6xl leading-[0.9] tracking-[-3px] md:text-7xl lg:text-[5.5rem]">
                Projects as<br />stories
              </h2>
              <p className="max-w-lg text-sm font-body font-light leading-7 text-white/80 lg:justify-self-end lg:text-right">
                Hover or open a row to inspect the stack, role, and impact. The layout reads like a curated sequence — sparse on purpose.
              </p>
            </div>
          </FadeIn>

          <div className="liquid-glass mt-12 rounded-[1.25rem] px-5 md:px-8">
            {portfolioData.projects.map((project, index) => {
              const tags = project.technologies.slice(0, 3);

              return (
                <FadeIn key={project.id} className="group border-b border-white/10 last:border-b-0" delay={index * 0.05}>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="grid w-full gap-4 px-0 py-6 text-left transition duration-300 hover:translate-x-1 lg:grid-cols-[80px_minmax(0,1fr)_300px] lg:items-center lg:gap-10 lg:py-8"
                  >
                    <div className="font-heading text-3xl text-white/60 md:text-4xl">{String(index + 1).padStart(2, '0')}</div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="font-heading text-3xl text-white tracking-[-1px] leading-none md:text-5xl">{project.name}</h3>
                        <span className="text-[11px] font-body uppercase tracking-[0.28em] text-white/60">{project.company}</span>
                      </div>
                      <p className="mt-3 max-w-3xl text-sm font-body font-light leading-7 text-white/85 md:text-base">{project.highlight}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <GlassTag><span className="inline-flex items-center gap-1"><Briefcase className="h-3 w-3" />{project.role}</span></GlassTag>
                        <GlassTag><span className="inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" />{project.time}</span></GlassTag>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:items-end">
                      <div className="flex flex-wrap gap-1.5 lg:justify-end">
                        {tags.map((tag) => <GlassTag key={tag}>{tag}</GlassTag>)}
                        {project.technologies.length > tags.length && (
                          <GlassTag>+{project.technologies.length - tags.length}</GlassTag>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-white/70 transition group-hover:text-white">
                        <span className="text-xs font-body uppercase tracking-[0.28em]">View</span>
                        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </button>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SKILLS ── */}
      <section id="skills" className="relative bg-black px-4 py-24 md:px-8 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="mb-6 text-sm font-body text-white/80">// Stack</p>
            <h2 className="font-heading text-white text-6xl leading-[0.9] tracking-[-3px] md:text-7xl lg:text-[5.5rem]">
              Technical<br />expertise
            </h2>
          </FadeIn>

          <div className="liquid-glass mt-12 rounded-[1.25rem] bg-white/[0.03] p-5 md:p-8">
            {portfolioData.skills.map((group, i) => (
              <FadeIn key={group.category} delay={i * 0.05}>
                <div className="grid gap-4 border-b border-white/10 py-6 last:border-b-0 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-8 lg:py-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-3xl text-white/35 leading-none">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-body text-lg font-medium text-white leading-tight md:text-xl">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((s) => <GlassTag key={s}>{s}</GlassTag>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-8">
            <div className="liquid-glass rounded-[1.25rem] bg-white/[0.03] p-5 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] font-body uppercase tracking-[0.26em] text-white/60">Technical profile</p>
                  <h3 className="mt-2 font-heading text-2xl text-white tracking-[-1px] leading-none md:text-3xl">Stack snapshot</h3>
                </div>
                <p className="max-w-xl text-sm font-body font-light leading-7 text-white/80">A compact inventory of tools, architecture and delivery practices I use across product teams.</p>
              </div>

              <div className="mt-6 grid gap-3">
                {portfolioData.technicalSkillsTable.map((row) => (
                  <div key={row.category} className="liquid-glass grid gap-3 rounded-[1rem] bg-white/[0.04] px-4 py-4 lg:grid-cols-[200px_1fr] lg:gap-6 lg:px-5">
                    <p className="text-xs font-body font-medium uppercase tracking-[0.2em] text-white/85">{row.category}</p>
                    <p className="text-sm font-body font-light leading-7 text-white">{row.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="relative bg-black px-4 py-24 md:px-8 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="mb-6 text-sm font-body text-white/80">// Education</p>
            <h2 className="font-heading text-white text-6xl leading-[0.9] tracking-[-3px] md:text-7xl lg:text-[5.5rem]">
              Training & recognition
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {portfolioData.education.map((entry) => (
              <FadeIn key={entry.institution}>
                <div className="liquid-glass rounded-[1.25rem] p-6">
                  <div className="flex items-center gap-4">
                    {entry.institution.toLowerCase().includes('aptech') ? (
                      <img
                        src={aptechLogoUrl}
                        alt="Aptech logo"
                        className="h-11 w-auto max-w-[180px] object-contain opacity-95"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    ) : (
                      <div className="liquid-glass flex h-11 w-11 items-center justify-center rounded-[1rem]"><GraduationCap className="h-5 w-5 text-white" /></div>
                    )}
                    <div>
                      <h3 className="font-heading text-2xl text-white tracking-[-1px] leading-none md:text-3xl">{entry.institution}</h3>
                      <p className="mt-2 text-xs font-body uppercase tracking-[0.24em] text-white/60">{entry.period}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {entry.details.map((d) => <li key={d} className="flex gap-2 text-sm font-body font-light leading-7 text-white/85"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />{d}</li>)}
                  </ul>
                  {entry.certificate && <p className="liquid-glass mt-5 rounded-[1rem] px-4 py-3 text-sm font-body font-light leading-7 text-white/90">{entry.certificate}</p>}
                  {entry.award && <div className="liquid-glass mt-3 flex gap-2 rounded-[1rem] px-4 py-3"><Award className="mt-0.5 h-4 w-4 shrink-0 text-white" /><p className="text-sm font-body font-light leading-7 text-white/90">{entry.award}</p></div>}
                </div>
              </FadeIn>
            ))}

            <FadeIn>
              <div className="liquid-glass rounded-[1.25rem] p-6">
                <h3 className="font-heading text-2xl text-white tracking-[-1px] leading-none md:text-3xl">Achievements</h3>
                <ul className="mt-5 space-y-3">
                  {portfolioData.achievements.map((a) => (
                    <li key={a} className="liquid-glass flex gap-2 rounded-[1rem] px-4 py-3 text-sm font-body font-light leading-7 text-white/90">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-white" />{a}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative bg-black px-4 py-24 md:px-8 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="mb-6 text-sm font-body text-white/80">// Contact</p>
          </FadeIn>

          <div className="liquid-glass grid gap-5 rounded-[1.25rem] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <FadeIn>
              <div className="liquid-glass relative overflow-hidden rounded-[1.25rem] p-6 md:p-8">
                <h2 className="font-heading text-white text-5xl leading-[0.9] tracking-[-2px] md:text-6xl lg:text-[5rem]">
                  Let&apos;s build<br />together
                </h2>
                <p className="mt-5 max-w-xl text-sm font-body font-light leading-7 text-white/85 md:text-base">
                  Open for opportunities in Flutter, mobile and super-app development. If you need someone who can ship with product thinking, let&apos;s talk.
                </p>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="liquid-glass-strong mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-body font-medium text-white"
                >
                  <Mail className="h-4 w-4" />Send email
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid gap-3 self-start">
                {[
                  { icon: Mail, label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}` },
                  { icon: Phone, label: 'Phone', value: portfolioData.phone ?? '' },
                  { icon: MapPin, label: 'Address', value: portfolioData.address, href: mapsUrl },
                ].map((item) => (
                  <div key={item.label} className="liquid-glass flex items-center gap-3 rounded-[1rem] px-4 py-4">
                    <div className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full"><item.icon className="h-4 w-4 text-white" /></div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-body uppercase tracking-[0.32em] text-white/60">{item.label}</p>
                      {item.href ? <a href={item.href} target="_blank" rel="noreferrer" className="mt-1 block truncate text-sm font-body font-light text-white transition hover:text-white/80">{item.value}</a> : <p className="mt-1 text-sm font-body font-light text-white">{item.value}</p>}
                    </div>
                  </div>
                ))}

                <div className="liquid-glass rounded-[1rem] px-4 py-4">
                  <p className="text-[10px] font-body uppercase tracking-[0.32em] text-white/60">Social</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { icon: Github, href: portfolioData.socials.github, label: 'GitHub' },
                      { icon: Linkedin, href: portfolioData.socials.linkedin, label: 'LinkedIn' },
                      { icon: Globe, href: portfolioData.socials.pubDev, label: 'Pub.dev' },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="liquid-glass inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-body text-white">
                        <s.icon className="h-3.5 w-3.5" />{s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-3 px-6 text-center">
          <span className="font-heading text-2xl text-white">{portfolioData.name}</span>
          <p className="text-sm font-body font-light text-white/70">Designed & developed with motion, contrast, and clarity.</p>
          <p className="text-xs font-body text-white/40">© 2026 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
