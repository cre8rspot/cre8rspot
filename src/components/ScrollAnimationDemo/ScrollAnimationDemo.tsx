import React from 'react';
import './ScrollAnimationDemo.css';

const ScrollAnimationDemo: React.FC = () => {
  return (
    <div className="scroll-demo">
      <div className="scroll-demo-section">
        <h2 className="scroll-animate fade-up">Fade Up Animation</h2>
        <p className="scroll-animate fade-up delay-200">
          This text slides up from the bottom with a slight delay.
        </p>
      </div>

      <div className="scroll-demo-section">
        <h2 className="scroll-animate fade-left">Fade Left Animation</h2>
        <p className="scroll-animate fade-right delay-200">
          This text slides in from the right side.
        </p>
      </div>

      <div className="scroll-demo-section">
        <div className="scroll-animate zoom-in">
          <h2>Zoom In Animation</h2>
          <p>This entire card zooms in when it enters the viewport.</p>
        </div>
      </div>

      <div className="scroll-demo-section">
        <div className="scroll-animate zoom-out duration-slow">
          <h2>Zoom Out Animation (Slow)</h2>
          <p>This card starts large and scales down with slower timing.</p>
        </div>
      </div>

      <div className="scroll-demo-section">
        <h2 className="scroll-animate fade ease-bounce">Bouncy Animation</h2>
        <div className="scroll-demo-grid">
          <div className="scroll-animate fade-up delay-100">Item 1</div>
          <div className="scroll-animate fade-up delay-200">Item 2</div>
          <div className="scroll-animate fade-up delay-300">Item 3</div>
          <div className="scroll-animate fade-up delay-400">Item 4</div>
        </div>
      </div>

      <div className="scroll-demo-section">
        <h2 className="scroll-animate fade-down">Multiple Directions</h2>
        <div className="scroll-demo-directions">
          <div className="scroll-animate fade-left delay-100">← Left</div>
          <div className="scroll-animate fade-up delay-200">↑ Up</div>
          <div className="scroll-animate fade-down delay-300">↓ Down</div>
          <div className="scroll-animate fade-right delay-400">Right →</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationDemo;