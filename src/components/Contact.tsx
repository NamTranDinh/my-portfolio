import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/src/data/portfolioData';
import { Mail, MapPin, Send, Github, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                Let's <span className="text-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                    <a href={`mailto:${portfolioData.email}`} className="text-xl font-bold hover:text-primary transition-colors">
                      {portfolioData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                    <a href={`tel:${portfolioData.phone}`} className="text-xl font-bold hover:text-primary transition-colors">
                      {portfolioData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                    <p className="text-xl font-bold">{portfolioData.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-500">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-500">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-14 rounded-2xl bg-background/50 border border-white/10 px-6 focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full h-14 rounded-2xl bg-background/50 border border-white/10 px-6 focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                  <textarea
                    placeholder="How can I help you?"
                    rows={5}
                    className="w-full rounded-2xl bg-background/50 border border-white/10 px-6 py-4 focus:outline-none focus:border-primary/50 transition-all resize-none"
                  />
                </div>
                <Button className="w-full h-14 rounded-2xl text-lg font-bold group shadow-xl shadow-primary/20">
                  Send Message
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
