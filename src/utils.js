import uuid from 'uuid';
import Intl from 'intl';

export const TYPE = {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT',
};

export const formatValue = value => {
  const parsedValue = parseFloat(value, 10);
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  }).format(parsedValue);
};

export const calculateBalance = transactions => {
  return transactions.reduce((acc, current) => {
    if (current.type === TYPE.DEBIT) {
      return parseFloat(acc, 10) - parseFloat(current.value, 10);
    }
    return parseFloat(acc, 10) + parseFloat(current.value, 10);
  }, 0);
};

export const saveInStorage = transactions => {
  localStorage.setItem('@transactions', JSON.stringify(transactions));
};

export const loadFromStorage = () => {
  const strTransactions = localStorage.getItem('@transactions');
  const transactions = JSON.parse(strTransactions);
  return transactions;
};

export const addItem = (list, item) => {
  const id = uuid.v4();
  return [{ id, ...item }, ...list];
};
