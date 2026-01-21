# Scroll Animation System

A clean, production-ready scroll animation system for React applications using Intersection Observer.

## Features

- ✅ **No external dependencies** - Uses plain CSS and vanilla JavaScript
- ✅ **Performance optimized** - Uses IntersectionObserver API
- ✅ **Reusable** - One utility works across all components
- ✅ **Accessible** - Respects `prefers-reduced-motion`
- ✅ **TypeScript ready** - Easy to convert to TypeScript
- ✅ **Clean API** - Simple to use and maintain

## Quick Start

### 1. Import CSS globally (already done in main.tsx)
```javascript
import "./styles/animations.css";
```

### 2. Use in React components
```jsx
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const MyComponent = () => {
  // Initialize animations for this component
  useScrollAnimations();

  return (
    <div>
      <h1 className="box fade-up">Animated Title</h1>
      <p className="box fade-up delay-200">Animated paragraph with delay</p>
    </div>
  );
};
```

## Animation Classes

### Base Classes
- `.box` - Required base class for all animated elements
- `.animate` - Added automatically when element enters viewport

### Animation Types
- `.fade-up` - Slides up from bottom (60px)
- `.fade-left` - Slides in from right (80px)
- `.fade-right` - Slides in from left (-80px)
- `.zoom-in` - Scales up from 0.8 to 1.0
- `.zoom-out` - Scales down from 1.2 to 1.0

### Timing Modifiers
- `.delay-100` to `.delay-500` - Animation delays (0.1s to 0.5s)
- `.duration-fast` - Faster animation (0.5s)
- `.duration-slow` - Slower animation (1.2s)

## Usage Examples

### Basic Animation
```jsx
<h1 className="box fade-up">Title</h1>
```

### With Delay
```jsx
<p className="box fade-up delay-300">Delayed text</p>
```

### Staggered Cards
```jsx
{items.map((item, index) => (
  <div key={index} className={`box zoom-in delay-${(index + 1) * 100}`}>
    {item.content}
  </div>
))}
```

### Different Directions
```jsx
<div className="box fade-left">From right</div>
<div className="box fade-right">From left</div>
<div className="box zoom-in">Scale up</div>
```

## API Reference

### useScrollAnimations(options)
React hook to initialize scroll animations.

**Parameters:**
- `options.threshold` (number): Intersection threshold (default: 0.3)
- `options.rootMargin` (string): Root margin for observer (default: '0px')
- `options.dependencies` (array): Dependencies for useEffect (default: [])

**Example:**
```jsx
useScrollAnimations({
  threshold: 0.5,
  rootMargin: '50px',
  dependencies: [someState]
});
```

### initScrollAnimations(options)
Direct utility function for non-React usage.

**Returns:** Cleanup function to disconnect observer

**Example:**
```javascript
const cleanup = initScrollAnimations({ threshold: 0.3 });
// Later...
cleanup();
```

## Best Practices

1. **Use sparingly** - Don't animate every element
2. **Stagger timing** - Use delays for sequential animations
3. **Test performance** - Monitor on slower devices
4. **Respect accessibility** - System respects `prefers-reduced-motion`
5. **One hook per page** - Call `useScrollAnimations()` once per page/component

## Browser Support

- Modern browsers with IntersectionObserver support
- IE11+ with polyfill
- Graceful degradation for unsupported browsers