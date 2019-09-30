import React, { Component } from 'react';

import Modal from '../../components/Modal';
import Table from '../../components/Table';
import CardInfo from '../../components/CardInfo';

import {
  calculateBalance,
  saveInStorage,
  loadFromStorage,
  addItem,
  TYPE,
} from '../../utils';

import './home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      transactions: [],
      transaction: {
        description: '',
        value: 0,
        type: TYPE.DEBIT,
      },
      balance: 0,
    };
  }

  componentDidMount() {
    const transactions = loadFromStorage();
    if (transactions) {
      const balance = calculateBalance(transactions);
      this.setState({ transactions, balance });
    }
  }

  toggleModal = () =>
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));

  submitForm = e => {
    e.preventDefault();
    const { transaction, transactions } = this.state;

    if (this.isValidForm(transaction)) {
      const newTransactions = addItem(transactions, transaction);
      const balance = calculateBalance(newTransactions);
      this.saveData(balance, newTransactions);
      this.clearFields();
      this.toggleModal();
    }
  };

  saveData = (balance, transactions) => {
    this.setState({
      balance,
      transactions,
    });
    saveInStorage(transactions);
  };

  clearFields = () => {
    this.setState({
      transaction: {
        description: '',
        type: TYPE.DEBIT,
        value: 0,
      },
    });
  };

  isValidForm = transaction => {
    if (transaction.description && transaction.value) return true;
    return false;
  };

  onChangeField = (field, value) => {
    this.setState(prevState => ({
      transaction: {
        ...prevState.transaction,
        [field]: value,
      },
    }));
  };

  render() {
    const { showModal, transactions, transaction, balance } = this.state;
    return (
      <>
        <div className="container">
          <div className="box">
            <CardInfo balance={balance} handleClick={this.toggleModal} />
          </div>
          <div className="separator" />
          <div className="box">
            <Table transactions={transactions} />
          </div>
        </div>
        <Modal
          show={showModal}
          toggleModal={this.toggleModal}
          submitForm={this.submitForm}
          onChangeField={this.onChangeField}
          transaction={transaction}
        />
      </>
    );
  }
}
