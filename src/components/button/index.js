import React from 'react';
import './button.css';

const Button = (props) => (
  <button
    type={props.type}
    className={props.className}
    onClick={props.handleClick}
  >
    {props.label}
  </button>
);

export default Button;
