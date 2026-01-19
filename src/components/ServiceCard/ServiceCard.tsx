import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ServiceCard.css';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon, title, description, link = '/service/graphic-designing' }: ServiceCardProps) => {
  return (
    // <div className="service-card">
    //   <div className="service-card-icon">{icon}</div>
    //   <h3 className="service-card-title">{title}</h3>
    //   <p className="service-card-description">{description}</p>
    //   <div className="service-card-actions">
    //     <Link to={link}>
    //       <button className="service-card-btn">More Details</button>
    //     </Link>
    //     <Link to={link} className="service-card-btn-icon">
    //       <ArrowUpRight size={16} />
    //     </Link>
    //   </div>
    // </div>
<>
    <div className="service-card-icon">{icon}</div>
<div className="service-card-border">
  <div className="service-card-main">
    <h1 className="service-card-title">{title}</h1>
    <p className="service-card-description">
      {description}
    </p>
    <button className="service-card-actions">
<Link to={link}>
          <button className="service-card-btn">More Details</button>
       </Link>
       <Link to={link} className="service-card-btn-icon">
          <ArrowUpRight size={16} />
         </Link>
    </button>
  </div>
</div>

</>



  );
};

export default ServiceCard;
