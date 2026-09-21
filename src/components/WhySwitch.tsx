import { compareHere, compareNow } from '../data';
import { CheckCircle, CrossCircle } from './Icons';
import { Eyebrow, TwoLineHeading } from './Section';

type Row = { title: string; detail: string };

function PanelRow({
  row,
  tone,
}: {
  row: Row;
  tone: 'now' | 'here';
}) {
  const here = tone === 'here';
  return (
    <li className="flex gap-3.5">
      <span className="mt-0.5 shrink-0">
        {here ? (
          <CheckCircle className="text-accent" />
        ) : (
          <CrossCircle className="text-neutral-off" />
        )}
      </span>
      <div>
        <p className={`text-[15px] ${here ? 'text-accent-pale' : 'text-neutral-title'}`}>
          {row.title}
        </p>
        {/* Phones show titles only (§9). */}
        <p className={`mt-1.5 hidden text-[13px] md:block ${here ? 'text-ink-body' : 'text-ink-faint'}`}>
          {row.detail}
        </p>
      </div>
    </li>
  );
}

export function WhySwitch() {
  return (
    <section id="why-switch" className="shell scroll-mt-[76px] py-20 lg:py-28">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>What you leave behind</Eyebrow>
        <TwoLineHeading
          className="mt-5"
          line1="Same catalogue."
          line2="A tenth of the moving parts."
        />
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-[80px]">
        <div className="rounded-card border border-line-strong bg-surface-3 p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.16em] text-ink-faint">
            The way it works now
          </p>
          <ul className="mt-7 flex flex-col gap-6">
            {compareNow.map((row) => (
              <PanelRow key={row.title} row={row} tone="now" />
            ))}
          </ul>
        </div>

        <div className="rounded-card border border-accent/45 bg-panel-wash p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
            The way it works here
          </p>
          <ul className="mt-7 flex flex-col gap-6">
            {compareHere.map((row) => (
              <PanelRow key={row.title} row={row} tone="here" />
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-[560px] text-center text-[13px] text-ink-faint">
        Your Shopify store keeps running the whole time. Nothing switches over until you move the
        domain.
      </p>
    </section>
  );
}
