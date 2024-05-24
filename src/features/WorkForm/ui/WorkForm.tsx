import { Button } from "@/shared/ui/Button";
import styles from "./WorkForm.module.scss";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import { PhoneInput } from "@/shared/ui/Input/PhoneInput";
export const WorkForm = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Работай у нас</h2>
      <p className={styles.subtitle}>вакансии в кофейне и офисе</p>
      <Input />
      <Select />
      <Input />
      <PhoneInput />
      <Button rightIcon={<></>}>отправить</Button>
    </form>
  );
};
