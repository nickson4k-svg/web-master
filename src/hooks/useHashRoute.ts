import { useState, useEffect, useCallback } from 'react';

/**
 * Syncs a profile slug with location.hash.
 * Returns current slug and setter. Setting to null clears hash.
 */
export function useHashRoute() {
  const getHash = () => {
    const hash = window.location.hash.replace('#', '');
    return hash || null;
  };

  const [slug, setSlugState] = useState<string | null>(getHash);

  const setSlug = useCallback((newSlug: string | null) => {
    if (newSlug) {
      window.history.pushState(null, '', `#${newSlug}`);
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
    setSlugState(newSlug);
  }, []);

  useEffect(() => {
    const handler = () => {
      setSlugState(getHash());
    };
    window.addEventListener('hashchange', handler);
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('hashchange', handler);
      window.removeEventListener('popstate', handler);
    };
  }, []);

  return { slug, setSlug } as const;
}
