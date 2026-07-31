import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const roles = [
  'AI Engineer',
  'Lead Full Stack .NET Developer',
  'Azure Solution Architect',
  'Researcher & Ph.D. Scholar',
];

const socialMediaLinks = [
  { href: 'https://www.linkedin.com/in/imraghava/', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/imraghava', icon: faGithub, label: 'GitHub' },
  { href: 'https://x.com/imraghava', icon: faTwitter, label: 'X' },
  { href: 'https://midwaythoughts.com/', icon: faGlobe, label: 'Blog' },
  { href: 'mailto:imraghava@gmail.com', icon: faEnvelope, label: 'Email' },
];

const stats = [
  { value: '12+', label: 'Years building' },
  { value: '15+', label: 'Engineers led' },
  { value: '100+', label: 'Features shipped' },
  { value: '2', label: 'Publications' },
];

const Home = () => {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="noise relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
      <div className="aurora">
        <div className="aurora__blob aurora__blob--iris animate-aurora-drift" />
        <div className="aurora__blob aurora__blob--aqua animate-aurora-drift-slow" />
        <div className="aurora__blob aurora__blob--blush animate-aurora-drift" />
      </div>
      <div className="grid-field" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Availability pill */}
        <div className="animate-role-in mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75 animate-pulse-ring" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Available for new work
          </span>
        </div>

        <p
          className="animate-role-in font-mono text-sm tracking-[0.2em] text-faint"
          style={{ animationDelay: '80ms' }}
        >
          HELLO, I&apos;M
        </p>

        <h1
          className="animate-role-in mt-5 font-display text-[13vw] font-bold leading-[0.95] tracking-tightest sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          style={{ animationDelay: '160ms' }}
        >
          <span className="text-gradient">Raghava Mahankali</span>
        </h1>

        {/* Rotating role — each swap animates in on its own key. */}
        <div
          className="animate-role-in mt-6 flex h-9 items-center justify-center overflow-hidden"
          style={{ animationDelay: '240ms' }}
        >
          <span className="font-mono text-sm text-faint sm:text-base">&gt;&nbsp;</span>
          <span
            key={activeRole}
            className="animate-role-in font-mono text-sm font-medium text-aqua sm:text-base"
          >
            {roles[activeRole]}
          </span>
          <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-caret bg-aqua align-middle" />
        </div>

        <p
          className="animate-role-in mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: '320ms' }}
        >
          I build <span className="text-ink">enterprise AI systems</span> and{' '}
          <span className="text-ink">cloud-native platforms</span> — production RAG pipelines, agentic
          workflows, and large-scale .NET architecture that hold up under real load.
        </p>

        <div
          className="animate-role-in mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: '400ms' }}
        >
          <a href="#projects" className="btn-primary">
            View my work
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </div>

        <div
          className="animate-role-in mt-10 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: '480ms' }}
        >
          {socialMediaLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-icon"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>

        {/* Credibility strip */}
        <div
          className="animate-role-in mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.05] sm:grid-cols-4"
          style={{ animationDelay: '560ms' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-void/60 px-4 py-5 backdrop-blur-sm">
              <p className="font-display text-2xl font-bold text-gradient-accent sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-faint">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 text-faint transition-colors hover:text-aqua lg:block"
      >
        <FontAwesomeIcon icon={faChevronDown} className="animate-scroll-hint" />
      </a>
    </section>
  );
};

export default Home;
