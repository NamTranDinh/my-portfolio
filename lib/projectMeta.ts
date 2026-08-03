import {
  Briefcase,
  CreditCard,
  Search,
  Shield,
  Smartphone,
  Users,
  Wifi,
  Zap,
  Code2,
  Boxes,
  Cloud,
  Cpu,
  Database,
  Fingerprint,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Radio,
  Server,
  ShieldCheck,
  Terminal,
  Video,
  type LucideIcon,
} from 'lucide-react';

const base = import.meta.env.BASE_URL;
const img = (path: string) => `${base}${path.replace(/^\//, '')}`;

export const projectVisuals: Record<string, { icon: LucideIcon; image?: string }> = {
  unitel: { icon: Wifi, image: img('/images/projects/unitel.png') },
  vsale: { icon: Smartphone, image: img('/images/projects/vsale.png') },
  phoenix: { icon: CreditCard },
  'hapa-kristin': { icon: Search, image: img('/images/projects/hapa-kristin.png') },
  'smart-info': { icon: Shield, image: img('/images/projects/mbbank.png') },
  mymb: { icon: Zap, image: img('/images/projects/mbbank.png') },
  vcm360: { icon: Users, image: img('/images/projects/vcm360.png') },
  hellojob: { icon: Briefcase, image: img('/images/projects/hellojob.png') },
};

export const companyInfo: Record<string, { logo: string; url: string }> = {
  BES: { logo: img('/images/companies/bes.png'), url: 'https://besgroup.vn/' },
  'CMC Global': { logo: img('/images/companies/cmc-global.svg'), url: 'https://cmcglobal.com.vn/' },
  'AHT Tech': { logo: img('/images/companies/aht-tech.svg'), url: 'https://www.arrowhitech.com/' },
};

/** Short, non-fabricated 1-2 word paraphrase of each project's own `description` field. */
export const projectCategoryTag: Record<string, string> = {
  unitel: 'Super App',
  vsale: 'Sales System',
  phoenix: 'Financial',
  'hapa-kristin': 'E-Commerce',
  'smart-info': 'Enterprise',
  mymb: 'Super App',
  vcm360: 'HR Platform',
  hellojob: 'Job Platform',
};

const techIconRules: Array<{ match: RegExp; icon: LucideIcon }> = [
  { match: /flutter|dart/i, icon: Layers },
  { match: /firebase|s3|cloud|aws|azure|gcp|alibaba/i, icon: Cloud },
  { match: /docker|jenkins|ci\/?cd|argo|gitlab/i, icon: GitBranch },
  { match: /socket|mqtt|kafka|realtime/i, icon: Radio },
  { match: /ekyc|nfc|biometric/i, icon: Fingerprint },
  { match: /auth|sso|security|encrypt/i, icon: Lock },
  { match: /video|call/i, icon: Video },
  { match: /spring|java|\.net|c#/i, icon: Server },
  { match: /react|javascript|vue/i, icon: Code2},
  { match: /kotlin|swift|objective-c|native/i, icon: Cpu },
  { match: /elastic|search|database|sql/i, icon: Database },
  { match: /micro-?app|module|architecture/i, icon: Boxes },
  { match: /web|globe|maps/i, icon: Globe },
  { match: /pentest|compliance|pam/i, icon: ShieldCheck },
];

export function techIcon(name: string): LucideIcon {
  const rule = techIconRules.find((r) => r.match.test(name));
  return rule?.icon ?? Terminal;
}

/**
 * Keyword-matches free-text (responsibilities/achievements) against a fixed
 * vocabulary of real skills so Experience-page tag pills only ever show
 * skills that already exist in portfolioData, never invented labels.
 */
export function extractTags(texts: string[], vocab: string[], limit = 5): string[] {
  const haystack = texts.join(' ').toLowerCase();
  const matched = vocab.filter((term) => haystack.includes(term.toLowerCase()));
  return matched.slice(0, limit);
}
