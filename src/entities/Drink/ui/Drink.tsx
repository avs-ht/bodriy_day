"use client";
import { useState } from "react";
import styles from "./Drink.module.scss";
import { IDrink } from "@/widgets/DrinksMenu";
import { Modal } from "@/shared/ui/Modal";
import { Bju } from "./Bju";
import clsx from "clsx";
import { CloseIcon } from "./CloseIcon";

export const Drink = ({ drink }: { drink: IDrink }) => {
  const { title, bju, composition, desc } = drink;

  const [isModalOpen, setModalOpen] = useState(false);
  const [choosedBju, setChoosedBju] = useState<300 | 400 | 500>(400);
  return (
    <div className={styles.drink}>
      <h3 className={styles.title}>{title}</h3>
      <Bju bju={bju[400]} />
      <button
        type="button"
        className={styles.composition}
        onClick={() => setModalOpen(true)}
      >
        Состав
      </button>
      <Modal
        visible={isModalOpen}
        modalClassName={styles.modal}
        bgClassName={styles.backdrop}
        onClose={() => setModalOpen(false)}
      >
        <h3 className={styles.modalTitle}>{title}</h3>
        <p className={styles.modalDesc}>{desc}</p>
        <p className={styles.modalComposition}>{composition}</p>
        <ul className={styles.modalBjuButtons}>
          {Object.keys(bju).map((ml) => (
            <li key={ml}>
              <button
                className={clsx(
                  styles.modalBjuButton,
                  +ml === choosedBju && styles.choosed
                )}
                type="button"
                onClick={() => setChoosedBju(+ml as 300 | 400 | 500)}
              >
                {ml} мл
              </button>
            </li>
          ))}
        </ul>
        <Bju bju={bju[choosedBju]} />
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          className={styles.close}
        >
          <CloseIcon />
        </button>
      </Modal>
    </div>
  );
};
