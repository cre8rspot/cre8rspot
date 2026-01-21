import { useEffect, useRef } from 'react';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'zoom-out' 
  | 'fade-in'
  | 'slide-up-large'
  | 'rotate-in';

type AnimationOptions = {
  animation?: AnimationType;
  delay?: number;
  duration?: 'fast' | 'normal' | 'slow';
  easing?: 'bounce' | 'smooth' | 'normal';
  once?: boolean;
};

/**
 * React hook for scroll animations
 * @param options Animation configuration options
 * @returns ref to attach to the element you want to animate
 */
export const useScrollAnimation = (options: AnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  
  const {
    animation = 'fade-up',
    delay = 0,
    duration = 'normal',
    easing = 'normal',
    once = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add base animation class
    element.classList.add('scroll-animate', animation);

    // Add duration class
    if (duration !== 'normal') {
      element.classList.add(`duration-${duration}`);
    }

    // Add easing class
    if (easing !== 'normal') {
      element.classList.add(`ease-${easing}`);
    }

    // Add delay
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`;
    }

    // Refresh the scroll animation system to observe this element
    if (window.scrollAnimationSystem) {
      window.scrollAnimationSystem.observe(element);
    }

    // Cleanup
    return () => {
      if (window.scrollAnimationSystem) {
        window.scrollAnimationSystem.unobserve(element);
      }
    };
  }, [animation, delay, duration, easing, once]);

  return elementRef;
};

/**
 * Hook for staggered animations on multiple children
 * @param childSelector CSS selector for child elements
 * @param options Animation configuration options
 * @returns ref to attach to the parent container
 */
export const useStaggeredAnimation = (
  childSelector: string = '.animate-child',
  options: AnimationOptions & { staggerDelay?: number } = {}
) => {
  const containerRef = useRef<HTMLElement>(null);
  
  const {
    animation = 'fade-up',
    staggerDelay = 100,
    duration = 'normal',
    easing = 'normal'
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(childSelector);
    
    children.forEach((child, index) => {
      const element = child as HTMLElement;
      
      // Add animation classes
      element.classList.add('scroll-animate', animation);
      
      // Add duration and easing
      if (duration !== 'normal') {
        element.classList.add(`duration-${duration}`);
      }
      if (easing !== 'normal') {
        element.classList.add(`ease-${easing}`);
      }
      
      // Add staggered delay
      const totalDelay = index * staggerDelay;
      if (totalDelay <= 500) {
        element.classList.add(`delay-${totalDelay}`);
      } else {
        element.style.transitionDelay = `${totalDelay}ms`;
      }

      // Observe element
      if (window.scrollAnimationSystem) {
        window.scrollAnimationSystem.observe(element);
      }
    });

    // Cleanup
    return () => {
      children.forEach(child => {
        if (window.scrollAnimationSystem) {
          window.scrollAnimationSystem.unobserve(child as HTMLElement);
        }
      });
    };
  }, [childSelector, animation, staggerDelay, duration, easing]);

  return containerRef;
};

/**
 * Hook to manually trigger animations
 * @returns object with trigger function
 */
export const useAnimationTrigger = () => {
  const trigger = (element: HTMLElement | string) => {
    if (window.ScrollAnimations) {
      window.ScrollAnimations.trigger(element);
    }
  };

  const animate = (
    selector: string, 
    animationType: AnimationType = 'fade-up', 
    delay: number = 0
  ) => {
    if (window.ScrollAnimations) {
      window.ScrollAnimations.animate(selector, animationType, delay);
    }
  };

  const stagger = (
    selector: string, 
    animationType: AnimationType = 'fade-up', 
    staggerDelay: number = 100
  ) => {
    if (window.ScrollAnimations) {
      window.ScrollAnimations.stagger(selector, animationType, staggerDelay);
    }
  };

  return { trigger, animate, stagger };
};

// Type declarations for global objects
declare global {
  interface Window {
    scrollAnimationSystem: any;
    ScrollAnimations: any;
  }
}