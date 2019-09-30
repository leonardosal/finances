import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Row from '../../src/components/Row';
import { TYPE } from '../../src/utils';

it('should render Row component with correct data props for expense', () => {
  const props = {
    description: 'Uber',
    type: TYPE.DEBIT,
    value: 17.0,
  };
  const component = mount(
    <Row
      description={props.description}
      type={props.type}
      value={props.value}
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('should render Row component with correct data props for revenue', () => {
  const props = {
    description: 'Salary',
    type: TYPE.CREDIT,
    value: 2000.0,
  };
  const component = mount(
    <Row
      description={props.description}
      type={props.type}
      value={props.value}
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});
