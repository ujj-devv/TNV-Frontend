interface LargeHeaderProps {
  text: string;
  className?: string; 
}

const LargeHeader: React.FC<LargeHeaderProps> = ({ text, className = '' }) => {
  return (
    <div>
      <h1 className={`font-bold text-5xl ${className}`}>{text}</h1>
    </div>
  );
};

export default LargeHeader;
