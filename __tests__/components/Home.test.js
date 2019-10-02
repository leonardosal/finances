import React from 'react';
import uuid from 'uuid';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import '../../__mocks__/localStorage';
import Home from '../../src/containers/Home';

jest.mock('uuid');

it('should render Home component without data saved', () => {
  const component = mount(<Home />);
  expect(toJson(component)).toMatchSnapshot();
});

it('should render Home component with data saved', () => {
  localStorage.setItem(
    '@transactions',
    JSON.stringify([
      { id: '0000-0000-0000', type: 'CREDIT', value: '1000.0' },
      { id: '0000-0000-0001', type: 'DEBIT', value: '100.0' },
      { id: '0000-0000-0002', type: 'DEBIT', value: '100.0' },
    ])
  );

  const component = mount(<Home />);
  expect(toJson(component)).toMatchSnapshot();
});

it('should render Home component when add transaction with valid data', () => {
  localStorage.clear();
  uuid.v4.mockImplementationOnce(() => '0000-0000-0000');
  const component = mount(<Home />);
  component.find('button#btn-open').simulate('click');
  component.find('select#type').simulate('change', {
    target: { value: 'DEBIT' },
  });
  component.find('input#value').simulate('change', {
    target: { value: '10' },
  });
  component.find('input#description').simulate('change', {
    target: { value: 'Uber' },
  });
  component.find('button#btn-save').simulate('click');
  component.find('form#transactionForm').simulate('submit');

  expect(toJson(component)).toMatchSnapshot();
});

it('should render Home component when add transaction with invalid data', () => {
  localStorage.clear();
  uuid.v4.mockImplementationOnce(() => '0000-0000-0001');
  const component = mount(<Home />);
  component.find('button#btn-open').simulate('click');
  component.find('button#btn-save').simulate('click');
  component.find('form#transactionForm').simulate('submit');

  expect(toJson(component)).toMatchSnapshot();
});

it('should render Home component when add transaction and cancel', () => {
  const component = mount(<Home />);
  component.find('button#btn-open').simulate('click');
  component.find('button#btn-cancel').simulate('click');

  expect(toJson(component)).toMatchSnapshot();
});
