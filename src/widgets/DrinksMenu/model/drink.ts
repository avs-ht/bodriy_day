export interface IBju {
  ccal: number;
  protein: number;
  fats: number;
  carbohydrates: number;
}
export interface IDrink {
  title: string;
  desc: string;
  composition: string;
  bju: Record<300 | 400 | 500, IBju>;
}
