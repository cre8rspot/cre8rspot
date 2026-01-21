import { Palette, Layout, Video, Code, Camera } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import BrandSlider from '../../components/BrandSlider/BrandSlider';
import AboutFeatures from '../../components/AboutFeatures/AboutFeatures';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import { useScrollAnimations } from '../../hooks/useScrollAnimations';
import './Home.css';

const services = [
  {
    icon: <Palette size={20} />,
    title: 'Graphic Designing',
    description:
      "We create visually impactful designs that bring your brand identity to life. Every design is crafted to communicate your message clearly while maintaining creativity and consistency. Our graphics help build recognition, trust, and a strong visual presence across all platforms.",
    link: '/service/graphic-designing',
  },
  {
    icon: <Layout size={20} />,
    title: 'UX / UI Designing',
    description:
      'We design intuitive and user-friendly digital experiences that feel smooth and meaningful. Our UX/UI approach focuses on usability, visual clarity, and user behavior. This ensures effortless navigation and stronger engagement with your product or brand.',
    link: '/service/ux-ui-designing',
  },
  {
    icon: <Video size={20} />,
    title: 'Video Editing',
    description:
      'We turn raw footage into visually engaging and professional-quality videos. Each frame is edited with precision, creativity, and storytelling in mind. Our videos are designed to capture attention and connect emotionally with your audience.',
    link: '/service/video-editing',
  },
  {
    icon: <Code size={20} />,
    title: 'Web Development',
    description:
      'We build fast, responsive, and modern websites tailored to your business needs. Our development process focuses on performance, scalability, and clean design. The result is a seamless and reliable user experience across all devices.',
    link: '/service/web-development',
  },
  {
    icon: <Camera size={20} />,
    title: 'Product Ads Shooting',
    description:
      'We produce high-quality product ad shoots that highlight every detail with precision. Our visuals are carefully styled to reflect brand value and professionalism. Each shoot is designed to attract attention and drive customer interest.',
    link: '/service/product-ads-shooting',
  },
];

const Home = () => {
  // Initialize scroll animations for this page
  useScrollAnimations();

  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <BrandSlider />
      <AboutFeatures />

      <section className="home-services">
        <SectionHeader label="Our Service" title="Solutions Designed for Growth" />
        <div className="home-services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              animationDelay={`delay-${(index % 3 + 1) * 100}`}
            />
          ))}
        </div>
      </section>

      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home;

