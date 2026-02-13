import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageBanner from '../../components/PageBanner/PageBanner';
import AboutSection from '../../components/AboutSection/AboutSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import { useScrollAnimations } from '../../hooks/useScrollAnimations';
import './About.css';

const About = () => {
  // Initialize scroll animations for this page
  useScrollAnimations();

  return (
    <div className="about-page">
      <Header />
      <PageBanner title="About Us" breadcrumb="About Us" />
      <AboutSection />
      <TeamSection />
      <TestimonialSection />
       <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default About;
