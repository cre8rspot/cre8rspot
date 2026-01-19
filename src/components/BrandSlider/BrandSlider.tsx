import './BrandSlider.css';

const brands = [
  {
    name: 'Whirlpool',
    logo: '/placeholder.svg'
  },
  {
    name: 'Samsung',
    logo: '/placeholder.svg'
  },
  {
    name: 'LG',
    logo: '/placeholder.svg'
  },
  {
    name: 'Sony',
    logo: '/placeholder.svg'
  },
  {
    name: 'Apple',
    logo: '/placeholder.svg'
  },
  {
    name: 'Microsoft',
    logo: '/placeholder.svg'
  },
  {
    name: 'Google',
    logo: '/placeholder.svg'
  },
  {
    name: 'Netflix',
    logo: '/placeholder.svg'
  }
];

const BrandSlider = () => {
  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="brand-slider">
      <div className="brand-slider-header">
        <h2 className="brand-slider-title">Designing Success for Modern Brands</h2>
        <p className="brand-slider-description">
          We create impactful designs and digital solutions that help brands grow, perform, and stay ahead in
          today's competitive world. We blend creativity and technology to deliver results that strengthen your
          brand's identity and digital presence.
        </p>
      </div>
      
      <div className="brand-slider-container">
        <div className="brand-slider-track">
          {duplicatedBrands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="brand-slider-item">
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`}
                className="brand-slider-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
