import './SectionHeader.css';

interface SectionHeaderProps {
  label: string;
  title: string;
}

const SectionHeader = ({ label, title }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <p className="section-header-label">{label}</p>
      <h2 className="section-header-title">{title}</h2>
    </div>
  );
};

export default SectionHeader;
