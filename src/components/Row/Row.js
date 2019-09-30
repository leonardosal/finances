import React from 'react';
import propTypes from 'prop-types';

import './row.scss';

import { formatValue, TYPE } from '../../utils';

const Row = ({ description, value, type }) => (
  <div className="row">
    <span>{description}</span>
    <span className={type === TYPE.DEBIT ? 'debit' : 'credit'}>
      {formatValue(value)}
    </span>
  </div>
);

Row.propTypes = {
  description: propTypes.string,
  type: propTypes.string,
  value: propTypes.number,
};

Row.defaultProps = {
  description: '',
  type: TYPE.CREDIT,
  value: 0,
};

export default Row;
