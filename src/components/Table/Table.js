import React from 'react';

import propTypes from 'prop-types';

import './table.scss';

import Row from '../Row';

const Table = ({ transactions }) => (
  <>
    {transactions.map(item => (
      <Row
        key={item.id}
        type={item.type}
        description={item.description}
        value={item.value}
      />
    ))}
  </>
);

Table.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      type: propTypes.string,
      description: propTypes.string,
      value: propTypes.string,
    })
  ),
};

Table.defaultProps = {
  transactions: [],
};

export default Table;
