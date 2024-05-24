import clsx from "clsx";
import { RefObject, useLayoutEffect } from "react";
import styles from "./ListController.module.scss";
import { ArrowIcon } from "./ArrowIcon";
interface Props {
  listRef: RefObject<HTMLUListElement | null>;
  className?: string;
  isArrowsVisible?: boolean;
}
export const ListController = ({
  listRef,
  className,
  isArrowsVisible = true,
}: Props) => {
  const scrollRight = () => {
    if (!listRef.current) return;

    const elementW = listRef.current.children[0].clientWidth;
    const gap = parseInt(getComputedStyle(listRef.current).gap);
    const scroll = elementW + gap;
    listRef.current.scrollBy({ left: scroll, behavior: "smooth" });
  };
  const scrollLeft = () => {
    if (!listRef.current) return;
    const elementW = listRef.current.children[0].clientWidth;
    const gap = parseInt(getComputedStyle(listRef.current).gap);
    const scroll = elementW + gap;
    listRef.current.scrollBy({ left: -(elementW + gap), behavior: "smooth" });
  };

  if (!isArrowsVisible) return null;
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
