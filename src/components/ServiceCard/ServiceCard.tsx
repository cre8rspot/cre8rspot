import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ServiceCard.css';

interface ServiceCardProps {
  icon: string; // Changed from React.ReactNode to string for image path
  title: string;
  description: string;
  link?: string;
  animationDelay?: string;
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  link = '/service/graphic-designing',
  animationDelay = ''
}: ServiceCardProps) => {
  return (
    <div className={`service-card box zoom-in ${animationDelay}`}>
      <div className="service-card-border">
        <div className="service-card-icon">
          <img src={icon} alt={`${title} icon`} className="service-card-icon-image" />
        </div>
        <div className="service-card-main">
          <h3 className="service-card-title">{title}</h3>
          <p className="service-card-description">
            {description}
          </p>
          <div className="service-card-actions">
            <Link to={link}>
              <button className="service-card-btn">More Details</button>
            </Link>
            <Link to={link} className="service-card-btn-icon">
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
