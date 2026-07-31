import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

const Menu = ({ menuOpen, setMenuOpen, toggleMenu }) => {
  // Lock the page behind the overlay, and let Escape dismiss it.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, setMenuOpen]);

  if (!menuOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-void/90 backdrop-blur-2xl">
      <div className="aurora">
        <div className="aurora__blob aurora__blob--iris animate-aurora-drift" />
        <div className="aurora__blob aurora__blob--aqua animate-aurora-drift-slow" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex h-[68px] items-center justify-end px-5 sm:px-8">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Close navigation menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-ink transition-all duration-300 hover:rotate-90 hover:border-aqua/50 hover:text-aqua"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-8 sm:px-16">
          {menuItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="group animate-role-in border-b border-white/[0.07] py-4"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-faint transition-colors group-hover:text-aqua">
                  0{index + 1}
                </span>
                <span className="font-display text-3xl font-semibold tracking-tight text-muted transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-4xl">
                  {item.label}
                </span>
              </span>
            </a>
          ))}
        </nav>

        <p className="px-8 pb-10 font-mono text-xs text-faint sm:px-16">imraghava@gmail.com</p>
      </div>
    </div>
  );
};

export default Menu;
