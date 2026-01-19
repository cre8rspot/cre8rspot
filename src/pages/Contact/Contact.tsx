import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageBanner from '../../components/PageBanner/PageBanner';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <PageBanner title="Contact Us" breadcrumb="Contact Us" />

      <section className="contact-content">
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
