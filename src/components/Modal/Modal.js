import React, { Component } from 'react';
import propTypes from 'prop-types';
import './modal.scss';

import Button from '../Button';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {
      show,
      toggleModal,
      addTransactions,
      onChangeField,
      value,
      type,
      description,
    } = this.props;
    return (
      <div id="modal" className={show ? 'modal show' : 'modal'}>
        <div className="modal-content">
          <h3>Adicionar transação</h3>
          <form
            name="transactionForm"
            className="form"
            onSubmit={addTransactions}
          >
            <label htmlFor="type">
              Tipo
              <select
                name="type"
                onChange={e => onChangeField('type', e.target.value)}
                value={type}
              >
                <option value="DEBIT">Despesa</option>
                <option value="CREDIT">Receita</option>
              </select>
            </label>
            <label htmlFor="value">
              Valor
              <input
                name="value"
                type="number"
                onChange={e => onChangeField('value', e.target.value)}
                value={value}
              />
            </label>
            <label htmlFor="description">
              Descrição
              <input
                name="description"
                onChange={e => onChangeField('description', e.target.value)}
                value={description}
              />
            </label>
            <div className="footer">
              <Button type="submit" label="Salvar" />
              <Button type="button" label="Cancelar" onClick={toggleModal} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggleModal: propTypes.func.isRequired,
  addTransactions: propTypes.func.isRequired,
  onChangeField: propTypes.func.isRequired,
  show: propTypes.bool,
  value: propTypes.number,
  type: propTypes.string,
  description: propTypes.string,
};

Modal.defaultProps = {
  show: false,
  value: 0,
  description: '',
  type: 'button',
};

export default Modal;
