import Link from "next/link";
import styles from "./Header.module.scss";
const links = [
  {
    label: "меню",
    link: "",
  },
  {
    label: "адрес кофеен",
    link: "",
  },
  {
    label: "маркеты",
    link: "",
  },
  {
    label: "франшиза",
    link: "",
  },
  {
    label: "вакансии",
    link: "",
  },
  {
    label: "контакты",
    link: "",
  },
];
export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map(({ label, link }) => {
          return (
            <li key={label} className={styles.item}>
              <Link href={link}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
