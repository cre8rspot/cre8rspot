import { Link } from 'react-router-dom';
import './PageBanner.css';

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => {
  return (
    <div className="page-banner">
      <h1 className="page-banner-title">{title}</h1>
      <div className="page-banner-breadcrumb">
        <Link to="/" className="page-banner-breadcrumb-item">
          Home
        </Link>
        <span className="page-banner-breadcrumb-separator">/</span>
        <span className="page-banner-breadcrumb-active">{breadcrumb}</span>
      </div>
    </div>
  );
};

export default PageBanner;
