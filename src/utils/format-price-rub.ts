export function formatPriceRub(price: string): string | null {
  if (!price || isNaN(parseFloat(price))) {
    return null;
  }

  const numericPrice = parseFloat(price);
  const roundedPrice = Math.round(numericPrice * 100) / 100;
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return formatter.format(roundedPrice);
}
