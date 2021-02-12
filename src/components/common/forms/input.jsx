import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const Input = ({ name, label, error, placeholder, ...rest }) => {
  return (
    <div className="form-group">
      <div className="label">
        <label htmlFor={label}>{label}</label>
      </div>
      <input
        {...rest}
        name={name}
        id={name}
        placeholder={placeholder}
        className={error ? 'form-control error' : 'form-control'}
      />
      {error && (
        <p className="error-message">
          <FiAlertTriangle />
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
