import ListController from "@/shared/ui/ListController";
import { useRef } from "react";
import { IAddress } from "../model/address";
import styles from "./ImageAddresses.module.scss";
import ImageAddress from "@/entities/ImageAddress";
const addresses: IAddress[] = [
  {
    town: "Барнаул",
    address: "ул. Ленина, 1",
    imageSrc: "/addresses/card.jpg",
    addressHref:
      "https://www.google.com/maps/place/%D0%BF%D1%80.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+1,+%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB,+%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+656056/data=!4m2!3m1!1s0x42dda5cc5b9b2107:0x43014d83cd38294d?sa=X&ved=1t:242&ictx=111",
  },
  {
    town: "Барнаул",
    address: "ул. Ленина, 1",
    imageSrc: "/addresses/card.jpg",
    addressHref:
      "https://www.google.com/maps/place/%D0%BF%D1%80.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+1,+%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB,+%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+656056/data=!4m2!3m1!1s0x42dda5cc5b9b2107:0x43014d83cd38294d?sa=X&ved=1t:242&ictx=111",
  },
  {
    town: "Барнаул",
    address: "ул. Ленина, 1",
    imageSrc: "/addresses/card.jpg",
    addressHref:
      "https://www.google.com/maps/place/%D0%BF%D1%80.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+1,+%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB,+%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+656056/data=!4m2!3m1!1s0x42dda5cc5b9b2107:0x43014d83cd38294d?sa=X&ved=1t:242&ictx=111",
  },
  {
    town: "Барнаул",
    address: "ул. Ленина, 1",
    imageSrc: "/addresses/card.jpg",
    addressHref:
      "https://www.google.com/maps/place/%D0%BF%D1%80.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+1,+%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB,+%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+656056/data=!4m2!3m1!1s0x42dda5cc5b9b2107:0x43014d83cd38294d?sa=X&ved=1t:242&ictx=111",
  },
  {
    town: "Барнаул",
    address: "ул. Ленина, 1",
    imageSrc: "/addresses/card.jpg",
    addressHref:
      "https://www.google.com/maps/place/%D0%BF%D1%80.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+1,+%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB,+%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+656056/data=!4m2!3m1!1s0x42dda5cc5b9b2107:0x43014d83cd38294d?sa=X&ved=1t:242&ictx=111",
  },
  {
    town: "Барнаул",
    address: "ул. Ленина, 1",
    imageSrc: "/addresses/card.jpg",
    addressHref:
      "https://www.google.com/maps/place/%D0%BF%D1%80.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+1,+%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB,+%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+656056/data=!4m2!3m1!1s0x42dda5cc5b9b2107:0x43014d83cd38294d?sa=X&ved=1t:242&ictx=111",
  },
  {
    town: "Барнаул",
    address: "ул. Ленина, 1",
    imageSrc: "/addresses/card.jpg",
    addressHref:
      "https://www.google.com/maps/place/%D0%BF%D1%80.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+1,+%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB,+%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+656056/data=!4m2!3m1!1s0x42dda5cc5b9b2107:0x43014d83cd38294d?sa=X&ved=1t:242&ictx=111",
  },
  {
    town: "Барнаул",
    address: "ул. Ленина, 1",
    imageSrc: "/addresses/card.jpg",
    addressHref:
      "https://www.google.com/maps/place/%D0%BF%D1%80.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+1,+%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB,+%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+656056/data=!4m2!3m1!1s0x42dda5cc5b9b2107:0x43014d83cd38294d?sa=X&ved=1t:242&ictx=111",
  },
];
export const ImageAddresses = () => {
  const listRef = useRef<HTMLUListElement>(null);
  return (
    <>
      <ListController listRef={listRef} className={styles.listController} />
      <ul ref={listRef} className={styles.list}>
        {addresses.map((address, i) => {
          return (
            <li key={i}>
              <ImageAddress address={address} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
