// hooks/useAnimateOnScroll.ts
"use client";

import { useEffect, useRef } from 'react';

export function useAnimateOnScroll() {
  const animatedRefs = useRef<(HTMLElement | null)[]>([]);

  const registerAnimatedRef = (element: HTMLElement | null) => {
    if (element && !animatedRefs.current.includes(element)) {
      animatedRefs.current.push(element);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const animations = target.dataset.animation?.split(' ') || [];
            const baseClasses = target.className.split(' ').filter(cls => 
              !cls.startsWith('animate-') && !cls.includes('animated')
            );
            
            // Add animation classes
            target.className = [
              ...baseClasses, 
              'animated', 
              ...animations.map(anim => anim)
            ].join(' ');
            
            // Unobserve after animating
            observer.unobserve(target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all registered elements
    animatedRefs.current.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      // Cleanup observer
      animatedRefs.current.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return { registerAnimatedRef };
}