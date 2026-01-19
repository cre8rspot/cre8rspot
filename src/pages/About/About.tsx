import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageBanner from '../../components/PageBanner/PageBanner';
import AboutSection from '../../components/AboutSection/AboutSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <PageBanner title="About Us" breadcrumb="About Us" />
      <AboutSection />
      <TeamSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default About;
