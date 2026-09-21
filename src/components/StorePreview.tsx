import type { CSSProperties } from 'react';
import type { AiEdit, Niche, Product, Style } from '../data';
import { useCrossFade } from '../hooks';
import { Padlock } from './Icons';

/* Decorative tile shapes, cycled by product index (§7.3). */
const shapes: CSSProperties[] = [
  { width: '48%', height: '48%', borderRadius: '999px' },
  { width: '42%', height: '62%', borderRadius: '999px 999px 6px 6px' },
  { width: '56%', height: '40%', borderRadius: '6px' },
  { width: '62%', height: '22%', borderRadius: '999px' },
];

function Tile({
  product,
  index,
  height,
  radius,
}: {
  product: Product;
  index: number;
  height: number;
  radius: string;
}) {
  return (
    <div
      className="flex items-center justify-center overflow-hidden"
      style={{ height, background: product.bg, borderRadius: radius }}
      aria-hidden="true"
    >
      <div style={{ ...shapes[index % shapes.length], background: product.fg, opacity: 0.9 }} />
    </div>
  );
}

/* ------------------------------------------------------------------ §7 */

type Metrics = {
  padX: number;
  padY: number;
  gap: number;
  heroH: number;
  tileH: number;
  headScale: number;
  productCount: number;
  nameSize: number;
};

const heroMetrics = (style: Style): Metrics => ({
  padX: 26,
  padY: 24,
  gap: 18,
  heroH: parseInt(style.heroH, 10),
  tileH: 138,
  headScale: 1,
  productCount: 4,
  nameSize: 12,
});

const phoneMetrics = (): Metrics => ({
  padX: 18,
  padY: 18,
  gap: 12,
  heroH: 92,
  tileH: 100,
  headScale: 0.6,
  productCount: 2,
  nameSize: 11,
});

function StoreHeader({
  niche,
  style,
  size,
  compact = false,
}: {
  niche: Niche;
  style: Style;
  size: number;
  compact?: boolean;
}) {
  return (
    <header
      className="flex items-center justify-between pb-[14px]"
      style={{ borderBottom: `1px solid ${style.line}` }}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span
          className="h-4 w-4 shrink-0"
          style={{ background: niche.accent, borderRadius: style.id === 'bold' ? '5px' : '999px' }}
          aria-hidden="true"
        />
        <span
          className="truncate"
          style={{
            fontFamily: style.headFont,
            fontWeight: style.headWeight,
            fontSize: size,
            color: style.ink,
            letterSpacing: '-0.2px',
          }}
        >
          {niche.name}
        </span>
      </div>
      <nav
        className="shrink-0 whitespace-nowrap"
        style={{
          fontSize: style.navSize,
          letterSpacing: style.navTrack,
          textTransform: style.navCase === 'uppercase' ? 'uppercase' : 'none',
          color: style.sub,
        }}
      >
        {compact ? 'Shop · About · ' : 'Shop · About · Journal · '}
        <span style={{ color: style.ink }}>Bag (0)</span>
      </nav>
    </header>
  );
}

