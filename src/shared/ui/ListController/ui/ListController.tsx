import clsx from "clsx";
import { RefObject } from "react";
import styles from "./ListController.module.scss";
import { ArrowIcon } from "./ArrowIcon";
interface Props {
  listRef: RefObject<HTMLUListElement | null>;
  className?: string;
}
export const ListController = ({ listRef, className }: Props) => {
  const scrollRight = () => {
    if (!listRef.current) return;
    const elementW = listRef.current.children[0].clientWidth;
    const gap = parseInt(getComputedStyle(listRef.current).gap);
    listRef.current.scrollBy({ left: elementW + gap, behavior: "smooth" });
  };
  const scrollLeft = () => {
    if (!listRef.current) return;
    const elementW = listRef.current.children[0].clientWidth;
    const gap = parseInt(getComputedStyle(listRef.current).gap);
    listRef.current.scrollBy({ left: -(elementW + gap), behavior: "smooth" });
  };

  return (
    <div className={clsx(styles.listController, className)}>
      <button className={styles.button} onClick={scrollLeft}>
        <ArrowIcon />
      </button>
      <button className={styles.button} onClick={scrollRight}>
        <ArrowIcon style={{ rotate: "180deg" }} />
      </button>
    </div>
  );
};
