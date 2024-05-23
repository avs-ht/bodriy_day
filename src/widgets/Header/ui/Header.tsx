import styles from "./Header.module.scss";
import Link from "next/link";
import { LogoIcon } from "./icons/Logo";
import { TelegramIcon } from "./icons/Telegram";
import { WhatsAppIcon } from "./icons/Whatsapp";

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
export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <LogoIcon />
      </Link>
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
      <div className={styles.socials}>
        <Link target="_blank" href="">
          <TelegramIcon />
        </Link>
        <Link target="_blank" href="">
          <WhatsAppIcon />
        </Link>
      </div>
    </header>
  );
};
