import { Link, useParams } from 'react-router-dom';
import { Palette, Image, FileText, Globe, Package, Shirt, Video, Code, Camera } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageBanner from '../../components/PageBanner/PageBanner';
import ServiceInclusion from '../../components/ServiceInclusion/ServiceInclusion';
import './ServiceDetail.css';

const sidebarItems = [
  { slug: 'graphic-designing', label: 'Graphic Designing' },
  { slug: 'ux-ui-designing', label: 'UX / UI Designing' },
  { slug: 'video-editing', label: 'Video Editing' },
  { slug: 'web-development', label: 'Web Development' },
  { slug: 'product-ads-shooting', label: 'Product Ads Shooting' },
];

const serviceData: Record<string, {
  title: string;
  breadcrumb: string;
  overview: string;
  inclusions: { icon: React.ReactNode; title: string; description: string }[];
}> = {
  'graphic-designing': {
    title: 'Service',
    breadcrumb: 'Graphic Designing',
    overview:
      'We create visually compelling graphic designs that strengthen brand identity and improve audience engagement through custom logos, branding, social media creatives, and marketing visuals. Our designs are optimized for both digital and print platforms, ensuring consistent, high-quality posters, flyers, and promotional graphics that enhance brand recognition and online presence.',
    inclusions: [
      {
        icon: <Palette size={18} />,
        title: 'Logo & Brand Identity Design',
        description: 'Logos, brand marks, color systems, typography, and brand guidelines.',
      },
      {
        icon: <Image size={18} />,
        title: 'Social Media & Digital Creatives',
        description: 'Post designs, ad creatives, banners, thumbnails, and campaign visuals.',
      },
      {
        icon: <FileText size={18} />,
        title: 'Marketing & Print Design',
        description: 'Flyers, brochures, posters, hoardings, and promotional materials.',
      },
      {
        icon: <Globe size={18} />,
        title: 'UI Visual & Web Graphics',
        description: 'Website graphics, UI visuals, icons, banners, and landing page assets.',
      },
      {
        icon: <Package size={18} />,
        title: 'Packaging & Product Design',
        description: 'Product packaging, labels, box designs, and retail-ready visuals.',
      },
      {
        icon: <Shirt size={18} />,
        title: 'Merchandise & Promotional Branding',
        description: 'T-shirts, merchandise, event branding, signage, and display creatives.',
      },
    ],
  },
  'ux-ui-designing': {
    title: 'Service',
    breadcrumb: 'UX / UI Designing',
    overview:
      'We provide professional UX/UI design services focused on creating user-friendly, intuitive, and visually engaging interfaces for websites and mobile applications. Our user experience and user interface design process includes research-driven wireframes, interactive prototypes, and modern UI designs that improve usability, increase engagement, and strengthen brand identity across all digital platforms.',
    inclusions: [
      {
        icon: <Globe size={18} />,
        title: 'User Research & UX Strategy',
        description: 'User research, persona creation, user journeys, and UX strategy to improve usability and conversions.',
      },
      {
        icon: <FileText size={18} />,
        title: 'Wireframing & Prototyping',
        description: 'Low-fidelity wireframes, interactive prototypes, and user flows for web and mobile applications.',
      },
      {
        icon: <Palette size={18} />,
        title: 'UI Design & Visual Systems',
        description: 'Modern UI design, color systems, typography, and design systems for consistent digital experiences.',
      },
      {
        icon: <Package size={18} />,
        title: 'Website & Mobile App UI Design',
        description: 'Responsive website UI and mobile app interface design for all screen sizes.',
      },
      {
        icon: <Code size={18} />,
        title: 'Usability Testing & UX Optimization',
        description: 'Usability testing, UX audits, and experience optimization for better engagement.',
      },
      {
        icon: <Image size={18} />,
        title: 'Design Systems & Component Libraries',
        description: 'Reusable UI components and design systems for consistent digital experiences.',
      },
    ],
  },
  'video-editing': {
    title: 'Service',
    breadcrumb: 'Video Editing',
    overview:
      'We offer high-quality video editing services that help businesses enhance brand communication and audience engagement. From promotional video editing and social media reels to corporate and marketing videos, our edits focus on smooth transitions, clean visuals, motion graphics, and compelling storytelling to boost online presence and digital marketing performance.',
    inclusions: [
      {
        icon: <Video size={18} />,
        title: 'Promotional Video Editing',
        description: 'Product demos, brand videos, and marketing campaign content.',
      },
      {
        icon: <Image size={18} />,
        title: 'Social Media Videos',
        description: 'Short-form content, reels, stories, and platform-optimized videos.',
      },
      {
        icon: <FileText size={18} />,
        title: 'Corporate Presentations',
        description: 'Training videos, company overviews, and internal communications.',
      },
      {
        icon: <Palette size={18} />,
        title: 'Motion Graphics',
        description: 'Animated logos, text animations, and graphic overlays.',
      },
      {
        icon: <Globe size={18} />,
        title: 'YouTube Content',
        description: 'Long-form videos, tutorials, and channel branding elements.',
      },
      {
        icon: <Package size={18} />,
        title: 'Event Documentation',
        description: 'Conference videos, webinar editing, and event highlights.',
      },
    ],
  },
  'web-development': {
    title: 'Service',
    breadcrumb: 'Web Development',
    overview:
      'We deliver reliable web development services by building fast, responsive, and SEO-friendly websites tailored to business goals. Our custom website development includes modern front-end development, performance optimization, and cross-device compatibility, ensuring secure, high-performing websites that improve user experience and support long-term business growth.',
    inclusions: [
      {
        icon: <Code size={18} />,
        title: 'Custom Web Development',
        description: 'Bespoke websites, web applications, and digital platforms.',
      },
      {
        icon: <Package size={18} />,
        title: 'E-commerce Solutions',
        description: 'Online stores, payment integration, and inventory management.',
      },
      {
        icon: <Globe size={18} />,
        title: 'Content Management Systems',
        description: 'CMS development, WordPress customization, and admin panels.',
      },
      {
        icon: <FileText size={18} />,
        title: 'API Development & Integration',
        description: 'RESTful APIs, third-party integrations, and database design.',
      },
      {
        icon: <Palette size={18} />,
        title: 'Responsive Design',
        description: 'Mobile-first development, cross-browser compatibility.',
      },
      {
        icon: <Image size={18} />,
        title: 'Performance Optimization',
        description: 'SEO optimization, speed enhancement, and security implementation.',
      },
    ],
  },
  'product-ads-shooting': {
    title: 'Service',
    breadcrumb: 'Product Ads Shooting',
    overview:
      'We provide professional product ad shooting and product photography services that create visually compelling content for branding and marketing. Our product photo and video production focuses on creative styling, precise lighting, and high-quality visuals optimized for e-commerce websites, digital advertising, and social media marketing, helping products stand out and convert better.',
    inclusions: [
      {
        icon: <Camera size={18} />,
        title: 'Product Photography',
        description: 'High-resolution product shots, 360° views, and detail photography.',
      },
      {
        icon: <Image size={18} />,
        title: 'Lifestyle Photography',
        description: 'Products in use, lifestyle contexts, and brand storytelling.',
      },
      {
        icon: <Video size={18} />,
        title: 'Commercial Video Production',
        description: 'Product demos, advertising videos, and promotional content.',
      },
      {
        icon: <Palette size={18} />,
        title: 'Creative Direction',
        description: 'Concept development, styling, and art direction.',
      },
      {
        icon: <Globe size={18} />,
        title: 'E-commerce Photography',
        description: 'Amazon listings, online store images, and catalog photography.',
      },
      {
        icon: <Package size={18} />,
        title: 'Post-Production',
        description: 'Image retouching, color correction, and background removal.',
      },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentSlug = slug || 'graphic-designing';
  const service = serviceData[currentSlug] || serviceData['graphic-designing']; // Use dynamic service data

  
  return (
    <div className="service-detail-page">
      <Header />
      <PageBanner title={service.title} breadcrumb={service.breadcrumb} />

      <section className="service-detail-content">
        <div className="service-detail-layout">
          <aside className="service-detail-sidebar">
            <h3 className="service-detail-sidebar-title">Other Services</h3>
            <div className="service-detail-sidebar-list">
              {sidebarItems.map((item) => (
                <Link
                  key={item.slug}
                  to={`/service/${item.slug}`}
                  className={`service-detail-sidebar-item ${
                    currentSlug === item.slug ? 'service-detail-sidebar-item--active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>

          <main className="service-detail-main">
            <div className="service-detail-hero">
              <div className="service-detail-hero-overlay">
                <h2 className="service-detail-overview-title">Service Overview</h2>
                <p className="service-detail-overview-text">{service.overview}</p>
              </div>
            </div>

            <div className="service-detail-inclusions">
              <h2 className="service-detail-inclusions-title">Service Inclusions</h2>
              <div className="service-detail-inclusions-grid">
                {service.inclusions.map((inclusion, index) => (
                  <ServiceInclusion
                    key={index}
                    icon={inclusion.icon}
                    title={inclusion.title}
                    description={inclusion.description}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
