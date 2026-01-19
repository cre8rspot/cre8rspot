import './AboutFeatures.css';
import about1 from '../../image/about-1.png';
import about2 from '../../image/about-2.png';
import about3 from '../../image/about-3.png';
import about4 from '../../image/about-4.png';

const features = [
  {
    iconImage: about1,
    title: 'Creative & Skilled Team',
    description: 'We turn ideas into clean, impactful designs.',
  },
  {
    iconImage: about2,
    title: 'High Quality Digital Solutions',
    description: 'We deliver modern and effective digital outputs.',
  },
  {
    iconImage: about3,
    title: 'Fast & Modern Website Development',
    description: 'We build quick, responsive, and sleek websites.',
  },
  {
    iconImage: about4,
    title: 'Reliable & On-Time Delivery',
    description: 'We ensure smooth communication and timely work.',
  },
];

const AboutFeatures = () => {
  return (
    <section className="about-features">
      <div className="about-features-grid">
        <div className="about-features-image-container">
          {/* <div className="about-features-badge"> */}
            {/* <div className="about-features-badge-number">5</div> */}
            {/* <div className="about-features-badge-text">
              Delivering Quality
              <br />
              Digital Services
              <br />
              for Years
            </div> */}
          {/* </div> */}
          <img
            src="src/image/about_left_img.png"
            alt="Team working"
            className="about-features-image"
          />
        </div>

        <div className="about-features-content">
          <p className="about-features-label">About Us</p>
          <h2 className="about-features-title">Who We Are & What We Do</h2>
          <div className="about-features-list">
            {features.map((feature, index) => (
              <div key={index} className="about-features-item">
                <div className="about-features-item-icon">
                  <img 
                    src={feature.iconImage} 
                    alt={feature.title}
                    className="about-features-icon-image"
                  />
                </div>
                <div className="about-features-item-content">
                  <h4 className="about-features-item-title">{feature.title}</h4>
                  <p className="about-features-item-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
