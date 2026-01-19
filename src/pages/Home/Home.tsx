import { Palette, Layout, Video, Code, Camera } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import BrandSlider from '../../components/BrandSlider/BrandSlider';
import AboutFeatures from '../../components/AboutFeatures/AboutFeatures';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import './Home.css';

const services = [
  {
    icon: <Palette size={20} />,
    title: 'Graphic Designing',
    description:
      "We create visually stunning designs that reflect your brand's secrets. Our graphics help you communicate clearly, creatively, and effectively.",
    link: '/service/graphic-designing',
  },
  {
    icon: <Layout size={20} />,
    title: 'UX / UI Designing',
    description:
      'We create simple, smooth, and meaningful digital experiences. Our UI designs help users navigate easily and connect with your brand.',
    link: '/service/ux-ui-designing',
  },
  {
    icon: <Video size={20} />,
    title: 'Video Editing',
    description:
      'We turn raw footage into dynamic, eye-catching videos that connect with your audience. Every frame is edited with creativity, clarity, and purpose.',
    link: '/service/video-editing',
  },
  {
    icon: <Code size={20} />,
    title: 'Web Development',
    description:
      'We build fast, responsive, & modern websites tailored to your business needs. Our development ensures smooth performance and a seamless user experience.',
    link: '/service/web-development',
  },
  {
    icon: <Camera size={20} />,
    title: 'Product Ads Shooting',
    description:
      'We craft striking product ads that showcase every detail, delivering professional quality and engaging visuals.',
    link: '/service/product-ads-shooting',
  },
];

const Home = () => {
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

