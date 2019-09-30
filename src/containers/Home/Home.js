import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import './home.scss';

import Modal from '../../components/Modal';
import Table from '../../components/Table';
import CardInfo from '../../components/CardInfo';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      transactions: [],
      description: '',
      value: 0,
      type: 'DEBIT',
      balance: 0,
    };
  }

  componentDidMount() {
    const strTransactions = window.localStorage.getItem('@transactions');
    const transactions = JSON.parse(strTransactions);
    if (transactions) {
      this.setState(
        {
          transactions,
        },
        this.calculateBalance
      );
    }
  }

  toggleModal = () =>
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));

  addTransactions = e => {
    e.preventDefault();
    const { value, category, description, type } = this.state;
    this.setState(
      prevState => ({
        transactions: [
          ...prevState.transactions,
          { id: uuidv4(), value, category, description, type },
        ],
      }),
      () => {
        this.calculateBalance();
        this.saveInStorage();
      }
    );

    this.toggleModal();
    this.clearFields();
  };

  clearFields = () => {
    this.setState({
      description: '',
      type: 'DEBIT',
      value: 0,
    });
  };

  onChangeField = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  calculateBalance = () => {
    const { transactions } = this.state;

    const balance = transactions.reduce((acc, current) => {
      if (current.type === 'DEBIT') {
        return parseInt(acc, 10) - parseInt(current.value, 10);
      }
      return parseInt(acc, 10) + parseInt(current.value, 10);
    }, 0);

    this.setState({
      balance,
    });
  };

  saveInStorage = () => {
    const { transactions } = this.state;
    window.localStorage.setItem('@transactions', JSON.stringify(transactions));
  };

  render() {
    const {
      showModal,
      transactions,
      description,
      type,
      value,
      balance,
    } = this.state;
    return (
      <>
        <div className="container">
          <div className="box">
            <CardInfo balance={balance} toggleModal={this.toggleModal} />
          </div>
          <div className="separator" />
          <div className="box">
            <Table transactions={transactions} />
          </div>
        </div>
        <Modal
          show={showModal}
          toggleModal={this.toggleModal}
          addTransactions={this.addTransactions}
          onChangeField={this.onChangeField}
          value={value}
          type={type}
          description={description}
        />
      </>
    );
  }
}
