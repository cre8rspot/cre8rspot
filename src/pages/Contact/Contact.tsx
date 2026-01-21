import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageBanner from '../../components/PageBanner/PageBanner';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useScrollAnimations } from '../../hooks/useScrollAnimations';
import './Contact.css';

const Contact = () => {
  // Initialize scroll animations for this page
  useScrollAnimations();

  return (
    <div className="contact-page">
      <Header />
      <PageBanner title="Contact Us" breadcrumb="Contact Us" />

      <section className="contact-content">
        <div className="contact-grid">
          <div className="box fade-left">
            <ContactInfo />
          </div>
          <div className="box fade-right delay-200">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
