import { useState, useEffect } from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'Working with this team has been an absolute pleasure. Their attention to detail and creative vision exceeded all our expectations.',
    image: '/images/team1.png',
    position: 'Marketing Director'
  },
  {
    name: 'Michael Chen',
    text: 'The level of professionalism and expertise they brought to our project was outstanding. Highly recommend their services.',
    image: '/images/review2.png',
    position: 'CEO, TechCorp'
  },
  {
    name: 'Emily Rodriguez',
    text: 'From concept to execution, they delivered exactly what we needed. The results speak for themselves.',
    image: '/images/review3.png',
    position: 'Creative Director'
  },
  {
    name: 'David Thompson',
    text: 'Their innovative approach and dedication to quality made all the difference in our project success.',
    image: '/images/review1.png',
    position: 'Product Manager'
  },
  {
    name: 'Lisa Anderson',
    text: 'Exceptional work quality and timely delivery. They truly understand what clients need.',
    image: '/images/review2.png',
    position: 'Brand Manager'
  },
  {
    name: 'James Wilson',
    text: 'The team\'s creativity and technical skills are unmatched. They brought our vision to life perfectly.',
    image: '/images/review3.png',
    position: 'Founder'
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((index + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const nextSlide = () => updateCarousel(currentIndex + 1);
  const prevSlide = () => updateCarousel(currentIndex - 1);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="testimonial-section">
      <div className="testimonial">
        <div className="testimonial__header">
          <h4 className="testimonial__label">Our Client Says</h4>
          <h1 className="testimonial__heading">
            Turning products into visual stories
          </h1>
        </div>

        <div className="testimonial__stats">
          <div className="testimonial__stats-top">
            <div className="testimonial__stat">
              <h1 className="testimonial__stat-number">85%</h1>
              <p className="testimonial__stat-title">Improved Project</p>
            </div>
            <div className="testimonial__stat">
              <h1 className="testimonial__stat-number">95%</h1>
              <p className="testimonial__stat-title">Client Satisfaction</p>
            </div>
          </div>

          <div className="testimonial__stats-bottom">
            <div className="testimonial__avatars">
              <img src="/images/review1.png" alt="User 1" className="testimonial__avatar" />
              <img src="/images/review2.png" alt="User 2" className="testimonial__avatar" />
              <img src="/images/review3.png" alt="User 3" className="testimonial__avatar" />
              <img src="/images/review1.png" alt="User 4" className="testimonial__avatar" />
              <img src="/images/review2.png" alt="User 5" className="testimonial__avatar" />
            </div>
            <div className="testimonial__review-count">
              2.7k Positive Reviews
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-carousel-container">
        <div className="testimonial-carousel">
          <div className="testimonial-carousel__img-container">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name}
              className="testimonial-carousel__image"
            />
          </div>
          
          <div className="testimonial-content">
            <blockquote className="testimonial-quote">
              <p className="testimonial-quote__text">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="testimonial-quote__name">
                {testimonials[currentIndex].name}
              </p>
              <p className="testimonial-quote__job">
                {testimonials[currentIndex].position}
              </p>
            </blockquote>
          </div>

          <button className="testimonial-carousel__btn testimonial-carousel__btn--left" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="testimonial-carousel__btn testimonial-carousel__btn--right" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`testimonial-dot ${index === currentIndex ? 'testimonial-dot--active' : ''}`}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div> */}
    </section>
  );
};

export default TestimonialSection;
