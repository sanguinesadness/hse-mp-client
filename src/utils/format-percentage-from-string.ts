export function formatPercentageFromString(numberString: string): string {
  const number = parseFloat(numberString);
  if (isNaN(number)) {
    return '';
  }

  const percentage = (number * 100).toLocaleString(undefined, {
    maximumFractionDigits: 0
  });
  return `${percentage}%`;
}
