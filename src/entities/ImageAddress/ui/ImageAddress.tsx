import styles from "./ImageAddress.module.scss";
import { IAddress } from "@/widgets/AddressesSection";
import Image from "next/image";
import Link from "next/link";
export const ImageAddress = ({ address }: { address: IAddress }) => {
  const { imageSrc, town, address: street, addressHref } = address;
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={`Кофейня в ${town} на ${street}`}
        className={styles.image}
        width={312}
        height={312}
      />
      <Link className={styles.address} href={addressHref} target="_blank">
        <span className={styles.town}>{town}</span>
        <span className={styles.street}>{street}</span>
      </Link>
    </div>
  );
};
