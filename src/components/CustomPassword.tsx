import { Input } from "antd";
import type { PasswordProps } from "antd/es/input";

interface CustomPasswordProps extends PasswordProps {
  label: string;
  containerClass?: string;
}

const CustomPassword = ({
  label,
  containerClass,
  ...props
}: CustomPasswordProps) => {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClass ?? ""}`}>
      <label className="text-xs font-medium text-text-secondary">{label}</label>
      <Input.Password {...props} />
    </div>
  );
};

export default CustomPassword;
