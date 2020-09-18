import React from 'react';
import './input.css';

const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  onBlur,
}) => {
  return (
    <div className='input-container'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        onBlur={(e) => {
          onBlur && onBlur(e);
        }}
      />
      {error && <span className='error'>{error}</span>}
    </div>
  );
};

FormInput.defaultProps = {
  type: 'text',
  className: '',
};

export default FormInput;
