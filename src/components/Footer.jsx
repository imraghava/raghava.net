import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const socials = [
  { href: 'https://www.linkedin.com/in/imraghava/', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/imraghava', icon: faGithub, label: 'GitHub' },
  { href: 'https://x.com/imraghava', icon: faTwitter, label: 'X' },
  { href: 'https://midwaythoughts.com/', icon: faGlobe, label: 'Blog' },
  { href: 'mailto:imraghava@gmail.com', icon: faEnvelope, label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.07] px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-ink">Raghava Mahankali</p>
          <p className="mt-1.5 text-sm text-muted">
            AI Engineer · Lead Full Stack .NET Developer · Azure Solution Architect
          </p>
          <p className="mt-4 font-mono text-xs text-faint">
            © {new Date().getFullYear()} — All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:items-end">
          <div className="flex gap-2.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="social-icon !h-10 !w-10"
              >
                <FontAwesomeIcon icon={social.icon} className="text-sm" />
              </a>
            ))}
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-2 font-mono text-xs text-faint transition-colors hover:text-aqua"
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-[10px]" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
