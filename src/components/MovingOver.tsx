import { useState } from 'react';
import { importProgress, migrationItems } from '../data';
import { Info, Tick } from './Icons';
import { Eyebrow, TwoLineHeading } from './Section';

export function MovingOver() {
  // Editable, but nothing is sent anywhere — this is a sample import (§8.4).
  const [storeAddress, setStoreAddress] = useState('kilnandclay.myshopify.com');

  return (
    <section id="moving-over" className="shell scroll-mt-[76px] py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,560fr)_minmax(0,672fr)] lg:gap-[80px]">
        <div>
          <Eyebrow>Bringing it across</Eyebrow>
          <TwoLineHeading className="mt-5" line1="Nothing gets left" line2="in the old store." />
          <p className="body-text mt-6 max-w-[480px]">
            Point us at your Shopify store and the catalogue comes over as it is — then gets laid
            out again in the style you picked.
          </p>

          <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3.5">
            {migrationItems.map((item) => (
              <li key={item.short} className="flex items-start gap-2.5 text-[13px] text-ink-muted">
                <Tick className="mt-[3px] shrink-0 text-accent" />
                <span className="hidden md:inline">{item.full}</span>
                <span className="md:hidden">{item.short}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col rounded-card border border-line bg-surface p-6 md:p-[26px_28px]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[15px] text-ink">Import your Shopify store</p>
            <span className="shrink-0 rounded-pill border border-line-strong px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-ink-faint">
              Sample import
            </span>
          </div>

          <div className="mt-6">
            <label htmlFor="store-address" className="block text-[12px] text-ink-dim">
              Your store address
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="store-address"
                type="text"
                value={storeAddress}
                onChange={(event) => setStoreAddress(event.target.value)}
                className="field"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                className="shrink-0 rounded-pill border border-accent-deep bg-accent-wash px-6 text-[13px] font-medium text-accent-pale transition-colors duration-200 hover:bg-accent-wash-strong"
                style={{ minHeight: 44 }}
              >
                Connect
              </button>
            </div>
          </div>

          <hr className="my-6 border-0 border-t border-line md:my-7" />

          {/* Progress bars are desktop-only (§9). */}
          <div className="hidden flex-col gap-5 md:flex">
            {importProgress.map((row) => (
              <div key={row.label}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[13px] text-ink-muted">{row.label}</span>
                  <span className="text-[12px] text-ink-faint">{row.count}</span>
                </div>
                <div className="mt-2.5 h-1 w-full overflow-hidden rounded-pill bg-white/[0.08]">
                  <div
                    className="h-full rounded-pill bg-accent-deep"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-start gap-2.5 md:pt-10">
            <Info className="mt-[2px] shrink-0 text-accent-deep" />
            <p className="text-[12px] text-ink-faint">
              Read-only until you approve the move. Your Shopify store stays live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
