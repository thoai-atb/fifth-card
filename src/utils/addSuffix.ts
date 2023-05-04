export function addSuffix(num: number): string {
  const lastDigit = num % 10;
  const secondLastDigit = Math.floor(num / 10) % 10;

  if (secondLastDigit === 1 || lastDigit > 3) {
    return num + 'th';
  }

  if (lastDigit === 1) {
    return num + 'st';
  }

  if (lastDigit === 2) {
    return num + 'nd';
  }

  if (lastDigit === 3) {
    return num + 'rd';
  }

  return '';
}
