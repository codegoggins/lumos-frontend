import { Input } from "antd";
import type { InputProps } from "antd";

interface CustomInputProps extends InputProps {
  label: string;
  containerClass?: string;
}

const CustomInput = ({ label, containerClass, ...props }: CustomInputProps) => {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClass ?? ""}`}>
      <label className="text-xs font-medium text-text-secondary">{label}</label>
      <Input {...props} />
    </div>
  );
};

export default CustomInput;
