import React, { Component } from 'react';
import propTypes from 'prop-types';
import CurrencyInput from 'react-currency-input';
import './modal.scss';

import Button from '../Button';

class Modal extends Component {
  onSubmit = e => {
    e.preventDefault();
    const { submitForm } = this.props;
    submitForm();
  };

  render() {
    const { show, toggleModal, onChangeField, transaction } = this.props;
    return (
      <div id="modal" className={show ? 'modal show' : 'modal'}>
        <div className="modal-content">
          <h3>Adicionar transação</h3>
          <form
            id="transactionForm"
            name="transactionForm"
            className="form"
            onSubmit={this.onSubmit}
          >
            <div className="field-container">
              <span>Tipo</span>
              <select
                name="type"
                id="type"
                onChange={e => onChangeField('type', e.target.value)}
                value={transaction.type}
              >
                <option value="DEBIT">Despesa</option>
                <option value="CREDIT">Receita</option>
              </select>
            </div>

            <div className="field-container">
              <span>Valor</span>
              <CurrencyInput
                id="value"
                name="value"
                decimalSeparator=","
                precision="2"
                thousandSeparator="."
                required
                onChangeEvent={(e, maskedValue, floatvalue) =>
                  onChangeField('value', floatvalue)
                }
                value={transaction.value}
              />
            </div>
            <div className="field-container">
              <span>Descrição</span>
              <input
                id="description"
                name="description"
                type="text"
                required
                onChange={e => onChangeField('description', e.target.value)}
                value={transaction.description}
              />
            </div>
            <div className="footer">
              <Button id="btn-save" type="submit" label="Salvar" />
              <Button
                id="btn-cancel"
                type="button"
                label="Cancelar"
                onClick={toggleModal}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggleModal: propTypes.func.isRequired,
  submitForm: propTypes.func.isRequired,
  onChangeField: propTypes.func.isRequired,
  show: propTypes.bool,
  transaction: propTypes.shape({
    value: propTypes.string,
    type: propTypes.string,
    description: propTypes.string,
  }),
};

Modal.defaultProps = {
  show: false,
  transaction: {
    value: '',
    description: '',
    type: 'DEBIT',
  },
};

export default Modal;
