import styles from "./AskForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { askRequest, askSchema } from "../model/formSchema";
import Input from "@/shared/ui/Input";
import { PhoneInput } from "@/shared/ui/PhoneInput";

export const AskForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<askRequest>({
    resolver: zodResolver(askSchema),
  });
  const onSubmit = (data: askRequest) => {
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input register={register("name")} error={errors.name?.message} inverse />
      <PhoneInput
        inverse
        control={control}
        error={errors.phone?.message}
        name="phone1"
      />
    </form>
  );
};
