import { useEffect, useRef, useState } from "react";
import "./TestimonialCarousel.css";

interface Testimonial {
  img: string;
  text: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    img: "/images/review1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Karthic1",
    position: "Web Developer"
  },
  {
    img: "/images/review2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Karthic2",
    position: "UI/UX Designer"
  },
  {
    img: "/images/review3.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Karthic3",
    position: "Product Manager"
  },
  {
    img: "/images/review1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Karthic4",
    position: "Marketing Director"
  },
  {
    img: "/images/review2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Karthic5",
    position: "CEO"
  },
  {
    img: "/images/review3.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Karthic6",
    position: "Creative Director"
  }
];

const TestimonialCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const extendedData = [...testimonials, ...testimonials, ...testimonials];
  const startIndex = testimonials.length;

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
      updateCarousel(false);
    };
    
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

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(startIndex + index);
  };

  const getActiveDotIndex = () => {
    return ((currentIndex - startIndex) % testimonials.length + testimonials.length) % testimonials.length;
  };

  return (
    <section 
      className="testimonial-carousel-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="testimonial-carousel-wrapper">
        <button className="carousel-nav carousel-nav-prev" onClick={handlePrev} aria-label="Previous">
          &#8249;
        </button>

        <div className="testimonial-carousel-viewport">
          <div 
            className="testimonial-carousel-track" 
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedData.map((item, i) => (
              <article
                className="testimonial-carousel-card"
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <figure className="carousel-card-image">
                  <img src={item.img} alt={item.name} />
                </figure>
                <div className="carousel-card-content">
                  <h3 className="carousel-card-name">{item.name}</h3>
                  <p className="carousel-card-position">{item.position}</p>
                  <p className="carousel-card-text">"{item.text}"</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button className="carousel-nav carousel-nav-next" onClick={handleNext} aria-label="Next">
          &#8250;
        </button>
      </div>

      {/* <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === getActiveDotIndex() ? 'carousel-dot-active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default TestimonialCarousel;
