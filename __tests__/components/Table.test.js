import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Table from '../../src/components/Table';
import { TYPE } from '../../src/utils';

it('should render Table component with correct list of transactions', () => {
  const transactions = [
    {
      id: 'A',
      description: 'Uber',
      type: TYPE.DEBIT,
      value: 17.0,
    },
    {
      id: 'B',
      description: 'Salary',
      type: TYPE.CREDIT,
      value: 2000.0,
    },
  ];
  const component = mount(<Table transactions={transactions} />);
  expect(toJson(component)).toMatchSnapshot();
});
