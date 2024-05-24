import styles from "./WorkSection.module.scss";
import WorkForm from "@/features/WorkForm";
import { Container } from "@/shared/ui/Container";
import WorkerImage from "./worker.jpg";
import Image from "next/image";
export const WorkSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={WorkerImage} alt="Работник кофейни Бодрый день" />
        </div>
        <WorkForm />
      </Container>
    </section>
  );
};
