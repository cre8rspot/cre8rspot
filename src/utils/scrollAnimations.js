/**
 * Scroll Animation Utility
 * Uses IntersectionObserver to trigger animations when elements enter viewport
 */

// Global observer instance to avoid multiple observers
let globalObserver = null;
let observedElements = new Set();

/**
 * Initialize scroll animations for elements with .box class
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (default: 0.3)
 * @param {string} options.rootMargin - Root margin for observer (default: '0px')
 * @returns {Function} Cleanup function to disconnect observer
 */
export const initScrollAnimations = (options = {}) => {
  const { threshold = 0.3, rootMargin = '0px' } = options;

  // Clean up existing observer if it exists
  if (globalObserver) {
    globalObserver.disconnect();
    observedElements.clear();
  }

  // Reset all existing animations before re-initializing
  const existingBoxes = document.querySelectorAll('.box');
  existingBoxes.forEach((element) => {
    element.classList.remove('animate');
  });

  // Create new observer
  globalObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animate class when element enters viewport
          entry.target.classList.add('animate');
          
          // Optional: Stop observing after animation (one-time animation)
          // globalObserver.unobserve(entry.target);
          // observedElements.delete(entry.target);
        }
      });
    },
    {
      threshold,
      rootMargin,
    }
  );

  // Find and observe all elements with .box class
  const elements = document.querySelectorAll('.box');
  elements.forEach((element) => {
    if (!observedElements.has(element)) {
      globalObserver.observe(element);
      observedElements.add(element);
      
      // Check if element is already in viewport (for above-the-fold content)
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      
      if (isInViewport) {
        // Animate elements that are already visible
        setTimeout(() => {
          element.classList.add('animate');
        }, 100);
      }
    }
  });

  console.log(`Observing ${observedElements.size} elements for scroll animations`);

  // Return cleanup function
  return () => {
    if (globalObserver) {
      globalObserver.disconnect();
      globalObserver = null;
      observedElements.clear();
    }
  };
};

/**
 * Manually trigger animation for specific element
 * @param {HTMLElement} element - Element to animate
 */
export const triggerAnimation = (element) => {
  if (element && element.classList.contains('box')) {
    element.classList.add('animate');
  }
};

/**
 * Reset animation for specific element
 * @param {HTMLElement} element - Element to reset
 */
export const resetAnimation = (element) => {
  if (element && element.classList.contains('box')) {
    element.classList.remove('animate');
  }
};