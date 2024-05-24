export const transformToPhone = (phone: string) => {
  const preparedValue = phone.trim().replace(/\D/g, "");

  if (!preparedValue || preparedValue[0] !== "7") return "7(";

  console.log(1);
  let number = `7(${preparedValue.slice(1, 4)}`;
  if (preparedValue.length < 4) return number;

  number += ")";

  number += preparedValue.slice(5, 8);

  return number;
};
