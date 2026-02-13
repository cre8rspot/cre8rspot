import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import { useScrollAnimations } from '../../hooks/useScrollAnimations';
import './Service.css';

// Import service icons
import graphicIcon from '../../image/graphic_icon.png';
import uxuiIcon from '../../image/UX_UI_Designing_icon.png';
import videoIcon from '../../image/VideoEditing_icon.png';
import webDevIcon from '../../image/web_icon.png';
import productAdsIcon from '../../image/product_icon.png';

const services = [
  {
    icon: graphicIcon,
    title: 'Graphic Designing',
    description:
      "We create designs that bring your brand to life. Each design clearly communicates your message while staying creative and consistent. Our graphics help build recognition, trust, and a strong visual presence across all platforms.",
    link: '/service/graphic-designing',
  },
  {
    icon: uxuiIcon,
    title: 'UX / UI Designing',
    description:
      'We design intuitive and user-friendly digital experiences that feel smooth & meaningful. Our UX/UI approach focuses on usability, visual clarity, & user behavior. This ensures effortless navigation and stronger engagement with your product or brand.',
    link: '/service/ux-ui-designing',
  },
  {
    icon: videoIcon,
    title: 'Video Editing',
    description:
      'We turn raw footage into visually engaging and professional-quality videos. Each frame is edited with precision, creativity, and storytelling in mind. Our videos are designed to capture attention and connect emotionally with your audience.',
    link: '/service/video-editing',
  },
  {
    icon: webDevIcon,
    title: 'Web Development',
    description:
      'We build fast, responsive, and modern websites tailored to your business needs. Our development process focuses on performance, scalability, and clean design. The result is a seamless and reliable user experience across all devices.',
    link: '/service/web-development',
  },
  {
    icon: productAdsIcon,
    title: 'Product Ads Shooting',
    description:
      'We produce high-quality product ad shoots that highlight every detail with precision. Our visuals are carefully styled to reflect brand value and professionalism. Each shoot is designed to attract attention and drive customer interest.',
    link: '/service/product-ads-shooting',
  },
];

const Service = () => {
  // Initialize scroll animations for this page
  useScrollAnimations();

  return (
    <div className="service-page">
      <Header />
      <PageBanner title="Service" breadcrumb="Service" />

      <section className="service-content">
        <SectionHeader label="Our Service" title="Solutions Designed for Growth" />
        <div className="service-grid">
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
        <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default Service;
