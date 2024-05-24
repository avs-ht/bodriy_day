import styles from "./BlogSection.module.scss";
import { Container } from "@/shared/ui/Container";
import { PostsList } from "./PostsList";

export const BlogSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h2 className={styles.title}>Блог</h2>
        <p className={styles.description}>новости о кофейнях</p>
        <PostsList />
      </Container>
    </section>
  );
};
