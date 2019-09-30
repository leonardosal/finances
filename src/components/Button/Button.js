import React from 'react';
import propTypes from 'prop-types';

import './button.scss';

const Button = ({ label, type, onClick }) => (
  <button type={type} className="button" onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: propTypes.string,
  onClick: propTypes.func,
  type: propTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  label: '',
  type: 'button',
  onClick: () => null,
};

export default Button;
