import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../../src/App';

it('should render App component', () => {
  const component = mount(<App />);
  expect(toJson(component)).toMatchSnapshot();
});
