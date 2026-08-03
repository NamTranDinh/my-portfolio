import { Send } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { portfolioData } from '@/src/data/portfolioData';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailto = `mailto:${portfolioData.email}?subject=${encodeURIComponent(form.subject || 'Project Inquiry / Collaboration')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="card-surface rounded-2xl p-6 md:p-8">
      <h2 className="text-lg font-semibold text-foreground">Send a Message</h2>
      <p className="mt-1 text-sm text-muted-foreground">I typically respond within 24 hours.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Full Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="John Doe"
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Email Address</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="john@example.com"
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Subject</label>
          <input
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder="Project Inquiry / Collaboration"
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Message</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me about your project or goal..."
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Send Message
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
