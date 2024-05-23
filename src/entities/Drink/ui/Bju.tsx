import { IBju } from "@/widgets/DrinksMenu";
import styles from "./Drink.module.scss";
export const Bju = ({
  bju: { ccal, protein, fats, carbohydrates },
}: {
  bju: IBju;
}) => {
  return (
    <p className={styles.bju}>
      ккал: {ccal}, белки: {protein}, жиры: {fats}, углеводы: {carbohydrates}
    </p>
  );
};
