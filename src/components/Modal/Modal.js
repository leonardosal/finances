import React from 'react';
import propTypes from 'prop-types';
import './modal.scss';

import Button from '../Button';

const Modal = ({
  show,
  toggleModal,
  submitForm,
  onChangeField,
  transaction,
}) => {
  return (
    <div id="modal" className={show ? 'modal show' : 'modal'}>
      <div className="modal-content">
        <h3>Adicionar transação</h3>
        <form
          id="transactionForm"
          name="transactionForm"
          className="form"
          onSubmit={submitForm}
        >
          <label htmlFor="type">
            Tipo
            <select
              name="type"
              id="type"
              onChange={e => onChangeField('type', e.target.value)}
              value={transaction.type}
            >
              <option value="DEBIT">Despesa</option>
              <option value="CREDIT">Receita</option>
            </select>
          </label>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              name="value"
              type="number"
              onChange={e => onChangeField('value', e.target.value)}
              value={transaction.value}
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              name="description"
              onChange={e => onChangeField('description', e.target.value)}
              value={transaction.description}
            />
          </label>
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
};

Modal.propTypes = {
  toggleModal: propTypes.func.isRequired,
  submitForm: propTypes.func.isRequired,
  onChangeField: propTypes.func.isRequired,
  show: propTypes.bool,
  transaction: propTypes.shape({
    value: propTypes.number,
    type: propTypes.string,
    description: propTypes.string,
  }),
};

Modal.defaultProps = {
  show: false,
  transaction: {
    value: 0,
    description: '',
    type: 'DEBIT',
  },
};

export default Modal;
