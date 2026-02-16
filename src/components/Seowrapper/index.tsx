import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const defaultSEO = {
  title: "Cre8rspot | UI/UX Design, Branding, Web Development & Video Production",
  description: "Cre8rspot offers UI/UX design, graphic design, branding, web & app development, video production, motion graphics, photography, and marketing design services to elevate your business.",
  keywords:"ui ux design, graphic design services, branding services, logo design, web development, react development, app design, video production, motion graphics, product photography, marketing design, landing page design, brand identity design, creative agency",
};

const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  url = "https://cre8rspot.netlify.app/",
  image = "",
}) => {
  const siteUrl = "https://cre8rspot.netlify.app/";

  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Meta */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical */}
      <link rel="canonical" href={`${siteUrl}${url}`} />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${url}`} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default SEO;
