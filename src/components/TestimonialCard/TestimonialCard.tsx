import './TestimonialCard.css';

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
  position?: string;
}

const TestimonialCard = ({ name, text, image, position }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-content">
        <div className="testimonial-card-quote">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
          </svg>
        </div>
        <p className="testimonial-card-text">{text}</p>
        <div className="testimonial-card-author">
          <img src={image} alt={name} className="testimonial-card-avatar" />
          <div className="testimonial-card-info">
            <h4 className="testimonial-card-name">{name}</h4>
            {position && <p className="testimonial-card-position">{position}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
