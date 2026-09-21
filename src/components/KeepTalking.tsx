import type { AiEdit, Niche, Style } from '../data';
import { aiEdits } from '../data';
import { ChipGroup } from './ChipGroup';
import { Asterisk } from './Icons';
import { Eyebrow, TwoLineHeading } from './Section';
import { StudioPreview } from './StorePreview';

type Props = {
  niche: Niche;
  style: Style;
  edit: AiEdit | null;
  onEditToggle: (id: string) => void;
  isPhone: boolean;
};

export function KeepTalking({ niche, style, edit, onEditToggle, isPhone }: Props) {
  return (
    <section className="shell py-20 lg:py-28">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>After it&rsquo;s built</Eyebrow>
        <TwoLineHeading className="mt-5" line1="Then you just" line2="keep talking." />
      </div>

      <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[minmax(0,480fr)_minmax(0,760fr)] lg:gap-[72px]">
        <div className="flex flex-col rounded-card border border-line bg-surface p-[22px]">
          <div className="flex items-center gap-2 border-b border-line pb-3.5">
            <Asterisk />
            <span className="text-[13px] text-ink">Your Studio</span>
            <span className="ml-auto text-[11px] text-ink-faint">{niche.domain}</span>
          </div>

          <div className="mt-5 flex flex-col gap-3.5">
            <p
              className="max-w-[300px] bg-surface-4 px-4 py-3 text-[13px] text-ink-muted"
              style={{ borderRadius: '12px 12px 12px 4px' }}
            >
              Your store is live. What should we change first?
            </p>

            <p
              className={`ml-auto max-w-[300px] border px-4 py-3 text-[13px] transition-colors duration-200 ${
                edit
                  ? 'border-accent bg-accent-wash text-accent-pale'
                  : 'border-line bg-surface text-ink-dim'
              }`}
              style={{ borderRadius: '12px 12px 4px 12px' }}
            >
              {edit ? edit.user : 'Pick one below and watch the preview change.'}
            </p>

            <p
              className="max-w-[340px] bg-surface-4 px-4 py-3 text-[13px] text-ink-muted"
              style={{ borderRadius: '12px 12px 12px 4px' }}
            >
              {edit
                ? edit.reply
                : 'Every edit is reversible, and none of it touches the store your customers see.'}
            </p>
          </div>

          <div className="mt-10 lg:mt-auto lg:pt-10">
            <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-ink-faint">Try one</p>
            <ChipGroup
              label="Try an edit"
              items={aiEdits}
              selectedId={edit?.id ?? null}
              onSelect={onEditToggle}
              getLabel={(item) => item.label}
              chipClassName="text-[12px]"
            />
            {edit && (
              <button
                type="button"
                onClick={() => onEditToggle(edit.id)}
                className="mt-1 inline-flex min-h-[44px] items-center text-[12px] text-ink-muted underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-accent-deep lg:mt-3 lg:min-h-0"
              >
                Undo this change
              </button>
            )}
          </div>
        </div>

        <div>
          <StudioPreview niche={niche} style={style} edit={edit} isPhone={isPhone} />
          <p className="sr-only" aria-live="polite">
            {edit
              ? `Preview updated: ${edit.label}.`
              : 'Preview showing the store with no edits applied.'}
          </p>
        </div>
      </div>
    </section>
  );
}
