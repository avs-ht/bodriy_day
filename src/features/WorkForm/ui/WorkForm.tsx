"use client";
import { Button } from "@/shared/ui/Button";
import styles from "./WorkForm.module.scss";
import Input from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { WorkRequest, workSchema } from "../model/formSchema";
import { PhoneInput } from "@/shared/ui/PhoneInput";

const jobOptions = [
  {
    label: "Бухгалтер",
    value: "accountant",
  },
  {
    label: "Менеджер",
    value: "manager",
  },
  {
    label: "Консультант",
    value: "consultant",
  },
];
export const WorkForm = () => {
  const {
    handleSubmit,
    register,
    control,
    clearErrors,
    setError,

    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<WorkRequest>({
    resolver: zodResolver(workSchema),
    defaultValues: {
      job: "accountant",
    },
  });

  const onSubmit = (data: WorkRequest) => {
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Работай у нас</h2>
      <p className={styles.subtitle}>вакансии в кофейне и офисе</p>
      <div className={styles.inputs}>
        <Input
          register={register("city", {
            required: {
              value: true,
              message: "Укажите ваш город",
            },
          })}
          error={errors.city?.message}
          placeholder="город"
        />
        <Select control={control} options={jobOptions} name="job" />
        <Input
          register={register("name")}
          error={errors.name?.message}
          placeholder="ваше имя"
        />
        <PhoneInput
          control={control}
          name="phone"
          error={errors.phone?.message}
        />
      </div>
      <Button rightIcon={<></>} type="submit">
        отправить
      </Button>
    </form>
  );
};
