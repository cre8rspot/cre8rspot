import React from 'react';
import { useScrollAnimations } from '../../hooks/useScrollAnimations';

const AnimatedSection = () => {
  // Initialize scroll animations for this component
  useScrollAnimations();

  return (
    <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Basic fade-up animation */}
      <h1 className="box fade-up">
        Welcome to Our Service
      </h1>

      {/* Fade-up with delay */}
      <p className="box fade-up delay-200" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        We create amazing digital experiences that help your business grow.
      </p>

      {/* Grid with different animations */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        <div className="box fade-left" style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '8px' }}>
          <h3>Fade Left</h3>
          <p>This card slides in from the right side.</p>
        </div>

        <div className="box zoom-in delay-200" style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '8px' }}>
          <h3>Zoom In</h3>
          <p>This card scales up from a smaller size.</p>
        </div>

        <div className="box fade-right delay-400" style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '8px' }}>
          <h3>Fade Right</h3>
          <p>This card slides in from the left side.</p>
        </div>
      </div>

      {/* Staggered list animation */}
      <div style={{ marginTop: '4rem' }}>
        <h2 className="box fade-up">Our Features</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="box fade-up delay-100" style={{ padding: '1rem', margin: '0.5rem 0', background: '#e3f2fd', borderRadius: '4px' }}>
            ✓ Professional Design
          </li>
          <li className="box fade-up delay-200" style={{ padding: '1rem', margin: '0.5rem 0', background: '#e3f2fd', borderRadius: '4px' }}>
            ✓ Fast Performance
          </li>
          <li className="box fade-up delay-300" style={{ padding: '1rem', margin: '0.5rem 0', background: '#e3f2fd', borderRadius: '4px' }}>
            ✓ Mobile Responsive
          </li>
          <li className="box fade-up delay-400" style={{ padding: '1rem', margin: '0.5rem 0', background: '#e3f2fd', borderRadius: '4px' }}>
            ✓ SEO Optimized
          </li>
        </ul>
      </div>

      {/* Zoom out animation */}
      <div className="box zoom-out delay-500" style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '12px' }}>
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to discuss your project!</p>
        <button style={{ padding: '1rem 2rem', background: 'white', color: '#667eea', border: 'none', borderRadius: '6px', fontSize: '1.1rem', cursor: 'pointer' }}>
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default AnimatedSection;