import { Mail, Phone } from 'lucide-react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2 className="contact-info-title">Let's Build Something Powerful Together</h2>
      <p className="contact-info-description">
        Tell us about your ideas, goals, or project requirements. Our team is ready to help you create smart and
        impactful digital solutions.
      </p>

      <div className="contact-info-item">
        <div className="contact-info-icon">
          <Mail size={20} />
        </div>
        <div className="contact-info-content">
          <span className="contact-info-label">Email</span>
          <span className="contact-info-value">rijinshivu@gmail.com</span>
        </div>
      </div>

      <div className="contact-info-item">
        <div className="contact-info-icon">
          <Phone size={20} />
        </div>
        <div className="contact-info-content">
          <span className="contact-info-label">Phone Number</span>
          <span className="contact-info-value">+91 7904695548</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
