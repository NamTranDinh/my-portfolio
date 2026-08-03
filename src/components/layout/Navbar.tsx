import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const cvUrl = 'https://docs.google.com/document/d/1DgD3Q7C4jAC1WF4Il195zXL8jNVFMJse2WyTPQqSBhE/edit?tab=t.vspq59j4bol0';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to: string) => {
    if (to === '/#skills') return false;
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-lg font-semibold tracking-tight text-primary">
          Nam.dev
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-sm font-medium transition-colors ${
                isActive(item.to) ? 'text-primary underline underline-offset-8' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={cvUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 lg:inline-flex"
        >
          Download CV
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Download CV<ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
