import { ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { RightIcon } from "./RightIcon";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  linkBehaviour?: {
    href: string;
    target: string;
  };
  rightIcon?: React.ReactNode;
}
export const Button = ({
  children,
  className,
  style,
  linkBehaviour,
  rightIcon = <RightIcon />,
  ...props
}: Props) => {
  const bClass = clsx(styles.button, className);
  if (linkBehaviour && linkBehaviour.href)
    return (
      <Link
        href={linkBehaviour.href}
        target={linkBehaviour.href}
        className={bClass}
        style={style}
      >
        <span>
          {children}
          {rightIcon && rightIcon}
        </span>
      </Link>
    );

  return (
    <button className={bClass} {...props} style={style}>
      <span>
        {children} {rightIcon && rightIcon}
      </span>
    </button>
  );
};
