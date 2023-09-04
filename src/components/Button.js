import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button className="scroll-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;