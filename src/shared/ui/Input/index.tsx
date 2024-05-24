import clsx from "clsx";
import { ErrorIcon } from "./ErrorIcon";
import styles from "./index.module.scss";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
  inverse?: boolean;
  register?: any;
}
const Input = ({ register, error, inverse = false, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          {...register}
          className={clsx(styles.input, inverse && styles.inverse)}
          {...props}
        />
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
