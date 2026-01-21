import { CheckCircle } from 'lucide-react';
import './AboutSection.css';

const features = [
  'Creative & skilled team',
  'Fast & modern website development',
  'High-quality digital solutions',
  'Engaging video content',
  'Focus on user experience & branding',
  'On-time delivery & clear communication',
  'Professional product ad shooting',
  'Innovative design approach',
  'Seamless UI/UX solutions',
  'Brand-focused visual identity',
];

interface AboutSectionProps {
  showImage?: boolean;
}

const AboutSection = ({ showImage = true }: AboutSectionProps) => {
  return (
    <section className="about-section">
      <div className="about-section-grid">
        {showImage && (
          <div className="about-section-image-container box fade-left">
            <img
              src="/images/about_left_img.png"
              alt="Team working"
              className="about-features-image"
            />
          </div>
        )}

        <div className="about-section-content">
          <p className="about-section-label box fade-up">About Us</p>
          <h2 className="about-section-title box fade-up delay-100">Who We Are & What We Do</h2>
          <p className="about-section-description box fade-up delay-200">
            Cre8r Spot is a creative IT solutions that helps businesses grow through design and digital services.
            We provide graphic design, UI/UX, video editing, and website development with a focus on quality,
            clarity, and timely delivery.
          </p>
          <div className="about-section-features box fade-up delay-300">
            {features.map((feature, index) => (
              <div key={index} className="about-section-feature">
                <CheckCircle size={16} className="about-section-feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
