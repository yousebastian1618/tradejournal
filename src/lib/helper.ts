export function formatTo(formatType: string, value: number | string) {
  if (formatType == 'dollar') {
    return `$${value}`;
  }
  if (formatType === 'rate') {
    return `${value}%`
  }
  return value;
}