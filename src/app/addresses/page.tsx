import { BackButton } from "@/shared/ui/BackButton";
import { Container } from "@/shared/ui/Container";
import AddressesList from "@/widgets/AddressesList";
import styles from "./page.module.scss";
export default function Addresses() {
  return (
    <>
      <Container className={styles.container}>
        <BackButton />
      </Container>
      <AddressesList />
    </>
  );
}
