import React from 'react';
import propTypes from 'prop-types';

import './cardInfo.scss';

import { formatValue } from '../../utils';

import Button from '../Button';

const CardInfo = ({ balance, toggleModal }) => (
  <div className="card-info">
    <div>
      <h5>Saldo</h5>
      <h2>{formatValue(balance)}</h2>
    </div>
    <Button label="Adicionar Transação" onClick={toggleModal} />
  </div>
);

CardInfo.propTypes = {
  balance: propTypes.number,
  toggleModal: propTypes.func.isRequired,
};

CardInfo.defaultProps = {
  balance: 0,
};

export default CardInfo;
