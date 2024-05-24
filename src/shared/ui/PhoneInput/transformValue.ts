const phoneRegexp = /^[0-9\)\(-]+$/;
const symbAvaiblePositiobs = {
  "(": [1],
  ")": [5],
  "-": [9, 12],
};
export const transformValue = (v: string) => {
  if (
    !v ||
    v[0] !== "7" ||
    v[1] !== "(" ||
    v.length <= 2 ||
    !phoneRegexp.test(v)
  )
    return {
      newValue: "7(",
      error: true,
    };

  let newValue = v.trim();
  if (newValue.length > 15) newValue = newValue.slice(0, 15);

  for (let i = 0; i < newValue.length; i++) {
    const isNumber = !isNaN(Number(newValue[i]));

    if (isNumber) continue;

    const indexes =
      symbAvaiblePositiobs[newValue[i] as keyof typeof symbAvaiblePositiobs];

    if (indexes.includes(i)) continue;

    return {
      newValue: newValue.slice(0, i),
      error: true,
    };
  }

  newValue = newValue.replace(/\D/g, "").slice(1);

  let returnValue = `7(${newValue.slice(0, 3)}`;
  if (newValue.length > 3) {
    returnValue += `)${newValue.slice(3, 6)}`;
  }
  if (newValue.length > 6) {
    returnValue += `-${newValue.slice(6, 8)}`;
  }
  if (newValue.length > 8) {
    returnValue += `-${newValue.slice(8, 11)}`;
  }
  return {
    newValue: returnValue,
    error: false,
  };
};
