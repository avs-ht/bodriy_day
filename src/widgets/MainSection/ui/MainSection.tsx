import Image from "next/image";
import styles from "./MainSection.module.scss";
const achievements = [
  {
    n: 35,
    text: "домашних кофеен",
  },
  {
    n: 150,
    text: "партнёрских кофеен",
  },
  {
    n: 1,
    text: "фабрика по производству сладких калорий",
  },
  {
    n: 300000,
    text: "проданных напитков в месяц",
  },
];
export const MainSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <section className={styles.section}>
        <h1 className={styles.title}>
          Мы международная
          <br />
          сеть кофеен
        </h1>
        <p className={styles.description}>
          Любим наше дело и горды тем, что ежедневно наш кофе выбирают десятки
          тысяч гостей
        </p>
        <ul className={styles.achievements}>
          {achievements.map(({ n, text }) => (
            <li className={styles.achievement} key={text}>
              <span className={styles.number}>{n}</span>
              <span className={styles.text}>{text}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
