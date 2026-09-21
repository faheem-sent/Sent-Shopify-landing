import type { Niche, Style } from '../data';
import { niches, styles } from '../data';
import { ChipGroup } from './ChipGroup';
import { ArrowRight } from './Icons';
import { Eyebrow } from './Section';
import { StorePreview } from './StorePreview';

type Props = {
  niche: Niche;
  style: Style;
  onNicheChange: (id: string) => void;
  onStyleChange: (id: string) => void;
  isPhone: boolean;
};

function StepLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="text-[12px] font-medium tracking-[0.1em] text-accent-deep">{number}</span>
      <span className="text-[14px] text-ink">{children}</span>
    </div>
  );
}

export function Hero({ niche, style, onNicheChange, onStyleChange, isPhone }: Props) {
  return (
    <section className="shell pb-20 pt-14 md:pt-[92px] lg:pb-28">
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,600fr)_minmax(0,640fr)] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-[72px] lg:gap-y-10">
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <Eyebrow>For merchants on Shopify</Eyebrow>

          <h1 className="mt-5">
            <span className="h1-line">Rebuild your store</span>
            <span className="h1-serif">by describing it.</span>
          </h1>

          <p className="body-text mt-6 max-w-[490px]">
            No theme to fight, no app stack to assemble. Tell Sent Studio what you sell and how it
            should feel — it builds the storefront, the product pages and the checkout behind them.
          </p>

          <div className="mt-10">
            <StepLabel number="01">What do you sell?</StepLabel>
            <ChipGroup
              label="What do you sell?"
              items={niches}
              selectedId={niche.id}
              onSelect={onNicheChange}
              getLabel={(item) => item.label}
            />
          </div>

          <div className="mt-8">
            <StepLabel number="02">How should it feel?</StepLabel>
            <ChipGroup
              label="How should it feel?"
              items={styles}
              selectedId={style.id}
              onSelect={onStyleChange}
              getLabel={(item) => item.label}
              renderIndicator={(item) => (
                <span
                  className="h-3 w-3 shrink-0 rounded-[3px]"
                  style={{ background: item.swatch }}
                  aria-hidden="true"
                />
              )}
            />
          </div>
        </div>

        <div className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <StorePreview niche={niche} style={style} isPhone={isPhone} />
          <p className="sr-only" aria-live="polite">
            {`Preview showing ${niche.name}, a ${niche.label.toLowerCase()} store, in the ${style.label.toLowerCase()} style.`}
          </p>
        </div>

        <div className="order-3 lg:col-start-1 lg:row-start-2 lg:self-start">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <a href="#final-cta" className="btn-primary w-full sm:w-auto">
              Make this store mine
              <ArrowRight />
            </a>
            <a href="#moving-over" className="text-link">
              Import from Shopify instead
            </a>
          </div>
          <p className="mt-5 text-[12px] text-ink-faint">
            Sample catalogue. Nothing publishes until you say so.
          </p>
        </div>
      </div>
    </section>
  );
}
