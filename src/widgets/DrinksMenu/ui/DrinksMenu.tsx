"use client";
import styles from "./DrinksMenu.module.scss";
import { Container } from "@/shared/ui/Container";
import clsx from "clsx";
import { useState } from "react";
import { Drinks } from "./Drinks";

const drinksCategories = [
  {
    label: "классика",
    value: "classic",
  },
  {
    label: "сезонное меню",
    value: "season",
  },
  {
    label: "хиты",
    value: "hits",
  },
  {
    label: "милкшейки",
    value: "milkshakes",
  },
];

export const DrinksMenu = () => {
  const [category, setCategory] = useState("classic");
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Меню напитков</h2>
        <p className={styles.description}>ознакомиться с составами и кбжу</p>

        <ul className={styles.categories}>
          {drinksCategories.map(({ label, value }) => (
            <li key={value}>
              <button
                type="button"
                className={clsx(
                  styles.categoryButton,
                  value === category && styles.active
                )}
                onClick={() => setCategory(value)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <Drinks category={category} />
      </Container>
    </section>
  );
};
