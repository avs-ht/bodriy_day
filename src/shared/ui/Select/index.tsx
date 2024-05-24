import { Control, Controller } from "react-hook-form";
import "./select.scss";
import { Dropdown } from "primereact/dropdown";

interface Props {
  control: Control<any>;
  options: { label: string; value: string }[];
  name: string;
}
export const Select = ({ control, options, name }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <Dropdown
            defaultValue={options[0].value}
            className="select"
            options={options}
            onChange={(e) => onChange(e.value)}
            value={value}
          />
        );
      }}
    />
  );
};
