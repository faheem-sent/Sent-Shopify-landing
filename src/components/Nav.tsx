import { navLinks } from '../data';
import { Asterisk } from './Icons';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 h-[76px] border-b border-line bg-ground/[0.85] backdrop-blur">
      <div className="shell flex h-full items-center justify-between gap-6">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <Asterisk size={12} />
          <span className="text-[15px] tracking-[-0.3px] text-ink">sent.studio</span>
        </a>

        {/* Collapses on phones — the anchors all live in the footer too (§9). */}
        <nav aria-label="Sections" className="hidden items-center gap-5 md:flex lg:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <a href="#top" className="hidden text-[13px] text-ink-muted transition-colors duration-200 hover:text-ink sm:block">
            Sign in
          </a>
          <a href="#final-cta" className="btn-outline">
            Build a store
          </a>
        </div>
      </div>
    </header>
  );
}
