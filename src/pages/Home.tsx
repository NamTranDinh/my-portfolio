import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { portfolioData } from '@/src/data/portfolioData';
import { Hero } from '../components/home/Hero';
import { CoreSkills } from '../components/home/CoreSkills';
import { CareerJourney } from '../components/home/CareerJourney';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { CTASection } from '../components/shared/CTASection';

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return (
    <>
      <Hero />
      <CoreSkills />
      <CareerJourney />
      <FeaturedProjects />
      <CTASection
        title="Ready to take your app to the next level?"
        subtitle="I specialize in building scalable, high-performance mobile ecosystems users love. Let's discuss how we can bring your next vision to life."
        primary={{ label: 'Email Me', href: `mailto:${portfolioData.email}` }}
        secondary={{ label: 'Connect on LinkedIn', href: portfolioData.socials.linkedin, external: true }}
      />
    </>
  );
}
