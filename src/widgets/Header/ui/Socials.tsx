import Link from "next/link";
import { TelegramIcon } from "./icons/Telegram";
import { WhatsAppIcon } from "./icons/Whatsapp";
import styles from "./Header.module.scss";
export const Socials = () => (
  <div className={styles.socials}>
    <Link target="_blank" href="">
      <TelegramIcon />
    </Link>
    <Link target="_blank" href="">
      <WhatsAppIcon />
    </Link>
  </div>
);
