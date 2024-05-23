import styles from "./AddressesList.module.scss";
import { Container } from "@/shared/ui/Container";
import { MapPinIcon } from "./MapPinIcon";
import Link from "next/link";

const addreses: {
  link: string;
  address: string;
}[] = [
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
  {
    address: "ул. Строителей, 1",
    link: "",
  },
];

export const AddressesList = () => {
  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>Адреса кофеен</h1>
        <p className={styles.place}>
          <MapPinIcon />
          Москва
        </p>
        <ul className={styles.list}>
          {addreses.map(({ address, link }) => (
            <li key={address} className={styles.item}>
              <Link href={link}>{address}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
