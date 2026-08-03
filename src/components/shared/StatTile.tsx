import { type LucideIcon } from 'lucide-react';

export function StatTile({
  icon: Icon,
  value,
  label,
  tone = 'light',
  size = 'lg',
}: { icon?: LucideIcon; value: string; label: string; tone?: 'light' | 'dark'; size?: 'lg' | 'sm' }) {
  const isDark = tone === 'dark';
  const valueClass = size === 'lg' ? 'text-2xl md:text-3xl' : 'text-base md:text-lg leading-snug';
  return (
    <div
      className={`rounded-2xl px-6 py-5 text-center ${isDark ? 'bg-primary/5 ring-1 ring-primary/10' : 'card-surface rounded-2xl'}`}
    >
      {Icon && <Icon className="mx-auto mb-2 h-5 w-5 text-primary" strokeWidth={1.6} />}
      <p className={`font-semibold tracking-tight text-primary ${valueClass}`}>{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
    </div>
  );
}
