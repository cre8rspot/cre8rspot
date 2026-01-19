import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
            alt="Digital design showcase"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Ideas Into Stunning Digital Experiences
          </h1>
          <p className="hero-subtitle">
            Professional Graphic Design, UI/UX, Video Editing & Web Development
          </p>
          <p className="hero-tagline">
            We bring creativity + technology together for your brand.
          </p>
          <div className="hero-actions">
            <Link to="/service">
              <button className="hero-btn">More Details</button>
            </Link>
            <Link to="/service" className="hero-btn-icon">
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
