import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const defaultSEO = {
  title: "Cre8rspot | UI/UX Design, Branding, Web Development & Video Production",
  description: "Cre8rspot offers UI/UX design, branding, web & app development, video production, motion graphics, photography, and marketing design services.",
  keywords: "ui ux design, branding services, web development, react development, app design, video production, creative agency, createrspot, create8spot, rijincreaterspot, createrspotrijin, createrspotgayathiri, createrspotajith, createrspotsivagayathiri, createrspotminish",
  image: "https://cre8rspot.netlify.app/images/logo.png",
};

const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
}) => {
  const location = useLocation();
  const siteUrl = "https://cre8rspot.netlify.app";
  const currentUrl = `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Standard Meta */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
