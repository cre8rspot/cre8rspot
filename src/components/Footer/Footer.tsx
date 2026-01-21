import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/service', label: 'Service' },
  { path: '/contact', label: 'Contact' },
];

const services = [
  'Branding Design',
  'Website Development',
  'Branding Design',
  'Social Media Management',
  'SEO',
  'Designing',
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand box fade-up">
            <div className="footer-brand-logo">
              <span className="footer-brand-logo-icon">
                <img src='/images/logo.png'/>
              </span>
            </div>
            <p className="footer-brand-description">
              Cre8r Spot is a creative IT solutions that helps businesses grow through design and digital
              services. We provide graphic design, UX/UI, video editing, and website development with a focus on
              quality, clarity, and timely delivery.
            </p>
          </div>

          <div className="footer-column box fade-up delay-100">
            <h4 className="footer-column-title">Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column box fade-up delay-200">
            <h4 className="footer-column-title">Services</h4>
            <div className="footer-links">
              {services.map((service, index) => (
                <Link key={index} to="/service" className="footer-link">
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column box fade-up delay-300">
            <h4 className="footer-column-title">Contact</h4>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <span>rijinshivu@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <span>+91 7904695548</span>
            </div>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Social link 1">
                <img src='/images/behance.png'/>
              </a>
              <a href="#" className="footer-social-link" aria-label="Social link 2">
                <img src='/images/insta.png'/>
              </a>
              <a href="#" className="footer-social-link" aria-label="Social link 3">
                <img src='/images/linkedin.png'/>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom box fade-up delay-400">
          <p className="footer-copyright">@Copyright 2025, cre8rspot - Services & Products</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
