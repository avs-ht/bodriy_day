import styles from "./Drinks.module.scss";
import Drink from "@/entities/Drink";
import { IDrink } from "../model/drink";
import { useRef } from "react";
import ListController from "@/shared/ui/ListController";

interface Props {
  category: string;
}

const drinks: Record<string, IDrink[]> = {
  classic: [
    {
      title: "Шоколадный айс-латте с сырной пенкой",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      composition:
        'Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп "Клубника". Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%',
      bju: {
        300: {
          ccal: 100,
          protein: 7.43,
          fats: 8.18,
          carbohydrates: 12.02,
        },
        400: {
          ccal: 120,
          protein: 7.43,
          fats: 0,
          carbohydrates: 2.02,
        },
        500: {
          ccal: 150,
          protein: 7.43,
          fats: 9.18,
          carbohydrates: 12.02,
        },
      },
    },
    {
      title: "Шоколадный айс-латте с сырной пенкой",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      composition:
        'Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп "Клубника". Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%',
      bju: {
        300: {
          ccal: 100,
          protein: 7.43,
          fats: 8.18,
          carbohydrates: 12.02,
        },
        400: {
          ccal: 120,
          protein: 7.43,
          fats: 0,
          carbohydrates: 2.02,
        },
        500: {
          ccal: 150,
          protein: 7.43,
          fats: 9.18,
          carbohydrates: 12.02,
        },
      },
    },
    {
      title: "Шоколадный айс-латте с сырной пенкой",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      composition:
        'Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп "Клубника". Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%',
      bju: {
        300: {
          ccal: 100,
          protein: 7.43,
          fats: 8.18,
          carbohydrates: 12.02,
        },
        400: {
          ccal: 120,
          protein: 7.43,
          fats: 0,
          carbohydrates: 2.02,
        },
        500: {
          ccal: 150,
          protein: 7.43,
          fats: 9.18,
          carbohydrates: 12.02,
        },
      },
    },
    {
      title: "Шоколадный айс-латте с сырной пенкой",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      composition:
        'Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп "Клубника". Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%',
      bju: {
        300: {
          ccal: 100,
          protein: 7.43,
          fats: 8.18,
          carbohydrates: 12.02,
        },
        400: {
          ccal: 120,
          protein: 7.43,
          fats: 0,
          carbohydrates: 2.02,
        },
        500: {
          ccal: 150,
          protein: 7.43,
          fats: 9.18,
          carbohydrates: 12.02,
        },
      },
    },
    {
      title: "Шоколадный айс-латте с сырной пенкой",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      composition:
        'Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп "Клубника". Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%',
      bju: {
        300: {
          ccal: 100,
          protein: 7.43,
          fats: 8.18,
          carbohydrates: 12.02,
        },
        400: {
          ccal: 120,
          protein: 7.43,
          fats: 0,
          carbohydrates: 2.02,
        },
        500: {
          ccal: 150,
          protein: 7.43,
          fats: 9.18,
          carbohydrates: 12.02,
        },
      },
    },
    {
      title: "Шоколадный айс-латте с сырной пенкой",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      composition:
        'Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп "Клубника". Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%',
      bju: {
        300: {
          ccal: 100,
          protein: 7.43,
          fats: 8.18,
          carbohydrates: 12.02,
        },
        400: {
          ccal: 120,
          protein: 7.43,
          fats: 0,
          carbohydrates: 2.02,
        },
        500: {
          ccal: 150,
          protein: 7.43,
          fats: 9.18,
          carbohydrates: 12.02,
        },
      },
    },
    {
      title: "Шоколадный айс-латте с сырной пенкой",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      composition:
        'Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп "Клубника". Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%',
      bju: {
        300: {
          ccal: 100,
          protein: 7.43,
          fats: 8.18,
          carbohydrates: 12.02,
        },
        400: {
          ccal: 120,
          protein: 7.43,
          fats: 0,
          carbohydrates: 2.02,
        },
        500: {
          ccal: 150,
          protein: 7.43,
          fats: 9.18,
          carbohydrates: 12.02,
        },
      },
    },
    {
      title: "Шоколадный айс-латте с сырной пенкой",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      composition:
        'Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп "Клубника". Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%',
      bju: {
        300: {
          ccal: 100,
          protein: 7.43,
          fats: 8.18,
          carbohydrates: 12.02,
        },
        400: {
          ccal: 120,
          protein: 7.43,
          fats: 0,
          carbohydrates: 2.02,
        },
        500: {
          ccal: 150,
          protein: 7.43,
          fats: 9.18,
          carbohydrates: 12.02,
        },
      },
    },
  ],
};
export const Drinks = ({ category }: Props) => {
  const listRef = useRef<HTMLUListElement>(null);
  return (
    <>
      <ListController listRef={listRef} className={styles.listController} />
      <ul className={styles.drinks} ref={listRef}>
        {drinks[category]?.map((drink) => (
          <li key={drink.title} className={styles.drink}>
            <Drink drink={drink} />
          </li>
        ))}
      </ul>
    </>
  );
};
