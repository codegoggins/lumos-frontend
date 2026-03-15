import { Input } from "antd";
import type { OTPProps } from "antd/es/input/OTP";

interface CustomOtpInputProps extends OTPProps {
  label: string;
  containerClass?: string;
}

const CustomOtpInput = ({
  label,
  containerClass,
  ...props
}: CustomOtpInputProps) => {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClass ?? ""}`}>
      <label className="text-xs font-medium text-text-secondary">{label}</label>
      <Input.OTP {...props} />
    </div>
  );
};

export default CustomOtpInput;
