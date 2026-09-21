import { footerColumns } from '../data';
import { Asterisk } from './Icons';

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col justify-between gap-10 py-14 sm:flex-row sm:gap-6 lg:min-h-[184px]">
        <div>
          <div className="flex items-center gap-2">
            <Asterisk size={12} />
            <span className="text-[15px] tracking-[-0.3px] text-ink">sent.studio</span>
          </div>
          <p className="mt-3 text-[12px] text-ink-faint">
            A store, a site and everything in between.
          </p>
        </div>

        <div className="flex gap-16 sm:gap-20">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <p className="text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                {column.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-ink-muted transition-colors duration-200 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
