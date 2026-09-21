import type { ReactNode } from 'react';
import { Asterisk } from './Icons';

/** Every section opens with [asterisk] + eyebrow label (§3). */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <Asterisk />
      {children}
    </p>
  );
}

/**
 * Every major heading is two lines: Poppins white over Instrument Serif
 * lavender (§3). `variant` picks up the size overrides for the FAQ and CTA.
 */
export function TwoLineHeading({
  line1,
  line2,
  variant,
  className = '',
}: {
  line1: string;
  line2: string;
  variant?: 'faq' | 'cta';
  className?: string;
}) {
  const scope = variant === 'faq' ? 'h2-faq' : variant === 'cta' ? 'h2-cta' : '';
  return (
    <h2 className={`${scope} ${className}`}>
      <span className="h2-line">{line1}</span>
      <span className="h2-serif">{line2}</span>
    </h2>
  );
}
