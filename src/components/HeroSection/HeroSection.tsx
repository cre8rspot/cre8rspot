import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title box fade-up">
            Transform Your Ideas Into Stunning Digital Experiences
          </h1>
          <p className="hero-subtitle box fade-up delay-200">
            Professional Graphic Design, UI/UX, Video Editing & Web Development
          </p>
          <p className="hero-tagline box fade-up delay-300">
            We bring creativity + technology together for your brand.
          </p>
          <div className="hero-actions box fade-up delay-400">
            <Link to="/contact">
              <button className="hero-btn">More Details</button>
            </Link>
            <Link to="/contact" className="hero-btn-icon">
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-image-container box fade-left">
          <img
            src="src/image/3d_robot4.png"
            alt="Digital design showcase"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
