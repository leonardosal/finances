import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import CardInfo from '../../src/components/CardInfo';

it('should render card component with correct balance value', () => {
  const props = {
    balance: 1000.0,
    handleClick: () => null,
  };
  const component = mount(
    <CardInfo balance={props.label} handleClick={props.handleClick} />
  );
  expect(toJson(component)).toMatchSnapshot();
});
