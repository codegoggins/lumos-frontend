import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import type { Dayjs } from "dayjs";

interface CustomDatePickerProps extends Omit<DatePickerProps, "onChange"> {
  label: string;
  containerClass?: string;
  onChange?: (date: Dayjs | null) => void;
}

const CustomDatePicker = ({
  label,
  containerClass,
  onChange,
  ...props
}: CustomDatePickerProps) => {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClass ?? ""}`}>
      <label className="text-xs font-medium text-text-secondary">{label}</label>
      <DatePicker
        {...props}
        onChange={(date) => onChange?.(date as Dayjs | null)}
      />
    </div>
  );
};

export default CustomDatePicker;
