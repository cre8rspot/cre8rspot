/**
 * Lightweight Scroll Animation System
 * Handles viewport detection and animation triggering
 */

class ScrollAnimationSystem {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
      once: true, // Animate only once
      ...options
    };
    
    this.observer = null;
    this.elements = new Set();
    this.init();
  }

  init() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      this.fallbackInit();
      return;
    }

    // Create Intersection Observer
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        threshold: this.options.threshold,
        rootMargin: this.options.rootMargin
      }
    );

    // Start observing elements
    this.observeElements();
    
    // Listen for dynamic content
    this.setupMutationObserver();
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.animateElement(entry.target);
        
        // Stop observing if animation should only happen once
        if (this.options.once) {
          this.observer.unobserve(entry.target);
          this.elements.delete(entry.target);
        }
      } else if (!this.options.once) {
        // Remove animation class if element leaves viewport and repeat is enabled
        this.resetElement(entry.target);
      }
    });
  }

  animateElement(element) {
    // Add animate class with a small delay for smoother animation
    requestAnimationFrame(() => {
      element.classList.add('animate');
      
      // Dispatch custom event
      element.dispatchEvent(new CustomEvent('scrollAnimate', {
        detail: { element, type: 'animate' }
      }));
    });
  }

  resetElement(element) {
    element.classList.remove('animate');
    
    // Dispatch custom event
    element.dispatchEvent(new CustomEvent('scrollAnimate', {
      detail: { element, type: 'reset' }
    }));
  }

  observeElements() {
    // Find all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
      if (!this.elements.has(element)) {
        this.observer.observe(element);
        this.elements.add(element);
      }
    });
  }

  setupMutationObserver() {
    // Watch for dynamically added elements
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if the added node has scroll-animate class
            if (node.classList && node.classList.contains('scroll-animate')) {
              this.observer.observe(node);
              this.elements.add(node);
            }
            
            // Check for child elements with scroll-animate class
            const childElements = node.querySelectorAll && node.querySelectorAll('.scroll-animate');
            if (childElements) {
              childElements.forEach(child => {
                if (!this.elements.has(child)) {
                  this.observer.observe(child);
                  this.elements.add(child);
                }
              });
            }
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Fallback for browsers without Intersection Observer
  fallbackInit() {
    let ticking = false;
    
    const checkElements = () => {
      const elements = document.querySelectorAll('.scroll-animate:not(.animate)');
      
      elements.forEach(element => {
        if (this.isElementInViewport(element)) {
          this.animateElement(element);
        }
      });
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(checkElements);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    
    // Initial check
    checkElements();
  }

  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top <= windowHeight * 0.9 &&
      rect.bottom >= windowHeight * 0.1
    );
  }

  // Public methods for manual control
  refresh() {
    if (this.observer) {
      this.observeElements();
    }
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.elements.clear();
  }

  // Add element manually
  observe(element) {
    if (this.observer && !this.elements.has(element)) {
      this.observer.observe(element);
      this.elements.add(element);
    }
  }

  // Remove element from observation
  unobserve(element) {
    if (this.observer && this.elements.has(element)) {
      this.observer.unobserve(element);
      this.elements.delete(element);
    }
  }
}

// Utility functions for easy usage
const ScrollAnimations = {
  // Initialize the system
  init(options = {}) {
    if (typeof window !== 'undefined') {
      window.scrollAnimationSystem = new ScrollAnimationSystem(options);
      return window.scrollAnimationSystem;
    }
  },

  // Add animation to element
  animate(selector, animationType = 'fade-up', delay = 0) {
    const elements = typeof selector === 'string' 
      ? document.querySelectorAll(selector)
      : [selector];

    elements.forEach((element, index) => {
      element.classList.add('scroll-animate', animationType);
      
      if (delay > 0) {
        element.style.transitionDelay = `${delay * index}ms`;
      }
    });

    // Refresh observer to include new elements
    if (window.scrollAnimationSystem) {
      window.scrollAnimationSystem.refresh();
    }
  },

  // Stagger animations for multiple elements
  stagger(selector, animationType = 'fade-up', staggerDelay = 100) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
      element.classList.add('scroll-animate', animationType, `delay-${Math.min(index * staggerDelay, 500)}`);
    });

    if (window.scrollAnimationSystem) {
      window.scrollAnimationSystem.refresh();
    }
  },

  // Trigger animation manually
  trigger(selector) {
    const elements = typeof selector === 'string' 
      ? document.querySelectorAll(selector)
      : [selector];

    elements.forEach(element => {
      if (window.scrollAnimationSystem) {
        window.scrollAnimationSystem.animateElement(element);
      }
    });
  }
};

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      ScrollAnimations.init();
    });
  } else {
    ScrollAnimations.init();
  }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScrollAnimations;
}

// Global access
if (typeof window !== 'undefined') {
  window.ScrollAnimations = ScrollAnimations;
}