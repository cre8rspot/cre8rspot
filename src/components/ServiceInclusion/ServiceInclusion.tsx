import './ServiceInclusion.css';

interface ServiceInclusionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceInclusion = ({ icon, title, description }: ServiceInclusionProps) => {
  return (
    <div className="service-inclusion">
      <div className="service-inclusion-icon">{icon}</div>
      <div className="service-inclusion-content">
        <h4 className="service-inclusion-title">{title}</h4>
        <p className="service-inclusion-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceInclusion;
