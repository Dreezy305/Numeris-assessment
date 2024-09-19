export const splitAmount = (
  amount: string
): { whole: string; decimal: string } => {
  const [wholePart, decimalPart] = amount.split(".");
  return {
    whole: wholePart + ".",
    decimal: decimalPart,
  };
};
