import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">404</p>
      <h1 className="text-3xl font-semibold text-primary">Page not found</h1>
      <p className="max-w-md text-sm text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link to="/" className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
    </section>
  );
}
