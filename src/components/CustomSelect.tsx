import { Select } from "antd";
import type { SelectProps } from "antd";

interface CustomSelectProps extends SelectProps {
  label: string;
  containerClass?: string;
}

const CustomSelect = ({
  label,
  containerClass,
  ...props
}: CustomSelectProps) => {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClass ?? ""}`}>
      <label className="text-xs font-medium text-text-secondary">{label}</label>
      <Select {...props} />
    </div>
  );
};

export default CustomSelect;
