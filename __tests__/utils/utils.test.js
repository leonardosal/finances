import {
  formatValue,
  addItem,
  calculateBalance,
  saveInStorage,
  loadFromStorage,
} from '../../src/utils';

import '../../__mocks__/localStorage';

it('should be returns a correct string with BRL currency style', () => {
  const expected = 'R$2.000,00';
  const value = 2000;
  const result = formatValue(value);
  expect(expected).toEqual(result);
});

it('should be returns a correct string with BRL currency style with decimal part', () => {
  const expected = 'R$2.000,50';
  const value = 2000.5;
  const result = formatValue(value);
  expect(expected).toEqual(result);
});

it('should be returns array with added item', () => {
  const expectedLength = 2;
  const transactions = [{ id: '0000-0000-0000', type: 'DEBIT', value: 10.0 }];
  const transaction = { id: '0000-0000-0001', type: 'CREDIT', value: 11.0 };
  const result = addItem(transactions, transaction);
  expect(expectedLength).toEqual(result.length);
  const isContainItem = result.find(item => item.id === transaction.id);
  expect(isContainItem).toBeTruthy();
});

it('should be returns a correct balance value when you have one CREDIT transaction', () => {
  const expected = 1000.0;
  const transactions = [
    { id: '0000-0000-0000', type: 'CREDIT', value: 1000.0 },
  ];
  const result = calculateBalance(transactions);
  expect(expected).toEqual(result);
});

it('should be returns a correct balance value when you have one DEBIT transaction', () => {
  const expected = -900.0;
  const transactions = [{ id: '0000-0000-0000', type: 'DEBIT', value: 900.0 }];
  const result = calculateBalance(transactions);
  expect(expected).toEqual(result);
});

it('should be returns a correct balance value when you have more than one transaction', () => {
  const expected = 800.0;
  const transactions = [
    { id: '0000-0000-0000', type: 'CREDIT', value: 1000.0 },
    { id: '0000-0000-0001', type: 'DEBIT', value: 100.0 },
    { id: '0000-0000-0001', type: 'DEBIT', value: 100.0 },
  ];
  const result = calculateBalance(transactions);
  expect(expected).toEqual(result);
});

it('should be save and load transactions from storage', () => {
  const transactions = [
    { id: '0000-0000-0000', type: 'CREDIT', value: 1000.0 },
    { id: '0000-0000-0001', type: 'DEBIT', value: 100.0 },
    { id: '0000-0000-0001', type: 'DEBIT', value: 100.0 },
  ];
  saveInStorage(transactions);
  const result = loadFromStorage();
  expect(transactions).toEqual(result);
});
