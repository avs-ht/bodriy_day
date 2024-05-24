"use client";
import { isOverflowed } from "@/shared/lib/isOverflowed";
import styles from "./Post.module.scss";
import { IPost } from "@/widgets/BlogSection/model/post";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

export const Post = ({ post }: { post: IPost }) => {
  const { duration, desc, base64url, link } = post;
  const descRef = useRef<HTMLParagraphElement>(null);
  const [isShowMore, setShowMore] = useState(true);

  useLayoutEffect(() => {
    if (!descRef.current || isShowMore) return;
    setShowMore(isOverflowed(descRef.current));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image
          src={base64url}
          alt="Пост о кофейне"
          className={styles.image}
          width={227}
          height={227}
        />
        {!!duration && (
          <span className={styles.duration}>
            {Math.floor(duration / 60)}:
            {(duration % 60).toString().padStart(2, "0")}
          </span>
        )}
      </div>
      <p className={styles.desc} ref={descRef}>
        {isShowMore ? desc.slice(0, 325).trimEnd() + "..." : desc}
        {isShowMore && link && (
          <Link href={link} className={styles.showMore}>
            показать полностью
          </Link>
        )}
      </p>
    </div>
  );
};
