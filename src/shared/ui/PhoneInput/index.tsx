import { Control, Controller } from "react-hook-form";
import Input, { InputProps } from "../Input";
import { transformValue } from "./transformValue";
interface Props extends Exclude<InputProps, "register"> {
  control: Control<any>;
  name: string;
}
export const PhoneInput = ({ control, name, ...props }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          {...props}
          {...field}
          onChange={(e) => field.onChange(transformValue(e.target.value))}
        />
      )}
      rules={{ required: true }}
    />
  );
};
