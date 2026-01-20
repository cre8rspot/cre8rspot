import { useState, useEffect } from 'react';
import './TeamSection.css';

const teamMembers = [
  {
    name: 'Emily Kim',
    role: 'Founder',
    image: '/images/team1.png',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
  },
  {
    name: 'Michael Steward',
    role: 'Creative Director',
    image: '/images/team2.png',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Lead Developer',
    image: '/images/team5.png',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
  },
  {
    name: 'Julia Gimmel',
    role: 'UX Designer',
    image: '/images/team3.png',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
  },
  {
    name: 'Lisa Anderson',
    role: 'Marketing Manager',
    image: '/images/team4.png',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
  },
  // {
  //   name: 'James Wilson',
  //   role: 'Product Manager',
  //   image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=900&auto=format&fit=crop',
  //   linkedin: '#',
  //   twitter: '#',
  //   instagram: '#',
  // },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((index + teamMembers.length) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrevious = () => {
    updateCarousel(currentIndex - 1);
  };

  const handleNext = () => {
    updateCarousel(currentIndex + 1);
  };

  const getCardPosition = (index: number) => {
    const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;
    if (offset === 0) return 'center';
    if (offset === 1) return 'right-1';
    if (offset === 2) return 'right-2';
    if (offset === teamMembers.length - 1) return 'left-1';
    if (offset === teamMembers.length - 2) return 'left-2';
    return 'hidden';
  };

  return (
    <section className="team-section">
      <div className="team-section-header">
        <p className="team-section-label">Our Team</p>
        <h2 className="team-section-title">The Minds Behind Our Creative Work</h2>
      </div>

      <div className="carousel-container">
        <button className="nav-arrow left" onClick={handlePrevious}>
          ‹
        </button>
        
        <div className="carousel-track">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`card ${getCardPosition(index)}`}
              onClick={() => updateCarousel(index)}
            >
              <img src={member.image} alt={member.name} />
              <div className="card-overlay">
                <h3 className="card-name">{member.name}</h3>
                <p className="card-role">{member.role}</p>
                <div className="card-socials">
                  <a href={member.linkedin}>
                    {/* <i className="fab fa-linkedin-in"></i> */}
                    <img src='/images/linkedin.png' className="fab fa-linkedin-in" />
                  </a>
                  <a href={member.twitter}>
                    {/* <i className="fab fa-twitter"></i> */}
                    <img src='/images/behance.png' className="fab fa-twitter"/>
                  </a>
                  <a href={member.instagram}>
                    {/* <i className="fab fa-instagram"></i> */}
                    <img src='/images/insta.png' className="fab fa-instagram"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow right" onClick={handleNext}>
          ›
        </button>
      </div>

      {/* <div className="dots">
        {teamMembers.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div> */}
    </section>
  );
};

export default TeamSection;
