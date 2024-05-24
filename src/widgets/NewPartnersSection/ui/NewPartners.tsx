import { Button } from "@/shared/ui/Button";
import styles from "./NewPartners.module.scss";
import { Container } from "@/shared/ui/Container";

const titles = [
  "Входим в топ-3 кофеен по количеству кофеен в России по версии журнала Foodservice",
  "Одна из самых прибыльных франшиз по мнению Forbes",
  "Каждую неделю открываем 1 новую кофейню вместе с партнёрами",
];
export const NewPartners = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h2 className={styles.mainTitle}>в поисках новых партнёров</h2>
        <ul className={styles.list}>
          {titles.map((title, i) => {
            return (
              <li key={i} className={styles.listItem}>
                <h3 className={styles.listTitle}>{title}</h3>
              </li>
            );
          })}
        </ul>
        <div className={styles.buttonContainer}>
          <Button
            linkBehaviour={{
              href: "/",
              target: "_blank",
            }}
          >
            открыть кофейню
          </Button>
        </div>
      </Container>
    </section>
  );
};
