import React from 'react';
import './styles.scss';

const Textarea = ({ onChange, value, type, placeholder }) => {
  return (
    <textarea
      placeholder={placeholder}
      type={type}
      onChange={e => onChange(e.target.value)}
      value={value}
      className="Textarea"
    />
  );
};

export default Textarea;
