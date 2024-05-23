"use client";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { ArrowIcon } from "./Arrow";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className={styles.button}>
      <ArrowIcon />
      Назад
    </button>
  );
};
