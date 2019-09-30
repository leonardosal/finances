import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../../src/components/Header';

it('should render header component', () => {
  const component = mount(<Header />);
  expect(toJson(component)).toMatchSnapshot();
});
