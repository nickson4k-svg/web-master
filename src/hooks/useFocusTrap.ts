import { useEffect, useRef, useCallback } from 'react';

/**
 * Traps focus within a container element.
 * Returns a ref to attach to the container.
 */
export function useFocusTrap<T extends HTMLElement>(active: boolean) {
  const containerRef = useRef<T>(null);
  const previousFocusRef = useRef<Element | null>(null);

  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ];
    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(selectors.join(', '))
    ).filter((el) => el.offsetParent !== null);
  }, []);

  useEffect(() => {
    if (!active) return;

    previousFocusRef.current = document.activeElement;

    // Focus first element after a tick to allow render
    const timer = setTimeout(() => {
      const focusable = getFocusableElements();
      if (focusable.length > 0) {
        focusable[0].focus();
      }
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = getFocusableElements();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      // Return focus to trigger element
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus();
      }
    };
  }, [active, getFocusableElements]);

  return containerRef;
}
