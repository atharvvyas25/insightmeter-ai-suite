import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Custom hook for GSAP animations
 */
export function useGSAP(animationFn, dependencies = []) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      animationFn(ref.current);
    }
  }, dependencies);

  return ref;
}

/**
 * Fade in animation
 */
export function useFadeIn(duration = 0.6, delay = 0) {
  return useGSAP((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
    );
  });
}

/**
 * Stagger animation for children
 */
export function useStagger(selector = '.card', stagger = 0.1) {
  return useGSAP((element) => {
    const children = element.querySelectorAll(selector);
    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger, ease: 'power3.out' }
    );
  });
}
