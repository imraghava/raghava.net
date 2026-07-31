import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useScrollProgress, useActiveSection } from '../hooks/useScrollEffects';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];

const Nav = ({ menuOpen, toggleMenu }) => {
  const { progress, scrolled } = useScrollProgress();
  const active = useActiveSection(SECTIONS);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-void/70 backdrop-blur-xl border-b border-white/[0.07]' : 'bg-transparent'
      } ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-iris to-aqua font-display text-sm font-bold text-void">
            RM
            <span className="absolute inset-0 rounded-xl bg-iris/40 animate-pulse-ring" aria-hidden="true" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink transition-colors group-hover:text-white">
            Raghava Mahankali
          </span>
        </a>

        {/* Inline section links on desktop; the hamburger covers smaller screens. */}
        <div className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative rounded-full px-4 py-2 text-[13px] font-medium capitalize transition-colors duration-300 ${
                active === id ? 'text-white' : 'text-muted hover:text-ink'
              }`}
            >
              {active === id && (
                <span className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.06]" aria-hidden="true" />
              )}
              <span className="relative">{id}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden text-[13px] font-semibold text-aqua transition-colors hover:text-aqua-soft sm:inline"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Open navigation menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-ink transition-all duration-300 hover:border-aqua/50 hover:text-aqua lg:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Reading-progress rail */}
      <div className="h-px w-full bg-white/[0.05]">
        <div
          className="h-px origin-left bg-gradient-to-r from-iris to-aqua"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </nav>
  );
};

export default Nav;
