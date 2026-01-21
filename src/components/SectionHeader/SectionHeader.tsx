import './SectionHeader.css';

interface SectionHeaderProps {
  label: string;
  title: string;
}

const SectionHeader = ({ label, title }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <p className="section-header-label box fade-up">{label}</p>
      <h2 className="section-header-title box fade-up delay-100">{title}</h2>
    </div>
  );
};

export default SectionHeader;
