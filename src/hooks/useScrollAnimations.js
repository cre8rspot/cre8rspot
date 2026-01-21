import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initScrollAnimations } from '../utils/scrollAnimations';

/**
 * React hook to initialize scroll animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (default: 0.3)
 * @param {string} options.rootMargin - Root margin for observer (default: '0px')
 * @param {Array} options.dependencies - Dependencies array for useEffect (default: [])
 */
export const useScrollAnimations = (options = {}) => {
  const { threshold = 0.3, rootMargin = '0px', dependencies = [] } = options;
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered after route/param change
    const timer = setTimeout(() => {
      // Initialize animations
      const cleanup = initScrollAnimations({ threshold, rootMargin });
      
      // Store cleanup function for later use
      return cleanup;
    }, 150);

    // Cleanup timer and observer
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname, location.search, location.hash, ...dependencies]); // Re-run when route or params change
};