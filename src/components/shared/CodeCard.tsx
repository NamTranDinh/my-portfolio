import { type ReactNode } from 'react';

export function CodeCard({ filename, lines, className = '' }: { filename: string; lines: ReactNode[]; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-[#0B1524] shadow-xl shadow-primary/20 ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-xs text-white/50">{filename}</span>
      </div>
      <div className="space-y-1 px-4 py-4 font-mono text-[13px] leading-relaxed text-white/85">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export function CodeKeyword({ children }: { children: ReactNode }) {
  return <span className="text-[#79C0FF]">{children}</span>;
}

export function CodeString({ children }: { children: ReactNode }) {
  return <span className="text-[#A5D6A7]">{children}</span>;
}
