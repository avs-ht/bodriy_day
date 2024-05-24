import { ErrorIcon } from "./ErrorIcon";
import styles from "./index.module.scss";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
  register?: any;
}
const Input = ({ register, error, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input type="text" {...register} className={styles.input} {...props} />
        {error && (
          <div className={styles.errorIcon}>
            <ErrorIcon />
          </div>
        )}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
export default forwardRef(Input);
