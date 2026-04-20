import { useState } from 'react';
import brandLogo from '../../assets/emna-logo.png';

const navLinks = [
  { label: 'The Shift', href: '#shift' },
  { label: 'Access', href: '#final-cta' }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="top-panel sticky top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="inline-flex items-center gap-3" onClick={closeMenu}>
          <img src={brandLogo} alt="Emna.ai" className="h-9 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="top-panel-link text-xs font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <p className="text-xs font-medium uppercase tracking-[0.06em] text-muted/90">Coming May 2026</p>
          <a href="#final-cta" className="btn-primary">
            Join the waitlist
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/90 bg-white/90 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className={`menu-line ${open ? 'menu-line-open' : ''}`} />
        </button>
      </div>

      <div id="mobile-nav" className={`border-t border-line/70 bg-white/85 lg:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="mx-auto w-full max-w-7xl space-y-5 px-4 py-6 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a href="#final-cta" onClick={closeMenu} className="btn-primary inline-flex w-full justify-center">
            Join the waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
