"use client";
import styles from "./AddressesSection.module.scss";
import { Container } from "@/shared/ui/Container";
import { ImageAddresses } from "./ImageAddresses";
import Link from "next/link";

export const AddressesSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h2 className={styles.title}>
          В данный момент по России и СНГ открыто более 150 кофеен
        </h2>
        <Link href="/addresses" className={styles.button}>
          адреса кофеен
        </Link>
        <ImageAddresses />
      </Container>
    </section>
  );
};
