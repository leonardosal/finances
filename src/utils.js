export const formatValue = value => {
  return parseInt(value, 10).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
};
