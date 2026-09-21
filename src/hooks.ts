import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export const useIsPhone = () => useMediaQuery('(max-width: 767px)');
export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

/**
 * Holds the previous value on screen while fading out, then swaps and fades
 * back in — the 200ms preview cross-fade in §7. Layout never animates, so the
 * frame itself cannot move. Honours prefers-reduced-motion by swapping instantly.
 */
export function useCrossFade<T>(value: T, key: string) {
  const reduced = useReducedMotion();
  const [state, setState] = useState({ value, key });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (key === state.key) return;
    if (reduced) {
      setState({ value, key });
      return;
    }
    setVisible(false);
    const timer = window.setTimeout(() => {
      setState({ value, key });
      setVisible(true);
    }, 100);
    return () => window.clearTimeout(timer);
  }, [key, value, state.key, reduced]);

  return { displayed: state.value, visible };
}
