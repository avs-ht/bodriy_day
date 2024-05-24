import { Control, Controller } from "react-hook-form";
import Input, { InputProps } from "../Input";
import { transformValue } from "./transformValue";
interface Props extends Exclude<InputProps, ["register", "onChange", "value"]> {
  control: Control<any>;
  name: string;
}
export const PhoneInput = ({
  control,
  name,

  ...props
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          placeholder="7(___)___-__-__"
          {...props}
          {...field}
          onChange={(e) => {
            const { newValue } = transformValue(e.target.value);
            field.onChange(newValue);
          }}
        />
      )}
      rules={{ required: true }}
    />
  );
};