function HeroBand({ niche, style, metrics }: { niche: Niche; style: Style; metrics: Metrics }) {
  const align = style.heroAlign;
  const textAlign = align === 'flex-start' ? 'left' : align === 'center' ? 'center' : 'right';

  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{
        height: metrics.heroH,
        borderRadius: style.radius,
        background: niche.products[0]!.bg,
      }}
    >
      <span
        className="pointer-events-none absolute"
        style={{
          width: 150,
          height: 150,
          top: -46,
          right: -34,
          borderRadius: '999px',
          background: niche.products[1]!.fg,
          opacity: 0.55,
        }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute"
        style={{
          width: 130,
          height: 130,
          bottom: -52,
          left: -38,
          borderRadius: '999px',
          background: niche.products[2]!.fg,
          opacity: 0.38,
        }}
        aria-hidden="true"
      />
      <div
        className="relative flex h-full flex-col justify-center px-5"
        style={{ alignItems: align, textAlign }}
      >
        <span
          style={{
            fontSize: 9 * Math.max(metrics.headScale, 0.9),
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: niche.accent,
            fontWeight: 500,
          }}
        >
          New season
        </span>
        <span
          style={{
            fontFamily: style.headFont,
            fontWeight: style.headWeight,
            fontSize: `${parseInt(style.headSize, 10) * metrics.headScale}px`,
            letterSpacing: style.headTrack,
            lineHeight: 1.05,
            color: '#1E1C19',
            marginTop: 4,
          }}
        >
          {niche.hero}
        </span>
        <span
          style={{
            fontSize: metrics.headScale < 1 ? 9 : 11,
            color: '#4B463F',
            maxWidth: 300,
            marginTop: 5,
            lineHeight: 1.45,
          }}
        >
          {niche.tagline}
        </span>
      </div>
    </div>
  );
}

function PreviewPage({ niche, style, metrics }: { niche: Niche; style: Style; metrics: Metrics }) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden"
      style={{
        background: style.ground,
        padding: `${metrics.padY}px ${metrics.padX}px`,
        gap: metrics.gap,
      }}
    >
      <StoreHeader niche={niche} style={style} size={17} />
      <HeroBand niche={niche} style={style} metrics={metrics} />

      <div className="grid shrink-0 grid-cols-2" style={{ gap: 16 }}>
        {niche.products.slice(0, metrics.productCount).map((product, index) => (
          <div key={product.n}>
            <Tile product={product} index={index} height={metrics.tileH} radius={style.radius} />
            <div className="flex items-baseline justify-between gap-2" style={{ marginTop: 6 }}>
              <span
                className="truncate"
                style={{ fontSize: metrics.nameSize, color: style.ink }}
              >
                {product.n}
              </span>
              <span style={{ fontSize: metrics.nameSize, color: style.sub }}>{product.p}</span>
            </div>
          </div>
        ))}
      </div>

      <footer
        className="mt-auto flex items-center justify-between pt-3"
        style={{ borderTop: `1px solid ${style.line}`, fontSize: 10, color: style.sub }}
      >
        <span>Free returns for 30 days</span>
        <span>Built with Sent Studio</span>
      </footer>
    </div>
  );
}

