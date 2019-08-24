import React from 'react';
import './styles.scss';

const Input = ({ onChange, value, type, placeholder }) => {
  return (
    <input
      type={type}
      onChange={e => onChange(e.target.value)}
      value={value}
      className="Input"
      placeholder={placeholder}
    />
  );
};

export default Input;
