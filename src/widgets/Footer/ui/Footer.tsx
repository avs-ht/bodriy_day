import styles from "./Footer.module.scss";
import AskForm from "@/features/AskForm";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { LogoIcon } from "@/shared/ui/Logo";
import { TelegramIcon } from "@/shared/ui/Telegram";
import { WhatsAppIcon } from "@/shared/ui/Whatsapp";
import Link from "next/link";

const links = [
  {
    label: "Меню + кбжу",
    href: "",
  },
  {
    label: "Адреса кофеен",
    href: "",
  },
  {
    label: "Маркеты",
    href: "",
  },
  {
    label: "Франшиза",
    href: "",
  },
  {
    label: "Вакансии",
    href: "",
  },
  {
    label: "Меню + кбжу",
    href: "",
  },
];
const contacts = [
  {
    label: "Поставщикам",
    email: "sales@bodryi-den.ru",
  },
  {
    label: "Вакансии",
    email: "hr@bodryi-den.ru",
  },
  {
    label: "Предложить локацию",
    email: "sales@bodryi-den.ru",
  },
  {
    label: "Поставщикам",
    email: "info@bodryi-den.ru",
  },

  {
    label: "Офис",
    phone: "+7 383 375-00-24",
    email: "info@bodryi-den.ru",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.questions}>
          <div className={styles.left}>
            <h2 className={styles.questionTitle}>
              Остались вопросы или хотите открыть кофейню по франшизе?
            </h2>
            <p className={styles.questionDesc}>
              Оставьте свой номер и мы с вами свяжемся
            </p>
          </div>
          <div className={styles.askForm}>
            <AskForm />
          </div>
        </div>
        <div className={styles.mainBlock}>
          <div className={styles.header}>
            <Link href="/">
              <LogoIcon className={styles.logo} />
            </Link>
            <nav className={styles.nav}>
              <ul className={styles.list}>
                {links.map((link) => (
                  <li key={link.href} className={styles.item}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              style={{
                maxWidth: 237,
              }}
            >
              франшиза
            </Button>
          </div>
          <div className={styles.body}>
            <h3 className={styles.contactsTitle}>Контакты</h3>
            <ul className={styles.contactsList}>
              {contacts.map(({ label, email, phone }) => (
                <li key={label} className={styles.contactsItem}>
                  {label}
                  {email && <Link href={`mailto:${email}`}>{email}</Link>}
                  {phone && <Link href={`tel:${phone}`}>{phone}</Link>}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mbFooter}>
            <div className={styles.socials}>
              <Link href="/" target="_blank">
                <TelegramIcon />
              </Link>
              <Link href="/" target="_blank">
                <WhatsAppIcon />
              </Link>
            </div>
            <div className={styles.addressContainer}>
              <h3 className={styles.addressTitle}>Адрес</h3>
              <address className={styles.address}>
                630049, г. Новосибирск,
                <br />
                Красный проспект 200, 12 этаж
              </address>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Бодрый день
        </p>
      </Container>
    </footer>
  );
};
