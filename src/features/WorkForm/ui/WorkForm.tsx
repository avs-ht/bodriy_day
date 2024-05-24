"use client";
import { Button } from "@/shared/ui/Button";
import styles from "./WorkForm.module.scss";
import Input from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { WorkRequest, workSchema } from "../model/formSchema";
import { transformToPhone } from "../lib/transformToPhone";

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
          register={register("name", {
            required: {
              value: true,
              message: "Укажите ваше имя",
            },
          })}
          error={errors.name?.message}
          placeholder="ваше имя"
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, onBlur, value, ref, name } }) => {
            return (
              <Input
                value={value}
                onChange={(e) => {
                  onChange(transformToPhone(e.target.value));
                }}
                onBlur={onBlur}
                ref={ref}
                name={name}
                error={errors.phone?.message}
              />
            );
          }}
        />
      </div>
      <Button
        rightIcon={<></>}
        type="submit"
        disabled={!isDirty || !isValid || isSubmitting}
      >
        отправить
      </Button>
    </form>
  );
};