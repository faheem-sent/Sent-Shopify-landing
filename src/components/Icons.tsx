/** Every icon on the page is an inline stroke SVG (§4). All decorative. */

type IconProps = { size?: number; className?: string };

/** The brand mark: an 8-point asterisk on a 10×10 grid (§3). */
export function Asterisk({ size = 10, className = 'text-accent' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 0.6 L5 9.4" />
      <path d="M0.6 5 L9.4 5" />
      <path d="M1.9 1.9 L8.1 8.1" />
      <path d="M8.1 1.9 L1.9 8.1" />
    </svg>
  );
}

export function ArrowRight({ size = 15, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 8h11" />
      <path d="M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Chevron({ size = 16, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.5 6 8 10.5 12.5 6" />
    </svg>
  );
}

export function Padlock({ size = 9, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="1.8" y="4.3" width="6.4" height="5" rx="1.2" />
      <path d="M3.4 4.3V3a1.6 1.6 0 0 1 3.2 0v1.3" />
    </svg>
  );
}

export function CrossCircle({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="9" />
      <path d="M8 8l6 6M14 8l-6 6" />
    </svg>
  );
}

export function CheckCircle({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="9" />
      <path d="M7.2 11.3l2.6 2.5 5-5.2" />
    </svg>
  );
}

export function Tick({ size = 15, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.8 8.4l3.2 3.2 7.2-7.4" />
    </svg>
  );
}

export function Info({ size = 14, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.3" />
      <path d="M8 7.2v4" />
      <path d="M8 4.9v.1" />
    </svg>
  );
}

/* ---- §8.6 feature icons: 22×22 viewBox, accent stroke + accent-deep secondary ---- */

const featureSvg = {
  width: 20,
  height: 20,
  viewBox: '0 0 22 22',
  fill: 'none',
  strokeWidth: 1.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true as const,
};

export function FeatureIcon({ name }: { name: 'card' | 'box' | 'tag' | 'list' | 'globe' | 'chart' }) {
  const primary = 'stroke-accent';
  const secondary = 'stroke-accent-deep';

  switch (name) {
    case 'card':
      return (
        <svg {...featureSvg}>
          <rect className={primary} x="2" y="5" width="18" height="12.5" rx="2.2" />
          <path className={secondary} d="M2 9.4h18" />
          <path className={secondary} d="M5.3 13.6h3.4" />
        </svg>
      );
    case 'box':
      return (
        <svg {...featureSvg}>
          <path className={primary} d="M11 2.4 19.2 6.6v8.8L11 19.6 2.8 15.4V6.6z" />
          <path className={secondary} d="M2.8 6.6 11 10.8l8.2-4.2" />
          <path className={secondary} d="M11 10.8v8.8" />
        </svg>
      );
    case 'tag':
      return (
        <svg {...featureSvg}>
          <path
            className={primary}
            d="M11.4 2.6H18a1.4 1.4 0 0 1 1.4 1.4v6.6a1.4 1.4 0 0 1-.4 1l-7.6 7.6a1.4 1.4 0 0 1-2 0l-6.2-6.2a1.4 1.4 0 0 1 0-2l7.6-7.6a1.4 1.4 0 0 1 .6-.8z"
          />
          <path className={secondary} d="M15.4 6.6v.1" />
        </svg>
      );
    case 'list':
      return (
        <svg {...featureSvg}>
          <rect className={primary} x="3" y="2.6" width="16" height="16.8" rx="2.2" />
          <path className={secondary} d="M6.6 7.4h8.8M6.6 11h8.8M6.6 14.6h5.4" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...featureSvg}>
          <circle className={primary} cx="11" cy="11" r="8.4" />
          <path className={secondary} d="M2.6 11h16.8" />
          <path className={secondary} d="M11 2.6c2.4 2.4 3.6 5.2 3.6 8.4S13.4 17 11 19.4C8.6 17 7.4 14.2 7.4 11S8.6 5 11 2.6z" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...featureSvg}>
          <path className={primary} d="M3 18.6h16" />
          <path className={secondary} d="M6.4 18.6v-5.4" />
          <path className={primary} d="M11 18.6V7.8" />
          <path className={secondary} d="M15.6 18.6v-8.2" />
        </svg>
      );
  }
}