/** The hero frame: 640 × 700 on desktop, ~396px tall on a phone (§7, §9). */
export function StorePreview({
  niche,
  style,
  isPhone,
}: {
  niche: Niche;
  style: Style;
  isPhone: boolean;
}) {
  const { displayed, visible } = useCrossFade({ niche, style }, `${niche.id}-${style.id}`);
  const metrics = isPhone ? phoneMetrics() : heroMetrics(displayed.style);

  return (
    <div
      className="relative w-full max-w-[640px] overflow-hidden rounded-card border border-line bg-surface-2 shadow-frame"
      style={{ height: isPhone ? 396 : 700 }}
    >
      <div
        className="fade-swap flex h-10 items-center gap-3 px-4"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span className="flex gap-[5px]" aria-hidden="true">
          <span className="h-2 w-2 rounded-pill bg-neutral-dot" />
          <span className="h-2 w-2 rounded-pill bg-neutral-dot" />
          <span className="h-2 w-2 rounded-pill bg-neutral-dot" />
        </span>
        <span className="flex min-w-0 items-center gap-1.5 rounded-pill bg-neutral-pill px-2.5 py-1">
          <Padlock className="shrink-0 text-ink-dim" />
          <span className="truncate text-[10px] text-ink-dim">{displayed.niche.domain}</span>
        </span>
        <span className="ml-auto shrink-0 text-[9px] uppercase tracking-[0.14em] text-ink-faint">
          Live preview
        </span>
      </div>

      <div className="fade-swap h-[calc(100%-40px)]" style={{ opacity: visible ? 1 : 0 }}>
        <PreviewPage niche={displayed.niche} style={displayed.style} metrics={metrics} />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- §8.5 */

/** The compact storefront inside the "keep talking" demo. */
export function StudioPreview({
  niche,
  style,
  edit,
  isPhone,
}: {
  niche: Niche;
  style: Style;
  edit: AiEdit | null;
  isPhone: boolean;
}) {
  const premium = edit?.id === 'premium';

  const ground = premium ? '#F6F2EA' : style.ground;
  const ink = premium ? '#1D1B18' : style.ink;
  const sub = premium ? '#6B6055' : style.sub;
  const lineColor = premium ? '#E2D9CB' : style.line;
  const headFont = premium ? 'Instrument Serif' : style.headFont;
  const headWeight = premium ? 400 : style.headWeight;
  const radius = premium ? '2px' : style.radius;

  const pad = premium ? { x: 30, y: 26 } : { x: 24, y: 20 };
  const gap = premium ? 20 : 16;
  const tileH = isPhone ? 84 : premium ? 150 : 124;
  const heroSize = (premium ? 34 : 24) * (isPhone ? 0.8 : 1);

  const previewStyle: Style = {
    ...style,
    ground,
    ink,
    sub,
    line: lineColor,
    headFont,
    headWeight,
    radius,
  };

  return (
    <div className="w-full overflow-hidden rounded-card border border-line bg-surface-2">
      <div className="flex h-[38px] items-center justify-between border-b border-line px-4">
        <span className="text-[11px] text-ink-dim">Preview</span>
        <span className="text-[9px] uppercase tracking-[0.14em] text-ink-faint">
          Your live store is untouched
        </span>
      </div>

      <div style={{ background: ground }}>
        {edit?.id === 'banner' && (
          <div
            className="reveal px-4 py-2 text-center text-[11px] text-white"
            style={{ background: niche.accent }}
          >
            Free shipping on every order over $75
          </div>
        )}

        <div
          className="flex flex-col transition-[padding,gap] duration-220"
          style={{ padding: `${pad.y}px ${pad.x}px`, gap }}
        >
          <StoreHeader niche={niche} style={previewStyle} size={isPhone ? 15 : 16} compact />

          <span
            className="transition-all duration-220"
            style={{
              fontFamily: headFont,
              fontWeight: headWeight,
              fontSize: heroSize,
              letterSpacing: style.headTrack,
              lineHeight: 1.08,
              color: ink,
            }}
          >
            {niche.hero}
          </span>

          <div className="grid grid-cols-3" style={{ gap: premium ? 18 : 14 }}>
            {niche.products.slice(0, 3).map((product, index) => (
              <div key={product.n}>
                <Tile product={product} index={index} height={tileH} radius={radius} />
                <div
                  className={
                    premium
                      ? 'mt-2 flex flex-col gap-0.5'
                      : 'mt-2 flex items-baseline justify-between gap-2'
                  }
                >
                  {!isPhone && (
                    <span className="truncate text-[11px]" style={{ color: ink }}>
                      {product.n}
                    </span>
                  )}
                  <span className="text-[11px]" style={{ color: sub }}>
                    {product.p}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {edit?.id === 'bundle' && (
            <div
              className="reveal flex flex-col items-start gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
              style={{ border: `1px solid ${niche.accent}`, borderRadius: radius }}
            >
              <div>
                <p
                  style={{
                    fontFamily: headFont,
                    fontWeight: headWeight,
                    fontSize: 17,
                    color: ink,
                  }}
                >
                  Buy any three, save 15%
                </p>
                <p className="mt-1 text-[11px]" style={{ color: sub }}>
                  Mix across the whole range. Applied at checkout.
                </p>
              </div>
              <span
                className="shrink-0 rounded-pill px-4 py-2 text-[11px] text-white"
                style={{ background: niche.accent }}
              >
                Build a bundle
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
