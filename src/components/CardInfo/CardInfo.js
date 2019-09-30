import React from 'react';

import './cardInfo.scss';

import Button from '../Button';

const CardInfo = ({ balance, toggleModal }) => (
  <div className="card-info">
    <div>
      <h5>Saldo</h5>
      <h2>R${balance},00</h2>
    </div>
    <Button label="Adicionar Transação" onClick={toggleModal} />
  </div>
);

export default CardInfo;
