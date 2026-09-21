import { useRef, type ReactNode } from 'react';

type Item = { id: string };

type Props<T extends Item> = {
  /** Accessible name for the group (§10). */
  label: string;
  items: T[];
  selectedId: string | null;
  /** The caller decides what selecting means — the edit chips toggle off again. */
  onSelect: (id: string) => void;
  getLabel: (item: T) => string;
  /** The dot, or the style swatch. */
  renderIndicator?: (item: T) => ReactNode;
  chipClassName?: string;
  className?: string;
};

/**
 * A wrapping row of pill chips with real radiogroup semantics: tab in,
 * space/enter to pick, arrow keys to move between them (§10).
 */
export function ChipGroup<T extends Item>({
  label,
  items,
  selectedId,
  onSelect,
  getLabel,
  renderIndicator,
  chipClassName = '',
  className = '',
}: Props<T>) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (from: number, delta: number) => {
    const next = (from + delta + items.length) % items.length;
    refs.current[next]?.focus();
    onSelect(items[next]!.id);
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        move(index, 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        move(index, -1);
        break;
      case 'Home':
        event.preventDefault();
        refs.current[0]?.focus();
        onSelect(items[0]!.id);
        break;
      case 'End':
        event.preventDefault();
        refs.current[items.length - 1]?.focus();
        onSelect(items[items.length - 1]!.id);
        break;
    }
  };

  const activeIndex = items.findIndex((item) => item.id === selectedId);

  return (
    <div role="radiogroup" aria-label={label} className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item, index) => {
        const selected = item.id === selectedId;
        return (
          <button
            key={item.id}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected || (activeIndex === -1 && index === 0) ? 0 : -1}
            onClick={() => onSelect(item.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={`chip ${chipClassName}`}
          >
            {renderIndicator ? renderIndicator(item) : <span className="chip-dot" />}
            {getLabel(item)}
          </button>
        );
      })}
    </div>
  );
}
