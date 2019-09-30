import uuidv4 from 'uuid/v4';

export const TYPE = {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT',
};

export const formatValue = value => {
  return parseInt(value, 10).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
};

export const calculateBalance = transactions => {
  return transactions.reduce((acc, current) => {
    if (current.type === TYPE.DEBIT) {
      return parseInt(acc, 10) - parseInt(current.value, 10);
    }
    return parseInt(acc, 10) + parseInt(current.value, 10);
  }, 0);
};

export const saveInStorage = transactions => {
  window.localStorage.setItem('@transactions', JSON.stringify(transactions));
};

export const loadFromStorage = () => {
  const strTransactions = window.localStorage.getItem('@transactions');
  const transactions = JSON.parse(strTransactions);
  return transactions;
};

export const addItem = (list, item) => {
  return [{ id: uuidv4(), ...item }, ...list];
};
