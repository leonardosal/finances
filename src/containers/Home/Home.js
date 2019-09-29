import React, { Component } from 'react';

import './home.scss';

export default class Home extends Component {
  addExpenses = () => {};

  render() {
    return (
      <div className="container">
        <button className="button" type="button">
          Adicionar
        </button>
        <div className="box">
          {[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
          ].map((_, index) => (
            <div key={index + 1} className="row">
              <span>Almoço</span>
              <span>Alimentação</span>
              <span>R$ 100,00</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
