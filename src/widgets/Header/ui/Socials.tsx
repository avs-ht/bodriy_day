import Link from "next/link";
import { TelegramIcon } from "../../../shared/ui/Telegram";
import { WhatsAppIcon } from "../../../shared/ui/Whatsapp";
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
