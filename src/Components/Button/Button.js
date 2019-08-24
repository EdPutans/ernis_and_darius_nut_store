import React from 'react';
import './styles.scss';

const Button = ({ onClick, buttonText, style, disabled }) => {
  return (
    <button type="button" onClick={() => onClick()} disabled={disabled} style={style} className="Button">
      {buttonText}
    </button>
  );
};

export default Button;
