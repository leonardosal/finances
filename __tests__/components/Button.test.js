import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '../../src/components/Button';

it('should render button component with label "Add"', () => {
  const props = {
    label: 'Add',
    onClick: () => true,
  };
  const component = mount(<Button label={props.label} />);
  expect(toJson(component)).toMatchSnapshot();
});
