import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Modal from '../../src/components/Modal';

it('should render Modal component', () => {
  const props = {
    toggleModal: () => true,
    submitForm: () => true,
    onChangeField: () => true,
    show: false,
    transaction: {
      value: 17.0,
      description: 'Uber',
      type: 'submit',
    },
  };
  const component = mount(
    <Modal
      toggleModal={props.toggleModal}
      submitForm={props.submitForm}
      onChangeField={props.onChangeField}
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('should render Modal component when show is true', () => {
  const props = {
    toggleModal: () => true,
    submitForm: () => true,
    onChangeField: () => true,
    show: true,
    transaction: {
      value: 17.0,
      description: 'Uber',
      type: 'submit',
    },
  };
  const component = mount(
    <Modal
      toggleModal={props.toggleModal}
      submitForm={props.submitForm}
      onChangeField={props.onChangeField}
      show={props.show}
      transaction={props.transaction}
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('should render Modal component when change values', () => {
  const props = {
    toggleModal: () => true,
    submitForm: () => true,
    onChangeField: () => true,
    show: true,
    transaction: {
      value: 0,
      description: '',
      type: 'DEBIT',
    },
  };
  const component = mount(
    <Modal
      toggleModal={props.toggleModal}
      submitForm={props.submitForm}
      onChangeField={props.onChangeField}
      show={props.show}
      transaction={props.transaction}
    />
  );

  component.find('select#type').simulate('change', {
    target: { value: 'CREDIT' },
  });

  component.find('input#value').simulate('change', {
    target: { value: 4000.0 },
  });

  component.find('input#description').simulate('change', {
    target: { value: 'Salary' },
  });

  expect(toJson(component)).toMatchSnapshot();
});
