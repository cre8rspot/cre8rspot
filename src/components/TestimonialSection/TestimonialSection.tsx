import { useEffect, useRef, useState } from "react";
import './TestimonialSection.css';

interface Testimonial {
  img: string;
  text: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    img: "/images/review1.png",
    text: "Working with this team has been an absolute pleasure. Their attention to detail and creative vision exceeded all our expectations.",
    name: "Sarah Johnson",
    position: "Marketing Director"
  },
  {
    img: "/images/review2.png",
    text: "The level of professionalism and expertise they brought to our project was outstanding. Highly recommend their services.",
    name: "Michael Chen",
    position: "CEO, TechCorp"
  },
  {
    img: "/images/review3.png",
    text: "From concept to execution, they delivered exactly what we needed. The results speak for themselves.",
    name: "Emily Rodriguez",
    position: "Creative Director"
  },
  {
    img: "/images/review1.png",
    text: "Their innovative approach and dedication to quality made all the difference in our project success.",
    name: "David Thompson",
    position: "Product Manager"
  },
  {
    img: "/images/review2.png",
    text: "Exceptional work quality and timely delivery. They truly understand what clients need.",
    name: "Lisa Anderson",
    position: "Brand Manager"
  },
  {
    img: "/images/review3.png",
    text: "The team's creativity and technical skills are unmatched. They brought our vision to life perfectly.",
    name: "James Wilson",
    position: "Founder"
  }
];

const TestimonialSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [cardsPerView, setCardsPerView] = useState<number>(3);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const extendedData = [...testimonials, ...testimonials, ...testimonials];
  const startIndex = testimonials.length;

  const getCardsPerView = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const updateCarousel = (withTransition = true) => {
    if (!cardsRef.current[0] || !trackRef.current) return;
    
    const cardWidth = cardsRef.current[0].offsetWidth;
    const gap = 30;
    
    trackRef.current.style.transition = withTransition ? 'transform 0.6s ease-in-out' : 'none';
    trackRef.current.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    const dataLength = testimonials.length;
    const relativeIndex = currentIndex % dataLength;
    
    if (currentIndex >= startIndex + dataLength) {
      setCurrentIndex(startIndex + relativeIndex);
      setTimeout(() => updateCarousel(false), 0);
    } else if (currentIndex < startIndex) {
      setCurrentIndex(startIndex + relativeIndex);
      setTimeout(() => updateCarousel(false), 0);
    }
  };

  const startAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    autoSlideRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  useEffect(() => {
    updateCarousel(true);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      updateCarousel(false);
    };
    
    setCardsPerView(getCardsPerView());
    setCurrentIndex(startIndex);
    setTimeout(() => updateCarousel(false), 100);
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial">
        <div className="testimonial__header">
          <h4 className="testimonial__label box fade-up">Our Client Says</h4>
          <h1 className="testimonial__heading box fade-up delay-100">
            Turning products into visual stories
          </h1>
        </div>

        <div className="testimonial__stats box fade-left delay-200">
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

      {/* <div 
        className="testimonial-carousel-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="testimonial-carousel-container">
          <button className="testimonial-nav testimonial-nav-prev" onClick={handlePrev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="testimonial-carousel-viewport">
            <div 
              className="testimonial-carousel-track" 
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedData.map((item, i) => (
                <article
                  className="testimonial-card"
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  onMouseMove={(e) => {
                    const article = e.currentTarget;
                    const rect = article.getBoundingClientRect();
                    const cx = rect.x + rect.width / 2;
                    const cy = rect.y + rect.height / 2;
                    const dx = (cx - e.pageX) / (rect.width / 2);
                    const dy = (cy - e.pageY) / (rect.height / 2);
                    article.style.transform = `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'initial';
                  }}
                >
                  <figure className="testimonial-card-image">
                    <img src={item.img} alt={item.name} />
                  </figure>
                  <div className="testimonial-card-content">
                    <p className="testimonial-card-text">"{item.text}"</p>
                    <h1 className="testimonial-card-name">{item.name}</h1>
                    <p className="testimonial-card-position">{item.position}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button className="testimonial-nav testimonial-nav-next" onClick={handleNext} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default TestimonialSection;
