import { useId, useState } from 'react';
import { faqs } from '../data';
import { Chevron } from './Icons';
import { Eyebrow, TwoLineHeading } from './Section';

export function Faq() {
  // First item open, only ever one open, clicking the open one closes it (§6d).
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="questions" className="shell scroll-mt-[76px] py-20 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,420fr)_minmax(0,800fr)] lg:gap-[92px]">
        <div>
          <Eyebrow>Before you move</Eyebrow>
          <TwoLineHeading
            className="mt-5"
            variant="faq"
            line1="A few things,"
            line2="before you move."
          />
          <p className="mt-6 max-w-[380px] text-[14px] leading-[1.65] text-ink-dim">
            Anything else, ask us before you import a thing — we would rather talk you out of it
            than have you move twice.
          </p>
        </div>

        <div>
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <div key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-[22px] text-left"
                  >
                    <span
                      className={`text-[16px] transition-colors duration-200 ${
                        open ? 'text-ink' : 'text-ink-muted'
                      }`}
                    >
                      {item.q}
                    </span>
                    <Chevron
                      className={`shrink-0 transition-transform duration-160 ${
                        open ? 'rotate-180 text-accent' : 'text-ink-faint'
                      }`}
                    />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
                  <p className="pb-[22px] pr-0 text-[14px] leading-[1.65] text-ink-body md:pr-[60px]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
