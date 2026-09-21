import { useState } from 'react';
import { TwoLineHeading } from './Section';

export function FinalCta() {
  const [description, setDescription] = useState('');

  return (
    <section id="final-cta" className="scroll-mt-[76px] bg-cta-wash">
      <div className="shell flex flex-col items-center py-24 text-center lg:py-32">
        <TwoLineHeading variant="cta" line1="Describe your store." line2="Watch it appear." />

        <form
          className="mt-10 flex w-full max-w-[660px] flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="store-description" className="sr-only">
            Describe your store
          </label>
          <input
            id="store-description"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="I sell hand-thrown ceramics and want it to feel quiet and warm"
            className="w-full rounded-pill border border-line-strong bg-surface-3 px-6 text-[14px] text-ink transition-colors duration-200 placeholder:text-ink-fainter hover:border-accent-deep focus:border-accent-deep"
            style={{ minHeight: 52 }}
          />
          <button type="submit" className="btn-primary shrink-0" style={{ minHeight: 52 }}>
            Build it
          </button>
        </form>

        <p className="mt-6 text-[13px] text-ink-faint">
          Free while you build. [YOUR PRICE] a month once you publish. Cancel whenever.
        </p>
      </div>
    </section>
  );
}
