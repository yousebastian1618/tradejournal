export const formatNumber = (value: number, type: string) => {
  if (type === 'currency') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  }
  if (type === 'time') {
    let seconds = value;
    const days = Math.floor(seconds / 86400);
    seconds %= 86400;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    if (days) return `${days}D ${hours}H ${minutes}M ${seconds}S`;
    if (hours) return `${hours}H ${minutes}M ${seconds}S`;
    if (minutes) return `${minutes}M ${seconds}S`;
    return `${seconds}S`;
  }
  if (type === 'percentage') {
    return value * 100 + '%';
  }
  return value;
}