import styles from "./WorkSection.module.scss";
import WorkForm from "@/features/WorkForm";
import { Container } from "@/shared/ui/Container";

export const WorkSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.imageContainer}></div>
        <WorkForm />
      </Container>
    </section>
  );
};
