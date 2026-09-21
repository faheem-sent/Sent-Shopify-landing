import { features } from '../data';
import { FeatureIcon } from './Icons';
import { Eyebrow, TwoLineHeading } from './Section';

export function BuiltIn() {
  return (
    <section id="built-in" className="shell scroll-mt-[76px] py-20 lg:py-28">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>Not a page builder</Eyebrow>
        <TwoLineHeading className="mt-5" line1="The shop part" line2="is already in there." />
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-7 lg:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="rounded-card border border-line bg-surface-3 p-4 sm:p-6"
          >
            <FeatureIcon name={feature.icon} />
            <h3 className="mt-4 text-[15px] text-ink sm:text-[17px]">
              <span className="hidden sm:inline">{feature.title}</span>
              <span className="sm:hidden">{feature.shortTitle}</span>
            </h3>
            <p className="mt-2.5 text-[13px] leading-[1.55] text-ink-body sm:text-[14px]">
              <span className="hidden sm:inline">{feature.body}</span>
              <span className="sm:hidden">{feature.shortBody}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
