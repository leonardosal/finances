import React from 'react';
import propTypes from 'prop-types';

import './button.scss';

const Button = ({ id, label, type, onClick }) => (
  <button id={id} type={type} className="button" onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  onClick: propTypes.func,
  type: propTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  id: '',
  label: '',
  type: 'button',
  onClick: () => null,
};

export default Button;
