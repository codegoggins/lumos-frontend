import { SiPulumi } from "react-icons/si";

interface LogoProps {
  className?: string;
  iconSize?: number;
}

const Logo = ({ className = "", iconSize = 28 }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <SiPulumi size={iconSize} className="text-black" />
      <span 
        className="text-2xl text-black m-0 leading-none tracking-wide font-normal" 
        style={{ fontFamily: "'Pacifico', cursive", marginTop: "-4px" }}
      >
        Lumos
      </span>
    </div>
  );
};

export default Logo;
