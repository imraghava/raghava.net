import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faBriefcase,
  faBrain,
  faGraduationCap,
  faArrowRight,
  faTools,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useSpotlight } from '../hooks/useScrollEffects';

const quickLinks = [
  { title: 'Email', value: 'imraghava@gmail.com', href: 'mailto:imraghava@gmail.com', icon: faEnvelope },
  { title: 'LinkedIn', value: 'linkedin.com/in/imraghava', href: 'https://www.linkedin.com/in/imraghava/', icon: faLinkedin },
  { title: 'GitHub', value: 'github.com/imraghava', href: 'https://github.com/imraghava', icon: faGithub },
  { title: 'X (Twitter)', value: '@imraghava', href: 'https://x.com/imraghava', icon: faTwitter },
  { title: 'Technical Blog', value: 'midwaythoughts.com', href: 'https://midwaythoughts.com/', icon: faGlobe },
  { title: 'Website', value: 'raghava.net', href: 'https://raghava.net/', icon: faBriefcase },
];

const detailCards = [
  {
    title: 'Professional Highlights',
    icon: faBriefcase,
    items: ['12+ years across enterprise software', 'Government & Fortune 500 delivery', 'Led 15+ developers and 100+ features'],
  },
  {
    title: 'Areas of Expertise',
    icon: faBrain,
    items: ['AI Engineering', 'Cloud Architecture', 'Distributed Systems', 'Enterprise .NET'],
  },
  {
    title: 'Certifications',
    icon: faTools,
    items: ['AZ-900', 'AZ-204', 'Harness CI Developer'],
  },
  {
    title: 'Education',
    icon: faGraduationCap,
    items: ['Ph.D. (Pursuing)', 'M.S. Computer Science', 'B.Tech'],
  },
];

const QuickLink = ({ title, value, href, icon, delay }) => {
  const external = href.startsWith('http');

  return (
    <Reveal delay={delay}>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="card group flex items-center gap-3.5 p-4"
      >
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-muted transition-all duration-300 group-hover:border-aqua/50 group-hover:text-aqua">
          <FontAwesomeIcon icon={icon} className="text-sm" />
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{title}</p>
          <p className="truncate text-sm font-medium text-ink">{value}</p>
        </div>
      </a>
    </Reveal>
  );
};

const DetailCard = ({ title, icon, items, delay }) => {
  const { ref, onMouseMove } = useSpotlight();

  return (
    <Reveal delay={delay}>
      <div ref={ref} onMouseMove={onMouseMove} className="card card--spotlight h-full p-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-iris/20 to-aqua/10 text-aqua">
            <FontAwesomeIcon icon={icon} className="text-sm" />
          </div>
          <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
        </div>
        <ul className="mt-5 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-aqua/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="noise relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="aurora">
        <div className="aurora__blob aurora__blob--iris animate-aurora-drift-slow" />
        <div className="aurora__blob aurora__blob--aqua animate-aurora-drift" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 — Contact"
          title="Let's build something extraordinary"
          lede="Open to AI engineering, cloud architecture, technical leadership, consulting, and speaking. I partner with teams building ambitious platforms and intelligent systems."
        />

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link, index) => (
            <QuickLink key={link.title} {...link} delay={(index % 3) * 80} />
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {detailCards.map((card, index) => (
            <DetailCard key={card.title} {...card} delay={(index % 2) * 100} />
          ))}
        </div>

        <Reveal delay={120}>
          <div className="glass mt-5 flex flex-col items-start gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                Have something in mind?
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                Whether it&apos;s an AI system, a cloud migration, or a .NET platform that needs to
                scale — I&apos;d like to hear about it.
              </p>
            </div>
            <a href="mailto:imraghava@gmail.com" className="btn-primary shrink-0">
              Let&apos;s connect
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
