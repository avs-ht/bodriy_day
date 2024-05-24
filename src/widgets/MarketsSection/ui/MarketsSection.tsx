"use client";
import styles from "./MarketsSection.module.scss";

import Link from "next/link";
import Image from "next/image";
import wbQr from "./qr/wb.png";
import ozonQr from "./qr/ozon.png";
import yandexQr from "./qr/market.png";
import wbLogo from "./icons/wb.png";
import ozonLogo from "./icons/ozon.png";
import yandexLogo from "./icons/market.png";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

export const MarketsSection = () => {
  const isSmall = useMediaQuery("(max-width: 868px)");
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <Image
          src={isSmall ? "/images/coffee1.png" : "/images/coffee.jpg"}
          alt="Пачка с кофе от Бодрый день"
          width={536}
          height={733}
        />
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>Наши маркеты</h2>
        <p className={styles.desc}>заказать кофе или чай</p>

        <h3 className="visually-hidden">Маркетплейсы</h3>
        <ul className={styles.marketsList}>
          <li>
            <Link href="" target="_blank">
              <Image src={ozonLogo} alt="Маркетплейс Озон" />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <Image src={wbLogo} alt="Маркетплейс Вайлдберисс" />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <Image src={yandexLogo} alt="Маркетплейс Яндекс.Маркет" />
            </Link>
          </li>
        </ul>

        <h3 className="visually-hidden">Qr коды Маркетплейсов</h3>
        <ul className={styles.qrList}>
          <li>
            <Image src={wbQr} alt="Qr код Маркетплейса Вайлдберисс" />
          </li>
          <li>
            <Image src={ozonQr} alt="Qr код Маркетплейса Озон" />
          </li>
          <li>
            <Image src={yandexQr} alt="Qr код Маркетплейса Яндекс.Маркет" />
          </li>
        </ul>

        <h3 className={styles.subTitle}>Вкус кофе</h3>
        <p className={styles.subDesc}>
          cобственная эспрессо-смесь разработана специально для задач сети
          кофеен «Бодрый день»
        </p>
        <p className={styles.subComposition}>
          В состав смеси входит Бразилия натуральной обработки, получаемая
          напрямую от кооператива Expocasser (победителя национального
          чемпионата Cup of Excellence «18), Колумбия Супремо мытой обработки
          региона Антиокья и угандийская робуста максимально допустимого
          к коммерческому экспорту уровня качества
        </p>
      </div>
    </section>
  );
};
