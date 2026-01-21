import './AboutFeatures.css';

const features = [
  {
    iconImage: '/images/about-1.png',
    title: 'Creative & Skilled Team',
    description: 'We turn ideas into clean, impactful designs.',
  },
  {
    iconImage: '/images/about-2.png',
    title: 'High Quality Digital Solutions',
    description: 'We deliver modern and effective digital outputs.',
  },
  {
    iconImage: '/images/about-3.png',
    title: 'Fast & Modern Website Development',
    description: 'We build quick, responsive, and sleek websites.',
  },
  {
    iconImage: '/images/about-4.png',
    title: 'Reliable & On-Time Delivery',
    description: 'We ensure smooth communication and timely work.',
  },
];

const AboutFeatures = () => {
  return (
    <section className="about-features">
      <div className="about-features-grid">
        <div className="about-features-image-container box fade-left">
          <img
            src="/images/about_left_img.png"
            alt="Team working"
            className="about-features-image"
          />
        </div>

        <div className="about-features-content">
          <p className="about-features-label box fade-up">About Us</p>
          <h2 className="about-features-title box fade-up delay-100">Who We Are & What We Do</h2>
          <div className="about-features-list">
            {features.map((feature, index) => (
              <div key={index} className={`about-features-item box fade-up delay-${(index + 2) * 100}`}>
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
